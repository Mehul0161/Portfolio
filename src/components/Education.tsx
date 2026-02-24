"use client";

import React from "react";
import { motion } from "framer-motion";

const Education = () => {
    const education = [
        {
            university: "Maharaja Surajmal Institute of Technology",
            degree: "Bachelor of Technology (B.Tech) in CS",
            period: "Sept 2020 – May 2024",
            gpa: "8.6 / 10.0",
            details: "Coursework: Computer Architecture, Data Structure and Algorithms, DBMS, Operating Systems, etc."
        },
        {
            university: "PUSA Institute of Technology",
            degree: "Diploma in Mechanical Engineering",
            period: "Aug 2018 – Jun 2020",
            gpa: "First Class",
            details: "Graduated with a strong foundation in core engineering principles and systems."
        }
    ];

    return (
        <section className="mb-24" id="education">
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-end gap-6 mb-12"
            >
                <h2 className="brutalist-header text-[clamp(4rem,10vw,8rem)]">EDUCATION</h2>
                <span className="pill-badge mb-6 h-8 w-12 !text-sm">04</span>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {education.map((edu, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.2 }}
                        className="content-card p-10 md:p-14 group relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-brand/5 blur-[80px] rounded-full group-hover:bg-brand/10 transition-colors duration-700" />

                        <p className="text-brand font-black text-xs mb-6 uppercase tracking-[0.3em] bg-brand/10 w-fit px-3 py-1 rounded-sm italic">
                            {edu.period}
                        </p>
                        <h3 className="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter mb-4 group-hover:text-brand transition-colors duration-500 leading-[0.9]">
                            {edu.university}
                        </h3>
                        <p className="text-white/80 font-bold text-lg mb-8 uppercase tracking-wide border-l-2 border-white/10 pl-4">
                            {edu.degree}
                        </p>

                        <div className="flex flex-col gap-6">
                            <p className="text-white/40 text-sm font-medium leading-relaxed max-w-sm">
                                {edu.details}
                            </p>
                            <div className="inline-flex items-center gap-3">
                                <span className="text-[10px] font-black text-white/30 uppercase tracking-widest">Performance</span>
                                <span className="text-brand font-mono font-black text-sm border-b-2 border-brand/20 pb-0.5">{edu.gpa}</span>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Education;
