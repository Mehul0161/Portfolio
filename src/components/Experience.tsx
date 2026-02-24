"use client";

import React from "react";
import { motion } from "framer-motion";

const Experience = () => {
    const experiences = [
        {
            company: "WriteCream AI",
            role: "Full Stack Web Developer",
            period: "January 2025 – Present",
            desc: "Built dynamic React.js frontend interfaces, improving user engagement by 25% across AI tools. Developed RESTful APIs with Node.js/Express.js and integrated MongoDB to handle 5000+ concurrent users. Optimized AI content workflows, reducing generation time by 30%, and collaborated with design teams to boost satisfaction scores."
        },
        {
            company: "DesignsLab",
            role: "Full Stack Web Developer, Intern",
            period: "June 2023 – Sept 2023",
            desc: "Developed a Student Result Management frontend in React.js adopted by 200+ users. Architected backend systems with Node.js, Express, and MySQL; implemented secure authentication and data linking with zero downtime during peak usage."
        },
        {
            company: "Internshala",
            role: "Web Development Trainee",
            period: "June 2022 – Aug 2022",
            desc: "Engineered a live Weather Application frontend in React.js. Created robust backend APIs using Node.js and Express with MySQL integration for secure authentication and historical data management."
        }
    ];

    return (
        <section className="mb-24" id="experience">
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-end gap-6 mb-12"
            >
                <h2 className="brutalist-header text-[clamp(4rem,10vw,8rem)]">EXPERIENCE</h2>
                <span className="pill-badge mb-6 h-8 w-12 !text-sm">01</span>
            </motion.div>

            <div className="content-card p-10 md:p-16 border-white/5 relative overflow-hidden shadow-inner">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand/5 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />

                <div className="vertical-timeline space-y-20 relative z-10">
                    {experiences.map((exp, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: i * 0.2 }}
                            className="relative"
                        >
                            {/* Dot with Pulse Effect */}
                            <div className="timeline-dot group-hover:scale-125 transition-transform">
                                <div className="absolute inset-0 bg-brand rounded-full animate-ping opacity-30" />
                            </div>

                            <div className="group">
                                <p className="text-[10px] font-black tracking-[0.3em] text-brand/60 mb-2 uppercase italic">
                                    {exp.period}
                                </p>
                                <h4 className="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter mb-2 group-hover:text-brand transition-colors duration-500">
                                    {exp.company}
                                </h4>
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="h-[2px] w-12 bg-brand" />
                                    <p className="text-brand font-black text-xs uppercase tracking-widest">{exp.role}</p>
                                </div>
                                <p className="text-base md:text-xl leading-relaxed max-w-2xl text-white/50 font-medium group-hover:text-white/80 transition-colors duration-500">
                                    {exp.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
