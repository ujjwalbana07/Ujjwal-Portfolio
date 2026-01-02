"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { ArrowRight, MousePointer2 } from "lucide-react";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Badge } from "@/components/ui/badge";

export function Hero() {
    return (
        <SectionWrapper id="hero" className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden pt-32 pb-20">
            {/* Ambient Background Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] -z-10 animate-pulse-slow" />
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] -z-10" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px] -z-10" />

            <div className="max-w-4xl mx-auto text-center z-10 space-y-8">
                {/* Avatar with Status Badge */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, type: "spring" }}
                    className="relative inline-block mb-4"
                >
                    <div className="w-40 h-40 md:w-48 md:h-48 rounded-full p-1 bg-gradient-to-tr from-primary to-purple-400 mx-auto shadow-2xl shadow-primary/30">
                        <div className="w-full h-full rounded-full overflow-hidden border-4 border-background bg-background">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src="/Main_photo.jpg"
                                alt="Ujjwal Bana"
                                className="w-full h-full object-cover object-top scale-110"
                            />
                        </div>
                    </div>
                </motion.div>

                {/* Introduction & Title */}
                <div className="space-y-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-bold font-outfit tracking-tight text-white mb-2">
                            {portfolioData.hero.name}
                        </h1>
                        <p className="text-xl md:text-2xl text-muted-foreground/80 font-light">
                            {portfolioData.hero.title}
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex justify-center"
                    >
                        <Badge variant="outline" className="text-sm py-1.5 px-4 bg-white/5 border-white/10 text-primary-foreground backdrop-blur-md">
                            <span className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse" />
                            Available for new opportunities
                        </Badge>
                    </motion.div>

                    <motion.p
                        className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        {portfolioData.hero.tagline}
                    </motion.p>
                </div>

                {/* CTAs */}
                <motion.div
                    className="flex flex-wrap justify-center gap-4 pt-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                >
                    <a href="#projects" className="group flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-all shadow-[0_0_30px_rgba(var(--primary),0.4)] hover:shadow-[0_0_50px_rgba(var(--primary),0.6)] hover:-translate-y-1">
                        {portfolioData.hero.cta}
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a href="#contact" className="group flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/10 text-white rounded-full font-medium hover:bg-white/10 transition-all backdrop-blur-md hover:-translate-y-1">
                        Contact Me
                    </a>
                </motion.div>
            </div>
        </SectionWrapper>
    );
}
