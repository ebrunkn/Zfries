"use client";

import { MapPin, Mail, Phone, Sparkles } from "lucide-react";

const storyPoints = [
  {
    title: "Crafted Presence",
    text: "We shape every product touchpoint to feel warm, bold, and unmistakably premium.",
  },
  {
    title: "Flavor Memory",
    text: "The mix of spice, crunch, and roast is designed to feel both nostalgic and instantly shareable.",
  },
  {
    title: "Fast Partnerships",
    text: "Wholesale, retail, and hospitality conversations should feel quick, clear, and human.",
  },
];

const contactCards = [
  {
    icon: MapPin,
    title: "Visit",
    value: "Ajman, UAE",
    href: "#contact",
  },
  {
    icon: Phone,
    title: "Call",
    value: "+971 55 4754143",
    href: "tel:+971554754143",
  },
  {
    icon: Mail,
    title: "Email",
    value: "info@zfries.ae",
    href: "mailto:info@zfries.ae",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative py-20 md:py-28">
      <div className="section-shell space-y-16">
        <div className="space-y-8">
          <div className="max-w-3xl space-y-5">
            <span className="section-eyebrow">Brand Story</span>
            <h2 className="section-title text-[#fff0c1]">
              Built to feel rich, memorable, and easy to trust at first glance.
            </h2>
            <p className="section-copy">
              Z-Fries is more than a snack label. It is a hospitality-forward food brand with the warmth
              of something familiar and the presentation of something elevated.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {storyPoints.map((item) => (
              <article key={item.title} className="glass-panel rounded-[2rem] border p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#ffe08c]/14 text-[#ffd56f]">
                    <Sparkles size={18} />
                  </div>
                  <h3 className="text-xl font-bold text-[#fff4d7]">{item.title}</h3>
                </div>
                <p className="mt-4 text-sm leading-7 text-white/68">{item.text}</p>
              </article>
            ))}
          </div>
        </div>

        <div id="contact" className="space-y-8">
          <div className="max-w-3xl space-y-5">
            <span className="section-eyebrow">Contact</span>
            <h2 className="section-title text-[#fff0c1]">
              Let&apos;s build a stronger shelf presence.
            </h2>
            <p className="section-copy">
              Reach out directly for wholesale, retail, or collaboration conversations. The layout is
              now separated from the brand story so it feels easier to browse and less congested.
            </p>
          </div>

          <div className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
            <div className="glass-panel rounded-[2rem] border p-6 md:p-8">
              <p className="text-sm uppercase tracking-[0.3em] text-white/45">Reach Us</p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {contactCards.map((card) => {
                  const Icon = card.icon;
                  return (
                    <a
                      key={`contact-${card.title}`}
                      href={card.href}
                      className="flex items-center gap-4 rounded-[1.5rem] border border-white/12 bg-white/6 px-4 py-4 hover:-translate-y-0.5"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#ffe08c]/14 text-[#ffd56f]">
                        <Icon size={20} />
                      </div>
                      <div>
                        <p className="text-[0.68rem] uppercase tracking-[0.28em] text-white/40">{card.title}</p>
                        <p className="mt-1 text-sm font-semibold text-[#fff4d6]">{card.value}</p>
                      </div>
                    </a>
                  );
                })}
                <div className="rounded-[1.5rem] border border-white/12 bg-white/6 px-5 py-5 sm:col-span-2">
                  <p className="text-[0.68rem] uppercase tracking-[0.28em] text-white/40">Availability</p>
                  <p className="mt-2 text-base font-semibold text-[#fff4d6]">Open for retail, wholesale, and partnership inquiries</p>
                  <p className="mt-2 text-sm leading-7 text-white/62">
                    Fast responses and simple conversations for repeat orders, product showcases, and distribution opportunities.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-panel overflow-hidden rounded-[2rem] border p-2">
              <div className="relative h-full min-h-[26rem] overflow-hidden rounded-[1.5rem]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3628.92534679139!2d55.4353!3d25.4052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef5f58a6b27f0df%3A0xa1d0d14d02a6e6c6!2sAjman%2C%20UAE!5e0!3m2!1sen!2sae!4v1695922364974!5m2!1sen!2sae"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Z-Fries location map"
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#240809] via-[#240809]/55 to-transparent p-6">
                  <p className="text-xs uppercase tracking-[0.32em] text-white/46">Location</p>
                  <p className="mt-2 text-xl font-semibold text-[#fff0c4]">Ajman, United Arab Emirates</p>
                  <p className="mt-2 max-w-xs text-sm leading-6 text-white/66">
                    Easy to reach for local partnerships, distribution conversations, and repeat orders.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
