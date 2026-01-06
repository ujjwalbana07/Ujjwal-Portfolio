"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { portfolioData } from "@/data/portfolio";

export function Header() {
    const [activeSection, setActiveSection] = useState("");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const links = [
        { name: "About", href: "#about" },
        { name: "Experience", href: "#experience" },
        { name: "Projects", href: "#projects" },
        { name: "Certifications", href: "#certifications" },
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

    // Lock body scroll when menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isMobileMenuOpen]);

    return (
        <>
            <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
                <div className={cn(
                    "flex items-center justify-between px-6 py-3 rounded-full transition-all duration-300",
                    isMobileMenuOpen
                        ? "bg-black/80 backdrop-blur-xl border-white/10 w-full max-w-5xl rounded-2xl"
                        : "bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/20 w-full max-w-5xl"
                )}>
                    <a href="#" className="flex items-center gap-3 group z-50" onClick={() => setIsMobileMenuOpen(false)}>
                        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-primary to-purple-400 flex items-center justify-center text-white font-bold text-xs ring-2 ring-white/10 group-hover:scale-105 transition-transform">
                            UB
                        </div>
                        <span className="font-outfit font-semibold text-sm tracking-wide text-foreground/90 group-hover:text-white transition-colors">
                            {portfolioData.hero.name}
                        </span>
                    </a>

                    {/* Desktop Navigation */}
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

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden p-2 text-muted-foreground hover:text-white z-50 relative"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-40 bg-black/95 backdrop-blur-3xl pt-28 px-6 md:hidden"
                    >
                        <nav className="flex flex-col items-center gap-6">
                            {links.map((link, idx) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.05 }}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={cn(
                                        "text-2xl font-bold transition-colors",
                                        activeSection === link.href.substring(1)
                                            ? "text-primary"
                                            : "text-muted-foreground hover:text-white"
                                    )}
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                            <motion.a
                                href="#contact"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.4 }}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="mt-4 px-8 py-3 text-lg font-bold text-white bg-primary rounded-full shadow-[0_0_20px_rgba(var(--primary),0.3)]"
                            >
                                Hire Me
                            </motion.a>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
