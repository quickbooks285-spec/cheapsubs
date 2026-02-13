import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { PlatformCard } from "@/components/shared/PlatformCard";
import { cn } from "@/lib/utils";
import type { Platform } from "@/data/platforms";

interface PlatformGridProps {
    title?: string;
    subtitle?: string;
    platforms: Platform[];
    className?: string;
    showHeading?: boolean;
}

export function PlatformGrid({
    title = "All Platforms",
    subtitle,
    platforms: platformsList,
    className,
    showHeading = true,
}: PlatformGridProps) {
    return (
        <section className={cn("py-20 md:py-28", className)}>
            <Container>
                {showHeading && <SectionHeading title={title} subtitle={subtitle} />}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
                    {platformsList.map((platform) => (
                        <PlatformCard key={platform.slug} platform={platform} />
                    ))}
                </div>
            </Container>
        </section>
    );
}
