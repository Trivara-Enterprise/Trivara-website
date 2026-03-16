"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Pic_layout from "./Pic-layout";

const Trivara_animation = () => {
  const container = useRef<HTMLDivElement | null>(null);
  const logoRef = useRef<HTMLHeadingElement | null>(null);
  const enterpriseRef = useRef<HTMLHeadingElement | null>(null);
  const leftSideRef = useRef<HTMLDivElement | null>(null);
  const rightSideRef = useRef<HTMLDivElement | null>(null);
  const heroLeftRef = useRef<HTMLDivElement | null>(null);
  const heroRightRef = useRef<HTMLDivElement | null>(null);

   
  useGSAP(
    () => {
      if (
        !logoRef.current ||
        !enterpriseRef.current ||
        !leftSideRef.current ||
        !rightSideRef.current ||
        !heroLeftRef.current ||
        !heroRightRef.current
      )
        return;
      const tl = gsap.timeline({ delay: 1 });

      gsap.set(logoRef.current, {
        top: "50%",
        left: "50%",
        xPercent: -50,
        yPercent:-50,
        scale: 4,
        position: "fixed",
        opacity: 0,
     

      });

      gsap.set(enterpriseRef.current, {
        opacity: 0,
        position: "fixed",

        left: "50%",
        xPercent: -50,
        y: 6,
      });

      gsap.set(leftSideRef.current, { opacity: 0, x: -30 });
      gsap.set(rightSideRef.current, { opacity: 0, x: 30 });

      gsap.set(heroLeftRef.current, { opacity: 0, x: -200 }); // Slide from left
      gsap.set(heroRightRef.current, { opacity: 0, x: 200 }); // Slide from right

      tl.to(logoRef.current, {
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
      })
        .to(
          logoRef.current,
          {
            top: "20px",
            yPercent: 0,
            scale: 1,
            duration: 1.5,
            ease: "expo.inOut",
          },
          "+=0.5"
        )

        .to(
          [
            enterpriseRef.current!,
            leftSideRef.current!,
            rightSideRef.current!,
            heroLeftRef.current!,
            heroRightRef.current!,
          ],
          {
            opacity: 1,
            y: 0,
            x: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "sine.inOut",
          },
          ">-0.2"
        );
    },
    { scope: container }
  );

  return (
    <div
      ref={container}
      className="relative w-full bg-black text-white p-8 overflow-x-hidden"
    >
      {/* Navigation */}
      <nav className="flex justify-between items-start w-full max-w-[1400px] mx-auto pt-2">
        <div ref={leftSideRef} className="flex-1">
          <ul className="flex gap-8 text-[12px] tracking-[0.2px] uppercase">
            <li className="cursor-pointer">Products</li>
            <li className="cursor-pointer">What We Do</li>
            <li className="cursor-pointer">Why Trivara</li>
          </ul>
        </div>

        <div  className=" flex-1 flex flex-col items-center">
          <div className="text-center" />
          <h1
          ref={logoRef}
            
            className="font-[leaner] text-2xl font-bold whitespace-nowrap"
          >
            TRIVARA
          </h1>
          <h3
            ref={enterpriseRef}
            className="font-[leaner] text-[9px] tracking-[0.2em] mt-3 uppercase text-center justify-center"
          >
            ENTERPRISE
          </h3>
        </div>

        <div ref={rightSideRef} className="flex-1 flex justify-end">
          <button className="border border-white/30 px-6 py-2 rounded-full text-[12px] tracking-[0.2px] uppercase hover:bg-white hover:text-black transition-colors">
            Start your project
          </button>
        </div>
      </nav>

      <div className="mt-30 flex justify-between items-end max-w-[1400px] mx-auto">
        <div ref={heroLeftRef} className="flex flex-col gap-2">
          <h3 className="text-xl font-light opacity-80 font-[Pertili]">
            WHERE BUSINESS RUN ON
          </h3>
          <h1 className="text-7xl font-[Pertili] leading-none">
            SCALABLE SOFTWARES
          </h1>
        </div>

        <div ref={heroRightRef} className="max-w-md text-right">
          <p className="text-[15px] opacity-70 leading-relaxed">
            Custom enterprise SaaS solutions built with precision.
            <br />
            We power organizations at scale.
          </p>
        </div>
      </div>
      <Pic_layout />
    </div>
  );
};

export default Trivara_animation;
