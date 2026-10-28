"use client"

import { motion, useScroll } from "motion/react"
import Header from "@/components/sections/header";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Skills from "@/components/sections/skills";
import Footer from "@/components/sections/footer";
import Services from "@/components/sections/services";
import Contact from "@/components/sections/contact";

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
        <About />
        <Skills />
        <Services />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
