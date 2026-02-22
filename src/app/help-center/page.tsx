import { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { HeroSection } from "@/components/sections/HeroSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { FAQSchema } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
    title: "Help Center — Support, FAQs & Guides | CDS",
    description:
        "Get instant answers and support for your CDS account. Billing, subscription management, troubleshooting, and more.",
    alternates: {
        canonical: "/help-center",
    },
    keywords: ["help center", "FAQ", "troubleshooting", "e-learning guides", "support resources"],
    openGraph: {
        title: "Help Center — Support, FAQs & Guides | CDS",
        description: "Get instant answers and support for your CDS account. Billing, subscription management, troubleshooting, and more.",
    },
    twitter: {
        card: "summary_large_image",
        title: "Help Center — Support, FAQs & Guides | CDS",
        description: "Get instant answers and support for your CDS account. Billing, subscription management, troubleshooting, and more.",
    },
};

const helpCategories = [
    {
        title: "Getting Started",
        icon: "🚀",
        items: [
            "How to create an account",
            "Choosing the right platform",
            "Making your first purchase",
            "Setting up your subscription",
        ],
    },
    {
        title: "Account & Access",
        icon: "🔑",
        items: [
            "Receiving your login credentials",
            "Troubleshooting login issues",
            "Changing your email address",
            "Managing multiple subscriptions",
        ],
    },
    {
        title: "Billing & Payments",
        icon: "💳",
        items: [
            "Accepted payment methods",
            "Understanding your invoice",
            "Updating payment information",
            "Requesting a refund",
        ],
    },
    {
        title: "Subscriptions",
        icon: "📚",
        items: [
            "Switching platforms",
            "Upgrading or downgrading plans",
            "Cancelling your subscription",
            "Renewing expired subscriptions",
        ],
    },
];

const helpFAQs = [
    {
        question: "How quickly will I receive my subscription access?",
        answer: "Most subscriptions are activated within 2–4 hours of payment confirmation. You'll receive your access credentials via email with step-by-step setup instructions.",
    },
    {
        question: "What if I have trouble logging in?",
        answer: "First, double-check the credentials sent to your email. If issues persist, contact our support team at support@cheapdigitalsubs.com and we'll resolve it within 1 hour during business hours.",
    },
    {
        question: "Can I switch to a different platform?",
        answer: "Yes! You can switch platforms at the end of your current billing period. Contact our support team to arrange the switch.",
    },
    {
        question: "What payment methods do you accept?",
        answer: "We accept all major credit and debit cards (Visa, Mastercard, American Express) as well as PayPal. All transactions are processed securely.",
    },
    {
        question: "How do I cancel my subscription?",
        answer: "You can cancel anytime by contacting our support team. Monthly plans take effect immediately, while quarterly and annual plans continue until the end of the billing period.",
    },
    {
        question: "Is my payment information secure?",
        answer: "Absolutely. We use industry-standard SSL encryption and never store your full payment details. All transactions are processed through secure, PCI-compliant payment processors.",
    },
];

export default function HelpCenterPage() {
    return (
        <>
            <FAQSchema faqs={helpFAQs} />
            <HeroSection
                variant="small"
                badge="Support"
                title="Help Center"
                subtitle="Find answers, guides, and support resources to get the most out of your CDS subscriptions."
            />

            <section className="py-16 md:py-24">
                <Container>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                        {helpCategories.map((category, index) => (
                            <div
                                key={index}
                                className="rounded-2xl border border-neutral-200/60 bg-white p-6 transition-all duration-300 hover:shadow-[0_8px_30px_oklch(0.63_0.18_250_/_0.1)] hover:border-primary-200"
                            >
                                <div className="text-3xl mb-4">{category.icon}</div>
                                <h3 className="text-lg font-bold mb-4" style={{ color: "oklch(0.20 0.05 250)" }}>
                                    {category.title}
                                </h3>
                                <ul className="space-y-2.5">
                                    {category.items.map((item, i) => (
                                        <li key={i} className="text-sm flex items-start gap-2" style={{ color: "oklch(0.45 0.012 250)" }}>
                                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: "oklch(0.63 0.18 250)" }} />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            <FAQSection
                title="Common Questions"
                subtitle="Quick answers to the most frequently asked questions."
                faqs={helpFAQs}
            />

            <section className="py-16 md:py-24">
                <Container>
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-2xl font-bold mb-4" style={{ color: "oklch(0.20 0.05 250)" }}>Still Need Help?</h2>
                        <p className="text-base mb-6" style={{ color: "oklch(0.45 0.012 250)" }}>
                            Our support team is available 24/7 to assist you with any questions or issues.
                        </p>
                        <a
                            href="/contact"
                            className="inline-flex items-center justify-center px-8 py-3 rounded-xl text-white font-semibold transition-all duration-300 hover:-translate-y-0.5 shadow-md hover:shadow-lg"
                            style={{ backgroundColor: "oklch(0.63 0.18 250)" }}
                        >
                            Contact Support
                        </a>
                    </div>
                </Container>
            </section>
        </>
    );
}
