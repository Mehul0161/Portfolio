"use client";

import React from "react";
import { motion } from "framer-motion";

const Contents = () => {
    const sections = [
        { id: "01", name: "Experience", desc: "WriteCream AI, DesignsLab, Internshala.", href: "#experience" },
        { id: "02", name: "Projects", desc: "AI Code Gen, Browser Agents, ML Models.", href: "#projects" },
        { id: "03", name: "Skills", desc: "Python, AI Agents, LangChain, DevOps.", href: "#skills" },
        { id: "04", name: "Education", desc: "MSIT (B.Tech CS), PUSA (Mechanical).", href: "#education" },
        { id: "05", name: "Contact", desc: "mehul.gupta.56614@gmail.com, Delhi.", href: "#contact" },
    ];

    return (
        <section className="mb-40" data-purpose="navigation-grid">
            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="brutalist-header text-[clamp(5rem,18vw,15rem)] mb-16"
            >
                CONTENTS
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-12 px-2">
                {sections.map((section, i) => (
                    <motion.a
                        key={section.id}
                        href={section.href}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="flex flex-col gap-4 group cursor-pointer"
                    >
                        <div className="flex items-start gap-4">
                            <span className="px-5 py-1.5 bg-brand text-white text-[11px] font-black rounded-full shadow-lg shadow-brand/20 group-hover:scale-110 transition-transform">
                                {section.id}
                            </span>
                            <div className="flex-1">
                                <h3 className="text-3xl font-bold text-white group-hover:text-brand transition-colors uppercase italic tracking-tighter leading-none mb-2">
                                    {section.name}
                                </h3>
                                <p className="text-[11px] text-white/30 font-black uppercase tracking-[0.2em] group-hover:text-white/60 transition-colors">
                                    {section.desc}
                                </p>
                            </div>
                        </div>
                    </motion.a>
                ))}
            </div>
        </section>
    );
};

export default Contents;
