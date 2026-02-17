"use client";
import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const container = useRef<HTMLElement | null>(null);
const logoRef = useRef<HTMLDivElement | null>(null);
const columnsRef = useRef<HTMLDivElement | null>(null);
const dividerRef = useRef<HTMLDivElement | null>(null);
const bottomRef = useRef<HTMLDivElement | null>(null);


  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });

    tl.from(logoRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    })
      .from(
        Array.from(columnsRef.current!.children),

        {
          y: 60,
          opacity: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
        },
        "-=0.6"
      )
      .from(
        dividerRef.current,
        {
          scaleX: 0,
          duration: 0.8,
          ease: "power2.out",
          transformOrigin: "center",
        },
        "-=0.5"
      )
      .from(
        bottomRef.current,
        {
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.5"
      );
  }, { scope: container });

  return (
    <footer ref={container} className="bg-black text-white py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          
          {/* Logo */}
          <div
            ref={logoRef}
            className="md:col-span-4 flex flex-col items-start uppercase w-fit"
          >
            <h1 className="text-3xl font-[leaner] leading-none">
              TRIVARA
            </h1>
            <span className="text-[9px] tracking-[0.2em] mt-2 font-[leaner] text-white self-center">
              ENTERPRISE
            </span>
          </div>

          {/* Columns */}
          <div
            ref={columnsRef}
            className="md:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-8 md:justify-items-end"
          >
            {/* Product */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Product</h3>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li><Link href="#" className="hover:text-white transition">Overview</Link></li>
                <li><Link href="#" className="hover:text-white transition">Features</Link></li>
                <li><Link href="#" className="hover:text-white transition">Integrations</Link></li>
                <li><Link href="#" className="hover:text-white transition">Security</Link></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Company</h3>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li><Link href="#" className="hover:text-white transition">About Us</Link></li>
                <li><Link href="#" className="hover:text-white transition">Why Trivara</Link></li>
                <li><Link href="#" className="hover:text-white transition">Customers</Link></li>
                <li><Link href="#" className="hover:text-white transition">Careers</Link></li>
                <li><Link href="#" className="hover:text-white transition">Contact</Link></li>
                <li><Link href="#" className="hover:text-white transition">Partners</Link></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Resources</h3>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li><Link href="#" className="hover:text-white transition">Documentation</Link></li>
                <li><Link href="#" className="hover:text-white transition">API Reference</Link></li>
                <li><Link href="#" className="hover:text-white transition">Help Center</Link></li>
                <li><Link href="#" className="hover:text-white transition">Blog</Link></li>
                <li><Link href="#" className="hover:text-white transition">Case Studies</Link></li>
                <li><Link href="#" className="hover:text-white transition">FAQs</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          ref={dividerRef}
          className="h-[1px] w-full bg-gradient-to-r from-transparent via-gray-600 to-transparent mb-8"
        />

        {/* Bottom */}
        <div
          ref={bottomRef}
          className="flex flex-col md:flex-row justify-between items-center text-[12px] text-gray-500"
        >
          <p>© 2024 Trivara Enterprises. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
