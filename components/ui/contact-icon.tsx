"use client";

import { motion } from "motion/react";
import { SiMinutemailer } from "react-icons/si";

export function ContactIcon() {
    return (
        <div className="relative mx-auto mb-8 grid h-28 w-28 place-items-center md:h-36 md:w-36">
            {/* pulsing glow */}
            <motion.div
                aria-hidden
                className="absolute inset-0 rounded-full bg-accent/25 blur-2xl"
                animate={{ scale: [1, 1.25, 1], opacity: [0.5, 0.9, 0.5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* entrance: pops in with a small spring */}
            <motion.div
                className="relative"
                initial={{ opacity: 0, scale: 0.6, rotate: -12 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 160, damping: 14 }}
            >
                {/* idle: slow float, on its own element so it never fights the entrance */}
                <motion.div
                    animate={{ y: [0, -10, 0], rotate: [0, 3, 0, -3, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                >
                    <SiMinutemailer
                        aria-hidden
                        className="text-6xl text-accent drop-shadow-[0_0_18px_rgb(52_211_153/0.5)] md:text-8xl"
                    />
                </motion.div>
            </motion.div>
        </div>
    );
}