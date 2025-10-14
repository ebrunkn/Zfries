"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function Header() {
  const headerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen width
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // Clear previous triggers if resizing happens
    ScrollTrigger.getAll().forEach((t) => t.kill());

    const scrollStart = isMobile
      ? window.innerHeight // trigger after 100vh on mobile
      : window.innerHeight * 2.5; // trigger after ~2.5vh on desktop

    ScrollTrigger.create({
      start: `${scrollStart}px top`,
      onEnter: () => {
        gsap.to(headerRef.current, {
          boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
          backgroundColor: "#7F1F1Ff0",
          backdropFilter: "blur(12px)",
          duration: 0.6,
          ease: "power3.out",
        });
      },
      onLeaveBack: () => {
        gsap.to(headerRef.current, {
          boxShadow: "none",
          backgroundColor: "transparent",
          backdropFilter: "blur(0)",
          duration: 0.6,
          ease: "power3.inOut",
        });
      },
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, [isMobile]);

  return (
    <nav
      ref={headerRef}
      className="fixed z-50 top-0 left-0 w-full flex items-center px-6 transition-all duration-500"
    >
      <div className="w-full py-4 px-5 md:px-10 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-[3.4375rem] font-bold inspiration-regular">
          Z Fries
        </h1>

        {/* Desktop Nav Links */}
        <ul className="flex space-x-10 md:px-8 font-medium">
          <li className="hidden md:flex">
            <Link href="#about" className="hover:text-white/50">
              About
            </Link>
          </li>
          <li>
            <Link href="https://wa.link/xkcud9" className="hover:opacity-50">
              <Image
                src="/icons/wa-logo.svg"
                height={25}
                width={25}
                alt="Whatsapp Logo"
              />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
