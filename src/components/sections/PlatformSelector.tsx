"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { platforms } from "@/data/platforms";
import { ChevronDown } from "lucide-react";

export function PlatformSelector() {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState<string | null>(null);

    const selectedPlatform = platforms.find((p) => p.slug === selected);

    const handleSelect = (slug: string) => {
        setSelected(slug);
        setIsOpen(false);
        router.push(`/subscriptions/${slug}`);
    };

    return (
        <div className="relative w-full max-w-md mx-auto animate-fade-in-up stagger-2">
            {/* Selector Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between gap-3 px-5 py-4 rounded-xl border-2 text-left transition-all duration-200 bg-white/80 backdrop-blur-sm shadow-[0_4px_14px_oklch(0.63_0.18_250_/_0.1)] hover:shadow-[0_6px_20px_oklch(0.63_0.18_250_/_0.18)] hover:border-primary-400"
                style={{
                    borderColor: isOpen ? "oklch(0.63 0.18 250)" : "oklch(0.63 0.18 250 / 0.3)",
                }}
            >
                {selectedPlatform ? (
                    <div className="flex items-center gap-3">
                        <span
                            className="flex items-center justify-center w-9 h-9 rounded-lg text-[11px] font-bold text-white shrink-0"
                            style={{ backgroundColor: selectedPlatform.color }}
                        >
                            {selectedPlatform.name.slice(0, 2).toUpperCase()}
                        </span>
                        <div>
                            <span className="text-sm font-semibold block" style={{ color: "oklch(0.20 0.05 250)" }}>
                                {selectedPlatform.name}
                            </span>
                            <span className="text-xs" style={{ color: "oklch(0.55 0.02 250)" }}>
                                Save {selectedPlatform.discountPercent}% — ${selectedPlatform.ourPrice}/mo
                            </span>
                        </div>
                    </div>
                ) : (
                    <span className="text-sm font-medium" style={{ color: "oklch(0.50 0.02 250)" }}>
                        Choose a platform to get started...
                    </span>
                )}
                <ChevronDown
                    className="w-4 h-4 shrink-0 transition-transform duration-200"
                    style={{
                        color: "oklch(0.55 0.02 250)",
                        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                />
            </button>

            {/* Dropdown */}
            <div
                className="absolute top-full left-0 right-0 mt-2 rounded-xl border border-neutral-200/60 bg-white/95 backdrop-blur-xl p-2 shadow-[0_12px_40px_oklch(0.63_0.18_250_/_0.15),_0_2px_8px_oklch(0.63_0.18_250_/_0.06)] transition-all duration-200 origin-top z-50"
                style={{
                    opacity: isOpen ? 1 : 0,
                    transform: isOpen ? "scaleY(1) translateY(0)" : "scaleY(0.95) translateY(-4px)",
                    pointerEvents: isOpen ? "auto" : "none",
                }}
            >
                <div className="max-h-[320px] overflow-y-auto custom-scrollbar">
                    {platforms.map((platform) => (
                        <button
                            key={platform.slug}
                            onClick={() => handleSelect(platform.slug)}
                            className="w-full flex items-center gap-3 px-3 py-3 rounded-lg transition-all duration-150 hover:bg-primary-50 text-left group"
                        >
                            <span
                                className="flex items-center justify-center w-9 h-9 rounded-lg text-[11px] font-bold text-white shrink-0 transition-transform group-hover:scale-105"
                                style={{ backgroundColor: platform.color }}
                            >
                                {platform.name.slice(0, 2).toUpperCase()}
                            </span>
                            <div className="flex-1 min-w-0">
                                <span className="text-sm font-semibold block truncate group-hover:text-primary-600" style={{ color: "oklch(0.20 0.05 250)" }}>
                                    {platform.name}
                                </span>
                                <span className="text-xs" style={{ color: "oklch(0.55 0.02 250)" }}>
                                    {platform.description.slice(0, 50)}...
                                </span>
                            </div>
                            <div className="text-right shrink-0">
                                <span className="text-sm font-bold block" style={{ color: "oklch(0.63 0.18 250)" }}>
                                    ${platform.ourPrice}
                                </span>
                                <span className="text-[10px] line-through" style={{ color: "oklch(0.65 0.02 250)" }}>
                                    ${platform.originalPrice}
                                </span>
                            </div>
                        </button>
                    ))}
                </div>
            </div>

            {/* Click-away overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-40"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </div>
    );
}
