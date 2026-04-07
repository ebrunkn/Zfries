"use client";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ImageContainer from "@/componets/ImageContainer";

gsap.registerPlugin(ScrollTrigger);

export default function HomeSection() {
  const textRef = useRef(null);
  const carouselRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const isMobile = window.innerWidth <= 768;

    gsap.set(carouselRef.current, {
      scale: 0,
      transformOrigin: "center center",
    });

    if (isMobile) {
      gsap.to(carouselRef.current, {
        scale: 1,
        duration: 0.6,
        ease: "power3.out",
        delay: 1,
      });
    } else {
      const trigger = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top+=200 top",
        onEnter: () => {
          gsap.to(carouselRef.current, {
            scale: 1,
            duration: 0.6,
            ease: "power3.out",
          });
        },
        onLeaveBack: () => {
          gsap.to(carouselRef.current, {
            scale: 0,
            duration: 0.6,
            ease: "power3.inOut",
          });
        },
      });

      return () => trigger.kill();
    }
  }, []);

  useEffect(() => {
    ScrollTrigger.refresh();
  }, []);

  useEffect(() => {
    gsap.from(textRef.current, {
      opacity: 0,
      y: 30,
      duration: 1.5,
      ease: "power3.out",
    });
  }, []);

  useEffect(() => {
    gsap.set(carouselRef.current, {
      scale: 0,
      transformOrigin: "center center",
    });

    const trigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top+=200 top",
      onEnter: () => {
        gsap.to(carouselRef.current, {
          scale: 1,
          duration: 0.6,
          ease: "power3.out",
        });
      },
      onLeaveBack: () => {
        gsap.to(carouselRef.current, {
          scale: 0,
          duration: 0.6,
          ease: "power3.inOut",
        });
      },
    });

    return () => trigger.kill();
  }, []);

  return (
    <div className="w-full md:h-[250vh]">
      <section
        ref={sectionRef}
        className="sticky top-0 flex h-screen w-full flex-col items-center justify-center bg-gradient-to-b from-[#310F0F] to-[#A72A2A] p-4 md:p-24"
      >
        <div className="relative w-full max-w-5xl">
          <div
            ref={carouselRef}
            className="relative z-30 flex h-full w-full items-center justify-center"
          >
            <ImageContainer />
          </div>

          <div
            ref={textRef}
            className="absolute left-1/2 top-1/2 z-20 flex h-[600px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center py-10 text-center"
          >
            <div className="flex flex-col items-center justify-center gap-0 sm:flex-row sm:gap-2">
              <h1 className="grey-qo text-[clamp(2.5rem,5vw,8rem)] font-bold leading-tight sm:text-[clamp(4rem,6vw,8rem)]">
                Super
              </h1>
              <h1 className="bungee-hairline -mt-2 text-[clamp(2rem,4vw,5rem)] leading-tight tracking-wide sm:-mt-4 sm:text-[clamp(3rem,5vw,5rem)]">
                DELICIOUS
              </h1>
            </div>
            <h1 className="inter-main mt-2 bg-gradient-to-b from-[#FFD400] via-[#FFE148]/60 to-[#CCAA00] bg-clip-text px-3 text-[clamp(4rem,8vw,13rem)] font-extrabold leading-tight text-transparent">
              POPCORN
            </h1>
          </div>
        </div>

        <div className="absolute bottom-10 flex w-full flex-col items-center justify-center gap-6 bg-gradient-to-b from-[#ffffff] to-[#ffffff6a] bg-clip-text px-4 text-center text-[clamp(15px,1vw,19px)] text-transparent sm:flex-row sm:px-10">
          <div className="max-w-[300px]">
            Light, fluffy, and perfectly roasted - popcorn made to brighten your moments.
          </div>
          <div className="max-w-[300px]">
            From salty classics to cheesy thrills, every pack is a taste adventure.
          </div>
        </div>
      </section>
    </div>
  );
}
