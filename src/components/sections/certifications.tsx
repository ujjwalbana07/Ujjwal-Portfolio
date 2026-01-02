"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Award, ExternalLink, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

export function Certifications() {
    return (
        <section id="certifications" className="py-24 relative overflow-hidden">
            {/* Background Decorative Element */}
            <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px] -z-10 pointer-events-none" />

            <div className="container px-4 md:px-6 mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 mb-4 tracking-tight flex justify-center items-center gap-3">
                        <Award className="w-10 h-10 text-blue-400" />
                        Certifications
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                        Validated expertise in Data Analytics, Database Management, and AI.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {portfolioData.certifications.map((cert, index) => (
                        <CertificationCard key={index} cert={cert} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function CertificationCard({ cert, index }: { cert: any, index: number }) {
    return (
        <a
            href={cert.link}
            target="_blank"
            className="block group h-[400px] perspective-1000"
        >
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative w-full h-full bg-black/40 border border-white/10 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-colors duration-500 flex flex-col"
            >
                {/* Visual Header */}
                <div className="h-2 bg-gradient-to-r from-blue-500 to-purple-500 w-full" />

                <div className="p-8 flex-1 flex flex-col items-center text-center relative z-20 transition-all duration-300 group-hover:-translate-y-2">
                    <div className="w-24 h-24 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6 shadow-lg overflow-hidden relative">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src={cert.image}
                            alt={cert.issuer}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                        {cert.title}
                    </h3>
                    <p className="text-sm font-mono text-muted-foreground mb-4 uppercase tracking-wider">
                        Issued by {cert.issuer}
                    </p>

                    <div className="mt-auto opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0 flex items-center gap-2 text-purple-400 text-sm font-bold">
                        Verify Credential <ExternalLink className="w-4 h-4" />
                    </div>
                </div>

                {/* Hover Reveal Overlay (Knowledge Gained) */}
                <div className="absolute inset-0 bg-[#0f172a] opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-300 z-30 flex flex-col p-8 transform translate-y-4 group-hover:translate-y-0">
                    <h4 className="text-sm font-bold uppercase tracking-widest text-purple-400 mb-6 border-b border-white/10 pb-2">
                        Knowledge Gained
                    </h4>
                    <ul className="space-y-3 flex-1 overflow-y-auto">
                        {cert.knowledge.map((item: string, i: number) => (
                            <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                                <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                                <span className="leading-snug">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </motion.div>
        </a>
    )
}
