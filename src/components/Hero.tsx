"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiExternalLink } from "react-icons/fi";

const Hero = () => {
    return (
        <section className="mb-24 pt-10" id="hero">
            {/* Header row - Metadata style */}
            <div className="flex justify-between items-start mb-12 px-2">
                <div className="space-y-1">
                    <h2 className="text-xl font-bold text-brand uppercase tracking-tighter transition-all hover:tracking-normal cursor-default">MEHUL</h2>
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40">Software Engineer</p>
                    <p className="text-[9px] font-medium text-white/20 max-w-[200px] leading-relaxed">
                        This portfolio contains some of my work and assignments in AI & Full Stack.
                    </p>
                </div>
                <div className="text-right space-y-1">
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="content-card p-4 md:p-8 relative overflow-hidden group shadow-2xl border-white/10"
            >
                {/* Secondary Border like in reference */}
                <div className="absolute inset-1 border border-white/5 rounded-[inherit] pointer-events-none" />

                <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start relative z-10 px-4 py-6">
                    {/* Top links style bar */}
                    <div className="absolute top-0 left-0 right-0 flex gap-4 p-4 text-[9px] font-black uppercase tracking-widest text-white/30 border-b border-white/5">
                        <span className="flex items-center gap-1 cursor-not-allowed"><FiArrowUpRight /> More Like This</span>
                        <span className="flex items-center gap-1 cursor-not-allowed"><FiExternalLink /> Save</span>
                        <span className="flex items-center gap-1 cursor-not-allowed"><FiExternalLink /> Permalink</span>
                    </div>

                    <div className="w-full lg:w-[35%] mt-10">
                        <motion.div
                            whileHover={{ scale: 1.02, rotate: -0.5 }}
                            className="aspect-[4/5] bg-neutral-900 rounded-xl overflow-hidden border border-white/10 shadow-2xl relative"
                        >
                            <img
                                alt="MEHUL"
                                className="w-full h-full object-cover grayscale brightness-90 contrast-125 group-hover:grayscale-0 transition-all duration-700"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfK-IBZkb4xhM66qGi-3nE5n5jxVb1LJAl6xg18c7gT4mYssLZZgOoYR6C_zOiUp-zhvwthSJopmso9iq6KqeuZm5KLKH8XRLN2HTf5gsqEpib2jue7D4VViFYNgjsFNGl6wi-wz7OC_fnWkDyzJUEv6USMUdY4l8nhr1Jtu4O_WlAyUJHF4q6csHCVdN9W79hzQJIx7FJMUuin7-IhFy5mCdcF-aJoR6mrO61vc5D-4ElyyKTvCIuYl8CaxoVkkrEc5RTJ-HkRVl4"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent" />
                        </motion.div>
                    </div>

                    <div className="flex-1 mt-10 flex flex-col justify-between">
                        <div>
                            <motion.h1
                                initial={{ x: 20 }}
                                animate={{ x: 0 }}
                                className="brutalist-header text-[clamp(4rem,12vw,10rem)] mb-6 text-white"
                            >
                                HELLO<span className="text-brand">!</span>
                            </motion.h1>

                            <p className="text-sm md:text-base leading-relaxed text-white/60 font-medium mb-12 max-w-xl">
                                My Name is <span className="text-white font-bold italic">MEHUL</span>. I am a Software Engineer transitioning into AI engineering, focused on building intelligent automation and scalable web systems. I am passionate about pushing the boundaries of design and exploring new skills in autonomous agents and intelligent automation.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl">
                            {[
                                { label: "mehul.gupta.56614@gmail.com", href: "mailto:mehul.gupta.56614@gmail.com" },
                                { label: "@linkedin/mehul", href: "https://www.linkedin.com/in/mehul-gupta-605698269/" },
                                { label: "github.com/Mehul0161", href: "https://github.com/Mehul0161" },
                                { label: "(+91) 98187-62675", href: "tel:+919818762675" }
                            ].map((link, i) => (
                                <motion.a
                                    key={link.label}
                                    whileHover={{ scale: 1.02, backgroundColor: "#ff5a1f", color: "#fff" }}
                                    className="px-6 py-4 bg-brand/10 border border-brand/20 text-brand rounded-full text-[11px] font-black uppercase tracking-[0.2em] text-center transition-all flex items-center justify-center gap-2 group/btn"
                                    href={link.href}
                                >
                                    {link.label}
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Sub-grid for Education, Experience, & Skills inside Hero container like in reference */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mt-12 pt-12 border-t border-white/5 mx-4 mb-6">
                    {/* Column 1: Education */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-black text-white italic uppercase tracking-tighter border-b border-brand w-fit pb-1 mb-6">Education</h3>
                        <div className="space-y-6">
                            <div>
                                <p className="text-[10px] font-black text-white/30 uppercase tracking-widest">2020 - 2024</p>
                                <h4 className="text-sm font-bold text-white uppercase italic">MSIT, Delhi</h4>
                                <p className="text-[11px] text-white/50 uppercase font-medium">B.Tech - CS (8.6 GPA)</p>
                            </div>
                            <div>
                                <p className="text-[10px] font-black text-white/30 uppercase tracking-widest">2018 - 2020</p>
                                <h4 className="text-sm font-bold text-white uppercase italic">PUSA Institute, Delhi</h4>
                                <p className="text-[11px] text-white/50 uppercase font-medium">Diploma in Mechanical Eng.</p>
                            </div>
                        </div>
                    </div>

                    {/* Column 2: Experience (Compact Timeline) */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-black text-white italic uppercase tracking-tighter border-b border-brand w-fit pb-1 mb-6">Experience</h3>
                        <div className="relative pl-6 border-l border-white/10 space-y-6">
                            {[
                                { year: "2025", role: "Full Stack", company: "WriteCream AI" },
                                { year: "2023", role: "Intern", company: "DesignsLab" },
                                { year: "2022", role: "Trainee", company: "Internshala" }
                            ].map((exp, i) => (
                                <div key={i} className="relative">
                                    <div className="absolute -left-[27px] top-1 w-2.5 h-2.5 bg-brand rounded-full border-2 border-charcoal shadow-[0_0_10px_rgba(255,90,31,0.5)]" />
                                    <p className="text-[9px] font-black text-white/30 uppercase tracking-widest">{exp.year}</p>
                                    <h4 className="text-xs font-bold text-white uppercase leading-tight">{exp.role}</h4>
                                    <p className="text-[10px] text-white/40 uppercase font-medium italic">{exp.company}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Column 3: Skills (Software Style) */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-black text-white italic uppercase tracking-tighter border-b border-brand w-fit pb-1 mb-6">Software Skills</h3>
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { icon: "Py", name: "Python", desc: "AI Engine" },
                                { icon: "Ts", name: "TS", desc: "Logic" },
                                { icon: "Rc", name: "React", desc: "UI/UX" },
                                { icon: "Nd", name: "Node", desc: "System" }
                            ].map(skill => (
                                <div key={skill.name} className="flex gap-3 group/skill cursor-default">
                                    <div className="w-10 h-10 flex-shrink-0 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center font-black text-xs text-brand group-hover/skill:bg-brand group-hover/skill:text-white transition-all duration-500">
                                        {skill.icon}
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black text-white uppercase tracking-tight">{skill.name}</p>
                                        <p className="text-[8px] text-white/30 uppercase font-medium">{skill.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="pt-6 border-t border-white/5">
                            <h4 className="text-[10px] font-black text-white/30 uppercase tracking-widest mb-2 italic">Specialist</h4>
                            <p className="text-[11px] text-white/70 font-bold uppercase tracking-tighter">AI AGENTS / RAG / LLM / DEV OPS</p>
                        </div>
                    </div>

                    {/* Column 4: Specialist & Language */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-lg font-black text-white italic uppercase tracking-tighter border-b border-brand w-fit pb-1 mb-6">Skills</h3>
                            <ul className="space-y-2">
                                {["Autonomous Agents", "Prompt Engineering", "Orchestration", "System Design"].map(s => (
                                    <li key={s} className="text-[11px] font-bold text-white/50 uppercase tracking-widest flex items-center gap-2">
                                        - {s}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-sm font-black text-white italic uppercase tracking-tighter border-b border-white/20 w-fit pb-1 mb-4">Language</h3>
                            <div className="space-y-1">
                                <p className="text-[11px] font-bold text-white uppercase italic tracking-wider">English <span className="text-white/30 normal-case">(Professional)</span></p>
                                <p className="text-[11px] font-bold text-white uppercase italic tracking-wider">Hindi <span className="text-white/30 normal-case">(Native)</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
