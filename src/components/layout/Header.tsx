"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Container } from "./Container";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Menu, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { platforms } from "@/data/platforms";

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const [isPlatformsOpen, setIsPlatformsOpen] = useState(false);
    const [isMobilePlatformsOpen, setIsMobilePlatformsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleMouseEnter = () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        setIsPlatformsOpen(true);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setIsPlatformsOpen(false);
        }, 150);
    };

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled
                    ? "bg-background/80 backdrop-blur-xl border-b border-border shadow-sm"
                    : "bg-transparent"
            )}
        >
            <Container>
                <nav className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2.5 group">
                        <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-primary-500 text-white font-black text-sm tracking-tighter transition-transform group-hover:scale-105">
                            CDS
                        </div>
                        <span className="text-lg font-bold tracking-tight leading-tight hidden sm:inline" style={{ color: "oklch(0.20 0.05 250)" }}>
                            Cheap Digital<br /><span style={{ color: "oklch(0.63 0.18 250)" }}>Subscriptions</span>
                        </span>
                        <span className="text-lg font-bold tracking-tight sm:hidden" style={{ color: "oklch(0.20 0.05 250)" }}>
                            <span style={{ color: "oklch(0.63 0.18 250)" }}>CDS</span>
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
                        {/* Home */}
                        <Link
                            href="/"
                            className="text-sm font-medium transition-colors hover:text-primary-500"
                            style={{ color: "oklch(0.45 0.012 250)" }}
                        >
                            Home
                        </Link>

                        {/* Platforms Dropdown */}
                        <div
                            ref={dropdownRef}
                            className="relative"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <button
                                className="flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary-500"
                                style={{ color: "oklch(0.45 0.012 250)" }}
                                onClick={() => setIsPlatformsOpen(!isPlatformsOpen)}
                            >
                                Platforms
                                <ChevronDown className={cn(
                                    "w-3.5 h-3.5 transition-transform duration-200",
                                    isPlatformsOpen && "rotate-180"
                                )} />
                            </button>

                            {/* Dropdown Panel */}
                            <div
                                className={cn(
                                    "absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[340px] rounded-xl border border-neutral-200/60 bg-white/95 backdrop-blur-xl p-3 shadow-[0_8px_30px_oklch(0.63_0.18_250_/_0.12),_0_2px_8px_oklch(0.63_0.18_250_/_0.06)] transition-all duration-200 origin-top",
                                    isPlatformsOpen
                                        ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
                                        : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                                )}
                            >
                                <div className="grid grid-cols-2 gap-1">
                                    {platforms.map((platform) => (
                                        <Link
                                            key={platform.slug}
                                            href={`/subscriptions/${platform.slug}`}
                                            onClick={() => setIsPlatformsOpen(false)}
                                            className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg transition-all duration-150 hover:bg-primary-50 group/item"
                                        >
                                            <span
                                                className="flex items-center justify-center w-8 h-8 rounded-lg text-[11px] font-bold text-white shrink-0"
                                                style={{ backgroundColor: platform.color }}
                                            >
                                                {platform.name.slice(0, 2).toUpperCase()}
                                            </span>
                                            <div className="min-w-0">
                                                <span className="text-sm font-medium block truncate group-hover/item:text-primary-600" style={{ color: "oklch(0.20 0.05 250)" }}>
                                                    {platform.name}
                                                </span>
                                                <span className="text-[11px] font-medium" style={{ color: "oklch(0.63 0.18 250)" }}>
                                                    Save {platform.discountPercent}%
                                                </span>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* About */}
                        <Link
                            href="/about"
                            className="text-sm font-medium transition-colors hover:text-primary-500"
                            style={{ color: "oklch(0.45 0.012 250)" }}
                        >
                            About
                        </Link>

                        {/* Contact */}
                        <Link
                            href="/contact"
                            className="text-sm font-medium transition-colors hover:text-primary-500"
                            style={{ color: "oklch(0.45 0.012 250)" }}
                        >
                            Contact
                        </Link>
                    </div>


                    {/* Mobile Menu */}
                    <Sheet open={isMobileOpen} onOpenChange={setIsMobileOpen}>
                        <SheetTrigger asChild className="md:hidden">
                            <Button variant="ghost" size="icon" className="h-9 w-9">
                                <Menu className="h-5 w-5" />
                                <span className="sr-only">Toggle menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[300px] bg-background p-6">
                            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                            <div className="flex flex-col gap-4 mt-8">
                                <Link
                                    href="/"
                                    onClick={() => setIsMobileOpen(false)}
                                    className="text-lg font-medium transition-colors hover:text-primary-500"
                                    style={{ color: "oklch(0.28 0.08 250)" }}
                                >
                                    Home
                                </Link>

                                {/* Mobile Platforms Accordion */}
                                <button
                                    onClick={() => setIsMobilePlatformsOpen(!isMobilePlatformsOpen)}
                                    className="flex items-center justify-between text-lg font-medium transition-colors hover:text-primary-500 text-left"
                                    style={{ color: "oklch(0.28 0.08 250)" }}
                                >
                                    Platforms
                                    <ChevronDown className={cn(
                                        "w-4 h-4 transition-transform duration-200",
                                        isMobilePlatformsOpen && "rotate-180"
                                    )} />
                                </button>
                                <div className={cn(
                                    "flex flex-col gap-1 pl-3 overflow-hidden transition-all duration-300",
                                    isMobilePlatformsOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                                )}>
                                    {platforms.map((platform) => (
                                        <Link
                                            key={platform.slug}
                                            href={`/subscriptions/${platform.slug}`}
                                            onClick={() => setIsMobileOpen(false)}
                                            className="flex items-center gap-2.5 py-2 text-sm font-medium transition-colors hover:text-primary-500"
                                            style={{ color: "oklch(0.45 0.012 250)" }}
                                        >
                                            <span
                                                className="flex items-center justify-center w-6 h-6 rounded text-[9px] font-bold text-white shrink-0"
                                                style={{ backgroundColor: platform.color }}
                                            >
                                                {platform.name.slice(0, 2).toUpperCase()}
                                            </span>
                                            {platform.name}
                                        </Link>
                                    ))}
                                </div>

                                <Link
                                    href="/about"
                                    onClick={() => setIsMobileOpen(false)}
                                    className="text-lg font-medium transition-colors hover:text-primary-500"
                                    style={{ color: "oklch(0.28 0.08 250)" }}
                                >
                                    About
                                </Link>

                                <Link
                                    href="/contact"
                                    onClick={() => setIsMobileOpen(false)}
                                    className="text-lg font-medium transition-colors hover:text-primary-500"
                                    style={{ color: "oklch(0.28 0.08 250)" }}
                                >
                                    Contact
                                </Link>

                            </div>
                        </SheetContent>
                    </Sheet>
                </nav>
            </Container>
        </header>
    );
}
