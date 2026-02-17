"use client";

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const workSteps = [
  {
    id: "01",
    title: "STRATEGY & ARCHITECTURE",
    description: "We begin by understanding operational complexity, business constraints, and long-term goals. Our team defines the system architecture, data flows, and scalability blueprint.",
    img: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=400" 
  },
  {
    id: "02",
    title: "SYSTEM DESIGN",
    description: "We design intelligent, modular systems built for performance and adaptability. Every component is engineered to integrate seamlessly with existing infrastructure.",
    img: "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=400"
  },
  {
    id: "03",
    title: "BUILD & INTEGRATION",
    description: "Implementation follows strict engineering standards. We ensure the solution scales horizontally and remains resilient under high load while maintaining peak performance.",
    img: "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=400"
  },
  {
    id: "04",
    title: "SCALE & OPTIMIZE",
    description: "Continuous monitoring and automated scaling ensure your infrastructure evolves with your user base without compromising on speed or security.",
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=400"
  }
];

const Work = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const contentRef = useRef(null);
  useGSAP(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: containerRef.current,
      start: "top 100%",
      toggleActions: "play reverse play reverse",
    }
  });

  tl.from(headerRef.current, {
    opacity: 0,
    y: 60,
    duration: 1,
    ease: "power3.out"
  })
  .from(contentRef.current, {
    opacity: 0,
    y: 80,
    duration: 1,
    ease: "power3.out"
  }, "-=0.6");

}, { scope: containerRef });


  return (
    <div ref={containerRef} className="min-h-screen bg-black text-white py-20 px-6 flex flex-col justify-center overflow-hidden">
      
      {/* Header Section */}
      <div ref={headerRef} className="text-center mb-5">
        <p className="text-sm text-gray-500 mb-4 uppercase">How we work</p>
        <h1 className="text-5xl md:text-7xl font-[Pertili] mb-3 tracking-tight">
          FROM STRATEGY TO SCALE.
        </h1>
        <p className="max-w-xl mx-auto text-gray-200 text-sm leading-relaxed">
          The methodologies behind our ability to consistently deliver high-performance systems.
        </p>
      </div>

      <div ref={contentRef} className="relative max-w-6xl mx-auto w-full flex flex-col items-center">
        {/* Step Content */}
        <div className="relative w-full max-w-3xl h-[300px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4, ease:"backInOut" }}
              className="absolute z-20 w-full p-12 border border-white backdrop-blur-sm text-center"
            >
              <h3 className="font-[Pertili] text-3xl mb-3 tracking-widest uppercase">
                {workSteps[activeIndex].title}
              </h3>
              <p className="text-gray-400 leading-relaxed md:text-base max-w-md mx-auto">
                {workSteps[activeIndex].description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Steps */}
        <div className="flex gap-8 mt-5 z-30">
          {workSteps.map((step, index) => (
            <button
              key={step.id}
              onClick={() => setActiveIndex(index)}
              className="group flex flex-col items-center"
            >
              <div className={`h-[2px] transition-all duration-500 ${
                index === activeIndex ? 'bg-white w-20' : 'bg-gray-800 w-12 group-hover:bg-gray-500'
              }`} />
              <span className={`mt-2 text-[10px] tracking-widest transition-colors ${
                index === activeIndex ? 'text-white' : 'text-gray-600'
              }`}>
                STEP {step.id}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;