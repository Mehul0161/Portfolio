"use client";

import React from "react";
import { motion } from "framer-motion";

const Contents = () => {
    const sections = [
        { id: "01", name: "Experience", desc: "Work History", href: "#experience" },
        { id: "02", name: "Projects", desc: "Featured Work", href: "#projects" },
        { id: "03", name: "Skills", desc: "Technical Stack", href: "#skills" },
        { id: "04", name: "Education", desc: "Background", href: "#education" },
    ];

    return (
        <section className="mb-32 md:mb-60 px-4" id="contents">
            <div className="flex flex-col items-center text-center mb-16 md:mb-24">
                <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-brand font-black text-xs md:text-sm uppercase tracking-[0.3em] mb-4"
                >
                    Quick Navigation
                </motion.span>
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="brutalist-header text-[clamp(2rem,12vw,12rem)]"
                >
                    CONTENTS
                </motion.h2>
            </div>

            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12 md:gap-y-16">
                {sections.map((section, i) => (
                    <motion.a
                        key={section.id}
                        href={section.href}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="group flex items-center gap-6 md:gap-8 border-b border-white/5 pb-6 md:pb-8 hover:border-brand/40 transition-all duration-500"
                    >
                        <span className="text-3xl md:text-6xl font-black text-white/10 group-hover:text-brand/20 transition-colors">
                            {section.id}
                        </span>
                        <div className="flex flex-col">
                            <h3 className="text-2xl md:text-5xl font-bold text-white uppercase italic tracking-tighter group-hover:text-brand transition-colors">
                                {section.name}
                            </h3>
                            <p className="text-[9px] md:text-[10px] text-white/30 font-black uppercase tracking-[0.2em] mt-1">
                                {section.desc}
                            </p>
                        </div>
                    </motion.a>
                ))}
            </div>
        </section>
    );
};

export default Contents;
