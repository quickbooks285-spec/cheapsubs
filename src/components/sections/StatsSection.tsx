import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/utils";

interface Stat {
    value: string;
    label: string;
}

interface StatsSectionProps {
    stats: Stat[];
    className?: string;
}

export function StatsSection({ stats, className }: StatsSectionProps) {
    return (
        <section className={cn("py-16 md:py-20", className)}>
            <Container>
                <div
                    className="rounded-2xl px-8 py-10 md:px-12 md:py-14"
                    style={{
                        background: `linear-gradient(135deg, oklch(0.97 0.02 250), oklch(0.93 0.04 250))`,
                        border: "1px solid oklch(0.87 0.08 250 / 0.5)",
                    }}
                >
                    <div className={cn(
                        "grid gap-8 md:gap-12",
                        stats.length === 3 ? "grid-cols-1 md:grid-cols-3" : "grid-cols-2 md:grid-cols-4"
                    )}>
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div
                                    className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2"
                                    style={{ color: "oklch(0.63 0.18 250)" }}
                                >
                                    {stat.value}
                                </div>
                                <div
                                    className="text-sm md:text-base font-medium"
                                    style={{ color: "oklch(0.45 0.012 250)" }}
                                >
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}
