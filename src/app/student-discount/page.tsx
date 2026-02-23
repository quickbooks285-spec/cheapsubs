import { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { HeroSection } from "@/components/sections/HeroSection";
import { GraduationCap, Percent, Clock, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
    title: "Student Discount — Extra 15% Off Subscriptions | CDS",
    description:
        "Verified students get an additional 15% off our already discounted prices. Save on Coursera, Udemy, and more with your .edu email.",
    alternates: {
        canonical: "https://cheapdigitalsubscriptions.com/student-discount",
    },
    keywords: ["student discount", "education discount", "cheap courses for students", "university learning discount"],
    openGraph: {
        title: "Student Discount — Extra 15% Off Subscriptions | CDS",
        description: "Verified students get an additional 15% off our already discounted prices. Save on Coursera, Udemy, and more with your .edu email.",
    },
    twitter: {
        card: "summary_large_image",
        title: "Student Discount — Extra 15% Off Subscriptions | CDS",
        description: "Verified students get an additional 15% off our already discounted prices. Save on Coursera, Udemy, and more with your .edu email.",
    },
};

const benefits = [
    {
        icon: <Percent className="w-6 h-6 text-white" />,
        title: "Extra 15% Off",
        description: "Stack our already discounted prices with an additional 15% student discount on any subscription plan.",
    },
    {
        icon: <GraduationCap className="w-6 h-6 text-white" />,
        title: "All Platforms Included",
        description: "Your student discount applies to all 10 e-learning platforms we offer — from Coursera to MasterClass.",
    },
    {
        icon: <Clock className="w-6 h-6 text-white" />,
        title: "4-Year Eligibility",
        description: "Your student discount is valid for the duration of your studies, up to 4 years from verification.",
    },
    {
        icon: <ShieldCheck className="w-6 h-6 text-white" />,
        title: "Easy Verification",
        description: "Simply verify your student status with a valid .edu email or student ID. Approval within 24 hours.",
    },
];

const eligibility = [
    "Currently enrolled in a college, university, or accredited institution",
    "Have a valid .edu email address or student ID",
    "Enrolled in a full-time or part-time degree program",
    "International students are welcome",
];

export default function StudentDiscountPage() {
    return (
        <>
            <HeroSection
                variant="small"
                badge="Students Save More"
                title="Student Discount"
                subtitle="We believe education should be affordable for everyone. Students get an extra 15% off all our already-discounted plans."
            />

            <section className="py-16 md:py-24">
                <Container>
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

                    <div className="max-w-2xl mx-auto">
                        <h2 className="text-2xl font-bold text-center mb-8" style={{ color: "oklch(0.20 0.05 250)" }}>
                            Who&apos;s Eligible?
                        </h2>
                        <div className="space-y-4 mb-16">
                            {eligibility.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-4 px-5 py-4 rounded-xl border border-neutral-200/60 bg-white"
                                >
                                    <span
                                        className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0"
                                        style={{ backgroundColor: "oklch(0.63 0.18 250)" }}
                                    >
                                        ✓
                                    </span>
                                    <span className="text-sm font-medium" style={{ color: "oklch(0.30 0.05 250)" }}>{item}</span>
                                </div>
                            ))}
                        </div>

                        <div
                            className="text-center p-8 md:p-12 rounded-2xl"
                            style={{ background: "linear-gradient(135deg, oklch(0.95 0.04 250), oklch(0.97 0.02 250))" }}
                        >
                            <h3 className="text-xl font-bold mb-3" style={{ color: "oklch(0.20 0.05 250)" }}>
                                Claim Your Student Discount
                            </h3>
                            <p className="text-sm mb-6" style={{ color: "oklch(0.45 0.012 250)" }}>
                                Verify your student status and start saving even more on premium e-learning subscriptions.
                            </p>
                            <a
                                href="/contact"
                                className="inline-flex items-center justify-center px-8 py-3 rounded-xl text-white font-semibold transition-all duration-300 hover:-translate-y-0.5 shadow-md hover:shadow-lg"
                                style={{ backgroundColor: "oklch(0.63 0.18 250)" }}
                            >
                                Verify Student Status
                            </a>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    );
}
