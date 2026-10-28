"use client";

import { useEffect, useRef } from "react";
import { animate, useInView, useReducedMotion } from "motion/react";

export function CountUp({
    value,
    duration = 1.6,
}: {
    value: string;
    duration?: number;
}) {
    const match = value.match(/^(\d+)(.*)$/);
    const target = match ? parseInt(match[1], 10) : 0;
    const suffix = match ? match[2] : "";

    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true, margin: "-60px" });
    const reduceMotion = useReducedMotion();

    useEffect(() => {
        const el = ref.current;
        if (!el || !match || reduceMotion) return;

        // not visible yet: sit at zero. Visible: count up.
        if (!inView) {
            el.textContent = `0${suffix}`;
            return;
        }

        const controls = animate(0, target, {
            duration,
            ease: "easeOut",
            onUpdate: (v) => {
                el.textContent = `${Math.round(v)}${suffix}`;
            },
        });
        return () => controls.stop();
    }, [inView, reduceMotion, target, suffix, duration, match]);

    return (
        <span
            ref={ref}
            className="inline-block tabular-nums"
            style={{ minWidth: `${value.length}ch` }}
        >
            {value}
        </span>
    );
}