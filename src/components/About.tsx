"use client";

import React from "react";
import { motion } from "framer-motion";
import ScrollFloat from "./ScrollFloat";

const About = () => {
    return (
        <section className="mb-32 md:mb-60 px-4" id="about">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative order-2 lg:order-1"
                    >
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-brand font-black text-xs md:text-sm uppercase tracking-[0.3em] mb-4 block"
                        >
                            The Persona
                        </motion.span>
                        <ScrollFloat
                            containerClassName="mb-10 md:mb-12"
                            textClassName="brutalist-header text-[clamp(2.5rem,10vw,8rem)]"
                        >
                            STORY
                        </ScrollFloat>
                        <div className="space-y-6 text-lg md:text-2xl text-white/60 leading-relaxed font-medium px-1">
                            <p>
                                I am a Full Stack Engineer dedicated to bridging the gap between <span className="text-white italic">brutal architectural efficiency</span> and <span className="text-brand italic">cinematic user experiences</span>.
                            </p>
                            <p>
                                My journey began with a fascination for how code can manifest as interactive art. Today, I specialize in building high-performance AI-driven platforms and sophisticated web architectures that don't just work—they perform.
                            </p>
                            <p>
                                When I'm not architecting backends or refining UI micro-interactions, I'm exploring the frontier of <span className="text-white italic">Autonomous Agents</span> and <span className="text-white italic">LLM Orchestration</span>.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative aspect-square max-w-[400px] lg:max-w-none mx-auto lg:mx-0 order-1 lg:order-2"
                    >
                        <div className="absolute inset-0 border-2 border-brand/20 rounded-3xl rotate-3" />
                        <div className="absolute inset-0 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
                            <img
                                src="/me.pic.png"
                                alt="Mehul Gupta"
                                className="w-full h-full object-cover grayscale brightness-110 contrast-110 group-hover:grayscale-0 transition-all duration-1000"
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-brand/20 to-transparent mix-blend-overlay" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
