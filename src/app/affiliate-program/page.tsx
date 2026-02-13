import { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { HeroSection } from "@/components/sections/HeroSection";
import { DollarSign, TrendingUp, Users, Zap } from "lucide-react";

export const metadata: Metadata = {
    title: "Affiliate Program — Earn 20% Commission with CDS",
    description:
        "Partner with us and earn 20% recurring commission on every sale. Join the highest-paying affiliate program in e-learning deals.",
};

const benefits = [
    {
        icon: <DollarSign className="w-6 h-6 text-white" />,
        title: "20% Commission",
        description: "Earn 20% recurring commission on every sale made through your affiliate link. Commissions are paid monthly.",
    },
    {
        icon: <TrendingUp className="w-6 h-6 text-white" />,
        title: "30-Day Cookie",
        description: "Our 30-day cookie window ensures you get credited for referrals, even if they don't purchase immediately.",
    },
    {
        icon: <Users className="w-6 h-6 text-white" />,
        title: "Dedicated Support",
        description: "Get access to a dedicated affiliate manager, marketing materials, and performance analytics.",
    },
    {
        icon: <Zap className="w-6 h-6 text-white" />,
        title: "Real-Time Tracking",
        description: "Monitor your clicks, conversions, and earnings in real-time through our affiliate dashboard.",
    },
];

const idealFor = [
    { emoji: "📝", label: "Bloggers & Content Creators" },
    { emoji: "📱", label: "Social Media Influencers" },
    { emoji: "🎓", label: "Educators & Tutors" },
    { emoji: "💼", label: "Business Consultants" },
    { emoji: "📧", label: "Newsletter Owners" },
    { emoji: "🎬", label: "YouTube Creators" },
];

export default function AffiliateProgramPage() {
    return (
        <>
            <HeroSection
                variant="small"
                badge="Partner With Us"
                title="Affiliate Program"
                subtitle="Earn generous commissions by promoting affordable e-learning subscriptions. Join our growing network of affiliates and start earning today."
            />

            <section className="py-16 md:py-24">
                <Container>
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-4" style={{ color: "oklch(0.20 0.05 250)" }}>
                        Why Partner With CDS?
                    </h2>
                    <p className="text-center text-base mb-12 max-w-xl mx-auto" style={{ color: "oklch(0.45 0.012 250)" }}>
                        Our affiliate program is designed to reward you generously for helping learners save on education.
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                        {benefits.map((benefit, index) => (
                            <div
                                key={index}
                                className="rounded-2xl border border-neutral-200/60 bg-white p-6 transition-all duration-300 hover:shadow-[0_8px_30px_oklch(0.63_0.18_250_/_0.1)] hover:border-primary-200"
                            >
                                <div
                                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                                    style={{ backgroundColor: "oklch(0.63 0.18 250)" }}
                                >
                                    {benefit.icon}
                                </div>
                                <h3 className="text-lg font-bold mb-2" style={{ color: "oklch(0.20 0.05 250)" }}>
                                    {benefit.title}
                                </h3>
                                <p className="text-sm leading-relaxed" style={{ color: "oklch(0.45 0.012 250)" }}>
                                    {benefit.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-2xl font-bold text-center mb-8" style={{ color: "oklch(0.20 0.05 250)" }}>
                            Ideal For
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-16">
                            {idealFor.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-3 px-5 py-4 rounded-xl border border-neutral-200/60 bg-white transition-all hover:border-primary-200"
                                >
                                    <span className="text-2xl">{item.emoji}</span>
                                    <span className="text-sm font-semibold" style={{ color: "oklch(0.20 0.05 250)" }}>{item.label}</span>
                                </div>
                            ))}
                        </div>

                        <div
                            className="text-center p-8 md:p-12 rounded-2xl"
                            style={{ background: "linear-gradient(135deg, oklch(0.95 0.04 250), oklch(0.97 0.02 250))" }}
                        >
                            <h3 className="text-xl font-bold mb-3" style={{ color: "oklch(0.20 0.05 250)" }}>
                                Ready to Join?
                            </h3>
                            <p className="text-sm mb-6" style={{ color: "oklch(0.45 0.012 250)" }}>
                                Apply to our affiliate program and start earning commissions within 24 hours.
                            </p>
                            <a
                                href="/contact"
                                className="inline-flex items-center justify-center px-8 py-3 rounded-xl text-white font-semibold transition-all duration-300 hover:-translate-y-0.5 shadow-md hover:shadow-lg"
                                style={{ backgroundColor: "oklch(0.63 0.18 250)" }}
                            >
                                Apply Now
                            </a>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    );
}
