"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const images = [
  "/carousel/BLACK.png",
  "/carousel/CHILLI.png",
  "/carousel/SALT.png",
];

const ImageContainer = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const children = containerRef.current.querySelectorAll(".popcorn-img");

    // Initial stacked state
    gsap.set(children, {
      x: "0%",
      scale: 1,
      opacity: (i) => (i === 1 ? 1 : 0),
      zIndex: (i) => (i === 1 ? 20 : 5),
    });

    // Animate to wide layout on scroll > 400px
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top+=400 top", // scroll 400px past top
      onEnter: () => {
        gsap.to(children[0], {
          x: "-55%",
          scale: 0.9,
          opacity: 1,
          zIndex: 10,
          duration: 0.7,
          ease: "power3.out",
        });
        gsap.to(children[1], {
          x: "0%",
          scale: 1.1,
          opacity: 1,
          zIndex: 20,
          duration: 0.7,
          ease: "power3.out",
        });
        gsap.to(children[2], {
          x: "55%",
          scale: 0.9,
          opacity: 1,
          zIndex: 10,
          duration: 0.7,
          ease: "power3.out",
        });
      },
      onLeaveBack: () => {
        gsap.to(children, {
          x: "0%",
          scale: 1,
          opacity: (i) => (i === 1 ? 1 : 0),
          zIndex: (i) => (i === 1 ? 20 : 5),
          duration: 0.7,
          ease: "power3.inOut",
        });
      },
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex justify-center items-center relative w-full max-w-4xl mx-auto"
    >
      {images.map((src, index) => (
        <div
          key={index}
          className="absolute flex justify-center items-center"
        >
          <Image
            src={src}
            alt={`Popcorn flavor ${index + 1}`}
            width={300}
            height={400}
            className="popcorn-img object-contain w-[clamp(120px,25vw,220px)] sm:w-[clamp(150px,20vw,260px)] md:w-[clamp(180px,18vw,280px)]"
          />
        </div>
      ))}
    </div>
  );
};

export default ImageContainer;
