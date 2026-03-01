"use client";

import React from "react";
import { motion } from "framer-motion";
import ScrollFloat from "./ScrollFloat";
import LogoLoop from "./LogoLoop";
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiPython, SiNodedotjs, SiMongodb, SiPostgresql, SiAmazon, SiDocker, SiVite, SiExpress } from 'react-icons/si';

const Skills = () => {
    const techStack = [
        { name: "Python", icon: "python", category: "Backend & AI" },
        { name: "Typescript", icon: "typescript", category: "Core Logic" },
        { name: "React", icon: "react", category: "Frontend" },
        { name: "Node.js", icon: "nodedotjs", category: "Server" },
        { name: "Next.js", icon: "nextdotjs", category: "Framework" },
        { name: "MongoDB", icon: "mongodb", category: "Database" },
        { name: "PostgreSQL", icon: "postgresql", category: "Database" },
        { name: "AWS", icon: "amazonaws", category: "Cloud" },
    ];

    const techLogos = [
        { node: <SiPython />, title: "Python", href: "https://python.org" },
        { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
        { node: <SiReact />, title: "React", href: "https://react.dev" },
        { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org" },
        { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
        { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
        { node: <SiMongodb />, title: "MongoDB", href: "https://mongodb.com" },
        { node: <SiPostgresql />, title: "PostgreSQL", href: "https://postgresql.org" },
        { node: <SiAmazon />, title: "AWS", href: "https://aws.amazon.com" },
        { node: <SiDocker />, title: "Docker", href: "https://docker.com" },
        { node: <SiVite />, title: "Vite", href: "https://vitejs.dev" },
        { node: <SiExpress />, title: "Express", href: "https://expressjs.com" },
    ];

    return (
        <section className="mb-32 md:mb-60" id="skills">
            <div className="px-4 flex flex-col items-center text-center mb-16 md:mb-24">
                <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-brand font-black text-xs md:text-sm uppercase tracking-[0.3em] mb-4"
                >
                    Technical Arsenal
                </motion.span>
                <ScrollFloat
                    textClassName="brutalist-header text-[clamp(2.5rem,15vw,12rem)]"
                >
                    SKILLS
                </ScrollFloat>
            </div>

            <div className="px-4 max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-8 mb-24 md:mb-32">
                {techStack.map((tech, i) => (
                    <motion.div
                        key={tech.name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                        className="group bg-white/5 border border-white/5 p-6 md:p-8 rounded-2xl flex flex-col items-center text-center space-y-4 hover:border-brand/30 transition-all hover:-translate-y-2 backdrop-blur-sm"
                    >
                        <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-500">
                            <img
                                src={tech.name === "AWS" ? "/aws-svgrepo-com.svg" : `https://cdn.simpleicons.org/${tech.icon}`}
                                alt={tech.name}
                                className="w-8 h-8 md:w-10 md:h-10 object-contain"
                            />
                        </div>
                        <div>
                            <p className="text-white font-bold uppercase text-[10px] md:text-[12px] tracking-widest">{tech.name}</p>
                            <p className="text-white/20 text-[8px] md:text-[9px] font-black uppercase mt-1 tracking-tighter">{tech.category}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Full Width Logo Loop - Breaking out of container */}
            <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden py-4 md:py-6 border-y border-white/5 bg-white/[0.02]">
                <LogoLoop
                    logos={techLogos}
                    speed={80}
                    direction="left"
                    logoHeight={50}
                    gap={100}
                    pauseOnHover={true}
                    scaleOnHover={true}
                    fadeOut={true}
                    fadeOutColor="#121212"
                />
            </div>

            <div className="px-6 md:px-4 max-w-4xl mx-auto mt-24 md:mt-32 p-8 md:p-12 border border-brand/20 bg-brand/5 rounded-3xl text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand to-transparent" />
                <h3 className="text-white/40 font-black uppercase text-[10px] md:text-xs tracking-[0.4em] mb-6">Current Focus</h3>
                <p className="text-xl md:text-4xl text-white font-bold uppercase italic tracking-tighter leading-tight">
                    Autonomous AI Agents / LangChain / <span className="text-brand">Agentic Workflows</span> / RAG Architectures
                </p>
            </div>
        </section>
    );
};

export default Skills;
