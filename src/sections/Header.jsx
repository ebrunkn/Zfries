"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const navItems = [
  { href: "#products", label: "Products" },
  { href: "#about", label: "Story" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const headerRef = useRef(null);

  useEffect(() => {
    const header = headerRef.current;

    const updateHeader = () => {
      if (!header) return;

      const hasScrolled = window.scrollY > 24;
      gsap.to(header, {
        backgroundColor: hasScrolled ? "rgba(52, 11, 12, 0.72)" : "rgba(52, 11, 12, 0.12)",
        borderColor: hasScrolled ? "rgba(255, 244, 222, 0.16)" : "rgba(255, 244, 222, 0.08)",
        boxShadow: hasScrolled ? "0 18px 60px rgba(18, 4, 4, 0.22)" : "0 0 0 rgba(0, 0, 0, 0)",
        duration: 0.35,
        ease: "power2.out",
      });
    };

    updateHeader();
    window.addEventListener("scroll", updateHeader);

    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 py-3 md:px-6">
      <nav
        ref={headerRef}
        className="section-shell glass-panel flex items-center justify-between rounded-full border px-4 py-3 md:px-6"
      >
        <Link href="/" className="flex items-center gap-3">
          <div className="inspiration-regular font-bold flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-[#ffd861] to-[#f28f2d] text-[#351012] shadow-[0_14px_32px_rgba(255,186,63,0.25)]">
            <span className="text-2xl font-black">Z</span>
          </div>
          <div>
            <p className="inspiration-regular text-4xl leading-none text-white">Z Fries</p>
            <p className="text-[0.68rem] uppercase tracking-[0.4em] text-white/55">Since 1992</p>
          </div>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium tracking-[0.18em] text-white/72 uppercase hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <Link
          href="https://wa.link/xkcud9"
          className="flex items-center gap-2 rounded-full border border-white/12 bg-white/8 px-4 py-2 text-sm font-semibold text-white hover:-translate-y-0.5 hover:bg-white/12"
        >
          <Image src="/icons/wa-logo.svg" height={20} width={20} alt="Whatsapp Logo" />
          <span className="hidden sm:inline">Order Now</span>
        </Link>
      </nav>
    </header>
  );
}
