"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { MdCheck, MdContentCopy } from "react-icons/md";

type Status = "idle" | "copied" | "error";

export function CopyEmail({ email }: { email: string }) {
    const [status, setStatus] = useState<Status>("idle");
    const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

    useEffect(() => () => clearTimeout(timer.current), []);

    async function copy() {
        try {
            await navigator.clipboard.writeText(email);
            setStatus("copied");
        } catch {
            setStatus("error");
        }
        clearTimeout(timer.current);
        timer.current = setTimeout(() => setStatus("idle"), 2000);
    }

    return (
        <motion.button
            type="button"
            onClick={copy}
            whileTap={{ scale: 0.97 }}
            className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-2 font-mono text-sm text-muted transition-colors duration-200 hover:border-accent/60 hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
            <span>{email}</span>
            <AnimatePresence mode="wait" initial={false}>
                <motion.span
                    key={status === "copied" ? "check" : "copy"}
                    initial={{ opacity: 0, scale: 0.6 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.6 }}
                    transition={{ duration: 0.15 }}
                    className={status === "copied" ? "text-accent" : ""}
                >
                    {status === "copied" ? (
                        <MdCheck aria-hidden size={16} />
                    ) : (
                        <MdContentCopy aria-hidden size={16} />
                    )}
                </motion.span>
            </AnimatePresence>
            <span className="sr-only" aria-live="polite">
                {status === "copied" ? "Email copied" : status === "error" ? "Copy failed" : ""}
            </span>
        </motion.button>
    );
}