"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiMenu,
  FiX,
  FiPhone,
  FiMail,
} from "react-icons/fi";
import {
  FaStar,
  FaGraduationCap,
} from "react-icons/fa";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About Us" },
  { href: "#programs", label: "Programs" },
  { href: "#features", label: "Why Us" },
  { href: "#gallery", label: "Gallery" },
  { href: "#fees", label: "Fees" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top bar */}
      <div className="bg-gradient-to-r from-candy-pink via-sunny-orange to-sky-blue text-white text-sm py-1.5 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1">
              <FiPhone size={14} /> +91 98765 43210
            </span>
            <span className="flex items-center gap-1">
              <FiMail size={14} /> hello@love2learn.school
            </span>
          </div>
          <div className="flex items-center gap-2">
            <FaStar className="text-sunny-yellow animate-pulse" size={12} />
            <span>Admissions Open for 2026-27! Limited Seats!</span>
            <FaStar className="text-sunny-yellow animate-pulse" size={12} />
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <motion.nav
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg shadow-pink-100/50"
            : "bg-white/80 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-12 h-12 bg-gradient-to-br from-candy-pink to-sunny-yellow rounded-2xl 
                           flex items-center justify-center shadow-lg"
              >
                <FaGraduationCap className="text-white text-2xl" />
              </motion.div>
              <div>
                <h1 className="font-heading text-xl text-candy-pink leading-tight">
                  Love2Learn
                </h1>
                <p className="text-[10px] text-gray-400 font-body tracking-wider uppercase">
                  AI Kids School
                </p>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative px-4 py-2 text-sm font-semibold text-gray-600 hover:text-candy-pink 
                           transition-colors duration-300 group font-body"
                >
                  {link.label}
                  <span
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 
                               bg-gradient-to-r from-candy-pink to-sunny-yellow 
                               group-hover:w-3/4 transition-all duration-300 rounded-full"
                  />
                </Link>
              ))}
            </div>

            {/* CTA & Mobile Toggle */}
            <div className="flex items-center gap-3">
              <Link
                href="/payment"
                className="hidden md:inline-flex items-center gap-2 bg-gradient-to-r from-grass-green to-sky-blue 
                         text-white font-bold py-2.5 px-6 rounded-full shadow-lg hover:shadow-xl 
                         transform hover:-translate-y-0.5 transition-all duration-300 text-sm font-body"
              >
                💳 Pay Fees
              </Link>
              <Link
                href="#contact"
                className="hidden sm:inline-flex btn-primary text-sm !py-2.5 !px-6"
              >
                ✨ Enroll Now
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2 rounded-xl hover:bg-pink-50 transition-colors"
              >
                {isOpen ? (
                  <FiX className="text-candy-pink" size={28} />
                ) : (
                  <FiMenu className="text-candy-pink" size={28} />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-pink-100 shadow-lg"
            >
              <div className="px-4 py-4 space-y-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block px-4 py-3 rounded-2xl text-gray-600 hover:text-candy-pink 
                               hover:bg-pink-50 font-semibold transition-all font-body"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <div className="pt-3 flex flex-col gap-2">
                  <Link href="/payment" className="btn-secondary text-center text-sm !py-2.5">
                    💳 Pay Fees Online
                  </Link>
                  <Link href="#contact" className="btn-primary text-center text-sm !py-2.5">
                    ✨ Enroll Now
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
