"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Users, Building2 } from "lucide-react";
import { cn } from "@/lib/utils";

export function Leadership() {
    return (
        <section id="leadership" className="py-24 relative overflow-hidden">
            <div className="container px-4 md:px-6 mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400 mb-4 tracking-tight flex justify-center items-center gap-3">
                        <Users className="w-10 h-10 text-primary" />
                        Leadership Experience
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                        Driving impact through initiative, coordination, and community building.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {portfolioData.leadership.map((role, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="group relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 hover:border-primary/50 transition-all duration-300 flex flex-col h-full"
                        >
                            {/* Image Section */}
                            <div className="relative h-64 overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent z-10 opacity-60" />
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={role.image}
                                    alt={role.organization}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute bottom-4 left-4 z-20">
                                    <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-purple-300 transition-colors">
                                        {role.organization}
                                    </h3>
                                    <p className="text-primary-foreground/80 font-medium flex items-center gap-2">
                                        <Building2 className="w-4 h-4" />
                                        {role.role}
                                    </p>
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="p-8 flex-1 bg-gradient-to-b from-transparent to-black/20">
                                <p className="text-muted-foreground leading-relaxed">
                                    {role.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
