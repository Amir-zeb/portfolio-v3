"use client"

import { motion, useScroll } from "motion/react"
import Header from "@/components/sections/header";
import Hero from "@/components/sections/hero";

export default function Home() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.div
        id="scroll-indicator"
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          zIndex: 9999,
          top: 0,
          left: 0,
          right: 0,
          height: 3,
          originX: 0,
          backgroundColor: "var(--accent)",
        }}
      />
      <div>
        <Header />
        <Hero />
        <h1 className="font-heading text-5xl font-bold">Hello Worldy</h1>
        <p>Welcome to my portfolio website!</p>
        <p className="font-mono text-sm">Check out my projects and skills below.</p>
      </div>
    </>
  );
}
