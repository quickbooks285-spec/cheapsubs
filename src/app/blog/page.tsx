import { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { HeroSection } from "@/components/sections/HeroSection";
import Link from "next/link";

export const metadata: Metadata = {
    title: "E-Learning Blog — Tips, Guides & Industry News | CDS",
    description:
        "Explore expert tips, courses guides, and platform comparisons. Stay ahead in your career with insights from Cheap Digital Subscriptions.",
};

const blogPosts = [
    {
        title: "Top 10 Coursera Courses for Career Advancement in 2026",
        excerpt: "Discover the most impactful Coursera courses that can accelerate your career growth, from data science to digital marketing.",
        date: "Feb 10, 2026",
        category: "Guides",
        readTime: "6 min read",
        slug: "#",
    },
    {
        title: "How to Maximize Your LinkedIn Learning Subscription",
        excerpt: "Learn proven strategies to get the most out of your LinkedIn Learning account, including hidden features most users miss.",
        date: "Feb 5, 2026",
        category: "Tips",
        readTime: "5 min read",
        slug: "#",
    },
    {
        title: "Udemy vs Coursera: Which Platform Is Right for You?",
        excerpt: "A comprehensive comparison of two leading e-learning platforms to help you choose the best fit for your learning goals.",
        date: "Jan 28, 2026",
        category: "Comparison",
        readTime: "8 min read",
        slug: "#",
    },
    {
        title: "5 High-Income Skills You Can Learn Online in 2026",
        excerpt: "From AI and machine learning to cybersecurity, these are the skills employers are willing to pay top dollar for.",
        date: "Jan 20, 2026",
        category: "Career",
        readTime: "7 min read",
        slug: "#",
    },
    {
        title: "Complete Guide to Getting Professional Certificates Online",
        excerpt: "Everything you need to know about earning recognized professional certificates from platforms like Coursera, edX, and more.",
        date: "Jan 15, 2026",
        category: "Guides",
        readTime: "10 min read",
        slug: "#",
    },
    {
        title: "Why Group Licensing Makes E-Learning Affordable",
        excerpt: "Understand how CDS negotiates group licensing deals to bring you premium subscriptions at a fraction of the retail price.",
        date: "Jan 8, 2026",
        category: "Company",
        readTime: "4 min read",
        slug: "#",
    },
];

const categoryColors: Record<string, string> = {
    Guides: "oklch(0.55 0.18 250)",
    Tips: "oklch(0.55 0.16 155)",
    Comparison: "oklch(0.60 0.20 25)",
    Career: "oklch(0.55 0.16 330)",
    Company: "oklch(0.55 0.15 230)",
};

export default function BlogPage() {
    return (
        <>
            <HeroSection
                variant="small"
                badge="Blog"
                title="E-Learning Tips & Insights"
                subtitle="Expert guides, platform reviews, and strategies to accelerate your learning journey while saving money."
            />

            <section className="py-16 md:py-24">
                <Container>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.map((post, index) => (
                            <Link
                                key={index}
                                href={post.slug}
                                className="group rounded-2xl border border-neutral-200/60 bg-white p-6 transition-all duration-300 hover:shadow-[0_8px_30px_oklch(0.63_0.18_250_/_0.1)] hover:border-primary-200 hover:-translate-y-1"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <span
                                        className="px-3 py-1 rounded-full text-xs font-semibold text-white"
                                        style={{ backgroundColor: categoryColors[post.category] || "oklch(0.55 0.18 250)" }}
                                    >
                                        {post.category}
                                    </span>
                                    <span className="text-xs" style={{ color: "oklch(0.55 0.02 250)" }}>{post.readTime}</span>
                                </div>
                                <h3
                                    className="text-lg font-bold mb-2 group-hover:text-primary-600 transition-colors line-clamp-2"
                                    style={{ color: "oklch(0.20 0.05 250)" }}
                                >
                                    {post.title}
                                </h3>
                                <p className="text-sm leading-relaxed mb-4 line-clamp-3" style={{ color: "oklch(0.45 0.012 250)" }}>
                                    {post.excerpt}
                                </p>
                                <span className="text-xs font-medium" style={{ color: "oklch(0.55 0.02 250)" }}>{post.date}</span>
                            </Link>
                        ))}
                    </div>
                </Container>
            </section>
        </>
    );
}
