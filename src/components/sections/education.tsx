"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { GraduationCap, Calendar, MapPin } from "lucide-react";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export function Education() {
    return (
        <SectionWrapper id="education" className="py-24 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-1/4 -right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 -left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
                <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400 mb-4 tracking-tight flex justify-center items-center gap-3">
                    <GraduationCap className="w-10 h-10 text-primary" />
                    Education
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                    Academic background and qualifications.
                </p>
            </motion.div>

            <div className="max-w-4xl mx-auto space-y-6">
                {portfolioData.education.map((edu, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <Card className="p-8 relative overflow-hidden group border-white/10 bg-white/5 backdrop-blur-sm hover:border-primary/30 transition-all duration-300">
                            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                                <div className="space-y-4">
                                    <div className="space-y-1">
                                        <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                                            {edu.institution}
                                        </h3>
                                        <div className="text-lg font-medium text-purple-300/90">
                                            {edu.degree}
                                        </div>
                                    </div>

                                    {edu.details && (
                                        <p className="text-muted-foreground max-w-xl">
                                            {edu.details}
                                        </p>
                                    )}
                                </div>

                                <div className="flex flex-col gap-2 min-w-fit md:text-right">
                                    <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-foreground/80 flex items-center gap-2 md:justify-end w-fit md:w-full">
                                        <Calendar className="w-4 h-4 text-primary" />
                                        {edu.period}
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
}
