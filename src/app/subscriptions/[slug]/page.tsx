import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { HeroSection } from "@/components/sections/HeroSection";
import { PricingCards } from "@/components/sections/PricingCards";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { platforms, getPlatformBySlug } from "@/data/platforms";
import { CheckoutButton } from "@/components/shared/CheckoutButton";
import { ProductSchema, FAQSchema, BreadcrumbSchema } from "@/components/seo/JsonLd";
import { Check } from "lucide-react";

// Generate static paths for all platforms
export async function generateStaticParams() {
    return platforms.map((platform) => ({
        slug: platform.slug,
    }));
}

// Generate metadata for each platform page
export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const platform = getPlatformBySlug(slug);
    if (!platform) return { title: "Platform Not Found" };

    return {
        title: `${platform.name} Subscription — Save ${platform.discountPercent}% | Only $${platform.ourPrice}/mo`,
        description: `Get ${platform.name} at $${platform.ourPrice}/mo instead of $${platform.originalPrice}/mo — save ${platform.discountPercent}%. ${platform.description} 100% legitimate, instant access, certificates included.`,
        alternates: {
            canonical: `https://cheapdigitalsubscriptions.com/subscriptions/${platform.slug}`,
        },
        keywords: [
            `${platform.name.toLowerCase()} discount`,
            `cheap ${platform.name.toLowerCase()}`,
            `${platform.name.toLowerCase()} subscription deal`,
            `${platform.name.toLowerCase()} coupon`,
            "discounted e-learning",
        ],
        openGraph: {
            title: `${platform.name} — Save ${platform.discountPercent}% | Cheap Digital Subscriptions`,
            description: `Access ${platform.name} at just $${platform.ourPrice}/mo (was $${platform.originalPrice}/mo). Legitimate accounts, full access, certificates included.`,
        },
        twitter: {
            card: "summary_large_image" as const,
            title: `${platform.name} — ${platform.discountPercent}% Off | CDS`,
            description: `Get ${platform.name} for $${platform.ourPrice}/mo instead of $${platform.originalPrice}/mo. Save ${platform.discountPercent}% with Cheap Digital Subscriptions.`,
        },
    };
}

export default async function PlatformPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const platform = getPlatformBySlug(slug);

    if (!platform) {
        notFound();
    }

    const featureItems = platform.features.map((feature) => ({
        icon: <Check className="w-6 h-6" style={{ color: "oklch(0.63 0.18 250)" }} />,
        title: feature,
        description: "",
    }));

    return (
        <>
            <ProductSchema
                name={platform.name}
                description={platform.longDescription}
                slug={platform.slug}
                originalPrice={platform.originalPrice}
                ourPrice={platform.ourPrice}
                discountPercent={platform.discountPercent}
                features={platform.features}
            />
            <BreadcrumbSchema
                items={[
                    { name: "Home", href: "/" },
                    { name: "Subscriptions", href: "/" },
                    { name: platform.name, href: `/subscriptions/${platform.slug}` },
                ]}
            />
            {platform.faqs.length > 0 && <FAQSchema faqs={platform.faqs} />}

            <HeroSection
                variant="small"
                badge={`Save ${platform.discountPercent}% — Starting at $${platform.ourPrice}/${platform.plans[0]?.period ?? "mo"}`}
                title={platform.h1 ?? `${platform.name} Subscription`}
                subtitle={platform.longDescription}
            >
                {platform.plans[0]?.href && (
                    <CheckoutButton
                        label={`Get ${platform.name} — $${platform.ourPrice}/${platform.plans[0].period}`}
                        stripeUrl={platform.plans[0].href}
                        size="lg"
                        className="bg-primary-500 hover:bg-primary-600 text-white text-base font-semibold px-8 py-6 rounded-xl shadow-[0_4px_14px_oklch(0.63_0.18_250_/_0.3)] hover:shadow-[0_6px_20px_oklch(0.63_0.18_250_/_0.4)] transition-all duration-300 hover:-translate-y-0.5"
                    />
                )}
            </HeroSection>

            <PricingCards
                title={`${platform.name} Plans`}
                subtitle={`Choose the best ${platform.name} plan for your learning goals. All plans include full access and certificates.`}
                plans={platform.plans}
                platformName={platform.name}
                className="pt-0"
            />

            <FeaturesSection
                title={`What's Included with ${platform.name}`}
                subtitle="Every subscription includes these premium features and benefits."
                features={featureItems}
                columns={3}
            />

            {platform.testimonials.length > 0 && (
                <TestimonialsSection
                    title={`What Learners Say About ${platform.name}`}
                    subtitle={`Real reviews from CDS customers using ${platform.name}.`}
                    testimonials={platform.testimonials}
                />
            )}

            {platform.faqs.length > 0 && (
                <FAQSection
                    title={`${platform.name} FAQ`}
                    subtitle={`Common questions about our ${platform.name} subscriptions.`}
                    faqs={platform.faqs}
                />
            )}

            <CTASection
                title={`Start Learning with ${platform.name} Today`}
                subtitle={`Get full access to ${platform.name} at ${platform.discountPercent}% off. Join thousands of learners saving with CDS.`}
                customButton={platform.plans[0]?.href ? (
                    <CheckoutButton
                        label={`Get ${platform.name} — $${platform.ourPrice}/${platform.plans[0].period}`}
                        stripeUrl={platform.plans[0].href}
                        size="lg"
                        className="bg-white text-primary-700 hover:bg-primary-50 text-base font-semibold px-8 py-6 rounded-xl shadow-[0_4px_14px_oklch(0_0_0_/_0.15)] hover:shadow-[0_6px_20px_oklch(0_0_0_/_0.2)] transition-all duration-300 hover:-translate-y-0.5"
                    />
                ) : undefined}
            />
        </>
    );
}
