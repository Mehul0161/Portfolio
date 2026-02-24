"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiExternalLink, FiShare2 } from "react-icons/fi";

const Projects = () => {
    const projects = [
        {
            title: "AI Code Generator",
            link: "https://trymax.dev",
            badges: ["DEVELOPMENT", "AI / AUTOMATION", "SDK"],
            stack: "React / Node / TS",
            type: "SaaS Platform",
            year: "2024",
            desc: "Built full-stack app generating frontend code (React, Vue, Next.js) from prompts with real-time preview under 30 seconds. Integrated Daytona SDK for interactive previews; handled complex multi-environment components."
        },
        {
            title: "Browser Agent",
            link: "https://tryleo.io",
            badges: ["AI / AGENTIC", "BROWSER", "AUTOMATION"],
            stack: "Next.js / LangChain",
            type: "AI Utility",
            year: "2024",
            desc: "Built an AI-powered browser agent for autonomous tasks combining web scraping, automation, and reasoning. Orchestrated multi-step workflows with LangChain/LlamaIndex and LLMs."
        },
        {
            title: "Food Ordering",
            link: "#",
            badges: ["FULL STACK", "HEALTH"],
            stack: "React / Node / MySQL",
            type: "E-Commerce",
            year: "2023",
            desc: "Designed an intelligent system that helps people recognize food types and nutritional information with a personalized interface improving healthy meal selection."
        },
        {
            title: "Recognition ML",
            link: "https://colab.research.google.com/drive/1om-ppmZWNVYZOEk_AlAcnAevIw9Se3d_?usp=sharing",
            badges: ["AI / ML", "TENSORFLOW"],
            stack: "Python / TensorFlow",
            type: "Dataset / Model",
            year: "2023",
            desc: "Developed a Machine Learning model recognizing food images and listing nutritional details. Achieved high accuracy across diverse image datasets using deep learning techniques."
        }
    ];

    return (
        <section className="mb-40" id="projects">
            <div className="relative mb-20 flex items-start justify-between">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="brutalist-header text-[clamp(5rem,15vw,12rem)] leading-[0.7]"
                >
                    PROJECTS
                </motion.h2>
                <div className="bg-brand text-white px-6 py-2 rounded-full font-black text-xs uppercase tracking-widest mt-4">
                    02
                </div>
            </div>

            <div className="space-y-24 px-2">
                {projects.map((project, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="content-card border-white/10 group relative pt-12 pb-8 overflow-hidden"
                    >
                        {/* Top meta bar - strictly following reference */}
                        <div className="absolute top-0 left-0 right-0 flex gap-4 p-4 text-[9px] font-black uppercase tracking-widest text-white/30 border-b border-white/5 bg-white/[0.02]">
                            <span className="flex items-center gap-1 cursor-pointer hover:text-brand transition-colors"><FiShare2 /> More Like This</span>
                            <span className="flex items-center gap-1 cursor-pointer hover:text-brand transition-colors"><FiArrowUpRight /> Permalink</span>
                            <span className="flex items-center gap-1 cursor-pointer hover:text-brand transition-colors"><FiExternalLink /> Save</span>
                        </div>

                        <div className="px-8 md:px-12 flex flex-col lg:flex-row gap-12 items-start pt-8">
                            {/* Left: Square logo/image area */}
                            <div className="w-full lg:w-1/4 aspect-square bg-[#1a1a1a] rounded-xl border border-white/5 flex items-center justify-center p-8 group-hover:border-brand/40 transition-colors shadow-2xl relative overflow-hidden">
                                <div className="absolute inset-0 bg-brand/5 group-hover:bg-brand/10 transition-colors" />
                                <div className="text-6xl font-black text-white italic z-10 opacity-20">A.I</div>
                            </div>

                            {/* Right: Content details */}
                            <div className="flex-1 space-y-8">
                                <div>
                                    <h3 className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter mb-4 leading-none group-hover:text-brand transition-colors duration-500">
                                        {project.title}
                                    </h3>
                                    <p className="text-white/50 text-base md:text-lg leading-relaxed max-w-2xl font-medium group-hover:text-white/80 transition-colors duration-500">
                                        {project.desc}
                                    </p>
                                </div>

                                {/* Detail Table - strictly following Reference Image 1 structure */}
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-8 border-t border-white/5 max-w-2xl">
                                    <div>
                                        <p className="text-[10px] font-black text-white/20 uppercase tracking-[0.3em] mb-2 italic italic">Architecture</p>
                                        <div className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 bg-brand rounded-full" /> {project.stack}
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black text-white/20 uppercase tracking-[0.3em] mb-2 italic">Sector</p>
                                        <p className="text-sm font-bold text-white uppercase tracking-wider">{project.type}</p>
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black text-white/20 uppercase tracking-[0.3em] mb-2 italic">Year</p>
                                        <p className="text-sm font-bold text-white uppercase tracking-wider">{project.year}</p>
                                    </div>
                                </div>

                                <div className="pt-4 flex gap-4">
                                    <a href={project.link} className="text-[10px] font-black uppercase tracking-widest text-[#ff5a1f] underline decoration-brand/30 underline-offset-4 hover:decoration-brand transition-all">
                                        Visit Platform →
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
