"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { HiSparkles } from "react-icons/hi2";

export default function CTABanner() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="py-16 relative overflow-hidden" ref={ref}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-candy-pink via-sunny-orange to-sky-blue rounded-[2rem] p-10 md:p-14
                   text-center text-white relative overflow-hidden shadow-2xl"
        >
          {/* Floating shapes */}
          <div className="absolute top-4 left-4 text-3xl opacity-20 animate-float">⭐</div>
          <div className="absolute top-8 right-8 text-4xl opacity-20 animate-float-slow">🌈</div>
          <div className="absolute bottom-4 left-1/4 text-3xl opacity-20 animate-float-fast">🎨</div>
          <div className="absolute bottom-6 right-1/4 text-2xl opacity-20 animate-bounce-slow">🧸</div>
          
          {/* Dot pattern overlay */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }} />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="relative z-10"
          >
            <h2 className="font-heading text-3xl md:text-5xl mb-4">
              Give Your Child the
              <br />
              Best Start in Life! 🌟
            </h2>
            <p className="text-white/90 font-body text-lg mb-8 max-w-2xl mx-auto">
              Limited seats available for 2026-27. Join our family of happy learners
              and watch your child bloom!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="#contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-candy-pink font-bold py-3 px-8 rounded-full shadow-lg 
                           hover:shadow-xl transition-all duration-300 text-lg font-body flex items-center gap-2"
                >
                  <HiSparkles /> Enroll Now
                </motion.button>
              </Link>
              <a href="tel:+919876543210">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/20 backdrop-blur-sm text-white border-2 border-white/50 font-bold 
                           py-3 px-8 rounded-full hover:bg-white/30 transition-all duration-300 text-lg font-body"
                >
                  📞 Call Us Now
                </motion.button>
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
