import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { CustomBadge } from "./Badge";
import { Check } from "lucide-react";
import type { Plan } from "@/data/platforms";

interface PricingCardProps {
    plan: Plan;
    platformName?: string;
    className?: string;
}

export function PricingCard({ plan, platformName, className }: PricingCardProps) {
    return (
        <div
            className={cn(
                "relative flex flex-col rounded-2xl p-7 transition-all duration-300",
                "hover:-translate-y-1",
                plan.popular
                    ? "bg-primary-500 text-white shadow-[0_8px_32px_oklch(0.63_0.18_250_/_0.3)] scale-[1.03] z-10 border-2 border-primary-400"
                    : "bg-white border border-neutral-200/60 shadow-[0_1px_3px_oklch(0.63_0.18_250_/_0.06),_0_4px_12px_oklch(0.63_0.18_250_/_0.04)] hover:shadow-xl",
                className
            )}
        >
            {/* Popular badge */}
            {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <CustomBadge variant="warning">Most Popular</CustomBadge>
                </div>
            )}

            {/* Plan name */}
            <h3
                className={cn(
                    "text-lg font-bold mb-1",
                    plan.popular ? "text-white" : ""
                )}
                style={!plan.popular ? { color: "oklch(0.20 0.05 250)" } : undefined}
            >
                {plan.name}
            </h3>

            {platformName && (
                <p
                    className={cn(
                        "text-sm mb-4",
                        plan.popular ? "text-white/70" : ""
                    )}
                    style={!plan.popular ? { color: "oklch(0.55 0.01 250)" } : undefined}
                >
                    {platformName}
                </p>
            )}

            {/* Price */}
            <div className="flex items-baseline gap-1 mb-6">
                <span className={cn("text-4xl font-bold", plan.popular ? "text-white" : "")}
                    style={!plan.popular ? { color: "oklch(0.20 0.05 250)" } : undefined}
                >
                    ${plan.price}
                </span>
                <span
                    className={cn("text-sm", plan.popular ? "text-white/70" : "")}
                    style={!plan.popular ? { color: "oklch(0.55 0.01 250)" } : undefined}
                >
                    /{plan.period}
                </span>
            </div>

            {/* Features */}
            <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                        <div
                            className={cn(
                                "flex-shrink-0 flex items-center justify-center w-5 h-5 rounded-full mt-0.5",
                                plan.popular ? "bg-white/20" : "bg-primary-50"
                            )}
                        >
                            <Check
                                className={cn("w-3 h-3", plan.popular ? "text-white" : "")}
                                style={!plan.popular ? { color: "oklch(0.63 0.18 250)" } : undefined}
                            />
                        </div>
                        <span
                            className={cn("text-sm", plan.popular ? "text-white/90" : "")}
                            style={!plan.popular ? { color: "oklch(0.37 0.012 250)" } : undefined}
                        >
                            {feature}
                        </span>
                    </li>
                ))}
            </ul>

            {/* CTA */}
            <Button
                className={cn(
                    "w-full font-semibold text-sm py-5 transition-all duration-200",
                    plan.popular
                        ? "bg-white text-primary-600 hover:bg-primary-50 shadow-md"
                        : "bg-primary-500 text-white hover:bg-primary-600 shadow-md hover:shadow-lg"
                )}
            >
                Get {plan.name}
            </Button>
        </div>
    );
}
