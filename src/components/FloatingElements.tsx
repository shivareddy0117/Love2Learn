"use client";

import { motion } from "framer-motion";

const shapes = [
  { color: "bg-candy-pink", size: "w-16 h-16", top: "10%", left: "5%", delay: 0 },
  { color: "bg-sunny-yellow", size: "w-12 h-12", top: "20%", right: "10%", delay: 1 },
  { color: "bg-sky-blue", size: "w-20 h-20", top: "60%", left: "8%", delay: 2 },
  { color: "bg-grass-green", size: "w-14 h-14", top: "70%", right: "5%", delay: 0.5 },
  { color: "bg-lavender-purple", size: "w-10 h-10", top: "40%", left: "3%", delay: 1.5 },
  { color: "bg-sunny-orange", size: "w-8 h-8", top: "30%", right: "15%", delay: 2.5 },
  { color: "bg-candy-rose", size: "w-6 h-6", top: "80%", left: "15%", delay: 3 },
  { color: "bg-sky-deep", size: "w-10 h-10", top: "50%", right: "3%", delay: 1.8 },
];

export default function FloatingElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {shapes.map((shape, i) => (
        <motion.div
          key={i}
          className={`absolute ${shape.color} ${shape.size} rounded-full opacity-10`}
          style={{
            top: shape.top,
            left: shape.left,
            right: shape.right,
          }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 6 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: shape.delay,
          }}
        />
      ))}
      
      {/* Stars */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`star-${i}`}
          className="absolute text-sunny-yellow opacity-30"
          style={{
            top: `${10 + i * 12}%`,
            left: `${5 + i * 12}%`,
            fontSize: `${12 + (i % 3) * 8}px`,
          }}
          animate={{
            opacity: [0.1, 0.4, 0.1],
            scale: [0.8, 1.2, 0.8],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.3,
          }}
        >
          ⭐
        </motion.div>
      ))}
    </div>
  );
}

export function CloudDecoration() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute top-10 -left-10 text-7xl opacity-10"
        animate={{ x: [0, 100, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        ☁️
      </motion.div>
      <motion.div
        className="absolute top-32 right-0 text-5xl opacity-10"
        animate={{ x: [0, -80, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      >
        ☁️
      </motion.div>
      <motion.div
        className="absolute top-20 left-1/3 text-4xl opacity-5"
        animate={{ x: [0, 60, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        ☁️
      </motion.div>
    </div>
  );
}
