import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { PricingCard } from "@/components/shared/PricingCard";
import { cn } from "@/lib/utils";
import type { Plan } from "@/data/platforms";

interface PricingCardsProps {
    title: string;
    subtitle?: string;
    plans: Plan[];
    platformName?: string;
    className?: string;
}

export function PricingCards({
    title,
    subtitle,
    plans,
    platformName,
    className,
}: PricingCardsProps) {
    return (
        <section className={cn("py-20 md:py-28", className)}>
            <Container>
                <SectionHeading title={title} subtitle={subtitle} />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 lg:gap-6 items-start">
                    {plans.map((plan, index) => (
                        <PricingCard
                            key={index}
                            plan={plan}
                            platformName={platformName}
                        />
                    ))}
                </div>
            </Container>
        </section>
    );
}
