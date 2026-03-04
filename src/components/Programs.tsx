"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { HiSparkles } from "react-icons/hi2";
import { FaCheck } from "react-icons/fa";

const programs = [
  {
    name: "Playgroup",
    age: "1.5 - 2.5 years",
    emoji: "🧸",
    color: "from-candy-pink to-candy-rose",
    borderColor: "border-candy-pink",
    bgColor: "bg-candy-light",
    textColor: "text-candy-pink",
    image: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=600&q=80",
    description: "A gentle introduction to the world of learning through sensory play, music, and social interaction.",
    highlights: [
      "Sensory play activities",
      "Music & movement",
      "Basic motor skill development",
      "Social interaction skills",
      "Story time & rhymes",
      "Free play sessions",
    ],
  },
  {
    name: "Nursery",
    age: "2.5 - 3.5 years",
    emoji: "🎨",
    color: "from-sky-blue to-sky-deep",
    borderColor: "border-sky-blue",
    bgColor: "bg-sky-light",
    textColor: "text-sky-deep",
    image: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=600&q=80",
    description: "Building foundation skills through structured play, early literacy, and creative arts.",
    highlights: [
      "Alphabet & phonics introduction",
      "Number recognition (1-20)",
      "Color & shape recognition",
      "Art & craft activities",
      "Basic writing readiness",
      "Outdoor play & exercise",
    ],
  },
  {
    name: "LKG",
    age: "3.5 - 4.5 years",
    emoji: "📚",
    color: "from-grass-green to-grass-mint",
    borderColor: "border-grass-green",
    bgColor: "bg-grass-light",
    textColor: "text-grass-green",
    image: "https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=600&q=80",
    description: "Developing reading readiness, number concepts, and independent thinking skills.",
    highlights: [
      "Reading & writing practice",
      "Number concepts (1-50)",
      "Basic addition & subtraction",
      "EVS (Environmental Science)",
      "Hindi alphabet introduction",
      "Group activities & projects",
    ],
  },
  {
    name: "UKG",
    age: "4.5 - 5.5 years",
    emoji: "🎓",
    color: "from-lavender-purple to-lavender-soft",
    borderColor: "border-lavender-purple",
    bgColor: "bg-lavender-light",
    textColor: "text-lavender-purple",
    image: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=600&q=80",
    description: "Preparing children for primary school with advanced learning and life skills.",
    highlights: [
      "Advanced reading & comprehension",
      "Number concepts (1-100)",
      "Simple word problems",
      "English & Hindi writing",
      "General Knowledge basics",
      "School readiness activities",
    ],
  },
];

export default function Programs() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="programs" className="py-20 bg-gradient-kids relative overflow-hidden" ref={ref}>
      {/* Background Shapes */}
      <div className="absolute top-20 left-10 text-6xl opacity-5 animate-float">🎪</div>
      <div className="absolute bottom-20 right-10 text-6xl opacity-5 animate-float-slow">🎡</div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 text-sky-deep font-bold text-sm tracking-wider uppercase mb-3 font-body">
            <HiSparkles /> Our Programs <HiSparkles />
          </span>
          <h2 className="section-title">
            Programs Designed for{" "}
            <span className="text-gradient-warm">Every Age</span> 🎯
          </h2>
          <p className="section-subtitle">
            From playful exploration to school readiness, our age-appropriate programs
            ensure every child develops at their own pace with joy and confidence.
          </p>
        </motion.div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {programs.map((program, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.15 }}
              whileHover={{ y: -8 }}
              className="card-kids group"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={program.image}
                  alt={`${program.name} program at Love2Learn`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${program.color} opacity-40`} />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-4 py-1.5 shadow-lg">
                  <span className="font-heading text-sm text-gray-700">
                    {program.emoji} {program.name}
                  </span>
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 shadow-lg">
                  <span className="text-xs font-bold text-gray-500 font-body">
                    Age: {program.age}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className={`font-heading text-2xl ${program.textColor} mb-2`}>
                  {program.name} Program
                </h3>
                <p className="text-gray-500 font-body text-sm mb-4 leading-relaxed">
                  {program.description}
                </p>

                {/* Highlights */}
                <div className="grid grid-cols-2 gap-2">
                  {program.highlights.map((highlight, j) => (
                    <div key={j} className="flex items-center gap-2">
                      <FaCheck className={`${program.textColor} flex-shrink-0`} size={12} />
                      <span className="text-xs text-gray-500 font-body">{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.03 }}
                  className={`mt-6 block text-center py-3 rounded-2xl ${program.bgColor} ${program.textColor} 
                           font-bold text-sm transition-all hover:shadow-md font-body`}
                >
                  Inquire About {program.name} →
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
