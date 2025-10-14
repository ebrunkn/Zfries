"use client";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function Header() {
  const headerRef = useRef(null);

  useEffect(() => {
    const vh = window.innerHeight * 2.5; // Reference from height of the home page

    ScrollTrigger.create({
      start: `${vh}px top`, // trigger when user scrolls more than 100vh
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
  }, []);

  return (
    <nav
      ref={headerRef}
      className="fixed z-50 top-0 left-0 w-full flex items-center px-6"
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
            <Link href="#contact" className="hover:opacity-50">
              <Image src='/icons/wa-logo.svg' height={25} width={25} alt="Whatsapp Logo" />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
