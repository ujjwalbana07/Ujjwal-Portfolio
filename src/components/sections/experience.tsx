"use client";

import { portfolioData } from "@/data/portfolio";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";

export function Experience() {
    return (
        <SectionWrapper id="experience" className="py-24 relative">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[120px] -z-10" />

            <div className="flex flex-col md:flex-row gap-8 md:gap-16">
                {/* Sidebar / Sticky Title area */}
                <div className="md:w-1/3">
                    <div className="sticky top-32">
                        <h2 className="text-4xl font-bold font-outfit text-white mb-6 flex items-center gap-3">
                            <Briefcase className="w-8 h-8 text-primary" />
                            My Journey
                        </h2>
                        <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                            Combining technical expertise with business strategy to build scalable systems.
                        </p>

                        {/* Oracle Memory Card */}
                        <div className="rounded-2xl overflow-hidden border border-white/10 relative group">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10" />
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src="/oracle_last_day.jpeg"
                                alt="Oracle Days"
                                className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute bottom-4 left-4 z-20">
                                <span className="text-xs font-bold text-primary-foreground bg-primary/80 px-2 py-1 rounded mb-2 inline-block">Flashback</span>
                                <p className="text-white font-medium">Last Day at Oracle</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Timeline Content */}
                <div className="md:w-2/3 space-y-12">
                    {/* Experience Section */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold text-white mb-4">Experience</h3>
                        {portfolioData.experience.map((exp, index) => (
                            <div key={index} className="glass-card rounded-2xl p-8 hover:shadow-[0_0_30px_rgba(var(--primary),0.15)] transition-all relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl -mr-16 -mt-16 transition-all group-hover:bg-primary/20" />

                                <div className="flex flex-col sm:flex-row justify-between items-start mb-4 gap-2">
                                    <div>
                                        <h4 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{exp.company}</h4>
                                        <p className="text-lg font-medium text-purple-300">{exp.role}</p>
                                    </div>
                                    <Badge variant="outline" className="bg-white/5 border-white/10 text-xs py-1 px-3 text-muted-foreground whitespace-nowrap">
                                        {exp.period}
                                    </Badge>
                                </div>
                                <p className="text-muted-foreground mb-6 leading-relaxed">
                                    {exp.description}
                                </p>
                                <ul className="space-y-3 mb-6">
                                    {exp.highlights.map((highlight, idx) => (
                                        <li key={idx} className="flex items-start gap-3 text-sm text-foreground/80">
                                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 shadow-[0_0_8px_currentColor]" />
                                            {highlight}
                                        </li>
                                    ))}
                                </ul>

                                {/* Focus Areas */}
                                {exp.focusAreas && (
                                    <div className="space-y-3">
                                        <h5 className="text-xs font-bold uppercase tracking-widest text-primary/80">Focus Areas</h5>
                                        <div className="flex flex-wrap gap-2">
                                            {exp.focusAreas.map((area, idx) => (
                                                <Badge
                                                    key={idx}
                                                    variant="secondary"
                                                    className="rounded-full px-4 py-1.5 text-xs bg-white/5 border-white/5 text-muted-foreground hover:text-white hover:bg-white/10 transition-colors"
                                                >
                                                    {area}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Education Section */}


                    {/* Skills Section */}

                </div>
            </div>
        </SectionWrapper>
    );
}
