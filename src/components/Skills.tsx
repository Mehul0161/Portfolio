"use client";

import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
    const stack = [
        { label: "Py", name: "Python", color: "text-blue-400" },
        { label: "Js", name: "Javascript", color: "text-yellow-500" },
        { label: "Ts", name: "TypeScript", color: "text-blue-500" },
        { label: "Re", name: "React", color: "text-cyan-400" },
        { label: "Nd", name: "Node.js", color: "text-green-500" },
        { label: "Mg", name: "MongoDB", color: "text-emerald-500" },
        { label: "Aw", name: "AWS", color: "text-orange-400" },
        { label: "Dk", name: "Docker", color: "text-blue-600" },
    ];

    const specialist = [
        "Prompt engineering", "LLM orchestration", "Agentic workflows", "RAG pipelines", "Browser agents", "LangChain", "LangGraph", "N8N", "Redis", "CI/CD", "Kubernetes", "Linux", "Nginx", "PostgreSQL"
    ];

    return (
        <section className="mb-24" id="skills">
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-end gap-6 mb-12"
            >
                <h2 className="brutalist-header text-[clamp(4rem,10vw,8rem)]">SKILLS</h2>
                <span className="pill-badge mb-6 h-8 w-12 !text-sm">03</span>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="content-card p-10 group"
                >
                    <div className="flex items-center gap-4 mb-10">
                        <div className="w-2 h-8 bg-brand rounded-full" />
                        <h3 className="text-sm font-black text-white/50 uppercase tracking-[0.4em] italic">Development Stack</h3>
                    </div>
                    <div className="grid grid-cols-4 gap-x-6 gap-y-10">
                        {stack.map((item, i) => (
                            <motion.div
                                key={item.name}
                                whileHover={{ scale: 1.1, rotate: 2 }}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="flex flex-col items-center gap-3 transition-colors"
                            >
                                <div className={`software-icon !w-14 !h-14 !rounded-2xl ${item.color} group-hover:bg-brand/5 shadow-xl border-white/5`}>
                                    <span className="text-lg">{item.label}</span>
                                </div>
                                <span className="text-[10px] uppercase font-black tracking-widest text-white/40 group-hover:text-white/60">{item.name}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="content-card p-10 group"
                >
                    <div className="flex items-center gap-4 mb-10">
                        <div className="w-2 h-8 bg-brand rounded-full" />
                        <h3 className="text-sm font-black text-white/50 uppercase tracking-[0.4em] italic">AI & Specialist Skills</h3>
                    </div>
                    <div className="flex flex-wrap gap-4">
                        {specialist.map((skill, i) => (
                            <motion.span
                                key={skill}
                                whileHover={{ scale: 1.05, backgroundColor: '#ff5a1f', color: '#fff' }}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.03 }}
                                className="pill-badge !bg-white/5 !text-white/60 !border !border-white/10 !px-5 !py-3 !text-xs cursor-default font-black italic tracking-wider transition-all duration-300"
                            >
                                {skill}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
