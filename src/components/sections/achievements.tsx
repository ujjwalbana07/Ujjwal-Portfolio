"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Trophy, Sparkles, ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { SectionWrapper } from "@/components/ui/section-wrapper";

export function Achievements() {
    return (
        <SectionWrapper id="achievements" className="py-20">
            <div className="flex flex-col items-center mb-16 space-y-4">
                <Badge variant="outline" className="text-amber-400 border-amber-400/20 bg-amber-400/5 uppercase tracking-widest text-[10px] py-1 px-3">
                    Recognition
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold font-outfit text-white text-center">
                    Achievements & <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">Awards</span>.
                </h2>
                <p className="text-muted-foreground text-center max-w-2xl">
                    Competitive wins and recognition that validate technical excellence.
                </p>
            </div>

            <div className="max-w-4xl mx-auto">
                {portfolioData.achievements.map((achievement, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30, scale: 0.98 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="group relative rounded-3xl overflow-hidden border border-white/10 bg-white/[0.03] hover:border-amber-400/40 transition-all duration-500"
                    >
                        {/* Banner Image */}
                        <div className="relative h-56 md:h-72 w-full overflow-hidden">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={achievement.image}
                                alt={achievement.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            {/* Overlay gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/60 to-transparent" />

                            {/* Rank Badge - positioned on the image */}
                            <div className="absolute top-5 right-5 z-20">
                                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-amber-400/20 border border-amber-400/30 backdrop-blur-md">
                                    <Trophy className="w-4 h-4 text-amber-400" />
                                    <span className="text-xs font-bold text-amber-300 uppercase tracking-wider">#1 Ranked</span>
                                </div>
                            </div>

                            {/* Sparkle decorations */}
                            <div className="absolute top-4 left-4 z-20">
                                <Sparkles className="w-6 h-6 text-amber-400/60 animate-pulse" />
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-8 md:p-10 space-y-4 relative">
                            {/* Subtle golden glow accent */}
                            <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-60 h-40 bg-amber-400/10 rounded-full blur-[80px] pointer-events-none" />

                            <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-amber-300 transition-colors relative z-10">
                                {achievement.title}
                            </h3>

                            <p className="text-primary/90 font-medium text-sm relative z-10">
                                {achievement.hook}
                            </p>

                            <p className="text-muted-foreground leading-relaxed relative z-10">
                                {achievement.description}
                            </p>

                            {/* Highlight line */}
                            <div className="flex items-start gap-3 p-4 rounded-xl bg-amber-400/5 border border-amber-400/10 relative z-10">
                                <Trophy className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                                <p className="text-sm text-amber-200/80 font-medium leading-snug">
                                    {achievement.highlight}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
}
