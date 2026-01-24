"use client";

import Link from "next/link";
import { IconLinkedIn, IconTwitter, IconGitHub } from "@/components/ui/Icons";
import {
    SITE_CONFIG,
    CONTACT,
    SOCIAL_LINKS,
    EXTERNAL_LINKS,
    INTERNAL_SECTIONS,
} from "@/constants";
import type { NavLink, SocialLink } from "@/types";

const FOOTER_LINKS = {
    company: [
        { label: "About Us", href: INTERNAL_SECTIONS.about },
        { label: "Our Process", href: INTERNAL_SECTIONS.process },
        { label: "Careers", href: EXTERNAL_LINKS.careers },
    ] as NavLink[],
    products: [
        { label: "TruckFlow", href: INTERNAL_SECTIONS.products },
        { label: "Custom Solutions", href: INTERNAL_SECTIONS.services },
    ] as NavLink[],
    resources: [
        { label: "Blog", href: EXTERNAL_LINKS.blog },
        { label: "Documentation", href: EXTERNAL_LINKS.documentation },
        { label: "Support", href: `mailto:${CONTACT.supportEmail}` },
    ] as NavLink[],
};

const SOCIAL_LINK_DATA: SocialLink[] = [
    {
        label: "LinkedIn",
        href: SOCIAL_LINKS.linkedin,
        icon: <IconLinkedIn />,
    },
    {
        label: "Twitter",
        href: SOCIAL_LINKS.twitter,
        icon: <IconTwitter />,
    },
    {
        label: "GitHub",
        href: SOCIAL_LINKS.github,
        icon: <IconGitHub />,
    },
];

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    const handleNavClick = (
        e: React.MouseEvent<HTMLAnchorElement>,
        href: string
    ) => {
        if (href.startsWith("#")) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: "smooth" });
            }
        }
    };

    return (
        <footer className="border-t border-white/10 bg-[#050508]">
            <div className="section-container py-16">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
                    {/* Brand */}
                    <div className="col-span-2 lg:col-span-2">
                        <Link href="/" className="flex items-center mb-4">
                            <img
                                className="h-8 w-auto"
                                src="/images/logo.jpeg"
                                alt={`${SITE_CONFIG.name} Logo`}
                            />
                        </Link>
                        <p className="text-white/60 text-sm mb-6 max-w-xs">
                            {SITE_CONFIG.tagline} {SITE_CONFIG.description}
                        </p>
                        {/* Social Links */}
                        <div className="flex gap-3">
                            {SOCIAL_LINK_DATA.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-colors"
                                    aria-label={social.label}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Company</h4>
                        <ul className="space-y-3">
                            {FOOTER_LINKS.company.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        onClick={(e) => handleNavClick(e, link.href)}
                                        className="text-white/60 hover:text-white text-sm transition-colors"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Products Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Products</h4>
                        <ul className="space-y-3">
                            {FOOTER_LINKS.products.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        onClick={(e) => handleNavClick(e, link.href)}
                                        className="text-white/60 hover:text-white text-sm transition-colors"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Resources</h4>
                        <ul className="space-y-3">
                            {FOOTER_LINKS.resources.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        onClick={(e) => handleNavClick(e, link.href)}
                                        className="text-white/60 hover:text-white text-sm transition-colors"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="text-white/40 text-sm">
                        © {currentYear} {SITE_CONFIG.name} Enterprises. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-sm">
                        <a
                            href={EXTERNAL_LINKS.privacy}
                            className="text-white/40 hover:text-white/60 transition-colors"
                        >
                            Privacy Policy
                        </a>
                        <a
                            href={EXTERNAL_LINKS.terms}
                            className="text-white/40 hover:text-white/60 transition-colors"
                        >
                            Terms of Service
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
