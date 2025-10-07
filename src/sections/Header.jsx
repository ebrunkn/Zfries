"use client";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
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
      className="fixed z-50 top-0 left-0 w-full flex items-center px-6 transition-all duration-300"
    >
      <div className="w-full mx-auto py-4 px-10 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-[3.4375rem] font-bold inspiration-regular">
          Z Fries
        </h1>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex space-x-8 px-8 font-medium">
          <li>
            <Link href="#about" scroll={false} className="hover:text-indigo-600">
              About
            </Link>
          </li>
          <li>
            <Link href="#contact" scroll={false} className="hover:text-indigo-600">
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Links */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col text-[18px] space-y-4 px-6 py-4 font-medium">
            <li>
              <Link
                href="#about"
                scroll={false}
                className="hover:text-indigo-600"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                scroll={false}
                className="hover:text-indigo-600"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
