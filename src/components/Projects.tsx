"use client";

import React from "react";
import { motion } from "framer-motion";
import ScrollFloat from "./ScrollFloat";
import { FiArrowUpRight } from "react-icons/fi";

const Projects = () => {
    const projects = [
        {
            title: "AI Code Generator",
            link: "https://trymax.dev/",
            type: "SaaS Platform",
            year: "2024",
            stack: "React / Node / TS",
            desc: "Built full-stack app generating frontend code from prompts with real-time preview under 30 seconds.",
            img: "/Screenshot 2026-02-25 152843.png"
        },
        {
            title: "Intelligent Browser Agent",
            link: "https://tryleo.io",
            type: "AI Utility",
            year: "2024",
            stack: "Next.js / LangChain",
            desc: "Built an AI-powered browser agent for autonomous tasks combining web scraping and reasoning.",
            img: "/projects/browser-agent.png"
        }
    ];

    return (
        <section className="mb-60 px-4" id="projects">
            <div className="flex flex-col items-center text-center mb-24">
                <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-brand font-black text-sm uppercase tracking-[0.3em] mb-4"
                >
                    Creative Selection
                </motion.span>
                <ScrollFloat
                    textClassName="brutalist-header text-[clamp(4rem,15vw,12rem)]"
                >
                    PROJECTS
                </ScrollFloat>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
                {projects.map((project, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="group relative flex flex-col gap-6"
                    >
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="aspect-[16/10] bg-white/5 border border-white/10 rounded-2xl overflow-hidden relative"
                        >
                            <div className="absolute inset-0 bg-brand/5 group-hover:bg-brand/0 transition-colors z-10" />
                            {project.img ? (
                                <img
                                    src={project.img}
                                    alt={project.title}
                                    className="w-full h-full object-cover grayscale brightness-[0.7] group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-110 transition-all duration-700"
                                />
                            ) : (
                                <div className="absolute inset-0 flex items-center justify-center text-white/5 font-black text-9xl select-none">
                                    {project.title.charAt(0)}
                                </div>
                            )}
                            <div className="absolute bottom-6 left-6 z-20">
                                <span className="px-4 py-2 bg-black/50 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-widest text-white border border-white/10">
                                    {project.type}
                                </span>
                            </div>
                        </a>

                        <div className="space-y-4 px-2">
                            <div className="flex items-start justify-between">
                                <h3 className="text-3xl md:text-5xl font-bold text-white uppercase italic tracking-tighter leading-none group-hover:text-brand transition-colors">
                                    {project.title}
                                </h3>
                                <motion.a
                                    href={project.link}
                                    whileHover={{ scale: 1.1, rotate: 45 }}
                                    className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white group-hover:bg-brand group-hover:border-brand transition-all"
                                >
                                    <FiArrowUpRight className="text-2xl" />
                                </motion.a>
                            </div>
                            <p className="text-lg text-white/50 leading-relaxed font-medium">
                                {project.desc}
                            </p>
                            <div className="flex gap-4 pt-2">
                                <span className="text-[10px] font-black text-brand uppercase tracking-widest">{project.stack}</span>
                                <span className="text-[10px] font-black text-white/20 uppercase tracking-widest">— {project.year}</span>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
