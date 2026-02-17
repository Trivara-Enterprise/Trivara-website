"use client";
import React from "react";
import {
  Zap,
  ShieldCheck,
  TrendingUp,
  Palette,
  Cloud,
  Cpu,
  Layers,
  Handshake,
} from "lucide-react";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}
const features = [
  {
    title: "Performance",
    description:
      "Lightning-fast applications optimized for speed. We build systems that handle enterprise scale without breaking a sweat.",
    icon: <Zap className="w-5 h-5" />,
  },
  {
    title: "Security",
    description:
      "Enterprise-grade security built into every layer. Your data is protected with industry-leading practices.",
    icon: <ShieldCheck className="w-5 h-5" />,
  },
  {
    title: "Scalability",
    description:
      "Architected for growth. From 10 to 10,000 users, our systems scale seamlessly with your organization.",
    icon: <TrendingUp className="w-5 h-5" />,
  },
  {
    title: "Clean Design",
    description:
      "Beautiful interfaces meet powerful backends. We believe great software should be a joy to use.",
    icon: <Palette className="w-5 h-5" />,
  },
  {
    title: "Future Ready",
    description:
      "Built on modern cloud technologies for flexibility, resilience, and long-term scalability. No legacy baggage.",
    icon: <Cloud className="w-5 h-5" />,
  },
  {
    title: "Custom-First Approach",
    description:
      "No templates, no shortcuts. Every solution is engineered specifically for your business workflows.",
    icon: <Cpu className="w-5 h-5" />,
  },
  {
    title: "Reliable Integrations",
    description:
      "We connect your tools, platforms, and data effortlessly—creating a unified ecosystem that works smarter.",
    icon: <Layers className="w-5 h-5" />,
  },
  {
    title: "Long-Term Partnership",
    description:
      "We don't disappear after launch. Continuous support, optimization, and improvement to keep you ahead.",
    icon: <Handshake className="w-5 h-5" />,
  },
];

export default function WhyTrivara() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const gridRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        },
      });

      tl.from(headerRef.current, {
        opacity: 0,
        y: 60,
        duration: 1,
        ease: "power3.out",
      }).from(
        Array.from(gridRef.current!.children),

        {
          opacity: 0,
          y: 50,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
        },
        "-=0.6"
      );
    },
    { scope: sectionRef }
  );
  return (
    <section
      ref={sectionRef}
      className="bg-black text-white py-24 px-6 md:px-12 lg:px-24"
    >
      <div ref={headerRef} className="max-w-7xl mx-auto text-center mb-20">
        <h2 className="text-sm uppercase  text-gray-400 mb-4">
          Why Choose Trivara
        </h2>
        <h1 className="text-5xl md:text-7xl font-[Pertili] tracking-tight mb-3">
          BUILT DIFFERENT.
        </h1>
        <p className="text-gray-200 text-sm md:text-sm max-w-2xl mx-auto">
          We don't just build software—we build the foundation for your success.
        </p>
      </div>

      <div
        ref={gridRef}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16 max-w-7xl mx-auto"
      >
        {features.map((feature, index) => (
          <div key={index} className="group">
            {/* Decorative dots/line similar to the design */}

            <div className="flex items-center gap-3 mb-2">
              <div className="text-white">{feature.icon}</div>
              <h3 className="text-xl font-semibold ">{feature.title}</h3>
            </div>

            <p className="text-gray-400 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
