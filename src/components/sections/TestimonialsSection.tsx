import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { TestimonialCard } from "@/components/shared/TestimonialCard";
import { cn } from "@/lib/utils";
import type { Testimonial } from "@/data/platforms";

interface TestimonialsSectionProps {
    title: string;
    subtitle?: string;
    testimonials: Testimonial[];
    className?: string;
}

export function TestimonialsSection({
    title,
    subtitle,
    testimonials,
    className,
}: TestimonialsSectionProps) {
    return (
        <section className={cn("py-20 md:py-28", className)} style={{ backgroundColor: "oklch(0.98 0.005 250)" }}>
            <Container>
                <SectionHeading title={title} subtitle={subtitle} />
                <div className={cn(
                    "grid gap-6",
                    testimonials.length <= 2 ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                )}>
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard key={index} testimonial={testimonial} />
                    ))}
                </div>
            </Container>
        </section>
    );
}
