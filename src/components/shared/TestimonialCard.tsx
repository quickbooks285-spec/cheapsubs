import { cn } from "@/lib/utils";
import { Star } from "lucide-react";
import type { Testimonial } from "@/data/platforms";

interface TestimonialCardProps {
    testimonial: Testimonial;
    className?: string;
}

export function TestimonialCard({ testimonial, className }: TestimonialCardProps) {
    return (
        <div
            className={cn(
                "flex flex-col bg-white rounded-2xl p-6 transition-all duration-300",
                "hover:-translate-y-1 hover:shadow-xl",
                "border border-neutral-200/60",
                "shadow-[0_1px_3px_oklch(0.63_0.18_250_/_0.06),_0_4px_12px_oklch(0.63_0.18_250_/_0.04)]",
                className
            )}
        >
            {/* Stars */}
            <div className="flex items-center gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                        key={i}
                        className="w-4 h-4"
                        fill={i < testimonial.rating ? "oklch(0.75 0.15 85)" : "transparent"}
                        style={{
                            color: i < testimonial.rating ? "oklch(0.75 0.15 85)" : "oklch(0.87 0.008 250)",
                        }}
                    />
                ))}
            </div>

            {/* Quote */}
            <blockquote className="text-sm leading-relaxed mb-6 flex-grow" style={{ color: "oklch(0.37 0.012 250)" }}>
                &ldquo;{testimonial.quote}&rdquo;
            </blockquote>

            {/* Author */}
            <div className="flex items-center gap-3">
                <div
                    className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full font-semibold text-sm text-white"
                    style={{ backgroundColor: "oklch(0.63 0.18 250)" }}
                >
                    {testimonial.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                    <div className="text-sm font-semibold" style={{ color: "oklch(0.20 0.05 250)" }}>
                        {testimonial.name}
                    </div>
                    <div className="text-xs" style={{ color: "oklch(0.55 0.01 250)" }}>
                        {testimonial.role}
                    </div>
                </div>
            </div>
        </div>
    );
}
