"use client";

import React from "react";
import { motion } from "framer-motion";
import ScrollFloat from "./ScrollFloat";

const Experience = () => {
    const experiences = [
        {
            company: "WriteCream AI",
            role: "Full Stack Web Developer",
            period: "2025 – Present",
            desc: "Built dynamic React.js frontend interfaces, improving user engagement by 25% across AI tools. Developed RESTful APIs with Node.js/Express.js and integrated MongoDB to handle 5000+ concurrent users."
        },
        {
            company: "DesignsLab",
            role: "Full Stack Developer Intern",
            period: "2023 – 2024",
            desc: "Developed a Student Result Management frontend in React.js adopted by 200+ users. Architected backend systems with Node.js, Express, and MySQL."
        },
        {
            company: "Internshala",
            role: "Web Development Trainee",
            period: "2022",
            desc: "Engineered a live Weather Application frontend in React.js. Created robust backend APIs using Node.js and Express."
        }
    ];

    return (
        <section className="mb-32 md:mb-60 px-4" id="experience">
            <div className="flex flex-col items-center text-center mb-16 md:mb-24">
                <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-brand font-black text-xs md:text-sm uppercase tracking-[0.3em] mb-4"
                >
                    Professional Journey
                </motion.span>
                <ScrollFloat
                    textClassName="brutalist-header text-[clamp(2rem,12vw,12rem)]"
                >
                    EXPERIENCE
                </ScrollFloat>
            </div>

            <div className="max-w-6xl mx-auto space-y-20 md:space-y-32">
                {experiences.map((exp, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start relative pb-12 md:pb-16 border-b border-white/5 last:border-0"
                    >
                        <div className="md:col-span-4">
                            <p className="text-brand font-black text-[10px] md:text-xs uppercase tracking-widest mb-3 md:mb-4 font-mono">
                                {exp.period}
                            </p>
                            <h3 className="text-3xl md:text-5xl font-bold text-white uppercase italic tracking-tighter leading-none mb-2">
                                {exp.company}
                            </h3>
                            <p className="text-white/40 font-bold uppercase text-[10px] md:text-[12px] tracking-wider">
                                {exp.role}
                            </p>
                        </div>
                        <div className="md:col-span-8">
                            <p className="text-lg md:text-2xl text-white/60 leading-relaxed font-medium">
                                {exp.desc}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
