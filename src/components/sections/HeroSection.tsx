import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface HeroSectionProps {
    title: string;
    subtitle: string;
    primaryCTA?: { label: string; href: string };
    secondaryCTA?: { label: string; href: string };
    badge?: string;
    className?: string;
    variant?: "default" | "small";
    children?: React.ReactNode;
}

export function HeroSection({
    title,
    subtitle,
    primaryCTA,
    secondaryCTA,
    badge,
    className,
    variant = "default",
    children,
}: HeroSectionProps) {
    return (
        <section
            className={cn(
                "relative",
                variant === "default" ? "pt-32 pb-20 md:pt-40 md:pb-28" : "pt-28 pb-14 md:pt-36 md:pb-20",
                className
            )}
        >
            {/* Background gradient */}
            <div
                className="absolute inset-0 -z-10"
                style={{
                    background: `
            radial-gradient(ellipse 80% 60% at 50% -20%, oklch(0.87 0.08 250 / 0.4), transparent),
            radial-gradient(ellipse 60% 50% at 80% 50%, oklch(0.93 0.04 250 / 0.3), transparent),
            radial-gradient(ellipse 50% 40% at 20% 80%, oklch(0.97 0.02 250 / 0.3), transparent),
            linear-gradient(180deg, oklch(0.99 0.003 250), oklch(0.97 0.02 250 / 0.3))
          `,
                }}
            />

            {/* Grid decoration */}
            <div
                className="absolute inset-0 -z-10 opacity-[0.03]"
                style={{
                    backgroundImage: `
            linear-gradient(oklch(0.63 0.18 250) 1px, transparent 1px),
            linear-gradient(90deg, oklch(0.63 0.18 250) 1px, transparent 1px)
          `,
                    backgroundSize: "60px 60px",
                }}
            />

            <Container className="text-center">
                {/* Badge */}
                {badge && (
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-50 border border-primary-200 mb-6 animate-fade-in-up">
                        <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
                        <span className="text-xs font-semibold tracking-wide text-primary-700">{badge}</span>
                    </div>
                )}

                {/* Title */}
                <h1
                    className={cn(
                        "font-bold leading-[1.1] mb-6 animate-fade-in-up",
                        variant === "default"
                            ? "text-4xl md:text-5xl lg:text-6xl"
                            : "text-3xl md:text-4xl lg:text-5xl"
                    )}
                    style={{ color: "oklch(0.20 0.05 250)" }}
                >
                    {title}
                </h1>

                {/* Subtitle */}
                <p
                    className="text-base md:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto mb-10 animate-fade-in-up stagger-1"
                    style={{ color: "oklch(0.45 0.012 250)" }}
                >
                    {subtitle}
                </p>

                {/* CTA Buttons */}
                {(primaryCTA || secondaryCTA) && (
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up stagger-2">
                        {primaryCTA && (
                            <Button
                                size="lg"
                                className="bg-primary-500 hover:bg-primary-600 text-white text-base font-semibold px-8 py-6 rounded-xl shadow-[0_4px_14px_oklch(0.63_0.18_250_/_0.3)] hover:shadow-[0_6px_20px_oklch(0.63_0.18_250_/_0.4)] transition-all duration-300 hover:-translate-y-0.5"
                                asChild
                            >
                                <a href={primaryCTA.href}>{primaryCTA.label}</a>
                            </Button>
                        )}
                        {secondaryCTA && (
                            <Button
                                size="lg"
                                variant="outline"
                                className="text-base font-semibold px-8 py-6 rounded-xl border-primary-300 text-primary-700 hover:bg-primary-50 transition-all duration-300"
                                asChild
                            >
                                <a href={secondaryCTA.href}>{secondaryCTA.label}</a>
                            </Button>
                        )}
                    </div>
                )}

                {/* Custom Content */}
                {children}
            </Container>
        </section>
    );
}
