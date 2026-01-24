"use client";

import { useState, useEffect } from "react";
import { SITE_CONFIG, getMailtoLink } from "@/config";

export const ComingSoon = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    // Countdown to launch date
    useEffect(() => {
        const targetDate = new Date(SITE_CONFIG.launchDate);

        const timer = setInterval(() => {
            const now = new Date().getTime();
            const distance = targetDate.getTime() - now;

            setTimeLeft({
                days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                hours: Math.floor(
                    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
                ),
                minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((distance % (1000 * 60)) / 1000),
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="min-h-screen bg-black flex flex-col items-center justify-center relative overflow-hidden px-4 sm:px-6">
            {/* Background gradient effect */}
            <img
                src="/images/Ellipse.png"
                alt=""
                className="pointer-events-none absolute top-1/2 left-1/2
          -translate-x-1/2 -translate-y-1/2
          w-[600px] sm:w-[800px] md:w-[1000px] max-w-none opacity-70 blur-[2px]"
            />

            {/* Logo */}
            <div className="relative z-10 mb-8 sm:mb-12">
                <img
                    className="h-12 sm:h-16 w-auto"
                    src="/images/logo.jpeg"
                    alt="Trivara"
                />
            </div>

            {/* Main content */}
            <div className="relative z-10 text-center max-w-3xl">
                {/* Coming Soon badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-600/20 to-purple-600/20 border border-indigo-500/30 mb-6 sm:mb-8">
                    <span className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse"></span>
                    <span className="text-xs sm:text-sm text-indigo-300 font-medium tracking-wide">
                        UNDER CONSTRUCTION
                    </span>
                </div>

                {/* Heading */}
                <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight text-white mb-4 sm:mb-6">
                    Something{" "}
                    <span className="bg-gradient-to-b from-[#2D00F4] via-[#5F56FB]/70 to-[#D6D0FC]/40 bg-clip-text text-transparent">
                        AMAZING
                    </span>{" "}
                    <br className="hidden sm:block" />
                    is Coming{" "}
                    <span className="bg-gradient-to-b from-[#2D00F4]/90 via-[#5F56FB]/80 to-[#D6D0FC]/90 bg-clip-text text-transparent">
                        SOON
                    </span>
                </h1>

                <p className="text-sm sm:text-base md:text-lg text-white/60 mb-8 sm:mb-12 max-w-xl mx-auto leading-relaxed">
                    We&apos;re crafting something extraordinary. Building scalable software
                    solutions that will transform how businesses operate.
                </p>

                {/* Countdown timer */}
                <div className="flex justify-center gap-3 sm:gap-6 mb-10 sm:mb-14">
                    {[
                        { label: "Days", value: timeLeft.days },
                        { label: "Hours", value: timeLeft.hours },
                        { label: "Minutes", value: timeLeft.minutes },
                        { label: "Seconds", value: timeLeft.seconds },
                    ].map((item, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <div className="relative group">
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl sm:rounded-2xl opacity-50 blur group-hover:opacity-75 transition"></div>
                                <div className="relative w-14 h-14 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-black rounded-xl sm:rounded-2xl flex items-center justify-center border border-indigo-500/20">
                                    <span className="text-xl sm:text-3xl md:text-4xl font-bold text-white">
                                        {String(item.value).padStart(2, "0")}
                                    </span>
                                </div>
                            </div>
                            <span className="mt-2 text-xs sm:text-sm text-white/50 uppercase tracking-wider">
                                {item.label}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Contact Us button */}
                <div className="max-w-md mx-auto">
                    <a
                        href={getMailtoLink("inquiry")}
                        className="inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-[#07043f] to-[#7a76c8] px-8 py-4 text-base font-medium text-white shadow-lg hover:opacity-90 hover:scale-105 transition-all duration-300"
                    >
                        <svg
                            className="w-5 h-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                        </svg>
                        Contact Us
                    </a>
                    <p className="mt-4 text-xs text-white/40">
                        Have questions? Drop us an email and we&apos;ll get back to you.
                    </p>
                </div>
            </div>

            {/* Social links */}
            <div className="relative z-10 mt-12 sm:mt-16 flex items-center gap-6">
                <a
                    href={SITE_CONFIG.socials.twitter}
                    className="text-white/40 hover:text-indigo-400 transition"
                    aria-label="Twitter"
                >
                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                </a>
                <a
                    href={SITE_CONFIG.socials.linkedin}
                    className="text-white/40 hover:text-indigo-400 transition"
                    aria-label="LinkedIn"
                >
                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                </a>
                <a
                    href={SITE_CONFIG.socials.instagram}
                    className="text-white/40 hover:text-indigo-400 transition"
                    aria-label="Instagram"
                >
                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                </a>
            </div>

            {/* Footer */}
            <div className="relative z-10 mt-8 sm:mt-12 text-center">
                <p className="text-xs sm:text-sm text-white/30">
                    © {SITE_CONFIG.copyrightYear} {SITE_CONFIG.companyName}. All rights reserved.
                </p>
            </div>
        </div>
    );
};
