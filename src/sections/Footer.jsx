import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#A72A2A] to-[#310F0F] text-gray-300 pt-10 pb-5 border-t border-white/30 mt-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold text-white">Z-Fries</h2>
          <p className="mt-3 text-sm">
            Because life is sweet <br />
            since 1992
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-white font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">About</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-white font-semibold mb-3">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Ajman, UAE</a></li>
            <li><a href="https://wa.me/+971554754143?text=Hi%20can%20i%20get%20chips" target="_blank" className="hover:text-white">+971 55 4754143 / +971 55 8218226</a></li>
            <li><a href="mailto:someone@example.com" className="hover:text-white" target="_blank" aria-disabled='true'>info@zfries.ae</a></li>
            <li><a href="#" className="hover:text-white">Support</a></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-white font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white"><Facebook /></a>
            <a href="#" className="hover:text-white"><Twitter /></a>
            <a href="#" className="hover:text-white"><Instagram /></a>
            <a href="#" className="hover:text-white"><Linkedin /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm">
        © {new Date().getFullYear()} Z-Fries. All rights reserved.
      </div>
    </footer>
  );
}