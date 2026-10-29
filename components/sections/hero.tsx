// components/sections/hero.tsx
"use client";

import Image from "next/image";
import {
    motion,
    useMotionValue,
    useSpring,
    useTransform,
    type Variants,
} from "motion/react";
import heroPic from "@/public/images/pf.png";
import { Button } from "@/components/ui/button";

// 1. LOAD ANIMATION: variants shared by every text element
const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
};

const item: Variants = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Hero() {
    // 3. MOUSE MOVEMENT: raw position (-0.5 to 0.5), then smoothed
    const mx = useMotionValue(0);
    const my = useMotionValue(0);
    const sx = useSpring(mx, { stiffness: 60, damping: 20 });
    const sy = useSpring(my, { stiffness: 60, damping: 20 });

    // blob moves with the cursor, image moves slightly against it
    const blobX = useTransform(sx, [-0.5, 0.5], [-50, 50]);
    const blobY = useTransform(sy, [-0.5, 0.5], [-50, 50]);
    const imgX = useTransform(sx, [-0.5, 0.5], [14, -14]);
    const imgY = useTransform(sy, [-0.5, 0.5], [8, -8]);

    function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
        const rect = e.currentTarget.getBoundingClientRect();
        mx.set((e.clientX - rect.left) / rect.width - 0.5);
        my.set((e.clientY - rect.top) / rect.height - 0.5);
    }

    function handleMouseLeave() {
        mx.set(0);
        my.set(0);
    }

    return (
        <div
            id="home"
            className="relative flex min-h-screen max-h-screen items-center justify-center overflow-hidden"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            {/* 2. BLOB: outer div centers it, so no Tailwind translate classes
          fight with Motion's transform */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <motion.div style={{ x: blobX, y: blobY }}>
                    <motion.div
                        className="h-[26rem] w-[26rem] bg-accent/40 blur-2xl"
                        initial={{ opacity: 0, scale: 0.6 }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            borderRadius: [
                                "60% 40% 30% 70% / 60% 30% 70% 40%",
                                "30% 60% 70% 40% / 50% 60% 30% 60%",
                                "60% 40% 30% 70% / 60% 30% 70% 40%",
                            ],
                        }}
                        transition={{
                            opacity: { duration: 1 },
                            scale: { duration: 1.2, ease: "easeOut" },
                            borderRadius: { duration: 12, repeat: Infinity, ease: "easeInOut" },
                        }}
                    />
                </motion.div>
            </div>

            {/* IMAGE: outer div = mouse movement, inner div = entrance animation.
          Keeping them on separate elements stops them fighting over y */}
            <div className="absolute bottom-0 left-0 flex h-full w-full items-end justify-center">
                <motion.div className="w-[70%]" style={{ x: imgX, y: imgY }}>
                    <motion.div
                        initial={{ opacity: 0, y: 80 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, delay: 0.1, ease: "easeOut" }}
                    >
                        <Image
                            src={heroPic}
                            alt="Amir Zeb"
                            loading="eager"
                            className="h-auto w-full object-cover object-bottom"
                        />
                    </motion.div>
                </motion.div>
            </div>

            {/* TEXT: every motion child below fades up in order */}
            <div className="container relative z-10 mx-auto px-4">
                <motion.div
                    className="flex items-end justify-between gap-4"
                    variants={container}
                    initial="hidden"
                    animate="show"
                >
                    <div className="w-1/3">
                        <motion.p variants={item} className="text-4xl">
                            <span className="font-extrabold">Hi</span> I’m
                        </motion.p>
                        <motion.h1 variants={item} className="text-9xl font-extrabold">
                            <span className="text-accent text_shadow">Amir</span> Zeb
                        </motion.h1>
                        <motion.p variants={item} className="mb-6 text-sm text-muted">
                            I turn complex business requirements into clean, maintainable web
                            software. Specializing in the MERN stack, with production
                            experience in ERP systems and eCommerce SaaS platforms.
                        </motion.p>
                        <motion.div variants={item} className="flex gap-4">
                            <Button variant="secondary" href="/resume.pdf">View Resume</Button>
                            <Button href="#contact">Hire Me</Button>
                        </motion.div>
                    </div>

                    <div className="w-1/3 text-end">
                        <motion.h4 variants={item} className="text-4xl font-medium">
                            5 Years
                        </motion.h4>
                        <motion.h4 variants={item} className="mb-2 text-lg">
                            Experience
                        </motion.h4>
                        <motion.h4
                            variants={item}
                            className="text-4xl font-extrabold text-accent text_shadow"
                        >
                            Full Stack (MERN)
                        </motion.h4>
                        <motion.h4 variants={item} className="text-4xl font-extrabold">
                            Developer
                        </motion.h4>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}