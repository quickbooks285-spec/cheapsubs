import { cn } from "@/lib/utils";

interface BadgeProps {
    children: React.ReactNode;
    variant?: "default" | "success" | "warning" | "outline";
    className?: string;
}

export function CustomBadge({ children, variant = "default", className }: BadgeProps) {
    return (
        <span
            className={cn(
                "inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wide transition-colors",
                variant === "default" && "bg-primary-100 text-primary-700",
                variant === "success" && "text-white",
                variant === "warning" && "text-neutral-900",
                variant === "outline" && "border border-primary-300 text-primary-600 bg-transparent",
                className
            )}
            style={{
                ...(variant === "success" ? { backgroundColor: "oklch(0.65 0.18 155)" } : {}),
                ...(variant === "warning" ? { backgroundColor: "oklch(0.75 0.15 85)" } : {}),
            }}
        >
            {children}
        </span>
    );
}
