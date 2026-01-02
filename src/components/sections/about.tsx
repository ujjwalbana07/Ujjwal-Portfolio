"use client";

import { portfolioData } from "@/data/portfolio";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Card } from "@/components/ui/card";
import { BrainCircuit, Database, FileBarChart2 } from "lucide-react";
import Image from "next/image";

export function About() {
    const icons = [BrainCircuit, Database, FileBarChart2];

    return (
        <SectionWrapper id="about" className="py-20 bg-secondary/20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Left Column: Text Content */}
                <div className="space-y-8 relative z-20">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold font-outfit text-white tracking-tight mb-6">
                            {portfolioData.about.title}
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            {portfolioData.about.description}
                        </p>
                    </div>
                </div>

                {/* Right Column: Image */}
                <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
                    <img
                        src="/tamu_first_day.jpeg"
                        alt="Texas A&M University"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute bottom-6 left-6 z-20">
                        <p className="text-white/80 text-sm font-medium uppercase tracking-widest mb-1">Journey</p>
                        <p className="text-white font-bold text-xl">Aggieland Beginnings</p>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}
