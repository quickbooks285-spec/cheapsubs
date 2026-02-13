import { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { HeroSection } from "@/components/sections/HeroSection";
import { Gift, Users, DollarSign, Share2 } from "lucide-react";

export const metadata: Metadata = {
    title: "Refer a Friend Program — Give 10%, Get $5 | CDS",
    description:
        "Earn $5 credit for every friend you refer to Cheap Digital Subscriptions. Give them 10% off their first purchase. Win-win!",
};

const steps = [
    {
        icon: <Share2 className="w-6 h-6 text-white" />,
        title: "Share Your Link",
        description: "Get your unique referral link from your account dashboard and share it with friends, family, or colleagues.",
    },
    {
        icon: <Users className="w-6 h-6 text-white" />,
        title: "Friend Signs Up",
        description: "When your friend signs up using your referral link and makes their first purchase, you both get rewarded.",
    },
    {
        icon: <Gift className="w-6 h-6 text-white" />,
        title: "Both Get Rewarded",
        description: "You earn a $5 credit toward your next renewal, and your friend gets 10% off their first subscription.",
    },
    {
        icon: <DollarSign className="w-6 h-6 text-white" />,
        title: "No Limits",
        description: "Refer as many friends as you want — there's no cap on rewards. The more you share, the more you save.",
    },
];

export default function ReferAFriendPage() {
    return (
        <>
            <HeroSection
                variant="small"
                badge="Referral Program"
                title="Refer a Friend, Earn Rewards"
                subtitle="Share the savings with your network. You'll earn $5 credit for every friend who joins, and they'll get 10% off their first subscription."
            />

            <section className="py-16 md:py-24">
                <Container>
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-4" style={{ color: "oklch(0.20 0.05 250)" }}>
                        How It Works
                    </h2>
                    <p className="text-center text-base mb-12 max-w-xl mx-auto" style={{ color: "oklch(0.45 0.012 250)" }}>
                        Earning rewards with our referral program is simple. Just follow these steps:
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                        {steps.map((step, index) => (
                            <div key={index} className="text-center">
                                <div
                                    className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4"
                                    style={{ backgroundColor: "oklch(0.63 0.18 250)" }}
                                >
                                    {step.icon}
                                </div>
                                <div className="text-xs font-bold mb-2" style={{ color: "oklch(0.63 0.18 250)" }}>
                                    Step {index + 1}
                                </div>
                                <h3 className="text-lg font-bold mb-2" style={{ color: "oklch(0.20 0.05 250)" }}>
                                    {step.title}
                                </h3>
                                <p className="text-sm leading-relaxed" style={{ color: "oklch(0.45 0.012 250)" }}>
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div
                        className="max-w-2xl mx-auto text-center p-8 md:p-12 rounded-2xl"
                        style={{ background: "linear-gradient(135deg, oklch(0.95 0.04 250), oklch(0.97 0.02 250))" }}
                    >
                        <h3 className="text-xl font-bold mb-3" style={{ color: "oklch(0.20 0.05 250)" }}>
                            Ready to Start Referring?
                        </h3>
                        <p className="text-sm mb-6" style={{ color: "oklch(0.45 0.012 250)" }}>
                            Contact us to get your unique referral link and start earning rewards today.
                        </p>
                        <a
                            href="/contact"
                            className="inline-flex items-center justify-center px-8 py-3 rounded-xl text-white font-semibold transition-all duration-300 hover:-translate-y-0.5 shadow-md hover:shadow-lg"
                            style={{ backgroundColor: "oklch(0.63 0.18 250)" }}
                        >
                            Get My Referral Link
                        </a>
                    </div>
                </Container>
            </section>
        </>
    );
}
