"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { HiSparkles } from "react-icons/hi2";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=800&q=80",
    alt: "Children learning together",
    span: "col-span-2 row-span-2",
    label: "Learning Together 📚",
  },
  {
    src: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=600&q=80",
    alt: "Creative arts session",
    span: "col-span-1 row-span-1",
    label: "Creative Play 🎨",
  },
  {
    src: "https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=600&q=80",
    alt: "Outdoor activities",
    span: "col-span-1 row-span-1",
    label: "Outdoor Fun 🌿",
  },
  {
    src: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=600&q=80",
    alt: "Music class",
    span: "col-span-1 row-span-1",
    label: "Music Time 🎵",
  },
  {
    src: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=600&q=80",
    alt: "Story time",
    span: "col-span-1 row-span-1",
    label: "Story Time 📖",
  },
  {
    src: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=800&q=80",
    alt: "Play area",
    span: "col-span-2 row-span-1",
    label: "Indoor Play Area 🎪",
  },
];

export default function Gallery() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="gallery" className="py-20 bg-gradient-kids relative overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 text-sunny-orange font-bold text-sm tracking-wider uppercase mb-3 font-body">
            <HiSparkles /> Our Gallery <HiSparkles />
          </span>
          <h2 className="section-title">
            Glimpses of{" "}
            <span className="text-gradient-warm">Happy Moments</span> 📸
          </h2>
          <p className="section-subtitle">
            Take a peek into our colorful classrooms, fun play areas, and the joyful
            moments that make every day special at Love2Learn.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.1 + i * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className={`${img.span} relative rounded-3xl overflow-hidden shadow-lg group cursor-pointer`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent 
                          opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              <div
                className="absolute bottom-4 left-4 text-white font-heading text-lg opacity-0 
                          group-hover:opacity-100 transition-opacity duration-300 transform 
                          translate-y-4 group-hover:translate-y-0"
              >
                {img.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
