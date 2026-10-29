// Header section component
// components/sections/header.tsx
"use client";

import { useEffect, useState } from "react";
import {
    AnimatePresence,
    motion,
    useMotionValueEvent,
    useScroll,
} from "motion/react";
import { Button } from "@/components/ui/button";

const links = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "services", label: "Services" },
    { id: "work", label: "Work" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
];

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [active, setActive] = useState("home");
    const [open, setOpen] = useState(false);

    // glass background once the page has scrolled a little
    const { scrollY } = useScroll();
    useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 24));

    // highlight the link of the section crossing the middle of the screen
    useEffect(() => {
        const sections = links
            .map((l) => document.getElementById(l.id))
            .filter((el): el is HTMLElement => el !== null);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActive(entry.target.id);
                });
            },
            { rootMargin: "-45% 0px -50% 0px" }
        );

        sections.forEach((s) => observer.observe(s));
        return () => observer.disconnect();
    }, []);

    return (
        <motion.header
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,backdrop-filter] duration-300 ${scrolled || open
                    ? "border-border bg-background/75 backdrop-blur-lg"
                    : "border-transparent bg-transparent"
                }`}
        >
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                <a href="#home" className="font-heading text-xl font-bold tracking-tight">
                    Amir<span className="text-accent">.</span>
                </a>

                {/* Desktop nav */}
                <nav className="hidden md:block" aria-label="Main">
                    <ul className="flex items-center gap-1">
                        {links.map((l) => {
                            const isActive = active === l.id;
                            return (
                                <li key={l.id}>
                                    <a
                                        href={`#${l.id}`}
                                        aria-current={isActive ? "true" : undefined}
                                        className={`relative block rounded-full px-3 py-1.5 text-sm font-medium transition-colors duration-200 ${isActive
                                                ? "text-foreground"
                                                : "text-muted hover:text-foreground"
                                            }`}
                                    >
                                        {isActive && (
                                            <motion.span
                                                layoutId="nav-pill"
                                                className="absolute inset-0 rounded-full bg-surface ring-1 ring-border"
                                                transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                            />
                                        )}
                                        <span className="relative">{l.label}</span>
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </nav>

                <div className="flex items-center gap-3">
                    <Button
                        variant="secondary"
                        href="/amir-zeb-resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden px-4 py-2 text-sm sm:inline-flex"
                    >
                        Resume
                    </Button>

                    {/* Mobile menu toggle */}
                    <button
                        type="button"
                        onClick={() => setOpen((o) => !o)}
                        aria-expanded={open}
                        aria-controls="mobile-nav"
                        aria-label={open ? "Close menu" : "Open menu"}
                        className="grid h-10 w-10 place-items-center rounded-xl border border-border bg-surface md:hidden"
                    >
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                        >
                            {open ? (
                                <path d="M6 6l12 12M18 6L6 18" />
                            ) : (
                                <path d="M4 7h16M4 12h16M4 17h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile menu panel */}
            <AnimatePresence>
                {open && (
                    <motion.nav
                        id="mobile-nav"
                        aria-label="Mobile"
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute inset-x-0 top-full border-b border-border bg-background/95 backdrop-blur-lg md:hidden"
                    >
                        <ul className="container mx-auto flex flex-col gap-1 px-4 py-4">
                            {links.map((l) => (
                                <li key={l.id}>
                                    <a
                                        href={`#${l.id}`}
                                        onClick={() => setOpen(false)}
                                        className={`block rounded-xl px-3 py-2.5 font-medium ${active === l.id
                                                ? "bg-surface text-foreground"
                                                : "text-muted"
                                            }`}
                                    >
                                        {l.label}
                                    </a>
                                </li>
                            ))}
                            <li className="pt-2">
                                <Button variant="secondary" href="/resume.pdf" className="w-full">
                                    Resume
                                </Button>
                            </li>
                        </ul>
                    </motion.nav>
                )}
            </AnimatePresence>
        </motion.header>
    );
}