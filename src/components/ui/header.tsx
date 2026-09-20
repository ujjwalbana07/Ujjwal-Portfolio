"use client";

import { useState, useEffect, useRef } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { portfolioData } from "@/data/portfolio";

const links = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#featured" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
];

export function Header() {
    const [activeSection, setActiveSection] = useState("");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const menuButton = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) setActiveSection(entry.target.id);
            });
        }, { rootMargin: "-20% 0px -60% 0px" });
        document.querySelectorAll("section[id]").forEach((section) => observer.observe(section));
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isMobileMenuOpen) return;
        const closeOnEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setIsMobileMenuOpen(false);
                menuButton.current?.focus();
            }
        };
        const desktop = window.matchMedia("(min-width: 1024px)");
        const closeOnDesktop = () => { if (desktop.matches) setIsMobileMenuOpen(false); };
        document.addEventListener("keydown", closeOnEscape);
        desktop.addEventListener("change", closeOnDesktop);
        return () => {
            document.removeEventListener("keydown", closeOnEscape);
            desktop.removeEventListener("change", closeOnDesktop);
        };
    }, [isMobileMenuOpen]);

    const isActive = (href: string) => activeSection === href.slice(1) || (href === "#featured" && activeSection === "projects");

    return (
        <header className="fixed top-4 sm:top-6 left-0 right-0 z-50 px-3 sm:px-6">
            <div className="mx-auto max-w-6xl rounded-[1.75rem] border border-white/15 bg-[#111018]/90 backdrop-blur-2xl shadow-[0_12px_48px_rgba(0,0,0,0.35)]">
                <div className="flex items-center justify-between gap-3 px-3 sm:px-5 py-3">
                    <a href="#hero" className="flex items-center gap-3 shrink-0" onClick={() => setIsMobileMenuOpen(false)} aria-label="Ujjwal Bana — back to top">
                        <span aria-hidden="true" className="w-10 h-10 rounded-2xl bg-gradient-to-br from-violet-500 to-indigo-600 ring-1 ring-white/20 flex items-center justify-center text-white font-bold text-sm">UB</span>
                        <span className="hidden sm:inline font-outfit font-semibold text-base tracking-tight text-white">{portfolioData.hero.name}</span>
                    </a>
                    <nav aria-label="Main navigation" className="hidden lg:flex items-center gap-1 rounded-full border border-white/5 bg-black/20 p-1">
                        {links.map((link) => (
                            <a key={link.href} href={link.href} aria-current={isActive(link.href) ? "location" : undefined}
                                className={cn("px-4 py-2 text-sm font-medium rounded-full transition-colors", isActive(link.href) ? "bg-violet-400/15 text-violet-200 shadow-[inset_0_0_0_1px_rgba(167,139,250,0.2)]" : "text-slate-300 hover:text-white hover:bg-white/5")}>
                                {link.name}
                            </a>
                        ))}
                    </nav>
                    <div className="flex items-center gap-2">
                        <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="group inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-violet-600 px-5 py-2.5 text-sm font-semibold text-white ring-1 ring-violet-400/40 shadow-[0_4px_20px_rgba(124,58,237,0.25)] transition-colors hover:bg-violet-500">
                            Hire Me
                            <ArrowUpRight aria-hidden="true" className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </a>
                        <button ref={menuButton} type="button" className="lg:hidden flex h-11 w-11 items-center justify-center border border-white/10 bg-white/5 text-white rounded-full hover:bg-white/10 transition-colors" aria-label={isMobileMenuOpen ? "Close navigation" : "Open navigation"} aria-expanded={isMobileMenuOpen} aria-controls="mobile-navigation" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                            {isMobileMenuOpen ? <X aria-hidden="true" className="w-5 h-5" /> : <Menu aria-hidden="true" className="w-5 h-5" />}
                        </button>
                    </div>
                </div>
                <nav id="mobile-navigation" aria-label="Mobile navigation" hidden={!isMobileMenuOpen} className="lg:hidden border-t border-white/10 px-3 py-3 max-h-[70dvh] overflow-y-auto">
                    {links.map((link) => (
                        <a key={link.href} href={link.href} aria-current={isActive(link.href) ? "location" : undefined} onClick={() => setIsMobileMenuOpen(false)}
                            className={cn("block rounded-xl px-4 py-3 text-base font-medium", isActive(link.href) ? "bg-primary/20 text-white" : "text-muted-foreground hover:text-white hover:bg-white/5")}>
                            {link.name}
                        </a>
                    ))}
                </nav>
            </div>
        </header>
    );
}
