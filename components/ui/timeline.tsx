"use client";

import { useRef, type ReactNode } from "react";
import {
    motion,
    useInView,
    useScroll,
    useSpring,
    type Variants,
} from "motion/react";

export type ExperienceEntry = {
    company: string;
    title: string;
    duration: string;
    description: string[];
};

/* Wrapper: draws the vertical line and fills it as you scroll */
export function Timeline({ children }: { children: ReactNode }) {
    const ref = useRef<HTMLDivElement>(null);

    // 0 when the top of the list reaches 60% down the screen, 1 when the
    // bottom does. The tip of the green line therefore sits at that same
    // 60% mark, and the dots below use the same mark to light up.
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start 60%", "end 60%"],
    });
    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    return (
        <div ref={ref} className="relative">
            {/* track */}
            <span
                aria-hidden
                className="absolute bottom-0 left-[10.5px] top-0 w-px bg-border"
            />
            {/* progress fill */}
            <motion.span
                aria-hidden
                style={{ scaleY }}
                className="absolute bottom-0 left-[10px] top-0 w-0.5 origin-top bg-accent shadow-[0_0_12px_rgb(52_211_153/0.7)]"
            />
            <ol className="space-y-8 md:space-y-10">{children}</ol>
        </div>
    );
}

const cardVariants: Variants = {
    hidden: { opacity: 0, x: 32 },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut",
            staggerChildren: 0.08,
            delayChildren: 0.25,
        },
    },
};

const bulletVariants: Variants = {
    hidden: { opacity: 0, x: -10 },
    show: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export function TimelineItem({
    company,
    title,
    duration,
    description,
}: ExperienceEntry) {
    const dotRef = useRef<HTMLSpanElement>(null);
    // true once the dot has passed the 60% line (same mark as the line tip)
    const lit = useInView(dotRef, { once: true, margin: "0px 0px -40% 0px" });

    return (
        <li className="relative pl-10 md:pl-14">
            {/* dot */}
            <span
                ref={dotRef}
                className="absolute left-0 top-[1.7rem] grid h-[22px] w-[22px] place-items-center md:top-[2.2rem]"
            >
                {/* one-time pulse */}
                <motion.span
                    aria-hidden
                    initial={{ opacity: 0 }}
                    animate={lit ? { scale: [1, 2.2], opacity: [0.5, 0] } : undefined}
                    transition={{ duration: 1.1, ease: "easeOut" }}
                    className="absolute inset-0 rounded-full bg-accent"
                />
                <span
                    className={`relative grid h-[22px] w-[22px] place-items-center rounded-full border-2 bg-background transition-colors duration-500 ${lit ? "border-accent" : "border-border"
                        }`}
                >
                    <motion.span
                        animate={{ scale: lit ? 1 : 0 }}
                        transition={{ type: "spring", stiffness: 300, damping: 15 }}
                        className="h-2 w-2 rounded-full bg-accent"
                    />
                </span>
            </span>

            {/* card */}
            <motion.div
                variants={cardVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-80px" }}
                className="rounded-2xl border border-border bg-surface/60 p-6 shadow-[inset_0_1px_0_rgb(255_255_255/0.06)] transition-colors duration-300 hover:border-accent/50 md:p-8"
            >
                <div className="mb-4 flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                    <div>
                        <h3 className="font-heading text-xl font-semibold md:text-2xl">
                            {company}
                        </h3>
                        <p className="mt-1 text-accent">{title}</p>
                    </div>
                    <span className="w-fit shrink-0 rounded-full border border-border bg-background/60 px-3 py-1 font-mono text-xs text-muted">
                        {duration}
                    </span>
                </div>

                <ul className="space-y-2.5">
                    {description.map((line, i) => (
                        <motion.li
                            key={i}
                            variants={bulletVariants}
                            className="flex gap-3 text-sm leading-relaxed text-muted md:text-base"
                        >
                            <span
                                aria-hidden
                                className="mt-2.5 h-px w-3 shrink-0 bg-accent"
                            />
                            <span>{line}</span>
                        </motion.li>
                    ))}
                </ul>
            </motion.div>
        </li>
    );
}