import Link from "next/link";
import { Container } from "./Container";
import { Separator } from "@/components/ui/separator";

const footerLinks = {
    platforms: {
        title: "Platforms",
        links: [
            { href: "/subscriptions/coursera", label: "Coursera" },
            { href: "/subscriptions/udemy", label: "Udemy" },
            { href: "/subscriptions/edx", label: "edX" },
            { href: "/subscriptions/linkedin-learning", label: "LinkedIn Learning" },
            { href: "/subscriptions/skillshare", label: "Skillshare" },
            { href: "/subscriptions/pluralsight", label: "Pluralsight" },
            { href: "/subscriptions/datacamp", label: "DataCamp" },
            { href: "/subscriptions/codecademy", label: "Codecademy" },
            { href: "/subscriptions/masterclass", label: "MasterClass" },
            { href: "/subscriptions/futurelearn", label: "FutureLearn" },
        ],
    },
    company: {
        title: "Company",
        links: [
            { href: "/about", label: "About Us" },
            { href: "/contact", label: "Contact" },
            { href: "/privacy-policy", label: "Privacy Policy" },
            { href: "/terms-of-service", label: "Terms of Service" },
        ],
    },
    resources: {
        title: "Resources",
        links: [
            { href: "/blog", label: "Blog" },
            { href: "/help-center", label: "Help Center" },
            { href: "/refer-a-friend", label: "Refer a Friend" },
            { href: "/affiliate-program", label: "Affiliate Program" },
            { href: "/student-discount", label: "Student Discount" },
        ],
    },
};

export function Footer() {
    return (
        <footer className="bg-neutral-950 text-neutral-300 pt-16 pb-8">
            <Container>
                {/* Top section */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-12">
                    {/* Brand column */}
                    <div className="col-span-2 md:col-span-1">
                        <Link href="/" className="flex items-center gap-2.5 mb-4">
                            <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-primary-500 text-white font-black text-sm tracking-tighter">
                                CDS
                            </div>
                            <span className="text-lg font-bold text-white tracking-tight leading-tight">
                                Cheap Digital<br /><span style={{ color: "oklch(0.63 0.18 250)" }}>Subscriptions</span>
                            </span>
                        </Link>
                        <p className="text-sm leading-relaxed text-neutral-400 mb-6">
                            Premium e-learning subscriptions at a fraction of the price. Save up to 60% on the world&apos;s top platforms.
                        </p>
                        {/* Social icons */}
                        <div className="flex items-center gap-3">
                            {["Twitter", "LinkedIn", "GitHub", "YouTube"].map((social) => (
                                <a
                                    key={social}
                                    href="#"
                                    className="flex items-center justify-center w-9 h-9 rounded-full bg-neutral-800 hover:bg-primary-500 text-neutral-400 hover:text-white transition-all duration-200"
                                    aria-label={social}
                                >
                                    <span className="text-xs font-bold">{social[0]}</span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Link columns */}
                    {Object.values(footerLinks).map((section) => (
                        <div key={section.title}>
                            <h4 className="text-sm font-semibold text-white mb-4">{section.title}</h4>
                            <ul className="space-y-2.5">
                                {section.links.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            href={link.href}
                                            className="text-sm text-neutral-400 hover:text-primary-400 transition-colors duration-200"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <Separator className="bg-neutral-800" />

                {/* Bottom section */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8">
                    <p className="text-xs text-neutral-500">
                        © {new Date().getFullYear()} Cheap Digital Subscriptions. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        <Link href="#" className="text-xs text-neutral-500 hover:text-neutral-300 transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="#" className="text-xs text-neutral-500 hover:text-neutral-300 transition-colors">
                            Terms of Service
                        </Link>
                        <Link href="#" className="text-xs text-neutral-500 hover:text-neutral-300 transition-colors">
                            Cookies
                        </Link>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
