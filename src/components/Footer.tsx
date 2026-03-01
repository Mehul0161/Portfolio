"use client";

import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
    return (
        <footer className="mt-24 md:mt-40 border-t border-white/5 pt-12 md:pt-20 pb-24 md:pb-32 overflow-hidden">
            <div className="flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 0.1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5 }}
                    className="relative"
                >
                    <h2 className="brutalist-header text-[clamp(3.5rem,25vw,18rem)] text-center leading-[0.7] select-none tracking-[-0.05em]">
                        MEHUL
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap justify-center gap-6 md:gap-16 text-[10px] md:text-sm font-black tracking-[0.3em] md:tracking-[0.4em] uppercase relative z-10 mt-8 md:mt-12 px-4"
                >
                    {[
                        { label: "GITHUB", href: "https://github.com/Mehul0161" },
                        { label: "LINKEDIN", href: "https://linkedin.com/in/mehul-gupta-605698269/" },
                        { label: "TWITTER", href: "#" },
                        { label: "RESUME", href: "https://drive.google.com/file/d/1NiMxhmt9TKJtjAREjS2UDJ-o7VcA4Ffj/view?usp=sharing" }
                    ].map((link) => (
                        <a
                            key={link.label}
                            className="hover:text-brand transition-colors text-white/50 hover:text-white relative group"
                            href={link.href}
                            target={link.label === "RESUME" || link.href.startsWith("http") ? "_blank" : undefined}
                            rel={link.label === "RESUME" || link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        >
                            {link.label}
                            <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-brand transition-all duration-300 group-hover:w-full" />
                        </a>
                    ))}
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;
