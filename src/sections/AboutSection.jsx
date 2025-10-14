"use client";
import { useState } from "react";

export default function AboutSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! ✅"); // Replace with API call later
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div
      id="about"
      className="bg-[#a72a2a] text-white py-16 px-6 md:px-16 lg:px-32 space-y-16"
    >
      {/* ABOUT SECTION */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-400 tracking-wide drop-shadow-lg">
          About Z-Fries 🍟
        </h1>
        <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto text-gray-100">
          Welcome to <strong className="text-yellow-400">Z-Fries</strong> – where
          crunch meets flavor! We’re dedicated to serving freshly prepared,
          high-quality fries and snacks that make every bite unforgettable.
        </p>
      </section>

      {/* CONTACT + MAP GRID */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* CONTACT FORM */}
        <div className="bg-white/95 text-gray-800 h-96 rounded-2xl shadow-xl p-6 sm:p-8 space-y-5 transition-all hover:shadow-2xl">
          <h2 className="text-2xl font-semibold text-center text-[#a72a2a] mb-2">
            Get in Touch
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-700 focus:ring-2 focus:ring-yellow-500 outline-none transition-all"
                required
              />
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-700 focus:ring-2 focus:ring-yellow-500 outline-none transition-all"
                required
              />
            </div>

            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                value={form.message}
                onChange={handleChange}
                rows="2"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-700 focus:ring-2 focus:ring-yellow-500 outline-none transition-all"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-yellow-500 text-white py-3 rounded-xl font-semibold hover:bg-yellow-600 hover:scale-[1.02] active:scale-95 transition-all duration-200"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* GOOGLE MAP */}
        <div className="w-full h-96 rounded-2xl overflow-hidden shadow-2xl border border-white/20">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3628.92534679139!2d55.4353!3d25.4052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef5f58a6b27f0df%3A0xa1d0d14d02a6e6c6!2sAjman%2C%20UAE!5e0!3m2!1sen!2sae!4v1695922364974!5m2!1sen!2sae"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </div>
  );
}
