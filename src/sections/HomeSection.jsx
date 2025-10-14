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
      // Time-based animation for mobile/tablet
      gsap.to(carouselRef.current, {
        scale: 1,
        duration: 0.6,
        ease: "power3.out",
        delay: 1,
      });
    } else {
      // Scroll-triggered animation for desktop
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
    ScrollTrigger.refresh(); // ensures triggers are recalculated
  }, []);

  // Page load text animation
  useEffect(() => {
    gsap.from(textRef.current, {
      opacity: 0,
      y: 30,
      duration: 1.5,
      ease: "power3.out",
    });
  }, []);

  // Scroll-triggered carousel animation
  useEffect(() => {
    gsap.set(carouselRef.current, {
      scale: 0,
      transformOrigin: "center center",
    });

    const trigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top+=200 top", // when scrolled 100px past top
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

    return () => trigger.kill(); // cleanup
  }, []);

  return (
    <div className="md:h-[250vh] w-full">
      <section
        ref={sectionRef}
        className="h-screen w-full sticky top-0 flex flex-col items-center justify-center p-4 md:p-24 bg-gradient-to-b from-[#310F0F] to-[#A72A2A]"
      >
        <div className="w-full max-w-5xl relative">
          {/* Carousel */}
          <div
            ref={carouselRef}
            className="flex items-center justify-center w-full h-full relative z-30"
          >
            <ImageContainer />
          </div>

          {/* Main Text */}
          <div
            ref={textRef}
            className="absolute h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center text-center py-10 z-20"
          >
            <div className="flex flex-col sm:flex-row justify-center items-center gap-0 sm:gap-2">
              <h1 className="grey-qo font-bold text-[clamp(2.5rem,5vw,8rem)] sm:text-[clamp(4rem,6vw,8rem)] leading-tight">
                Super
              </h1>
              <h1 className="bungee-hairline tracking-wide text-[clamp(2rem,4vw,5rem)] sm:text-[clamp(3rem,5vw,5rem)] leading-tight -mt-2 sm:-mt-4">
                DELICIOUS
              </h1>
            </div>
            <h1 className="inter-main px-3 mt-2 sm:mt-4 bg-gradient-to-b from-[#FFD400] via-[#FFE148]/60 to-[#CCAA00] bg-clip-text text-transparent font-extrabold text-[clamp(4rem,8vw,13rem)] leading-tight">
              POPCORN
            </h1>
          </div>
        </div>

        {/* Bottom Descriptions */}
        <div className="absolute bottom-10 w-full flex flex-col sm:flex-row justify-center items-center gap-6 text-center text-[clamp(15px,1vw,19px)] bg-gradient-to-b from-[#ffffff] to-[#ffffff6a] bg-clip-text text-transparent px-4 sm:px-10">
          <div className="max-w-[300px]">
            Light, fluffy, and perfectly roasted – popcorn made to brighten your
            moments.
          </div>
          <div className="max-w-[300px]">
            From salty classics to cheesy thrills, every pack is a taste
            adventure.
          </div>
        </div>
      </section>
    </div>
  );
}
