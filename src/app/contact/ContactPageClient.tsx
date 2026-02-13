"use client";

import { useState } from "react";
import { Container } from "@/components/layout/Container";
import { FAQSection } from "@/components/sections/FAQSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MessageSquare, Clock, Send } from "lucide-react";

const contactInfo = [
    {
        icon: <Mail className="w-5 h-5" style={{ color: "oklch(0.63 0.18 250)" }} />,
        title: "Email Us",
        detail: "support@cheapdigitalsubs.com",
        subtitle: "We'll respond within 24 hours",
    },
    {
        icon: <MessageSquare className="w-5 h-5" style={{ color: "oklch(0.63 0.18 250)" }} />,
        title: "Live Chat",
        detail: "Available on our website",
        subtitle: "Mon-Fri, 9AM-6PM EST",
    },
    {
        icon: <Clock className="w-5 h-5" style={{ color: "oklch(0.63 0.18 250)" }} />,
        title: "Response Time",
        detail: "Under 4 hours",
        subtitle: "For priority support members",
    },
];

const supportFAQs = [
    {
        question: "How do I get started after payment?",
        answer: "After payment confirmation, you'll receive your subscription credentials via email within 2-4 hours. The email includes step-by-step instructions for setting up your account on the chosen platform.",
    },
    {
        question: "What if I have issues with my account?",
        answer: "Contact us immediately via email or live chat. Our support team will troubleshoot and resolve any account issues within 24 hours, often much sooner.",
    },
    {
        question: "Can I request a specific platform not listed?",
        answer: "Yes! We're always expanding our platform partnerships. Use the contact form to submit a request, and we'll look into adding it to our offerings.",
    },
    {
        question: "Do you offer refunds?",
        answer: "We offer a 7-day money-back guarantee on all plans. If you're not satisfied, contact us within 7 days of purchase for a full refund.",
    },
    {
        question: "Can I upgrade or downgrade my plan?",
        answer: "Absolutely! You can change your plan at any time. Upgrades take effect immediately, and downgrades apply at the next billing cycle. Contact our team for assistance.",
    },
];

