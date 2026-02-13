import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface CTASectionProps {
    title: string;
    subtitle: string;
    buttonLabel?: string;
    buttonHref?: string;
    className?: string;
}

export function CTASection({
    title,
    subtitle,
    buttonLabel = "Get Started Today",
    buttonHref = "/subscriptions",
    className,
}: CTASectionProps) {
    return (
        <section className={cn("py-20 md:py-28", className)}>
            <Container>
                <div
                    className="relative overflow-hidden rounded-3xl px-8 py-14 md:px-16 md:py-20 text-center"
                    style={{
                        background: `
              linear-gradient(135deg, oklch(0.55 0.18 250), oklch(0.47 0.16 250), oklch(0.39 0.13 250))
            `,
                    }}
                >
                    {/* Decorative elements */}
                    <div
                        className="absolute top-0 right-0 w-80 h-80 rounded-full -translate-y-1/2 translate-x-1/3 opacity-20"
                        style={{
                            background: "radial-gradient(circle, oklch(0.79 0.12 250), transparent)",
                        }}
                    />
                    <div
                        className="absolute bottom-0 left-0 w-64 h-64 rounded-full translate-y-1/2 -translate-x-1/4 opacity-15"
                        style={{
                            background: "radial-gradient(circle, oklch(0.71 0.15 250), transparent)",
                        }}
                    />

                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold leading-tight mb-4 text-white">
                            {title}
                        </h2>
                        <p className="text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-8 text-white/80">
                            {subtitle}
                        </p>
                        <Button
                            size="lg"
                            className="bg-white text-primary-700 hover:bg-primary-50 text-base font-semibold px-8 py-6 rounded-xl shadow-[0_4px_14px_oklch(0_0_0_/_0.15)] hover:shadow-[0_6px_20px_oklch(0_0_0_/_0.2)] transition-all duration-300 hover:-translate-y-0.5 group"
                            asChild
                        >
                            <a href={buttonHref}>
                                {buttonLabel}
                                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </a>
                        </Button>
                    </div>
                </div>
            </Container>
        </section>
    );
}
