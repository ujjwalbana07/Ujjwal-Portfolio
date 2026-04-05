"use client";

import { portfolioData } from "@/data/portfolio";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Github, Linkedin, Mail } from "lucide-react";

export function Contact() {
    return (
        <SectionWrapper id="contact" className="py-24 text-center">
            <h2 className="text-4xl md:text-6xl font-bold font-outfit text-foreground mb-6">
                Let&apos;s Connect
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
                I&apos;m always open to discussing system analysis, enterprise solutions, or potential opportunities.
            </p>

            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                <a
                    href={portfolioData.contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-8 py-4 bg-[#0077b5] text-white rounded-full font-medium hover:opacity-90 transition-opacity w-full md:w-auto justify-center"
                >
                    <Linkedin className="w-5 h-5" />
                    LinkedIn
                </a>
                <a
                    href={portfolioData.contact.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-8 py-4 bg-[#333] text-white rounded-full font-medium hover:opacity-90 transition-opacity w-full md:w-auto justify-center"
                >
                    <Github className="w-5 h-5" />
                    GitHub
                </a>
                <a
                    href={portfolioData.contact.email}
                    className="flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-opacity w-full md:w-auto justify-center"
                >
                    <Mail className="w-5 h-5" />
                    Email Me
                </a>
            </div>
        </SectionWrapper>
    );
}
