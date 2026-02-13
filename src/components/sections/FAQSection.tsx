"use client";

import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import type { FAQ } from "@/data/platforms";

interface FAQSectionProps {
    title: string;
    subtitle?: string;
    faqs: FAQ[];
    className?: string;
}

export function FAQSection({ title, subtitle, faqs, className }: FAQSectionProps) {
    return (
        <section className={cn("py-20 md:py-28", className)}>
            <Container>
                <SectionHeading title={title} subtitle={subtitle} />
                <div className="max-w-3xl mx-auto">
                    <Accordion type="single" collapsible className="space-y-3">
                        {faqs.map((faq, index) => (
                            <AccordionItem
                                key={index}
                                value={`faq-${index}`}
                                className="bg-white border border-neutral-200/60 rounded-xl px-6 shadow-[0_1px_3px_oklch(0.63_0.18_250_/_0.04)] data-[state=open]:shadow-lg transition-shadow duration-300"
                            >
                                <AccordionTrigger
                                    className="text-left text-[15px] font-semibold hover:no-underline py-5"
                                    style={{ color: "oklch(0.20 0.05 250)" }}
                                >
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-sm leading-relaxed pb-5" style={{ color: "oklch(0.45 0.012 250)" }}>
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </Container>
        </section>
    );
}
