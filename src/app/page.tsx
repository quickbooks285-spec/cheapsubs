import { HeroSection } from "@/components/sections/HeroSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { PlatformGrid } from "@/components/sections/PlatformGrid";
import { FeaturesSection } from "@/components/sections/FeaturesSection";

import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { PlatformSelector } from "@/components/sections/PlatformSelector";
import { platforms, generalTestimonials, generalFAQs } from "@/data/platforms";
import {
  Percent, Zap, ShieldCheck, Headphones,
} from "lucide-react";

const featuredPlatforms = platforms.slice(0, 6);

const whyChooseUs = [
  {
    icon: <Percent className="w-6 h-6" style={{ color: "oklch(0.63 0.18 250)" }} />,
    title: "Save Up to 60%",
    description: "Access premium platforms at a fraction of the retail price. We negotiate group licenses so you save big.",
  },
  {
    icon: <Zap className="w-6 h-6" style={{ color: "oklch(0.63 0.18 250)" }} />,
    title: "Instant Access",
    description: "Get your subscription credentials within 2-4 hours. No waiting, no complicated setup process.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6" style={{ color: "oklch(0.63 0.18 250)" }} />,
    title: "100% Legitimate",
    description: "All subscriptions are officially licensed. Same features, certificates, and experience as direct accounts.",
  },
  {
    icon: <Headphones className="w-6 h-6" style={{ color: "oklch(0.63 0.18 250)" }} />,
    title: "24/7 Support",
    description: "Our dedicated support team is always available to help with account setup, troubleshooting, or questions.",
  },
];


const stats = [
  { value: "50K+", label: "Active Learners" },
  { value: "10", label: "Premium Platforms" },
  { value: "60%", label: "Average Savings" },
  { value: "4.9★", label: "Customer Rating" },
];

export default function HomePage() {
  return (
    <>
      <HeroSection
        badge="Save up to 60% on premium subscriptions"
        title="Premium E-Learning, Fraction of the Price"
        subtitle="Access the world's top learning platforms — Coursera, Udemy, edX, LinkedIn Learning, and more — at prices that won't break the bank. Start learning today."
      >
        <PlatformSelector />
      </HeroSection>

      <StatsSection stats={stats} />

      <PlatformGrid
        title="Top Learning Platforms"
        subtitle="Access the world's best e-learning platforms at discounted rates. Each subscription includes full access, certificates, and all premium features."
        platforms={featuredPlatforms}
      />

      <FeaturesSection
        title="Why Choose CDS?"
        subtitle="We make premium education accessible to everyone. Here's what sets us apart."
        features={whyChooseUs}
        columns={4}
      />



      <TestimonialsSection
        title="Loved by 50,000+ Learners"
        subtitle="See what our community has to say about their experience with Cheap Digital Subscriptions."
        testimonials={generalTestimonials.slice(0, 6)}
      />

      <FAQSection
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about Cheap Digital Subscriptions. Can't find an answer? Contact our support team."
        faqs={generalFAQs}
      />

      <CTASection
        title="Ready to Start Learning?"
        subtitle="Join 50,000+ learners saving on premium e-learning subscriptions. Get started in minutes."
        buttonLabel="Get Started Today"
        buttonHref="/contact"
      />
    </>
  );
}
