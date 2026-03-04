"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { CloudDecoration } from "./FloatingElements";
import { FaPlay, FaStar } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi2";

const toyEmojis = ["🧸", "🎨", "📚", "🎪", "🎭", "🧩", "🎵", "✏️", "🌈", "🦋"];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-kids"
    >
      <CloudDecoration />

      {/* Floating Toy Emojis */}
      {toyEmojis.map((emoji, i) => (
        <motion.div
          key={i}
          className="absolute text-2xl md:text-4xl opacity-15 select-none pointer-events-none"
          style={{
            top: `${5 + (i * 9) % 85}%`,
            left: `${2 + (i * 11) % 90}%`,
          }}
          animate={{
            y: [0, -25 - i * 3, 0],
            rotate: [0, i % 2 === 0 ? 15 : -15, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 4 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.4,
          }}
        >
          {emoji}
        </motion.div>
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-5 py-2 rounded-full 
                       shadow-md border border-pink-100 mb-6"
            >
              <HiSparkles className="text-sunny-yellow text-lg" />
              <span className="text-sm font-bold text-candy-pink font-body">
                🎉 Admissions Open 2026-27
              </span>
              <HiSparkles className="text-sunny-yellow text-lg" />
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-heading leading-tight mb-6">
              <span className="text-gray-800">Where Little</span>
              <br />
              <span className="text-gradient-rainbow">Stars Shine</span>
              <br />
              <span className="text-gray-800">
                Bright!{" "}
                <motion.span
                  className="inline-block"
                  animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                >
                  ⭐
                </motion.span>
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-500 mb-8 max-w-lg font-body leading-relaxed">
              A magical learning wonderland for children aged{" "}
              <span className="text-candy-pink font-bold">1.5 to 5 years</span>
              . We nurture creativity, curiosity & confidence through
              play-based learning! 🌈
            </p>

            {/* Stats Row */}
            <div className="flex flex-wrap gap-6 mb-8">
              {[
                { num: "4+", label: "Programs", emoji: "📚" },
                { num: "5:1", label: "Student Ratio", emoji: "👩‍🏫" },
                { num: "100%", label: "Safe & Secure", emoji: "🛡️" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-2xl shadow-sm"
                >
                  <span className="text-xl">{stat.emoji}</span>
                  <div>
                    <div className="font-heading text-lg text-candy-pink">
                      {stat.num}
                    </div>
                    <div className="text-xs text-gray-400 font-body">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link href="#contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary flex items-center gap-2"
                >
                  <HiSparkles /> Enroll Your Child
                </motion.button>
              </Link>
              <Link href="#programs">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-outline flex items-center gap-2"
                >
                  <FaPlay size={12} /> Explore Programs
                </motion.button>
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="mt-8 flex items-center gap-3">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-white bg-gradient-to-br from-pink-200 to-purple-200 
                             flex items-center justify-center text-sm shadow-md"
                  >
                    {["😊", "🥰", "😄", "🤗"][i - 1]}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex text-sunny-yellow">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} size={14} />
                  ))}
                </div>
                <p className="text-xs text-gray-400 font-body">
                  Trusted by 100+ happy parents
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right - Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative w-full h-[500px] lg:h-[600px]">
              {/* Main Image */}
              <motion.div
                className="absolute top-0 right-0 w-[75%] h-[65%] rounded-[2rem] overflow-hidden shadow-2xl 
                         border-4 border-white z-10"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=800&q=80"
                  alt="Happy children learning at Love2Learn"
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>

              {/* Secondary Image */}
              <motion.div
                className="absolute bottom-0 left-0 w-[55%] h-[50%] rounded-[2rem] overflow-hidden shadow-2xl 
                         border-4 border-white z-20"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=600&q=80"
                  alt="Children playing with toys"
                  fill
                  className="object-cover"
                />
              </motion.div>

              {/* Floating Cards */}
              <motion.div
                className="absolute top-4 left-0 bg-white rounded-2xl shadow-xl p-3 z-30 flex items-center gap-2"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  🎨
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-700">Creative Arts</div>
                  <div className="text-[10px] text-gray-400">Daily Sessions</div>
                </div>
              </motion.div>

              <motion.div
                className="absolute bottom-20 right-0 bg-white rounded-2xl shadow-xl p-3 z-30 flex items-center gap-2"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              >
                <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                  🏆
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-700">CCTV Secured</div>
                  <div className="text-[10px] text-gray-400">24/7 Monitoring</div>
                </div>
              </motion.div>

              {/* Decorative blob */}
              <div
                className="absolute -top-10 -right-10 w-40 h-40 bg-candy-pink/10 rounded-full 
                          animate-blob"
              />
              <div
                className="absolute -bottom-10 -left-10 w-32 h-32 bg-sunny-yellow/10 rounded-full 
                          animate-blob animation-delay-2000"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0,64 C360,120 720,0 1080,64 C1260,96 1380,80 1440,64 L1440,120 L0,120 Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
