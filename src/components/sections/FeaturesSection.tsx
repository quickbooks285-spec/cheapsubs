import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { cn } from "@/lib/utils";

interface Feature {
    icon: React.ReactNode;
    title: string;
    description: string;
}

interface FeaturesSectionProps {
    title: string;
    subtitle?: string;
    features: Feature[];
    className?: string;
    columns?: 2 | 3 | 4;
}

export function FeaturesSection({
    title,
    subtitle,
    features,
    className,
    columns = 3,
}: FeaturesSectionProps) {
    return (
        <section className={cn("py-20 md:py-28", className)}>
            <Container>
                <SectionHeading title={title} subtitle={subtitle} />
                <div
                    className={cn(
                        "grid gap-6 md:gap-8",
                        columns === 2 && "grid-cols-1 md:grid-cols-2",
                        columns === 3 && "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
                        columns === 4 && "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
                    )}
                >
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className={cn(
                                "group flex flex-col p-6 rounded-2xl transition-all duration-300",
                                "hover:-translate-y-1 hover:shadow-xl",
                                "bg-white border border-neutral-200/60",
                                "shadow-[0_1px_3px_oklch(0.63_0.18_250_/_0.06),_0_4px_12px_oklch(0.63_0.18_250_/_0.04)]"
                            )}
                        >
                            <div
                                className="flex items-center justify-center w-12 h-12 rounded-xl mb-4 transition-all duration-300 group-hover:scale-110"
                                style={{ backgroundColor: "oklch(0.97 0.02 250)" }}
                            >
                                {feature.icon}
                            </div>
                            <h3
                                className="text-base font-bold mb-2"
                                style={{ color: "oklch(0.20 0.05 250)" }}
                            >
                                {feature.title}
                            </h3>
                            <p
                                className="text-sm leading-relaxed"
                                style={{ color: "oklch(0.45 0.012 250)" }}
                            >
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
