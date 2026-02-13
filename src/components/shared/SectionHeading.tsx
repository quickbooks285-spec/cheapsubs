import { cn } from "@/lib/utils";

interface SectionHeadingProps {
    title: string;
    subtitle?: string;
    align?: "center" | "left";
    className?: string;
}

export function SectionHeading({ title, subtitle, align = "center", className }: SectionHeadingProps) {
    return (
        <div
            className={cn(
                "mb-12 md:mb-16",
                align === "center" && "text-center",
                className
            )}
        >
            <h2
                className="text-3xl md:text-4xl lg:text-[42px] font-bold leading-tight mb-4"
                style={{ color: "oklch(0.20 0.05 250)" }}
            >
                {title}
            </h2>
            {subtitle && (
                <p
                    className={cn(
                        "text-base md:text-lg leading-relaxed",
                        align === "center" && "max-w-2xl mx-auto"
                    )}
                    style={{ color: "oklch(0.45 0.012 250)" }}
                >
                    {subtitle}
                </p>
            )}
        </div>
    );
}
