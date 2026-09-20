"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, ExternalLink, Github, CheckCircle2 } from "lucide-react";

export function FeaturedProjects() {
    return (
        <SectionWrapper id="featured" className="py-20">
            <div className="flex flex-col items-center mb-16 space-y-4">
                <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 uppercase tracking-widest text-[10px] py-1 px-3">
                    Featured Work
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold font-outfit text-white text-center">
                    Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">Projects</span>
                </h2>
                <p className="text-muted-foreground text-center max-w-2xl">
                    Projects spanning distributed systems, agentic AI, and decision-support applications.
                </p>
            </div>

            <div className="flex flex-col gap-12">
                {portfolioData.featuredProjects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.15 }}
                        className="group relative bg-white/[0.03] border border-white/10 rounded-3xl overflow-hidden hover:border-primary/40 transition-all duration-500"
                    >
                        {/* Top accent bar */}
                        <div className="h-1 bg-gradient-to-r from-primary via-purple-400 to-blue-400 w-full" />

                        <div className="p-8 md:p-10 space-y-6">
                            {/* Header */}
                            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                                <div className="space-y-2">
                                    <div className="flex flex-wrap items-center gap-3">
                                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-primary/30">
                                            {project.title.charAt(0)}
                                        </div>
                                        <div>
                                            <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-primary transition-colors">
                                                {project.title}
                                            </h3>
                                            <p className="text-xs font-semibold uppercase tracking-wider text-primary/70">
                                                {project.subtitle}
                                            </p>
                                        </div>
                                    </div>
                                    <p className="text-sm text-muted-foreground/80 italic pl-[52px]">
                                        {project.tagline}
                                    </p>
                                </div>

                                {/* Quick Links - Desktop */}
                                <div className="hidden md:flex items-center gap-3 shrink-0">
                                    <a
                                        href={project.liveDemo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-4 py-2 text-xs font-bold text-white bg-primary hover:bg-primary/90 rounded-full transition-all shadow-[0_0_20px_rgba(var(--primary),0.3)] hover:shadow-[0_0_30px_rgba(var(--primary),0.5)] hover:-translate-y-0.5"
                                    >
                                        <ExternalLink className="w-3.5 h-3.5" /> Live Demo
                                    </a>
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-4 py-2 text-xs font-bold text-white bg-white/10 border border-white/10 hover:bg-white/15 rounded-full transition-all hover:-translate-y-0.5"
                                    >
                                        <Github className="w-3.5 h-3.5" /> GitHub
                                    </a>
                                </div>
                            </div>

                            {/* Description */}
                            <p className="text-muted-foreground leading-relaxed max-w-4xl">
                                {project.description}
                            </p>

                            {/* Highlights */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {project.highlights.map((highlight: string, i: number) => (
                                    <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/5">
                                        <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                                        <span className="text-sm text-slate-300 leading-snug">{highlight}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Footer: Tech + Links */}
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pt-4 border-t border-white/5">
                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-2">
                                    {project.techIds.map((tech: string) => (
                                        <span key={tech} className="text-[10px] font-medium text-white/60 bg-white/[0.07] px-3 py-1.5 rounded-lg border border-white/5">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Mobile links + View Project CTA */}
                                <div className="flex flex-wrap items-center gap-3">
                                    {/* Mobile-only quick links */}
                                    <a
                                        href={project.liveDemo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="md:hidden flex items-center gap-2 px-4 py-2 text-xs font-bold text-white bg-primary hover:bg-primary/90 rounded-full transition-all shadow-[0_0_20px_rgba(var(--primary),0.3)]"
                                    >
                                        <ExternalLink className="w-3.5 h-3.5" /> Live Demo
                                    </a>
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="md:hidden flex items-center gap-2 px-4 py-2 text-xs font-bold text-white bg-white/10 border border-white/10 hover:bg-white/15 rounded-full transition-all"
                                    >
                                        <Github className="w-3.5 h-3.5" /> GitHub
                                    </a>
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-primary transition-colors"
                                    >
                                        View Project <ArrowUpRight className="w-4 h-4" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
}
