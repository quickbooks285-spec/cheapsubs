import type { Metadata } from "next";
import { ContactPageClient } from "./ContactPageClient";

export const metadata: Metadata = {
    title: "Contact Support — 24/7 Help for Your Subscriptions | CDS",
    description:
        "Need help with your e-learning subscription? Contact CDS support for instant assistance with accounts, billing, or platform access. We respond within 24 hours.",
    alternates: {
        canonical: "/contact",
    },
    keywords: ["contact support", "customer support", "e-learning help", "subscription support"],
    openGraph: {
        title: "Contact Support — 24/7 Help for Your Subscriptions | CDS",
        description: "Need help with your e-learning subscription? Contact CDS support for instant assistance with accounts, billing, or platform access. We respond within 24 hours.",
    },
    twitter: {
        card: "summary_large_image",
        title: "Contact Support — 24/7 Help for Your Subscriptions | CDS",
        description: "Need help with your e-learning subscription? Contact CDS support for instant assistance with accounts, billing, or platform access. We respond within 24 hours.",
    },
};

export default function ContactPage() {
    return <ContactPageClient />;
}
