"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { FaHeart, FaShieldAlt, FaBook, FaPalette, FaMusic, FaRunning } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi2";

const values = [
  {
    icon: <FaHeart className="text-candy-pink" size={28} />,
    title: "Love & Care",
    desc: "Every child is treated with warmth, patience, and unconditional love.",
    bg: "bg-pink-50",
  },
  {
    icon: <FaShieldAlt className="text-sky-blue" size={28} />,
    title: "Safe & Secure",
    desc: "CCTV monitoring, child-safe furniture, soft flooring & secure entry.",
    bg: "bg-blue-50",
  },
  {
    icon: <FaBook className="text-grass-green" size={28} />,
    title: "Play-Based Learning",
    desc: "Children learn best through play, exploration, and hands-on activities.",
    bg: "bg-green-50",
  },
  {
    icon: <FaPalette className="text-sunny-orange" size={28} />,
    title: "Creative Arts",
    desc: "Drawing, clay modeling, crafts, and creative expression every day.",
    bg: "bg-orange-50",
  },
  {
    icon: <FaMusic className="text-lavender-purple" size={28} />,
    title: "Music & Rhymes",
    desc: "Singing, dancing, and rhythm activities for joyful development.",
    bg: "bg-purple-50",
  },
  {
    icon: <FaRunning className="text-coral" size={28} />,
    title: "Physical Activity",
    desc: "Indoor & outdoor play areas with slides, ball pools & climbing blocks.",
    bg: "bg-red-50",
  },
];

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden" ref={ref}>
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-sunny-yellow/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-candy-pink/5 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 text-candy-pink font-bold text-sm tracking-wider uppercase mb-3 font-body">
            <HiSparkles /> About Our School <HiSparkles />
          </span>
          <h2 className="section-title">
            A <span className="text-gradient-warm">Magical Place</span> to
            <br />
            Learn & Grow 🌱
          </h2>
          <p className="section-subtitle">
            At Love2Learn AI Kids School, we believe every child is a unique star.
            Our mission is to create a nurturing, safe, and stimulating environment
            where children discover the joy of learning.
          </p>
        </motion.div>

        {/* Main About Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              <div className="w-full h-[400px] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src="https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=800&q=80"
                  alt="Children learning in classroom"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Stats Card */}
              <motion.div
                className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-5 border border-pink-50"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <div className="text-center">
                  <div className="text-3xl font-heading text-candy-pink">1.5 - 5</div>
                  <div className="text-sm text-gray-400 font-body">Years Age Group</div>
                </div>
              </motion.div>
              <motion.div
                className="absolute -top-4 -left-4 bg-white rounded-2xl shadow-xl p-4 border border-yellow-50"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              >
                <div className="text-2xl">🎓</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-3xl font-heading text-gray-800 mb-6">
              Nurturing Young Minds Since Day One 🌟
            </h3>
            <p className="text-gray-500 mb-6 font-body leading-relaxed text-lg">
              Located in a safe, well-ventilated ground floor property near residential
              communities, our school provides the perfect setting for your child&apos;s
              early years. With natural light, secure parking, and child-friendly spaces,
              we have created a home away from home.
            </p>
            <div className="space-y-4 mb-8">
              {[
                "✅ CCTV monitored premises with secure entry gate",
                "✅ Child-safe furniture with corner guards & soft flooring",
                "✅ Trained & caring teachers (5:1 student-teacher ratio)",
                "✅ Daily activity reports & parent communication",
                "✅ RO purified drinking water & clean hygienic toilets",
                "✅ First aid kit & medical information tracking",
              ].map((item, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="text-gray-600 font-body"
                >
                  {item}
                </motion.p>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className={`${value.bg} rounded-3xl p-6 border border-white shadow-sm hover:shadow-lg transition-all duration-300`}
            >
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-md mb-4">
                {value.icon}
              </div>
              <h4 className="font-heading text-xl text-gray-800 mb-2">{value.title}</h4>
              <p className="text-gray-500 font-body text-sm leading-relaxed">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
