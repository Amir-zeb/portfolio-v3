"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import {
    motion,
    useMotionValueEvent,
    useScroll,
    useSpring,
    useTransform,
} from "motion/react";
import { MdArrowOutward } from "react-icons/md";
import { featuredProjects } from "@/data";
import { Button } from "@/components/ui/button";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/reveal";

type Project = (typeof featuredProjects)[number];

const count = featuredProjects.length;
const pad = (n: number) => String(n).padStart(2, "0");

export default function Projects() {
    const scrollerRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);

    // 0 when the pinned area reaches the top, 1 when its last slide is in place
    const { scrollYProgress } = useScroll({
        target: scrollerRef,
        offset: ["start start", "end end"],
    });
    const progress = useSpring(scrollYProgress, {
        stiffness: 120,
        damping: 30,
        restDelta: 0.001,
    });

    // The track is `count` screens wide, so moving it by (count - 1) / count
    // of its own width shows the last slide
    const endPercent = -((count - 1) / count) * 100;
    const x = useTransform(progress, [0, 1], [0, endPercent]);
    const barScale = useTransform(progress, [0, 1], [0, 1]);

    // Written to a CSS variable so the transform only applies when the
    // layout is pinned (desktop, motion allowed). Stacked layouts never move.
    useMotionValueEvent(x, "change", (v) => {
        trackRef.current?.style.setProperty("--x", `${v}%`);
    });
    useEffect(() => {
        trackRef.current?.style.setProperty("--x", `${x.get()}%`);
    }, [x]);

    return (
        <section id="work" className="relative">
            {/* Heading */}
            <div className="container mx-auto px-4 pb-12 pt-24 md:pb-16 md:pt-32">
                <Stagger className="max-w-2xl" stagger={0.12}>
                    <StaggerItem as="p" className="mb-3 font-mono text-sm text-accent">
                        04 / work
                    </StaggerItem>
                    <StaggerItem
                        as="h2"
                        className="text-4xl font-extrabold sm:text-5xl md:text-6xl"
                    >
                        Featured <span className="text-accent text_shadow">Work</span>
                    </StaggerItem>
                    <StaggerItem as="p" className="mt-4 text-muted">
                        A couple of products I’ve worked on in production.
                    </StaggerItem>
                </Stagger>
            </div>

            {/* Tall area that gives the pinned section its scroll distance */}
            <div
                ref={scrollerRef}
                style={{ "--slides": count } as React.CSSProperties}
                className="relative md:motion-safe:h-[calc(var(--slides)_*_100dvh)]"
            >
                {/* Stays on screen while the area above scrolls past */}
                <div className="md:motion-safe:sticky md:motion-safe:top-0 md:motion-safe:h-dvh md:motion-safe:overflow-hidden">
                    <div
                        ref={trackRef}
                        className="flex flex-col gap-8 md:motion-safe:h-full md:motion-safe:w-[calc(var(--slides)_*_100%)] md:motion-safe:flex-row md:motion-safe:gap-0 md:motion-safe:will-change-transform md:motion-safe:[transform:translateX(var(--x,0%))]"
                    >
                        {featuredProjects.map((project, i) => (
                            <ProjectSlide key={project.title} project={project} index={i} />
                        ))}
                    </div>

                    {/* Progress bar, pinned layout only */}
                    <div
                        aria-hidden
                        className="pointer-events-none absolute inset-x-0 bottom-8 hidden justify-center md:motion-safe:flex"
                    >
                        <div className="h-0.5 w-48 overflow-hidden rounded-full bg-border">
                            <motion.div
                                className="h-full origin-left bg-accent"
                                style={{ scaleX: barScale }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function ProjectSlide({
    project,
    index,
}: {
    project: Project;
    index: number;
}) {
    const flip = index % 2 === 1;

    return (
        <article className="py-8 md:motion-safe:flex md:motion-safe:h-full md:motion-safe:w-[calc(100%_/_var(--slides))] md:motion-safe:shrink-0 md:motion-safe:items-center md:motion-safe:pb-0 md:motion-safe:pt-20">
            <div className="container mx-auto grid items-center gap-10 px-4 md:grid-cols-2 lg:gap-16">
                {/* Text */}
                <Stagger
                    className={flip ? "md:order-2" : undefined}
                    stagger={0.1}
                    delay={0.05}
                >
                    <StaggerItem
                        as="p"
                        className="mb-4 flex items-center gap-3 font-mono text-sm"
                    >
                        <span className="text-accent">
                            {pad(index + 1)} / {pad(count)}
                        </span>
                        <span className="rounded-full border border-border bg-surface/60 px-3 py-0.5 text-xs text-muted">
                            {project.project}
                        </span>
                    </StaggerItem>

                    <StaggerItem
                        as="h3"
                        className="mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl"
                    >
                        {project.title}
                    </StaggerItem>

                    {project.description.map((text, i) => (
                        <StaggerItem
                            as="p"
                            key={i}
                            className="mb-6 max-w-xl text-sm leading-relaxed text-muted lg:text-base"
                        >
                            {text}
                        </StaggerItem>
                    ))}

                    <StaggerItem as="ul" className="mb-8 flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                            <li
                                key={tag}
                                className="rounded-full border border-border bg-background/60 px-3 py-1 font-mono text-xs text-foreground"
                            >
                                {tag}
                            </li>
                        ))}
                    </StaggerItem>

                    <StaggerItem>
                        {project.link ? (
                            <Button
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Visit site
                                <MdArrowOutward aria-hidden size={18} />
                            </Button>
                        ) : (
                            <span className="font-mono text-sm text-muted">
                                No public link
                            </span>
                        )}
                    </StaggerItem>
                </Stagger>

                {/* Image */}
                <Reveal delay={0.15} y={40} className={flip ? "md:order-1" : undefined}>
                    <div className="relative">
                        <div className="pointer-events-none absolute -inset-6 rounded-full bg-accent/10 blur-3xl" />
                        <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-border bg-surface/60 shadow-[inset_0_1px_0_rgb(255_255_255/0.06)]">
                            <Image
                                src={project.image}
                                alt={`${project.title} preview`}
                                fill
                                sizes="(min-width: 768px) 50vw, 100vw"
                                className="object-contain p-3"
                            />
                        </div>
                    </div>
                </Reveal>
            </div>
        </article>
    );
}