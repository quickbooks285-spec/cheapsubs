import Link from "next/link";
import { cn } from "@/lib/utils";
import { CustomBadge } from "./Badge";
import type { Platform } from "@/data/platforms";
import {
    GraduationCap, BookOpen, Award, Briefcase, Palette,
    Code, BarChart3, Terminal, Star, Globe
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
    GraduationCap, BookOpen, Award, Briefcase, Palette,
    Code, BarChart3, Terminal, Star, Globe,
};

interface PlatformCardProps {
    platform: Platform;
    className?: string;
}

export function PlatformCard({ platform, className }: PlatformCardProps) {
    const IconComponent = iconMap[platform.icon] || GraduationCap;

    return (
        <Link
            href={`/subscriptions/${platform.slug}`}
            className={cn(
                "group relative flex flex-col bg-white rounded-2xl p-6 transition-all duration-300",
                "hover:-translate-y-1 hover:shadow-xl",
                "border border-neutral-200/60",
                "shadow-[0_1px_3px_oklch(0.63_0.18_250_/_0.06),_0_4px_12px_oklch(0.63_0.18_250_/_0.04)]",
                className
            )}
        >
            {/* Discount badge */}
            <div className="absolute -top-3 right-4">
                <CustomBadge variant="success">Save {platform.discountPercent}%</CustomBadge>
            </div>

            {/* Icon */}
            <div
                className="flex items-center justify-center w-12 h-12 rounded-xl mb-4 transition-transform group-hover:scale-110"
                style={{ backgroundColor: "oklch(0.97 0.02 250)" }}
            >
                <IconComponent className="w-6 h-6" style={{ color: "oklch(0.63 0.18 250)" }} />
            </div>

            {/* Content */}
            <h3 className="text-lg font-bold mb-2" style={{ color: "oklch(0.20 0.05 250)" }}>
                {platform.name}
            </h3>
            <p className="text-sm leading-relaxed mb-4 flex-grow" style={{ color: "oklch(0.45 0.012 250)" }}>
                {platform.description}
            </p>

            {/* Pricing */}
            <div className="flex items-baseline gap-2 mb-3">
                <span className="text-2xl font-bold" style={{ color: "oklch(0.63 0.18 250)" }}>
                    ${platform.ourPrice}
                </span>
                <span className="text-sm" style={{ color: "oklch(0.55 0.01 250)" }}>/mo</span>
                <span
                    className="text-sm line-through ml-auto"
                    style={{ color: "oklch(0.71 0.01 250)" }}
                >
                    ${platform.originalPrice}
                </span>
            </div>

            {/* Arrow indicator */}
            <div className="flex items-center text-sm font-medium transition-colors group-hover:text-primary-600" style={{ color: "oklch(0.63 0.18 250)" }}>
                View Plans
                <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </div>
        </Link>
    );
}
