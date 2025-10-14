"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollManager({ children }) {
  const pathname = usePathname();

  useEffect(() => {
    // Disable browser scroll restoration
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    // Reset scroll instantly on route change
    window.scrollTo(0, 0);

    // Give the DOM a moment to render before refreshing ScrollTrigger
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100); // adjust delay if needed (100–200ms)

    return () => clearTimeout(timer);
  }, [pathname]);

  return <>{children}</>;
}
