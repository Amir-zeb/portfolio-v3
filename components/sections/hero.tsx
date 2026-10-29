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
            className="relative flex flex-col md:flex-row min-h-screen md:max-h-screen items-center justify-center overflow-hidden"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            {/* 2. BLOB: outer div centers it, so no Tailwind translate classes
          fight with Motion's transform */}
            {/* <div className="pointer-events-none absolute inset-0 bottom-30 flex items-center justify-center">
                <motion.div style={{ x: blobX, y: blobY }}>
                    <motion.div
                        className="h-70 w-70 sm:h-104 sm:w-104 bg-accent/40 blur sm:blur-2xl"
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
            </div> */}

            {/* IMAGE: outer div = mouse movement, inner div = entrance animation.
          Keeping them on separate elements stops them fighting over y */}
            <div className="relative md:absolute md:bottom-0 md:left-0 flex h-full w-full items-end justify-center">
                <div className="pointer-events-none absolute -z-1 inset-0 bottom-30 flex items-center justify-center">
                    <motion.div style={{ x: blobX, y: blobY }}>
                        <motion.div
                            className="h-70 w-70 md:h-104 md:w-104 bg-accent/40 blur md:blur-2xl"
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
                <motion.div className="w-full pt-10 lg:w-[80%] xl:w-[70%]" style={{ x: imgX, y: imgY }}>
                    <motion.div
                        initial={{ opacity: 0, y: 80 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, delay: 0.1, ease: "easeOut" }}
                    >
                        <Image
                            src={heroPic}
                            alt="Amir Zeb"
                            loading="eager"
                            className="h-auto w-full"
                        />
                        {/* <div className="absolute inset-0 bg-linear-to-t from-black via-black/10 to-transparent"></div> */}
                        <div className="absolute inset-0 bg-linear-to-t from-black via-black/10 to-transparent"></div>
                    </motion.div>
                </motion.div>
            </div>

            {/* TEXT: every motion child below fades up in order */}
            <div className="container md:relative z-10 mx-auto px-4 py-4 max-sm:-m-10">
                <motion.div
                    className="flex items-end justify-between gap-4"
                    variants={container}
                    initial="hidden"
                    animate="show"
                >
                    <div className="w-full md:w-1/3 max-md:flex max-md:flex-col max-md:text-center max-md:items-center">
                        <motion.p variants={item} className="text-2xl lg:text-4xl">
                            <span className="font-extrabold">Hi</span> I’m
                        </motion.p>
                        <motion.h1 variants={item} className="text-7xl lg:text-9xl font-extrabold">
                            <span className="text-accent text_shadow">Amir</span> Zeb
                        </motion.h1>
                        <motion.p variants={item} className="mb-6 text-sm text-muted">
                            I turn complex business requirements into clean, maintainable web
                            software. Specializing in the MERN stack, with production
                            experience in ERP systems and eCommerce SaaS platforms.
                        </motion.p>
                        <motion.div variants={item} className="flex gap-2 lg:gap-4">
                            <Button variant="secondary" className="text-sm" href="/resume.pdf">View Resume</Button>
                            <Button href="#contact" className="text-sm">Hire Me</Button>
                        </motion.div>
                    </div>

                    <div className="w-full md:w-1/3 text-end max-md:hidden">
                        <motion.h4 variants={item} className="text-2xl lg:text-4xl font-medium">
                            5 Years
                        </motion.h4>
                        <motion.h4 variants={item} className="mb-2 text-lg">
                            Experience
                        </motion.h4>
                        <motion.h4
                            variants={item}
                            className="text-2xl lg:text-4xl font-extrabold text-accent text_shadow"
                        >
                            Full Stack (MERN)
                        </motion.h4>
                        <motion.h4 variants={item} className="text-2xl lg:text-4xl font-extrabold">
                            Developer
                        </motion.h4>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}