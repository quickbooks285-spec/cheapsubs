import { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { HeroSection } from "@/components/sections/HeroSection";

export const metadata: Metadata = {
    title: "Privacy Policy — Protecting Your Data | CDS",
    description:
        "Understand how Cheap Digital Subscriptions collects, uses, and secures your personal information. We are committed to protecting your privacy and data.",
    alternates: {
        canonical: "/privacy-policy",
    },
    keywords: ["privacy policy", "data protection", "secure learning", "privacy terms"],
    openGraph: {
        title: "Privacy Policy — Protecting Your Data | CDS",
        description: "Understand how Cheap Digital Subscriptions collects, uses, and secures your personal information. We are committed to protecting your privacy and data.",
    },
    twitter: {
        card: "summary_large_image",
        title: "Privacy Policy — Protecting Your Data | CDS",
        description: "Understand how Cheap Digital Subscriptions collects, uses, and secures your personal information. We are committed to protecting your privacy and data.",
    },
};

export default function PrivacyPolicyPage() {
    return (
        <>
            <HeroSection
                variant="small"
                badge="Legal"
                title="Privacy Policy"
                subtitle="Last updated: February 2026. Your privacy matters to us. This policy explains how we handle your data."
            />

            <section className="py-16 md:py-24">
                <Container>
                    <div className="max-w-3xl mx-auto prose-custom">
                        <div className="space-y-10">
                            <div>
                                <h2 className="text-2xl font-bold mb-4" style={{ color: "oklch(0.20 0.05 250)" }}>1. Information We Collect</h2>
                                <div className="space-y-3 text-base leading-relaxed" style={{ color: "oklch(0.40 0.02 250)" }}>
                                    <p>We collect information you provide directly to us, including:</p>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li><strong>Account Information:</strong> Name, email address, and payment details when you create an account or make a purchase.</li>
                                        <li><strong>Communication Data:</strong> Information you provide when contacting our support team or filling out forms on our website.</li>
                                        <li><strong>Usage Data:</strong> Information about how you interact with our website, including pages visited, time spent, and referring URLs.</li>
                                        <li><strong>Device Information:</strong> Browser type, operating system, IP address, and device identifiers.</li>
                                    </ul>
                                </div>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold mb-4" style={{ color: "oklch(0.20 0.05 250)" }}>2. How We Use Your Information</h2>
                                <div className="space-y-3 text-base leading-relaxed" style={{ color: "oklch(0.40 0.02 250)" }}>
                                    <p>We use the information we collect to:</p>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>Process transactions and deliver subscription access</li>
                                        <li>Send order confirmations and account credentials</li>
                                        <li>Respond to customer support inquiries</li>
                                        <li>Improve our website and user experience</li>
                                        <li>Send promotional communications (with your consent)</li>
                                        <li>Detect and prevent fraud or unauthorized access</li>
                                    </ul>
                                </div>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold mb-4" style={{ color: "oklch(0.20 0.05 250)" }}>3. Data Sharing & Third Parties</h2>
                                <div className="space-y-3 text-base leading-relaxed" style={{ color: "oklch(0.40 0.02 250)" }}>
                                    <p>We do not sell your personal information. We may share your data with:</p>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li><strong>Payment Processors:</strong> To securely process your transactions (e.g., Stripe, PayPal).</li>
                                        <li><strong>E-Learning Partners:</strong> Limited information required to provision your subscription access.</li>
                                        <li><strong>Analytics Providers:</strong> Anonymized usage data to improve our services.</li>
                                        <li><strong>Legal Authorities:</strong> When required by law or to protect our rights.</li>
                                    </ul>
                                </div>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold mb-4" style={{ color: "oklch(0.20 0.05 250)" }}>4. Data Security</h2>
                                <p className="text-base leading-relaxed" style={{ color: "oklch(0.40 0.02 250)" }}>
                                    We implement industry-standard security measures including SSL/TLS encryption, secure data storage, regular security audits, and access controls. While no method of transmission over the Internet is 100% secure, we strive to protect your personal information using commercially acceptable means.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold mb-4" style={{ color: "oklch(0.20 0.05 250)" }}>5. Cookies</h2>
                                <p className="text-base leading-relaxed" style={{ color: "oklch(0.40 0.02 250)" }}>
                                    We use essential cookies to maintain your session and preferences. We also use analytics cookies to understand how visitors interact with our website. You can control cookie settings through your browser preferences.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold mb-4" style={{ color: "oklch(0.20 0.05 250)" }}>6. Your Rights</h2>
                                <div className="space-y-3 text-base leading-relaxed" style={{ color: "oklch(0.40 0.02 250)" }}>
                                    <p>You have the right to:</p>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>Access, correct, or delete your personal data</li>
                                        <li>Opt out of marketing communications at any time</li>
                                        <li>Request a copy of your data in a portable format</li>
                                        <li>Withdraw consent where processing is based on consent</li>
                                    </ul>
                                    <p>To exercise any of these rights, contact us at <strong>privacy@cheapdigitalsubs.com</strong>.</p>
                                </div>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold mb-4" style={{ color: "oklch(0.20 0.05 250)" }}>7. Contact Us</h2>
                                <p className="text-base leading-relaxed" style={{ color: "oklch(0.40 0.02 250)" }}>
                                    If you have any questions about this Privacy Policy, please contact us at <strong>privacy@cheapdigitalsubs.com</strong> or visit our <a href="/contact" className="font-semibold underline" style={{ color: "oklch(0.63 0.18 250)" }}>Contact page</a>.
                                </p>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    );
}
