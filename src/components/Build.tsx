"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Build = () => {
  const container = useRef<HTMLDivElement | null>(null);
const textRef = useRef<HTMLHeadingElement | null>(null);


  useGSAP(() => {
    gsap.from(textRef.current, {
      y: 80,
      opacity: 0,
      duration: 1.2,
      ease: "power4.out",
      scrollTrigger: {
        trigger: container.current,
        start: "top 80%", // when section enters viewport
        toggleActions: "play reverse play reverse",
      },
    });
  }, { scope: container });

  return (
    <div
      ref={container}
      className="flex mb-30 mt-30 w-full items-center justify-center bg-black p-10"
    >
      <h1
        ref={textRef}
        className="
          text-white 
          text-center 
          text-4xl 
          md:text-6xl 
          leading-tight
          font-[Pertili]
        "
      >
        Let’s build something <br /> powerful together
      </h1>
    </div>
  );
};

export default Build;
