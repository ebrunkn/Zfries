import { ArrowUpRight, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import Link from "next/link";

const quickLinks = [
  { href: "#products", label: "Products" },
  { href: "#about", label: "Story" },
  { href: "#contact", label: "Contact" },
];

const contactLinks = [
  { href: "https://wa.me/+971554754143?text=Hi%20can%20i%20get%20chips", label: "WhatsApp", value: "+971 55 4754143" },
  { href: "mailto:info@zfries.ae", label: "Email", value: "info@zfries.ae" },
  { href: "tel:+971554754143", label: "Phone", value: "+971 55 4754143" },
];

export default function Footer() {
  return (
    <footer className="relative pb-10 pt-6">
      <div className="section-shell">
        <div className="glass-panel rounded-[2.25rem] border p-8 md:p-10">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-6">
              <div>
                <p className="inspiration-regular text-5xl leading-none text-white">Z Fries</p>
                <p className="mt-2 max-w-md text-base leading-8 text-white/68">
                  Premium popcorn, savory snacks, and a warmer, more elevated brand presentation from the first glance to the final bite.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href="mailto:info@zfries.ae"
                  className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/8 px-4 py-2 text-sm text-white/82 hover:-translate-y-0.5"
                >
                  <Mail size={16} />
                  Email
                </a>
                <a
                  href="https://wa.me/+971554754143?text=Hi%20can%20i%20get%20chips"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/8 px-4 py-2 text-sm text-white/82 hover:-translate-y-0.5"
                >
                  <MessageCircle size={16} />
                  WhatsApp
                </a>
                <a
                  href="tel:+971554754143"
                  className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/8 px-4 py-2 text-sm text-white/82 hover:-translate-y-0.5"
                >
                  <Phone size={16} />
                  Call
                </a>
              </div>
            </div>

            <div className="grid gap-8 sm:grid-cols-2">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-white/42">Navigate</p>
                <ul className="mt-4 space-y-3">
                  {quickLinks.map((item) => (
                    <li key={item.href}>
                      <Link href={item.href} className="inline-flex items-center gap-2 text-sm text-white/74 hover:text-white">
                        {item.label}
                        <ArrowUpRight size={14} />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-white/42">Reach Us</p>
                <ul className="mt-4 space-y-4">
                  {contactLinks.map((item) => (
                    <li key={item.label}>
                      <a href={item.href} className="text-sm text-white/74 hover:text-white">
                        <span className="block text-[0.68rem] uppercase tracking-[0.28em] text-white/40">{item.label}</span>
                        <span className="mt-1 block">{item.value}</span>
                      </a>
                    </li>
                  ))}
                  <li className="text-sm text-white/74">
                    <span className="block text-[0.68rem] uppercase tracking-[0.28em] text-white/40">Address</span>
                    <span className="mt-1 inline-flex items-center gap-2">
                      <MapPin size={15} className="text-[#ffd56f]" />
                      Ajman, UAE
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-10 border-t border-white/10 pt-6 text-sm text-white/50">
            &copy; {new Date().getFullYear()} Z-Fries. Crafted for a more memorable snack experience.
          </div>
        </div>
      </div>
    </footer>
  );
}
