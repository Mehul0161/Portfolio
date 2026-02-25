"use client";

import React from "react";
import { motion } from "framer-motion";
import ScrollFloat from "./ScrollFloat";

const Education = () => {
    const education = [
        {
            university: "Maharaja Surajmal Institute of Technology",
            degree: "B.Tech in Computer Science",
            period: "2020 – 2024",
            gpa: "8.6 / 10.0",
        },
        {
            university: "PUSA Institute of Technology",
            degree: "Diploma in Mechanical Engineering",
            period: "2018 – 2020",
            gpa: "First Class",
        }
    ];

    return (
        <section className="mb-60 px-4" id="education">
            <div className="flex flex-col items-center text-center mb-24">
                <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-brand font-black text-sm uppercase tracking-[0.3em] mb-4"
                >
                    Academic Background
                </motion.span>
                <ScrollFloat
                    textClassName="brutalist-header text-[clamp(4rem,15vw,12rem)]"
                >
                    EDUCATION
                </ScrollFloat>
            </div>

            <div className="max-w-5xl mx-auto space-y-12">
                {education.map((edu, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="flex flex-col md:flex-row items-center justify-between p-12 bg-white/5 border border-white/5 rounded-3xl hover:border-brand/20 transition-all group backdrop-blur-sm"
                    >
                        <div className="text-center md:text-left">
                            <p className="text-brand font-black text-xs uppercase tracking-widest mb-2 font-mono">{edu.period}</p>
                            <h3 className="text-3xl md:text-4xl font-bold text-white uppercase italic tracking-tighter group-hover:text-brand transition-colors">
                                {edu.university}
                            </h3>
                            <p className="text-white/50 font-bold uppercase text-[12px] tracking-wider mt-1">{edu.degree}</p>
                        </div>
                        <div className="mt-8 md:mt-0 px-8 py-4 bg-brand/10 border border-brand/20 rounded-2xl">
                            <p className="text-[10px] font-black text-white/40 uppercase tracking-widest mb-1">GPA / Result</p>
                            <p className="text-2xl font-black text-white font-mono">{edu.gpa}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Education;
