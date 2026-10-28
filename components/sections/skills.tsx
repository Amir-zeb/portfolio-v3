// components/sections/skills.tsx
"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { skills, skillCategories } from "@/data";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/reveal";

type Skill = (typeof skills)[number];

const card =
    "rounded-2xl border border-border bg-surface/60 shadow-[inset_0_1px_0_rgb(255_255_255/0.06)]";

export default function Skills() {
    const [activeId, setActiveId] = useState(skillCategories[0].id);

    const category =
        skillCategories.find((c) => c.id === activeId) ?? skillCategories[0];
    const visibleSkills = skills.filter((s) => s.category === activeId);

    return (
        <section id="skills" className="relative py-24 md:py-32">
            <div className="container mx-auto px-4">
                {/* Heading */}
                <Stagger className="mb-10 md:mb-12" stagger={0.12}>
                    <StaggerItem as="p" className="mb-3 font-mono text-sm text-accent">
                        02 / skills
                    </StaggerItem>
                    <StaggerItem
                        as="h2"
                        className="text-4xl font-extrabold sm:text-5xl md:text-6xl"
                    >
                        Technologies &amp;{" "}
                        <span className="text-accent text_shadow">Tools</span>
                    </StaggerItem>
                </Stagger>

                {/* Category filter */}
                <Reveal delay={0.1} className="mb-8">
                    <div
                        role="group"
                        aria-label="Skill categories"
                        className="flex gap-2 overflow-x-auto md:flex-wrap"
                    >
                        {skillCategories.map((c) => {
                            const isActive = c.id === activeId;
                            return (
                                <button
                                    key={c.id}
                                    type="button"
                                    onClick={() => setActiveId(c.id)}
                                    aria-pressed={isActive}
                                    className={`relative shrink-0 cursor-pointer whitespace-nowrap rounded-full border px-4 py-1.5 text-sm font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${isActive
                                            ? "border-accent text-accent-foreground"
                                            : "border-border bg-surface/60 text-muted hover:border-accent/60 hover:text-foreground"
                                        }`}
                                >
                                    {isActive && (
                                        <motion.span
                                            layoutId="skill-pill"
                                            className="absolute inset-0 rounded-full bg-accent"
                                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                        />
                                    )}
                                    <span className="relative">{c.label}</span>
                                </button>
                            );
                        })}
                    </div>
                </Reveal>

                <div className="grid items-start gap-8 md:grid-cols-[2fr_3fr]">
                    {/* Description */}
                    <Reveal delay={0.15} className={`${card} p-6`}>
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={category.id}
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -8 }}
                                transition={{ duration: 0.2, ease: "easeOut" }}
                            >
                                <h3 className="mb-3 font-heading text-xl font-semibold">
                                    {category.label}
                                </h3>
                                <p className="text-sm leading-relaxed text-muted">
                                    {category.blurb}
                                </p>

                                {category.details && (
                                    <ul className="mt-4 hidden space-y-2 md:block">
                                        {category.details.map((line, i) => (
                                            <li
                                                key={i}
                                                className="flex gap-2 text-sm leading-relaxed text-muted"
                                            >
                                                <span aria-hidden className="text-accent">
                                                    —
                                                </span>
                                                <span>{line}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </motion.div>
                        </AnimatePresence>
                    </Reveal>

                    {/* Skill badges: key remounts the grid so the stagger replays on every category change */}
                    <Stagger
                        as="ul"
                        key={activeId}
                        stagger={0.04}
                        delay={0.05}
                        className="grid grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-5"
                    >
                        {visibleSkills.map((s) => (
                            <SkillBadge key={s.title} skill={s} />
                        ))}
                    </Stagger>
                </div>
            </div>
        </section>
    );
}

function SkillBadge({ skill }: { skill: Skill }) {
    const Icon = skill.icon;

    return (
        <StaggerItem as="li" className="h-full">
            {/* Entrance animation is on the li; the hover lift is on this inner div so the two never fight over transform */}
            <div className="flex h-full flex-col items-center rounded-xl border border-border bg-surface/60 p-3 transition duration-200 hover:-translate-y-1 hover:border-accent/50 hover:bg-surface motion-reduce:hover:translate-y-0">
                <Icon size={32} className="text-foreground" />
                <span className="mt-2 text-center text-xs leading-tight text-foreground">
                    {skill.title}
                </span>
                <ProficiencyDots level={skill.proficiency} />
            </div>
        </StaggerItem>
    );
}

function ProficiencyDots({ level }: { level: number }) {
    return (
        <div
            role="img"
            aria-label={`Proficiency ${level} out of 5`}
            className="mt-2 flex gap-1"
        >
            {[1, 2, 3, 4, 5].map((i) => (
                <span
                    key={i}
                    className={`h-1.5 w-1.5 rounded-full ${i <= level ? "bg-accent" : "bg-foreground/20"
                        }`}
                />
            ))}
        </div>
    );
}