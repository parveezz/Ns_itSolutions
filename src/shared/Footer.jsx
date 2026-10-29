import { useState } from "react";
import { Link } from "react-router-dom";
import {
    ArrowRight,
    Mail,
    Phone,
    MapPin,
    Globe,
    CheckCircle2,
} from "lucide-react";
import {
    FaLinkedinIn as Linkedin,
    FaInstagram as Instagram,
    FaGithub as Github,
} from "react-icons/fa";
import Input from "./Input";

const footerLinks = {
    Explore: [
        { label: "Home", href: "/" },
        { label: "About Us", href: "/about" },
        { label: "Industries", href: "/industries" },
        { label: "Insights", href: "/insights" },
    ],
    Services: [
        { label: "Web Development", href: "#web-development" },
        { label: "Mobile App Development", href: "#mobile-development" },
        { label: "UI/UX Design", href: "#ui-ux-design" },
        { label: "IT Consulting", href: "#it-consulting" },
    ],
    Company: [
        { label: "Our Story", href: "/about" },
        { label: "Careers", href: "/contact" },
        { label: "Contact Us", href: "/contact" },
        { label: "Privacy Policy", href: "#privacy" },
    ],
};

const socialLinks = [
    {
        label: "LinkedIn",
        href: "#linkedin",
        icon: Linkedin,
    },
    {
        label: "Instagram",
        href: "#instagram",
        icon: Instagram,
    },
    {
        label: "GitHub",
        href: "#github",
        icon: Github,
    },
];

