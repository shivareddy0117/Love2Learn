"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { HiSparkles } from "react-icons/hi2";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Priya Sharma",
    relation: "Mother of Aadhya (Nursery)",
    text: "My daughter absolutely loves going to Love2Learn! The teachers are so caring and patient. She has learned so much in just a few months. The daily activity reports keep me connected.",
    rating: 5,
    avatar: "👩",
    bg: "bg-candy-light",
  },
  {
    name: "Rajesh Kumar",
    relation: "Father of Arjun (LKG)",
    text: "The safety measures here are outstanding - CCTV cameras, secure entry, and the pickup authorization system gives us complete peace of mind. My son is thriving!",
    rating: 5,
    avatar: "👨",
    bg: "bg-sky-light",
  },
  {
    name: "Sneha Reddy",
    relation: "Mother of Saanvi (Playgroup)",
    text: "The play-based learning approach is amazing. My little one started speaking so many new words and is much more confident now. The indoor play area is her favorite!",
    rating: 5,
    avatar: "👩",
    bg: "bg-grass-light",
  },
  {
    name: "Vikram Patel",
    relation: "Father of Reyansh (UKG)",
    text: "We are very happy with the school readiness program. The teachers prepared my son well for primary school. The creative arts and music sessions are wonderful.",
    rating: 5,
    avatar: "👨",
    bg: "bg-lavender-light",
  },
  {
    name: "Anita Gupta",
    relation: "Mother of Twins (Nursery)",
    text: "Managing twins is not easy, but Love2Learn made it so smooth. Both my kids enjoy different activities and the teachers give individual attention to each child.",
    rating: 5,
    avatar: "👩",
    bg: "bg-sunny-light",
  },
  {
    name: "Mohammed Rafi",
    relation: "Father of Zara (LKG)",
    text: "The hygiene standards are excellent. Clean toilets, RO water, regular sanitization - everything a parent wants. The WhatsApp updates are a lovely touch!",
    rating: 5,
    avatar: "👨",
    bg: "bg-coral-light",
  },
];

export default function Testimonials() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="py-20 bg-white relative overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 text-candy-pink font-bold text-sm tracking-wider uppercase mb-3 font-body">
            <HiSparkles /> Testimonials <HiSparkles />
          </span>
          <h2 className="section-title">
            What <span className="text-gradient-warm">Parents Say</span> 💬
          </h2>
          <p className="section-subtitle">
            Don&apos;t just take our word for it. Hear from the parents who trust us with
            their most precious little ones.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.1 }}
              whileHover={{ y: -5 }}
              className={`${testimonial.bg} rounded-3xl p-6 border border-white shadow-sm hover:shadow-lg transition-all duration-300`}
            >
              <FaQuoteLeft className="text-gray-200 mb-3" size={24} />
              <p className="text-gray-600 font-body text-sm leading-relaxed mb-4">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-2xl shadow-md">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 font-body text-sm">{testimonial.name}</h4>
                    <p className="text-gray-400 font-body text-xs">{testimonial.relation}</p>
                  </div>
                </div>
                <div className="flex text-sunny-yellow gap-0.5">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <FaStar key={j} size={12} />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
