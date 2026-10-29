"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "motion/react";
import { MdArrowOutward, MdPause, MdPlayArrow } from "react-icons/md";
import { projects } from "@/data";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/reveal";

type Project = (typeof projects)[number];

const COPIES = 3; // enough copies that wide screens never see a gap
const SPEED = 40; // pixels per second

const fade = {
  WebkitMaskImage:
    "linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)",
  maskImage:
    "linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)",
};

export default function MoreProjects() {
  return (
    <section id="more-work" className="relative overflow-hidden py-24 md:py-32">
      <div className="container mx-auto mb-12 px-4 md:mb-16">
        <Stagger className="max-w-2xl" stagger={0.12}>
          <StaggerItem as="p" className="mb-3 font-mono text-sm text-accent">
            05 / more work
          </StaggerItem>
          <StaggerItem
            as="h2"
            className="text-4xl font-extrabold sm:text-5xl md:text-6xl"
          >
            More <span className="text-accent text_shadow">Projects</span>
          </StaggerItem>
          <StaggerItem as="p" className="mt-4 text-muted">
            Dashboards, mobile apps, and websites from earlier work. Hover to
            pause.
          </StaggerItem>
        </Stagger>
      </div>

      <Reveal delay={0.1}>
        <Marquee />
      </Reveal>
    </section>
  );
}

function Marquee() {
  const reduceMotion = useReducedMotion();
  const trackRef = useRef<HTMLUListElement>(null);
  const unitWidth = useRef(0);

  const x = useMotionValue(0);
  // 1 = running, 0 = stopped. The spring gives the smooth slow-down and speed-up.
  const speed = useSpring(1, { stiffness: 60, damping: 18 });

  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [manualPause, setManualPause] = useState(false);
  const paused = hovered || focused || manualPause;

  useEffect(() => {
    speed.set(paused ? 0 : 1);
  }, [paused, speed]);

  // The width of one full copy of the list, used for the seamless loop
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const measure = () => {
      unitWidth.current = track.scrollWidth / COPIES;
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(track);
    return () => observer.disconnect();
  }, [reduceMotion]);

  useAnimationFrame((_, delta) => {
    const unit = unitWidth.current;
    if (reduceMotion || !unit) return;
    // clamp delta so returning to a background tab doesn't cause a jump
    const step = (SPEED * Math.min(delta, 64) * speed.get()) / 1000;
    const next = x.get() - step;
    x.set(next <= -unit ? next + unit : next);
  });

  // Reduced motion: no auto-scroll, just a swipeable list
  if (reduceMotion) {
    return (
      <ul className="flex snap-x gap-6 overflow-x-auto px-4 pb-4">
        {projects.map((p) => (
          <li key={p.title} className="flex shrink-0 snap-start">
            <ProjectCard project={p} />
          </li>
        ))}
      </ul>
    );
  }

  return (
    <>
      <div
        role="region"
        aria-roledescription="carousel"
        aria-label="More projects"
        className="relative overflow-hidden py-2"
        style={fade}
        onPointerEnter={() => setHovered(true)}
        onPointerLeave={() => setHovered(false)}
        onFocus={() => setFocused(true)}
        onBlur={(e) => {
          if (!e.currentTarget.contains(e.relatedTarget)) setFocused(false);
        }}
      >
        <motion.ul
          ref={trackRef}
          style={{ x }}
          className="flex w-max will-change-transform"
        >
          {Array.from({ length: COPIES }).flatMap((_, copy) =>
            projects.map((p) => (
              <li
                key={`${copy}-${p.title}`}
                // extra copies are only there for the loop: hide them from
                // screen readers and keyboard focus
                aria-hidden={copy > 0 || undefined}
                inert={copy > 0}
                className="flex shrink-0 pr-6"
              >
                <ProjectCard project={p} />
              </li>
            ))
          )}
        </motion.ul>
      </div>

      <div className="container mx-auto mt-6 flex justify-center px-4">
        <button
          type="button"
          onClick={() => setManualPause((p) => !p)}
          aria-pressed={manualPause}
          aria-label="Pause auto-scroll"
          className="grid h-9 w-9 cursor-pointer place-items-center rounded-full border border-border bg-surface/60 text-muted transition-colors duration-200 hover:border-accent/60 hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          {manualPause ? (
            <MdPlayArrow aria-hidden size={18} />
          ) : (
            <MdPause aria-hidden size={18} />
          )}
        </button>
      </div>
    </>
  );
}

function ProjectCard({ project }: { project: Project }) {
  // "./mocks/x.png" is not valid for next/image, so turn it into "/mocks/x.png"
  const src = project.image.replace(/^\.\//, "/");
  const description = project.description.replace(/\s+/g, " ").trim();
  const visibleTags = project.tags.slice(0, 4);
  const extraTags = project.tags.length - visibleTags.length;
  const linkLabel = project.link.includes("drive.google.com")
    ? "View files"
    : "Visit site";

  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="group flex w-[300px] flex-col overflow-hidden rounded-2xl border border-border bg-surface/60 shadow-[inset_0_1px_0_rgb(255_255_255/0.06)] transition-colors duration-300 hover:border-accent/50 sm:w-[360px]"
    >
      <div className="relative aspect-[16/10] overflow-hidden border-b border-border bg-background/60">
        <Image
          src={src}
          alt={`${project.title} preview`}
          fill
          sizes="360px"
          className="object-cover object-top transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
        />
        <span className="absolute left-3 top-3 rounded-full border border-border bg-background/80 px-3 py-0.5 font-mono text-xs text-muted backdrop-blur">
          {project.project}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="mb-2 font-heading text-lg font-semibold">
          {project.title}
        </h3>
        <p className="mb-4 line-clamp-4 text-sm leading-relaxed text-muted">
          {description}
        </p>

        <ul className="mt-auto flex flex-wrap gap-1.5">
          {visibleTags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-border bg-background/60 px-2.5 py-0.5 font-mono text-[11px] text-foreground"
            >
              {tag}
            </li>
          ))}
          {extraTags > 0 && (
            <li className="rounded-full px-2.5 py-0.5 font-mono text-[11px] text-muted">
              +{extraTags}
            </li>
          )}
        </ul>

        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex w-fit items-center gap-1.5 rounded text-sm font-medium text-accent transition-opacity hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            {linkLabel}
            <MdArrowOutward aria-hidden size={16} />
          </a>
        )}
      </div>
    </motion.article>
  );
}