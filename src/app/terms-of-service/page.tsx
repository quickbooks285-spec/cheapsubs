import { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { HeroSection } from "@/components/sections/HeroSection";

export const metadata: Metadata = {
    title: "Terms of Service — Platform Usage & Guidelines | CDS",
    description:
        "Read the comprehensive Terms of Service for Cheap Digital Subscriptions. Learn about account rules, billing policies, and user responsibilities.",
    alternates: {
        canonical: "/terms-of-service",
    },
    keywords: ["terms of service", "user guidelines", "platform rules", "subscription policies"],
    openGraph: {
        title: "Terms of Service — Platform Usage & Guidelines | CDS",
        description: "Read the comprehensive Terms of Service for Cheap Digital Subscriptions. Learn about account rules, billing policies, and user responsibilities.",
    },
    twitter: {
        card: "summary_large_image",
        title: "Terms of Service — Platform Usage & Guidelines | CDS",
        description: "Read the comprehensive Terms of Service for Cheap Digital Subscriptions. Learn about account rules, billing policies, and user responsibilities.",
    },
};

export default function TermsOfServicePage() {
    return (
        <>
            <HeroSection
                variant="small"
                badge="Legal"
                title="Terms of Service"
                subtitle="Last updated: February 2026. Please read these terms carefully before using our services."
            />

            <section className="py-16 md:py-24">
                <Container>
                    <div className="max-w-3xl mx-auto">
                        <div className="space-y-10">
                            <div>
                                <h2 className="text-2xl font-bold mb-4" style={{ color: "oklch(0.20 0.05 250)" }}>1. Acceptance of Terms</h2>
                                <p className="text-base leading-relaxed" style={{ color: "oklch(0.40 0.02 250)" }}>
                                    By accessing or using Cheap Digital Subscriptions ("CDS", "we", "our"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services. We reserve the right to update these terms at any time, and your continued use of our services constitutes acceptance of any changes.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold mb-4" style={{ color: "oklch(0.20 0.05 250)" }}>2. Description of Services</h2>
                                <div className="space-y-3 text-base leading-relaxed" style={{ color: "oklch(0.40 0.02 250)" }}>
                                    <p>CDS provides discounted access to premium e-learning platform subscriptions through negotiated group licensing agreements. Our services include:</p>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>Subscription provisioning for supported e-learning platforms</li>
                                        <li>Account setup assistance and onboarding support</li>
                                        <li>Customer support for subscription-related inquiries</li>
                                        <li>Billing and payment processing</li>
                                    </ul>
                                </div>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold mb-4" style={{ color: "oklch(0.20 0.05 250)" }}>3. Account & Subscription Terms</h2>
                                <div className="space-y-3 text-base leading-relaxed" style={{ color: "oklch(0.40 0.02 250)" }}>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>Subscriptions are for individual, personal use unless otherwise specified.</li>
                                        <li>You may not share, resell, or transfer your subscription credentials.</li>
                                        <li>Access is typically delivered within 2–4 hours of confirmed payment.</li>
                                        <li>You are responsible for maintaining the security of your account credentials.</li>
                                        <li>We reserve the right to suspend accounts that violate these terms.</li>
                                    </ul>
                                </div>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold mb-4" style={{ color: "oklch(0.20 0.05 250)" }}>4. Payment & Billing</h2>
                                <div className="space-y-3 text-base leading-relaxed" style={{ color: "oklch(0.40 0.02 250)" }}>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>All prices are listed in USD and are subject to change with prior notice.</li>
                                        <li>Payment is required before subscription access is granted.</li>
                                        <li>Monthly plans auto-renew unless cancelled before the billing date.</li>
                                        <li>Quarterly and annual plans are billed upfront for the full period.</li>
                                        <li>We accept payments via credit card, debit card, and PayPal.</li>
                                    </ul>
                                </div>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold mb-4" style={{ color: "oklch(0.20 0.05 250)" }}>5. Cancellation & Refunds</h2>
                                <div className="space-y-3 text-base leading-relaxed" style={{ color: "oklch(0.40 0.02 250)" }}>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>Monthly subscriptions can be cancelled at any time with no penalty.</li>
                                        <li>Quarterly and annual plans may be cancelled at the end of the current billing period.</li>
                                        <li>Refund requests are evaluated on a case-by-case basis within 7 days of purchase.</li>
                                        <li>No refunds are issued for partially used billing periods.</li>
                                    </ul>
                                </div>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold mb-4" style={{ color: "oklch(0.20 0.05 250)" }}>6. Prohibited Conduct</h2>
                                <div className="space-y-3 text-base leading-relaxed" style={{ color: "oklch(0.40 0.02 250)" }}>
                                    <p>You agree not to:</p>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>Share or resell subscription credentials to third parties</li>
                                        <li>Use automated tools to access our website or services</li>
                                        <li>Attempt to circumvent security measures or access restrictions</li>
                                        <li>Use our services for any unlawful purpose</li>
                                        <li>Misrepresent your identity or affiliation</li>
                                    </ul>
                                </div>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold mb-4" style={{ color: "oklch(0.20 0.05 250)" }}>7. Limitation of Liability</h2>
                                <p className="text-base leading-relaxed" style={{ color: "oklch(0.40 0.02 250)" }}>
                                    CDS is not liable for any indirect, incidental, or consequential damages arising from your use of our services. Our total liability is limited to the amount you paid for the subscription in question. We do not guarantee uninterrupted access to third-party platforms, as they are subject to their own terms and conditions.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold mb-4" style={{ color: "oklch(0.20 0.05 250)" }}>8. Contact</h2>
                                <p className="text-base leading-relaxed" style={{ color: "oklch(0.40 0.02 250)" }}>
                                    For questions regarding these Terms of Service, contact us at <strong>legal@cheapdigitalsubs.com</strong> or visit our <a href="/contact" className="font-semibold underline" style={{ color: "oklch(0.63 0.18 250)" }}>Contact page</a>.
                                </p>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    );
}
