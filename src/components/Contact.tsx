"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, Send } from "lucide-react";

/**
 * Contact section - Clean and focused.
 */
const Contact = () => {
    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto glass p-12 md:p-16 rounded-[3rem] border-white/10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter">
                            Let's Build the <span className="text-blue-500">Future</span> Together.
                        </h2>
                        <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto">
                            Whether you have a question, a project idea, or just want to connect about the latest in AI — I'm always open to talking.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-4 mb-12">
                            <a
                                href="mailto:mehul.gupta.56614@gmail.com"
                                className="flex items-center justify-center gap-4 p-6 glass rounded-2xl hover:bg-white/10 transition-all border border-white/5 group"
                            >
                                <div className="p-3 bg-blue-500/20 rounded-xl group-hover:scale-110 transition-transform">
                                    <Mail className="text-blue-400" />
                                </div>
                                <div className="text-left">
                                    <div className="text-xs text-white/40 font-bold uppercase tracking-widest">Email Me</div>
                                    <div className="font-bold">mehul.gupta.56614@gmail.com</div>
                                </div>
                            </a>
                            <a
                                href="tel:+919818762675"
                                className="flex items-center justify-center gap-4 p-6 glass rounded-2xl hover:bg-white/10 transition-all border border-white/5 group"
                            >
                                <div className="p-3 bg-purple-500/20 rounded-xl group-hover:scale-110 transition-transform">
                                    <Phone className="text-purple-400" />
                                </div>
                                <div className="text-left">
                                    <div className="text-xs text-white/40 font-bold uppercase tracking-widest">Call Me</div>
                                    <div className="font-bold">+91 98187 62675</div>
                                </div>
                            </a>
                        </div>

                        <div className="flex justify-center gap-8">
                            <a href="https://linkedin.com/in/mehul-gupta-605698269/" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-blue-400 transition-colors">
                                <Linkedin size={32} />
                            </a>
                            <a href="https://github.com/Mehul0161" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors">
                                <Github size={32} />
                            </a>
                        </div>

                    </motion.div>
                </div>
            </div>

            {/* Background Decor */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-64 h-64 bg-purple-500/10 blur-[100px] rounded-full pointer-events-none" />
        </section>
    );
};

export default Contact;