export default function Footer() {
    const currentYear = new Date().getFullYear();
    const [newsletterEmail, setNewsletterEmail] = useState("");
    const [isSubscribed, setIsSubscribed] = useState(false);

    const handleNewsletterSubmit = (e) => {
        e.preventDefault();
        if (newsletterEmail) {
            setIsSubscribed(true);
            setNewsletterEmail("");
            setTimeout(() => setIsSubscribed(false), 5000);
        }
    };

    return (
        <footer className="relative isolate overflow-hidden bg-black text-white">
            {/* ─── Ambient Bottom Black Gradient Overlay (Matching Hero) ─── */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-t from-black via-black/80 to-transparent"
            />

            <div className="mx-auto max-w-[1520px] px-6 sm:px-10 lg:px-16">
                {/* ─── Newsletter Section ─── */}
                <div className="border-b border-white/10 py-12 sm:py-14 lg:py-16">
                    <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
                        <div className="lg:col-span-6 xl:col-span-7">
                            <span className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-400">
                                Newsletter
                            </span>
                            <h3 className="mt-2 text-2xl font-light tracking-tight text-white sm:text-3xl lg:text-4xl">
                                Stay connected with our latest insights.
                            </h3>
                            <p className="mt-2 text-sm text-white/60 font-light max-w-xl">
                                Subscribe to receive our curated updates on emerging technologies, enterprise software trends, and innovation.
                            </p>
                        </div>

                        <div className="lg:col-span-6 xl:col-span-5">
                            <form
                                onSubmit={handleNewsletterSubmit}
                                className="flex flex-col gap-3 sm:flex-row sm:items-start"
                            >
                                <div className="flex-1">
                                    <Input
                                        type="email"
                                        id="newsletterEmail"
                                        name="newsletterEmail"
                                        required
                                        placeholder="Enter your email address"
                                        value={newsletterEmail}
                                        onChange={(e) => setNewsletterEmail(e.target.value)}
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="inline-flex h-[48px] sm:h-[52px] shrink-0 cursor-pointer items-center justify-center gap-2 rounded-lg bg-[#0d9488] px-7 text-xs font-medium tracking-wide text-white transition-colors duration-300 hover:bg-[#0f766e] focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-black sm:text-sm"
                                >
                                    <span>Subscribe</span>
                                    <ArrowRight size={15} />
                                </button>
                            </form>

                            {isSubscribed && (
                                <div className="mt-3 flex items-center gap-2 text-xs text-cyan-400 animate-in fade-in duration-200">
                                    <CheckCircle2 size={14} />
                                    <span>Thank you for subscribing! We'll keep you updated.</span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Main footer content */}
                <div className="grid grid-cols-1 gap-12 border-b border-white/10 py-14 sm:py-16 lg:grid-cols-12 lg:gap-10 lg:py-20">
                    {/* Brand and description */}
                    <div className="lg:col-span-4">
                        <a
                            href="#home"
                            aria-label="Go to homepage"
                            className="inline-flex items-center gap-2.5 text-xl sm:text-2xl font-bold uppercase tracking-[0.2em] text-white transition-opacity hover:opacity-80"
                        >
                            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-400">
                                <Globe size={18} />
                            </span>
                            <span>YOUR COMPANY</span>
                        </a>

                        <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/70 font-normal sm:text-base">
                            We turn ideas into meaningful digital experiences through
                            thoughtful design, modern technology, and innovative solutions.
                        </p>

                        {/* Social links */}
                        <div className="mt-7 flex items-center gap-3">
                            {socialLinks.map(({ label, href, icon: Icon }) => (
                                <a
                                    key={label}
                                    href={href}
                                    aria-label={label}
                                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/60 transition-all duration-200 hover:border-cyan-400/50 hover:bg-cyan-400/10 hover:text-cyan-400 cursor-pointer"
                                >
                                    <Icon size={16} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Navigation columns */}
                    <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:col-span-5">
                        {Object.entries(footerLinks).map(([heading, links]) => (
                            <div key={heading}>
                                <h3 className="mb-5 text-xs font-medium uppercase tracking-[0.2em] text-white">
                                    {heading}
                                </h3>

                                <ul className="space-y-3.5">
                                    {links.map((link) => (
                                        <li key={link.label}>
                                            <Link
                                                to={link.href}
                                                className="inline-flex items-center gap-1 text-sm font-light text-white/60 transition-colors hover:text-white"
                                            >
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Contact details */}
                    <div className="lg:col-span-3">
                        <h3 className="mb-5 text-xs font-medium uppercase tracking-[0.2em] text-white">
                            Get in Touch
                        </h3>

                        <div className="space-y-4">
                            <a
                                href="mailto:your-email@example.com"
                                className="group flex items-start gap-3"
                            >
                                <Mail
                                    size={17}
                                    className="mt-0.5 shrink-0 text-cyan-400"
                                />
                                <span className="break-all text-sm font-light text-white/60 transition-colors group-hover:text-white">
                                    your-email@example.com
                                </span>
                            </a>

                            <a
                                href="tel:+910000000000"
                                className="group flex items-start gap-3"
                            >
                                <Phone
                                    size={17}
                                    className="mt-0.5 shrink-0 text-cyan-400"
                                />
                                <span className="text-sm font-light text-white/60 transition-colors group-hover:text-white">
                                    +91 00000 00000
                                </span>
                            </a>

                            <div className="flex items-start gap-3">
                                <MapPin
                                    size={17}
                                    className="mt-0.5 shrink-0 text-cyan-400"
                                />
                                <span className="text-sm font-light leading-6 text-white/60">
                                    Your office address goes here
                                </span>
                            </div>
                        </div>

                        <a
                            href="#contact"
                            className="mt-7 inline-flex items-center gap-2 text-xs sm:text-sm font-medium tracking-wide text-cyan-400 transition-colors hover:text-cyan-300"
                        >
                            <span>Let's talk</span>
                            <ArrowRight
                                size={15}
                                className="transition-transform duration-200 group-hover:translate-x-1"
                            />
                        </a>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="flex flex-col gap-5 py-6 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-xs font-light leading-6 text-white/40 sm:text-sm">
                        © {currentYear} YOUR COMPANY. All rights reserved.
                    </p>

                    <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                        <a
                            href="#privacy"
                            className="text-xs font-light text-white/40 transition-colors hover:text-white sm:text-sm"
                        >
                            Privacy Policy
                        </a>

                        <a
                            href="#terms"
                            className="text-xs font-light text-white/40 transition-colors hover:text-white sm:text-sm"
                        >
                            Terms of Use
                        </a>

                        <a
                            href="#home"
                            className="text-xs font-light text-white/40 transition-colors hover:text-white sm:text-sm"
                        >
                            Back to top ↑
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
