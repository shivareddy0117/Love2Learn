"use client";

import Link from "next/link";
import { FaGraduationCap, FaHeart, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 relative overflow-hidden">
      {/* Wave Top */}
      <div className="absolute top-0 left-0 right-0 -translate-y-[99%]">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,40 C360,0 720,60 1080,20 C1260,5 1380,30 1440,20 L1440,60 L0,60 Z" fill="#111827" />
        </svg>
      </div>

      {/* Floating decorations */}
      <div className="absolute top-10 left-10 text-2xl opacity-5">🧸</div>
      <div className="absolute top-20 right-20 text-2xl opacity-5">⭐</div>
      <div className="absolute bottom-20 left-1/3 text-2xl opacity-5">🎨</div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-candy-pink to-sunny-yellow rounded-2xl flex items-center justify-center">
                <FaGraduationCap className="text-white text-2xl" />
              </div>
              <div>
                <h3 className="font-heading text-xl text-white">Love2Learn</h3>
                <p className="text-[10px] text-gray-500 tracking-wider uppercase">AI Kids School</p>
              </div>
            </Link>
            <p className="text-gray-400 font-body text-sm leading-relaxed mb-4">
              Where little stars shine bright! A magical learning wonderland for children aged 1.5 to 5 years.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center text-gray-400 
                         hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 hover:text-white transition-all"
              >
                <FaInstagram size={18} />
              </a>
              <a
                href="https://wa.me/919876543210"
                className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center text-gray-400 
                         hover:bg-green-500 hover:text-white transition-all"
              >
                <FaWhatsapp size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-white text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { href: "#home", label: "Home" },
                { href: "#about", label: "About Us" },
                { href: "#programs", label: "Programs" },
                { href: "#features", label: "Why Choose Us" },
                { href: "#gallery", label: "Gallery" },
                { href: "#fees", label: "Fee Structure" },
                { href: "#contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-candy-pink transition-colors font-body text-sm flex items-center gap-2"
                  >
                    <span className="text-xs">→</span> {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-heading text-white text-lg mb-4">Our Programs</h4>
            <ul className="space-y-3">
              {[
                { emoji: "🧸", label: "Playgroup (1.5 - 2.5 yrs)" },
                { emoji: "🎨", label: "Nursery (2.5 - 3.5 yrs)" },
                { emoji: "📚", label: "LKG (3.5 - 4.5 yrs)" },
                { emoji: "🎓", label: "UKG (4.5 - 5.5 yrs)" },
              ].map((program) => (
                <li key={program.label}>
                  <Link
                    href="#programs"
                    className="text-gray-400 hover:text-sky-blue transition-colors font-body text-sm flex items-center gap-2"
                  >
                    {program.emoji} {program.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Link
                href="/payment"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-grass-green to-sky-blue 
                         text-white font-bold py-2 px-5 rounded-full text-sm hover:shadow-lg transition-all font-body"
              >
                💳 Pay Fees Online
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-white text-lg mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FiMapPin className="text-candy-pink mt-1 flex-shrink-0" />
                <span className="text-gray-400 font-body text-sm">
                  Near Residential Colony,<br />
                  Hyderabad, Telangana
                </span>
              </li>
              <li>
                <a href="tel:+919876543210" className="flex items-center gap-3 text-gray-400 hover:text-candy-pink transition-colors">
                  <FiPhone className="flex-shrink-0" />
                  <span className="font-body text-sm">+91 98765 43210</span>
                </a>
              </li>
              <li>
                <a href="mailto:hello@love2learn.school" className="flex items-center gap-3 text-gray-400 hover:text-candy-pink transition-colors">
                  <FiMail className="flex-shrink-0" />
                  <span className="font-body text-sm">hello@love2learn.school</span>
                </a>
              </li>
            </ul>
            <div className="mt-4 bg-gray-800 rounded-2xl p-3">
              <p className="text-xs text-gray-500 font-body">🕐 School Hours</p>
              <p className="text-sm text-gray-300 font-body">Mon-Sat: 8:30 AM - 3:30 PM</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 font-body text-sm text-center">
            © {currentYear} Love2Learn AI Kids School. All rights reserved.
          </p>
          <p className="text-gray-500 font-body text-sm flex items-center gap-1">
            Made with <FaHeart className="text-candy-pink" size={12} /> for little learners
          </p>
        </div>
      </div>
    </footer>
  );
}
