"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
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
        <header className="fixed top-4 left-0 right-0 z-50 px-4">
            <div className="mx-auto max-w-5xl rounded-2xl border border-white/10 bg-background/95 backdrop-blur-xl shadow-2xl shadow-black/20">
                <div className="flex items-center justify-between gap-4 px-5 py-3">
                    <a href="#hero" className="flex items-center gap-3 shrink-0" onClick={() => setIsMobileMenuOpen(false)} aria-label="Ujjwal Bana — back to top">
                        <span aria-hidden="true" className="w-8 h-8 rounded-full bg-gradient-to-tr from-primary to-purple-400 flex items-center justify-center text-white font-bold text-xs">UB</span>
                        <span className="font-outfit font-semibold text-sm text-white">{portfolioData.hero.name}</span>
                    </a>
                    <nav aria-label="Main navigation" className="hidden lg:flex items-center gap-1">
                        {links.map((link) => (
                            <a key={link.href} href={link.href} aria-current={isActive(link.href) ? "location" : undefined}
                                className={cn("px-4 py-2 text-sm font-medium rounded-full transition-colors", isActive(link.href) ? "bg-white/10 text-white" : "text-muted-foreground hover:text-white hover:bg-white/5")}>
                                {link.name}
                            </a>
                        ))}
                    </nav>
                    <button ref={menuButton} type="button" className="lg:hidden p-2 text-white rounded-lg" aria-label={isMobileMenuOpen ? "Close navigation" : "Open navigation"} aria-expanded={isMobileMenuOpen} aria-controls="mobile-navigation" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                        {isMobileMenuOpen ? <X aria-hidden="true" className="w-6 h-6" /> : <Menu aria-hidden="true" className="w-6 h-6" />}
                    </button>
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
