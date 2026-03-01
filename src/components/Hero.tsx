"use client";

import React from "react";
import { motion } from "framer-motion";
import CurvedLoop from "./CurvedLoop";

const Hero = () => {
    return (
        <section className="relative w-full h-[100svh] flex flex-col items-center justify-center overflow-hidden bg-[#0a0a0a]" id="hero">
            {/* Background Cinematic Glows */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(255,90,31,0.08)_0%,_transparent_70%)]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[radial-gradient(circle_at_center,_rgba(255,90,31,0.05)_0%,_transparent_50%)]" />
            </div>

            {/* Background Infinite Curved Loop Text */}
            <div className="absolute bottom-[5%] md:bottom-[-100px] left-0 w-full pointer-events-none select-none z-0">
                <CurvedLoop
                    marqueeText="DEVELOPER ✦ ENGINEER ✦ DESIGNER ✦ AGENTIC AI ✦ "
                    speed={1}
                    curveAmount={100}
                    direction="left"
                    interactive={false}
                    className="brutalist-header"
                />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative z-10 flex flex-col items-center text-center px-4 max-w-5xl -mt-10 md:mt-0"
            >
                {/* Badge */}
                <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-brand font-black text-[9px] sm:text-[10px] md:text-[12px] uppercase tracking-[0.5em] mb-4 md:mb-6 block"
                >
                    Full Stack Engineer & AI Specialist
                </motion.span>

                {/* Main Title - MEHUL */}
                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="brutalist-header text-[22vw] sm:text-[20vw] md:text-[15vw] lg:text-[18rem] tracking-[-0.08em] !text-white leading-[0.75]"
                >
                    MEHUL
                </motion.h1>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-white/40 text-[10px] sm:text-sm md:text-xl font-medium max-w-[280px] sm:max-w-2xl leading-relaxed mt-6 md:mt-12 px-2"
                >
                    Crafting premium digital experiences through cinematic typography,
                    high-performance code, and brutalist design aesthetics.
                </motion.p>
            </motion.div>

            {/* Bottom Gradient Fade */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent z-20" />
        </section>
    );
};

export default Hero;
