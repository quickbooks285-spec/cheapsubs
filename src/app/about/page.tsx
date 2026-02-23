import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { CTASection } from "@/components/sections/CTASection";
import { BreadcrumbSchema, WebPageSchema } from "@/components/seo/JsonLd";
import { Heart, Target, Users, Globe } from "lucide-react";

export const metadata: Metadata = {
    title: "About CDS — 50,000+ Learners Saving Up to 60% on E-Learning",
    description:
        "Discover how Cheap Digital Subscriptions makes premium e-learning affordable for 50,000+ learners in 120+ countries. Group licensing partnerships with Coursera, Udemy, edX & more.",
    alternates: {
        canonical: "https://cheapdigitalsubscriptions.com/about",
    },
    keywords: ["about CDS", "group licensing e-learning", "affordable education", "cheap digital subscriptions story"],
    openGraph: {
        title: "About CDS — 50,000+ Learners Saving Up to 60% on E-Learning",
        description: "Discover how Cheap Digital Subscriptions makes premium e-learning affordable for 50,000+ learners in 120+ countries. Group licensing partnerships with Coursera, Udemy, edX & more.",
    },
    twitter: {
        card: "summary_large_image",
        title: "About CDS — 50,000+ Learners Saving Up to 60% on E-Learning",
        description: "Discover how Cheap Digital Subscriptions makes premium e-learning affordable for 50,000+ learners in 120+ countries. Group licensing partnerships with Coursera, Udemy, edX & more.",
    },
};

const stats = [
    { value: "50K+", label: "Active Learners" },
    { value: "10", label: "Platform Partners" },
    { value: "$2M+", label: "Saved by Learners" },
    { value: "120+", label: "Countries Reached" },
];

const values = [
    {
        icon: <Heart className="w-6 h-6" style={{ color: "oklch(0.63 0.18 250)" }} />,
        title: "Accessibility First",
        description:
            "We believe premium education should be accessible to everyone, regardless of their financial situation. Our mission is to break down cost barriers to learning.",
    },
    {
        icon: <Target className="w-6 h-6" style={{ color: "oklch(0.63 0.18 250)" }} />,
        title: "Quality Without Compromise",
        description:
            "Every subscription we offer is 100% legitimate and officially licensed. Our learners get the exact same experience, certificates, and features as direct subscribers.",
    },
    {
        icon: <Users className="w-6 h-6" style={{ color: "oklch(0.63 0.18 250)" }} />,
        title: "Community Driven",
        description:
            "We're built by learners, for learners. Our team has personally used every platform we offer and understands the value of continuous education.",
    },
    {
        icon: <Globe className="w-6 h-6" style={{ color: "oklch(0.63 0.18 250)" }} />,
        title: "Global Impact",
        description:
            "With learners in over 120 countries, we're making a global impact on education accessibility. From students to professionals, we serve everyone.",
    },
];

export default function AboutPage() {
    return (
        <>
            <BreadcrumbSchema items={[
                { name: "Home", href: "/" },
                { name: "About", href: "/about" },
            ]} />
            <WebPageSchema
                title="About Cheap Digital Subscriptions"
                description="Discover how CDS makes premium e-learning affordable for 50,000+ learners in 120+ countries."
                url="/about"
            />
            <HeroSection
                variant="small"
                badge="Our Story"
                title="Making Premium Education Affordable for Everyone"
                subtitle="Cheap Digital Subscriptions was founded with a simple belief: the world's best educational content shouldn't be locked behind expensive paywalls. We partner with leading e-learning platforms to negotiate group licensing, passing the savings directly to learners worldwide."
            />

            <StatsSection stats={stats} />

            <FeaturesSection
                title="Our Values & Mission"
                subtitle="Everything we do is guided by our commitment to making education accessible, affordable, and impactful."
                features={values}
                columns={2}
            />

            <section className="py-20 md:py-28">
                <div className="mx-auto w-full max-w-[1080px] px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2
                                className="text-3xl md:text-4xl font-bold leading-tight mb-6"
                                style={{ color: "oklch(0.20 0.05 250)" }}
                            >
                                How We Keep Prices Low
                            </h2>
                            <div className="space-y-4">
                                {[
                                    {
                                        step: "01",
                                        title: "Group Licensing",
                                        desc: "We negotiate educational and enterprise licenses with platforms at volume discounts.",
                                    },
                                    {
                                        step: "02",
                                        title: "Direct Partnerships",
                                        desc: "Our relationships with platform providers allow us to access special pricing tiers.",
                                    },
                                    {
                                        step: "03",
                                        title: "Lean Operations",
                                        desc: "We keep our overheads minimal so savings are passed directly to you.",
                                    },
                                    {
                                        step: "04",
                                        title: "Community Growth",
                                        desc: "As our learner base grows, we negotiate even better rates for everyone.",
                                    },
                                ].map((item) => (
                                    <div key={item.step} className="flex gap-4">
                                        <div
                                            className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full font-bold text-sm text-white"
                                            style={{ backgroundColor: "oklch(0.63 0.18 250)" }}
                                        >
                                            {item.step}
                                        </div>
                                        <div>
                                            <h3 className="font-semibold mb-1" style={{ color: "oklch(0.20 0.05 250)" }}>
                                                {item.title}
                                            </h3>
                                            <p className="text-sm leading-relaxed" style={{ color: "oklch(0.45 0.012 250)" }}>
                                                {item.desc}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div
                            className="rounded-2xl p-10 text-center"
                            style={{
                                background: "linear-gradient(135deg, oklch(0.97 0.02 250), oklch(0.93 0.04 250))",
                                border: "1px solid oklch(0.87 0.08 250 / 0.5)",
                            }}
                        >
                            <div
                                className="text-5xl md:text-6xl font-bold mb-3"
                                style={{ color: "oklch(0.63 0.18 250)" }}
                            >
                                60%
                            </div>
                            <p className="text-lg font-semibold mb-2" style={{ color: "oklch(0.20 0.05 250)" }}>
                                Average Savings
                            </p>
                            <p className="text-sm leading-relaxed" style={{ color: "oklch(0.45 0.012 250)" }}>
                                Our learners save an average of 60% compared to subscribing directly. That&apos;s hundreds of dollars back in your pocket every year.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <CTASection
                title="Join Our Growing Community"
                subtitle="Become part of 50,000+ learners who are investing in their future without breaking the bank."
                buttonLabel="Browse Platforms"
                buttonHref="/contact"
            />
        </>
    );
}
