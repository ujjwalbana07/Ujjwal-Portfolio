"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import {
    Terminal,
    Monitor,
    Server,
    Database,
    BarChart3,
    Cloud,
    Building2,
    TrendingUp
} from "lucide-react";
import { cn } from "@/lib/utils";

const iconMap: Record<string, any> = {
    "Terminal": Terminal,
    "Monitor": Monitor,
    "Server": Server,
    "Database": Database,
    "BarChart3": BarChart3,
    "Cloud": Cloud,
    "Building2": Building2,
    "TrendingUp": TrendingUp
};

export function Skills() {
    return (
        <section id="skills" className="py-24 relative overflow-hidden">
            <div className="container px-4 md:px-6 mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 mb-4 tracking-tight">
                        Technical Arsenal
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                        A comprehensive breakdown of my expertise across the full stack of enterprise development.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {portfolioData.skillCategories.map((category, index) => {
                        const Icon = iconMap[category.icon] || Terminal;
                        return (
                            <motion.div
                                key={category.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group relative p-6 rounded-3xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm overflow-hidden"
                            >
                                <div className="absolute -top-4 -right-4 p-4 opacity-10 group-hover:opacity-20 transition-all duration-500 transform rotate-12 group-hover:rotate-0 group-hover:scale-110 grayscale group-hover:grayscale-0">
                                    <Icon className="w-32 h-32 text-purple-500" />
                                </div>

                                <div className="relative z-10">
                                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <Icon className="w-6 h-6 text-purple-400" />
                                    </div>

                                    <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-purple-400 transition-colors">
                                        {category.title}
                                    </h3>

                                    <ul className="space-y-2">
                                        {category.skills.map((skill) => (
                                            <li key={skill} className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-white/80 transition-colors">
                                                <span className="w-1.5 h-1.5 rounded-full bg-purple-500/50 group-hover:bg-purple-400 transition-colors" />
                                                {skill}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
