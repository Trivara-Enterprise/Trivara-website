"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";

const data = [
  {
    img: "/images/pic1.png",
    title: "Institutional Platforms",
    desc: "Systems built for organizations with long-term operational complexity.",
  },
  {
    img: "/images/pic2.png",
    title: "Intelligence & Control",
    desc: "Centralized platforms that turn data into operational decisions.",
  },
  {
    img: "/images/pic3.png",
    title: "Operations & Logistics",
    desc: "Software that orchestrates movement, data, and operations at scale.",
  },
  {
    img: "/images/pic4.png",
    title: "Infrastructure at Scale",
    desc: "Reliable backend systems designed to grow without friction.",
  },
];

const Pic_layout = () => {
  const containerRef = useRef(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 5 });

    tl.fromTo(
      cardsRef.current,
      {
        opacity: 0,
        y: 40,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <div
      ref={containerRef}
      className="mt-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-7"
    >
      {data.map((item, index) => (
        <div
          key={index}
          ref={(el) => {
            if (el) cardsRef.current[index] = el;
          }}
          className="flex flex-col p-6 opacity-0"
        >
          <Image
            src={item.img}
            alt={item.title}
            width={300}
            height={300}
            className="mb-4"
          />
          <h6 className="text-lg font-semibold mb-2">
            {item.title}
          </h6>
          <p className="text-gray-200 text-sm">
            {item.desc}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Pic_layout;
