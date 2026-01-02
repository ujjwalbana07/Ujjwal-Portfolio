"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { portfolioData } from "@/data/portfolio";

export function Header() {
    const [activeSection, setActiveSection] = useState("");

    const links = [
        { name: "About", href: "#about" },
        { name: "Experience", href: "#experience" },
        { name: "Projects", href: "#projects" },
        { name: "Education", href: "#education" },
        { name: "Skills", href: "#skills" },
        { name: "Leadership", href: "#leadership" },
        { name: "Contact", href: "#contact" },
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                rootMargin: "-50% 0px -50% 0px", // Trigger when section is in middle of viewport
            }
        );

        const sections = document.querySelectorAll("section[id]");
        sections.forEach((section) => observer.observe(section));

        return () => sections.forEach((section) => observer.unobserve(section));
    }, []);

    return (
        <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
            <div className={cn(
                "flex items-center justify-between px-6 py-3 rounded-full transition-all duration-300",
                "bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/20",
                "w-full max-w-5xl"
            )}>
                <a href="#" className="flex items-center gap-3 group">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-primary to-purple-400 flex items-center justify-center text-white font-bold text-xs ring-2 ring-white/10 group-hover:scale-105 transition-transform">
                        UB
                    </div>
                    <span className="font-outfit font-semibold text-sm tracking-wide text-foreground/90 group-hover:text-white transition-colors">
                        {portfolioData.hero.name}
                    </span>
                </a>

                <nav className="hidden md:flex items-center gap-1">
                    {links.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className={cn(
                                "px-4 py-2 text-xs font-medium rounded-full transition-all",
                                activeSection === link.href.substring(1)
                                    ? "bg-white/10 text-white"
                                    : "text-muted-foreground hover:text-white hover:bg-white/5"
                            )}
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        className="ml-2 px-5 py-2 text-xs font-bold text-white bg-primary hover:bg-primary/90 rounded-full transition-all shadow-[0_0_20px_rgba(var(--primary),0.3)] hover:shadow-[0_0_30px_rgba(var(--primary),0.5)]"
                    >
                        Hire Me
                    </a>
                </nav>

                {/* Mobile Menu Icon Placeholder */}
                <button className="md:hidden p-2 text-muted-foreground hover:text-white">
                    <div className="space-y-1.5">
                        <span className="block w-5 h-0.5 bg-current rounded-full"></span>
                        <span className="block w-5 h-0.5 bg-current rounded-full"></span>
                    </div>
                </button>
            </div>
        </header>
    );
}
