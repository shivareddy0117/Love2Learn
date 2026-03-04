"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { HiSparkles } from "react-icons/hi2";
import {
  FaVideo,
  FaChild,
  FaHandsHelping,
  FaLeaf,
  FaPuzzlePiece,
  FaChalkboardTeacher,
  FaShieldAlt,
  FaUtensils,
  FaSmile,
  FaBus,
  FaMedkit,
  FaWater,
} from "react-icons/fa";

const features = [
  {
    icon: <FaVideo size={24} />,
    title: "CCTV Surveillance",
    desc: "24/7 camera monitoring for complete safety and transparency.",
    color: "text-red-400",
    bg: "bg-red-50",
  },
  {
    icon: <FaChild size={24} />,
    title: "Child-Safe Furniture",
    desc: "Rounded corners, soft edges, and age-appropriate furnishings.",
    color: "text-candy-pink",
    bg: "bg-pink-50",
  },
  {
    icon: <FaChalkboardTeacher size={24} />,
    title: "Trained Teachers",
    desc: "Experienced, loving educators who understand early childhood.",
    color: "text-sky-blue",
    bg: "bg-blue-50",
  },
  {
    icon: <FaPuzzlePiece size={24} />,
    title: "Activity-Based Learning",
    desc: "Building blocks, puzzles, phonics cards & creative play.",
    color: "text-sunny-orange",
    bg: "bg-orange-50",
  },
  {
    icon: <FaLeaf size={24} />,
    title: "Natural Environment",
    desc: "Well-ventilated rooms with natural light and fresh air.",
    color: "text-grass-green",
    bg: "bg-green-50",
  },
  {
    icon: <FaHandsHelping size={24} />,
    title: "Parent Communication",
    desc: "Regular updates via WhatsApp & daily activity reports.",
    color: "text-lavender-purple",
    bg: "bg-purple-50",
  },
  {
    icon: <FaShieldAlt size={24} />,
    title: "Secure Entry Gate",
    desc: "Controlled access with parent pickup authorization system.",
    color: "text-blue-500",
    bg: "bg-blue-50",
  },
  {
    icon: <FaSmile size={24} />,
    title: "Play Areas",
    desc: "Indoor slides, ball pool, foam blocks & outdoor playground.",
    color: "text-yellow-500",
    bg: "bg-yellow-50",
  },
  {
    icon: <FaMedkit size={24} />,
    title: "First Aid Ready",
    desc: "Complete first aid kit & child medical information on file.",
    color: "text-red-500",
    bg: "bg-red-50",
  },
  {
    icon: <FaUtensils size={24} />,
    title: "Hygienic Facilities",
    desc: "Clean toilets, sanitized spaces & regular deep cleaning.",
    color: "text-emerald-500",
    bg: "bg-emerald-50",
  },
  {
    icon: <FaWater size={24} />,
    title: "Pure Drinking Water",
    desc: "RO purified water available throughout the day.",
    color: "text-cyan-500",
    bg: "bg-cyan-50",
  },
  {
    icon: <FaBus size={24} />,
    title: "Easy Drop-off",
    desc: "Convenient parking space for safe drop-off & pickup.",
    color: "text-indigo-500",
    bg: "bg-indigo-50",
  },
];

export default function Features() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="features" className="py-20 bg-white relative overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 text-grass-green font-bold text-sm tracking-wider uppercase mb-3 font-body">
            <HiSparkles /> Why Choose Us <HiSparkles />
          </span>
          <h2 className="section-title">
            Why Parents{" "}
            <span className="text-gradient-warm">Love Us</span> ❤️
          </h2>
          <p className="section-subtitle">
            We go above and beyond to ensure your child&apos;s safety, happiness, and growth.
            Here&apos;s what makes Love2Learn special.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.1 + i * 0.05 }}
              whileHover={{ y: -5, scale: 1.03 }}
              className={`${feature.bg} rounded-2xl p-5 border border-white shadow-sm hover:shadow-lg 
                       transition-all duration-300 cursor-default`}
            >
              <div
                className={`w-12 h-12 bg-white rounded-xl flex items-center justify-center 
                           shadow-md mb-3 ${feature.color}`}
              >
                {feature.icon}
              </div>
              <h4 className="font-heading text-base text-gray-800 mb-1">{feature.title}</h4>
              <p className="text-gray-500 font-body text-xs leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
