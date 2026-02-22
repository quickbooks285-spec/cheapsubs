import type { FAQ } from "@/data/platforms";

const BASE_URL = "https://cheapdigitalsubs.com";

// ─── Helper ──────────────────────────────────────────────────────────
function JsonLdScript({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
    );
}

// ─── Organization Schema ─────────────────────────────────────────────
export function OrganizationSchema() {
    const data = {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Cheap Digital Subscriptions",
        alternateName: "CDS",
        url: BASE_URL,
        logo: `${BASE_URL}/icon.svg`,
        description:
            "Discounted access to premium e-learning platforms. Save up to 60% on Coursera, Udemy, edX, LinkedIn Learning, Skillshare & more.",
        contactPoint: {
            "@type": "ContactPoint",
            contactType: "customer support",
            email: "support@cheapdigitalsubs.com",
            availableLanguage: ["English"],
        },
        sameAs: [],
    };
    return <JsonLdScript data={data} />;
}

// ─── WebSite Search Schema ───────────────────────────────────────────
export function WebSiteSchema() {
    const data = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "Cheap Digital Subscriptions",
        alternateName: "CDS",
        url: BASE_URL,
        potentialAction: {
            "@type": "SearchAction",
            target: {
                "@type": "EntryPoint",
                urlTemplate: `${BASE_URL}/subscriptions/{search_term_string}`,
            },
            "query-input": "required name=search_term_string",
        },
    };
    return <JsonLdScript data={data} />;
}

// ─── Breadcrumb Schema ───────────────────────────────────────────────
interface BreadcrumbItem {
    name: string;
    href: string;
}

export function BreadcrumbSchema({ items }: { items: BreadcrumbItem[] }) {
    const data = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            item: `${BASE_URL}${item.href}`,
        })),
    };
    return <JsonLdScript data={data} />;
}

// ─── FAQ Schema ──────────────────────────────────────────────────────
export function FAQSchema({ faqs }: { faqs: FAQ[] }) {
    const data = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
            },
        })),
    };
    return <JsonLdScript data={data} />;
}

// ─── Product Schema (for platform / subscription pages) ──────────────
interface ProductSchemaProps {
    name: string;
    description: string;
    slug: string;
    originalPrice: number;
    ourPrice: number;
    discountPercent: number;
    features: string[];
    ratingValue?: number;
    reviewCount?: number;
}

export function ProductSchema({
    name,
    description,
    slug,
    originalPrice,
    ourPrice,
    discountPercent,
    features,
    ratingValue = 4.8,
    reviewCount = 120,
}: ProductSchemaProps) {
    const data = {
        "@context": "https://schema.org",
        "@type": "Product",
        name: `${name} Subscription — Save ${discountPercent}%`,
        description,
        url: `${BASE_URL}/subscriptions/${slug}`,
        brand: {
            "@type": "Brand",
            name,
        },
        offers: {
            "@type": "Offer",
            url: `${BASE_URL}/subscriptions/${slug}`,
            priceCurrency: "USD",
            price: ourPrice.toFixed(2),
            priceValidUntil: new Date(
                new Date().getFullYear() + 1,
                0,
                1
            ).toISOString().split("T")[0],
            availability: "https://schema.org/InStock",
            itemCondition: "https://schema.org/NewCondition",
            seller: {
                "@type": "Organization",
                name: "Cheap Digital Subscriptions",
            },
        },
        aggregateRating: {
            "@type": "AggregateRating",
            ratingValue,
            bestRating: 5,
            worstRating: 1,
            reviewCount,
        },
        additionalProperty: features.map((feature) => ({
            "@type": "PropertyValue",
            name: "Feature",
            value: feature,
        })),
    };
    return <JsonLdScript data={data} />;
}

// ─── Local Business / Service Schema ─────────────────────────────────
export function ServiceSchema() {
    const data = {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Discounted E-Learning Subscriptions",
        provider: {
            "@type": "Organization",
            name: "Cheap Digital Subscriptions",
            url: BASE_URL,
        },
        description:
            "Access premium e-learning platforms at up to 60% off. Coursera, Udemy, edX, LinkedIn Learning, Skillshare, and more.",
        serviceType: "E-Learning Subscription Reseller",
        areaServed: {
            "@type": "Place",
            name: "Worldwide",
        },
        offers: {
            "@type": "AggregateOffer",
            priceCurrency: "USD",
            lowPrice: "6",
            highPrice: "24",
            offerCount: "10",
        },
    };
    return <JsonLdScript data={data} />;
}

// ─── WebPage Schema ──────────────────────────────────────────────────
interface WebPageSchemaProps {
    title: string;
    description: string;
    url: string;
}

export function WebPageSchema({ title, description, url }: WebPageSchemaProps) {
    const data = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: title,
        description,
        url: `${BASE_URL}${url}`,
        isPartOf: {
            "@type": "WebSite",
            name: "Cheap Digital Subscriptions",
            url: BASE_URL,
        },
    };
    return <JsonLdScript data={data} />;
}
