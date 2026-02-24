"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiExternalLink, FiShare2 } from "react-icons/fi";

const Projects = () => {
    const projects = [
        {
            title: "AI Code Generator",
            link: "https://trymax.dev",
            badges: ["AI / AUTOMATION", "SDK"],
            stack: "React / Node / TS / Daytona",
            type: "SaaS Platform",
            year: "2024",
            desc: "Built full-stack app generating frontend code (React, Vue, Next.js) from prompts with real-time preview under 30 seconds. Integrated Daytona SDK for interactive previews; handled complex multi-environment components.",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" className="w-20 h-20 text-brand opacity-60 group-hover:opacity-100 transition-opacity duration-500" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 8L3 12L7 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M17 8L21 12L17 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M14 4L10 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M18 4L22 8L18 12" stroke="currentColor" strokeWidth="1" opacity="0.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )
        },
        {
            title: "Intelligent Browser Agent",
            link: "https://tryleo.io",
            badges: ["AI / AGENTIC", "BROWSER"],
            stack: "Next.js / LangChain / Playwright",
            type: "AI Utility",
            year: "2024",
            desc: "Built an AI-powered browser agent for autonomous tasks combining web scraping, automation, and reasoning. Live previews implemented using Next.js + Daytona + VNC, completing 50+ tasks/hour.",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" className="w-20 h-20 text-brand opacity-60 group-hover:opacity-100 transition-opacity duration-500" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
                    <path d="M3 10H21" stroke="currentColor" strokeWidth="2" />
                    <circle cx="8" cy="7" r="1" fill="currentColor" />
                    <circle cx="11" cy="7" r="1" fill="currentColor" />
                    <path d="M12 14C12 14 13.5 16 16 16C18.5 16 20 14 20 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
            )
        },
        {
            title: "Food Ordering System",
            link: "#",
            badges: ["FULL STACK", "HEALTH"],
            stack: "React / Node / MySQL",
            type: "E-Commerce",
            year: "2023",
            desc: "Helps people recognize food types and nutritional information with a personalized interface improving healthy meal selection. Optimized for quick ordering and dietary tracking.",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" className="w-20 h-20 text-brand opacity-60 group-hover:opacity-100 transition-opacity duration-500" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 6H21L19 16H5L3 6Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                    <path d="M8 6V4H16V6" stroke="currentColor" strokeWidth="2" />
                    <circle cx="9" cy="20" r="1" fill="currentColor" />
                    <circle cx="15" cy="20" r="1" fill="currentColor" />
                </svg>
            )
        },
        {
            title: "Food Recognition ML",
            link: "https://colab.research.google.com/drive/1om-ppmZWNVYZOEk_AlAcnAevIw9Se3d_?usp=sharing",
            badges: ["AI / ML", "TENSORFLOW"],
            stack: "Python / TensorFlow / Colab",
            type: "Dataset / Model",
            year: "2023",
            desc: "Developed a Machine Learning model recognizing food images and listing nutritional details. Achieved high accuracy across diverse image datasets using deep learning and convolutional neural networks.",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" className="w-20 h-20 text-brand opacity-60 group-hover:opacity-100 transition-opacity duration-500" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z" stroke="currentColor" strokeWidth="2" />
                    <path d="M3 12H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M19 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M12 3V5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M12 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
            )
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
                        className="content-card border-white/10 group relative py-12 overflow-hidden"
                    >
                        <div className="px-8 md:px-12 flex flex-col lg:flex-row gap-12 items-start">
                            {/* Left: Square logo/image area */}
                            <div className="w-full lg:w-1/4 aspect-square bg-[#1a1a1a] rounded-xl border border-white/5 flex items-center justify-center p-8 group-hover:border-brand/40 transition-colors shadow-2xl relative overflow-hidden">
                                <div className="absolute inset-0 bg-brand/5 group-hover:bg-brand/10 transition-colors" />
                                {project.icon}
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