export function ContactPageClient() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Thank you! Your message has been sent. We'll get back to you within 24 hours.");
        setFormData({ name: "", email: "", subject: "", message: "" });
    };

    return (
        <>
            {/* Hero */}
            <section className="relative pt-28 pb-14 md:pt-36 md:pb-20 overflow-hidden">
                <div
                    className="absolute inset-0 -z-10"
                    style={{
                        background: `
              radial-gradient(ellipse 80% 60% at 50% -20%, oklch(0.87 0.08 250 / 0.4), transparent),
              linear-gradient(180deg, oklch(0.99 0.003 250), oklch(0.97 0.02 250 / 0.3))
            `,
                    }}
                />
                <Container className="text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-50 border border-primary-200 mb-6">
                        <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
                        <span className="text-xs font-semibold tracking-wide text-primary-700">We&apos;re here to help</span>
                    </div>
                    <h1
                        className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4"
                        style={{ color: "oklch(0.20 0.05 250)" }}
                    >
                        Get in Touch
                    </h1>
                    <p
                        className="text-base md:text-lg leading-relaxed max-w-2xl mx-auto"
                        style={{ color: "oklch(0.45 0.012 250)" }}
                    >
                        Have a question, need help with your subscription, or want to explore custom plans?
                        We&apos;d love to hear from you.
                    </p>
                </Container>
            </section>

            {/* Contact Form + Info */}
            <section className="pb-20 md:pb-28">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                        {/* Contact Form */}
                        <div className="lg:col-span-2">
                            <form
                                onSubmit={handleSubmit}
                                className="bg-white rounded-2xl p-8 border border-neutral-200/60 shadow-[0_1px_3px_oklch(0.63_0.18_250_/_0.06),_0_4px_12px_oklch(0.63_0.18_250_/_0.04)]"
                            >
                                <h2
                                    className="text-xl font-bold mb-6"
                                    style={{ color: "oklch(0.20 0.05 250)" }}
                                >
                                    Send Us a Message
                                </h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                                    <div className="space-y-2">
                                        <Label htmlFor="name" className="text-sm font-medium" style={{ color: "oklch(0.28 0.08 250)" }}>
                                            Full Name
                                        </Label>
                                        <Input
                                            id="name"
                                            placeholder="John Doe"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            required
                                            className="py-5 rounded-xl border-neutral-200 focus:border-primary-400 focus:ring-primary-400/20"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="email" className="text-sm font-medium" style={{ color: "oklch(0.28 0.08 250)" }}>
                                            Email Address
                                        </Label>
                                        <Input
                                            id="email"
                                            type="email"
                                            placeholder="john@example.com"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            required
                                            className="py-5 rounded-xl border-neutral-200 focus:border-primary-400 focus:ring-primary-400/20"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2 mb-5">
                                    <Label htmlFor="subject" className="text-sm font-medium" style={{ color: "oklch(0.28 0.08 250)" }}>
                                        Subject
                                    </Label>
                                    <Input
                                        id="subject"
                                        placeholder="How can we help?"
                                        value={formData.subject}
                                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                        required
                                        className="py-5 rounded-xl border-neutral-200 focus:border-primary-400 focus:ring-primary-400/20"
                                    />
                                </div>
                                <div className="space-y-2 mb-6">
                                    <Label htmlFor="message" className="text-sm font-medium" style={{ color: "oklch(0.28 0.08 250)" }}>
                                        Message
                                    </Label>
                                    <Textarea
                                        id="message"
                                        placeholder="Tell us more about your question or request..."
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        required
                                        rows={5}
                                        className="rounded-xl border-neutral-200 focus:border-primary-400 focus:ring-primary-400/20 resize-none"
                                    />
                                </div>
                                <Button
                                    type="submit"
                                    className="w-full sm:w-auto bg-primary-500 hover:bg-primary-600 text-white font-semibold px-8 py-5 rounded-xl shadow-[0_4px_14px_oklch(0.63_0.18_250_/_0.3)] hover:shadow-[0_6px_20px_oklch(0.63_0.18_250_/_0.4)] transition-all duration-300 group"
                                >
                                    Send Message
                                    <Send className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                                </Button>
                            </form>
                        </div>

                        {/* Contact Info Sidebar */}
                        <div className="space-y-5">
                            {contactInfo.map((info, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-2xl p-6 border border-neutral-200/60 shadow-[0_1px_3px_oklch(0.63_0.18_250_/_0.06),_0_4px_12px_oklch(0.63_0.18_250_/_0.04)]"
                                >
                                    <div
                                        className="flex items-center justify-center w-10 h-10 rounded-xl mb-3"
                                        style={{ backgroundColor: "oklch(0.97 0.02 250)" }}
                                    >
                                        {info.icon}
                                    </div>
                                    <h3
                                        className="text-base font-bold mb-1"
                                        style={{ color: "oklch(0.20 0.05 250)" }}
                                    >
                                        {info.title}
                                    </h3>
                                    <p
                                        className="text-sm font-medium mb-0.5"
                                        style={{ color: "oklch(0.63 0.18 250)" }}
                                    >
                                        {info.detail}
                                    </p>
                                    <p className="text-xs" style={{ color: "oklch(0.55 0.01 250)" }}>
                                        {info.subtitle}
                                    </p>
                                </div>
                            ))}

                            {/* Social links */}
                            <div
                                className="bg-white rounded-2xl p-6 border border-neutral-200/60 shadow-[0_1px_3px_oklch(0.63_0.18_250_/_0.06),_0_4px_12px_oklch(0.63_0.18_250_/_0.04)]"
                            >
                                <h3
                                    className="text-base font-bold mb-3"
                                    style={{ color: "oklch(0.20 0.05 250)" }}
                                >
                                    Follow Us
                                </h3>
                                <div className="flex items-center gap-3">
                                    {["Twitter", "LinkedIn", "Instagram", "YouTube"].map((social) => (
                                        <a
                                            key={social}
                                            href="#"
                                            className="flex items-center justify-center w-10 h-10 rounded-full transition-all duration-200 hover:scale-110"
                                            style={{
                                                backgroundColor: "oklch(0.97 0.02 250)",
                                                color: "oklch(0.45 0.012 250)",
                                            }}
                                            aria-label={social}
                                        >
                                            <span className="text-xs font-bold">{social[0]}</span>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            <FAQSection
                title="Support FAQ"
                subtitle="Quick answers to common support questions."
                faqs={supportFAQs}
            />
        </>
    );
}
