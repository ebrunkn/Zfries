import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ScrollManager from "@/componets/ScrollManager";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Z-Fries | Premium Snacks Portfolio",
  description: "A premium Z-Fries showcase featuring bold flavors, signature popcorn, and a modern portfolio-style brand experience.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ScrollManager>{children}</ScrollManager>
      </body>
    </html>
  );
}
