"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";

type Props = {
    index: number;
    title: string;
    description: string;
    icon: ReactNode;
};

export function ServiceCard({ index, title, description, icon }: Props) {
    // Writes the cursor position into CSS variables, so there is no re-render per mouse move
    function handleMove(e: React.MouseEvent<HTMLDivElement>) {
        const rect = e.currentTarget.getBoundingClientRect();
        e.currentTarget.style.setProperty("--mx", `${e.clientX - rect.left}px`);
        e.currentTarget.style.setProperty("--my", `${e.clientY - rect.top}px`);
    }

    return (
        // Motion owns the lift here; the entrance animation lives on the parent <li>,
        // so the two never compete for the same transform
        <motion.div
            className="h-full"
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 300, damping: 22 }}
        >
            <div
                onMouseMove={handleMove}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface/60 p-6 shadow-[inset_0_1px_0_rgb(255_255_255/0.06)] transition-colors duration-300 hover:border-accent/50"
            >
                {/* cursor spotlight */}
                <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{
                        background:
                            "radial-gradient(280px circle at var(--mx, 50%) var(--my, 50%), rgb(52 211 153 / 0.14), transparent 70%)",
                    }}
                />

                <span className="absolute right-5 top-5 font-mono text-xs text-muted/60">
                    {String(index + 1).padStart(2, "0")}
                </span>

                <div className="relative mb-5 grid h-12 w-12 place-items-center rounded-xl border border-border bg-background/60 text-accent transition duration-300 group-hover:scale-110 group-hover:border-accent group-hover:bg-accent group-hover:text-accent-foreground motion-reduce:group-hover:scale-100">
                    {icon}
                </div>

                <h3 className="relative mb-2 font-heading text-lg font-semibold leading-snug">
                    {title}
                </h3>
                <p className="relative text-sm leading-relaxed text-muted">
                    {description}
                </p>

                {/* accent line that draws in along the bottom edge */}
                <span
                    aria-hidden
                    className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100 motion-reduce:transition-none"
                />
            </div>
        </motion.div>
    );
}