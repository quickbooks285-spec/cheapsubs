import type { Metadata } from "next";
import { ContactPageClient } from "./ContactPageClient";

export const metadata: Metadata = {
    title: "Contact Support — 24/7 Help for Your Subscriptions | CDS",
    description:
        "Need help with your e-learning subscription? Contact CDS support for instant assistance with accounts, billing, or platform access. We respond within 24 hours.",
};

export default function ContactPage() {
    return <ContactPageClient />;
}
