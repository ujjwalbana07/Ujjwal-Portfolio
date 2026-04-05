"use client";

import { portfolioData } from "@/data/portfolio";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";

export function Projects() {
    return (
        <SectionWrapper id="projects" className="py-20">
            <div className="flex flex-col items-center mb-16 space-y-4">
                <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 uppercase tracking-widest text-[10px] py-1 px-3">
                    Selected Work
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold font-outfit text-white text-center">
                    Project <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">Hall of Fame</span>.
                </h2>
                <p className="text-muted-foreground text-center max-w-2xl">
                    A collection of systems and applications engineered for performance and scalability.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {portfolioData.projects.map((project, index) => (
                    <div
                        key={index}
                        className="group flex flex-col bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:-translate-y-2"
                    >
                        {/* Image Section (Top) */}
                        <div className="relative h-48 w-full overflow-hidden bg-black/20">
                            {project.image ? (
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            ) : (
                                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-purple-500/10 flex items-center justify-center">
                                    <div className="w-20 h-20 bg-primary/30 rounded-full blur-xl" />
                                </div>
                            )}
                            {/* Overlay for subtle depth */}
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-60" />
                        </div>

                        {/* Content Section (Bottom) */}
                        <div className="flex flex-col flex-1 p-6 space-y-4">
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-primary transition-colors">{project.title}</h3>
                                <p className="text-xs font-semibold uppercase tracking-wider text-primary/80">{project.subtitle}</p>
                            </div>

                            <p className="text-muted-foreground text-sm leading-relaxed line-clamp-4 flex-1">
                                {project.description}
                            </p>

                            <div className="space-y-4 pt-4 border-t border-white/5">
                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-2">
                                    {project.techIds.slice(0, 3).map((tech) => (
                                        <span key={tech} className="text-[10px] font-medium text-white/70 bg-white/10 px-2 py-1 rounded-md">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Link */}
                                <a
                                    href={project.link || "#"}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-primary transition-colors"
                                >
                                    View Project <ArrowUpRight className="w-4 h-4" />
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </SectionWrapper>
    );
}
