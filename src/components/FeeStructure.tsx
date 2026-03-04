"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { HiSparkles } from "react-icons/hi2";
import { FaCheck, FaStar, FaCrown } from "react-icons/fa";
import Link from "next/link";

const feeData = [
  {
    program: "Playgroup",
    age: "1.5 - 2.5 yrs",
    emoji: "🧸",
    monthlyFee: "₹3,000 – ₹5,000",
    admissionFee: "₹5,000 – ₹10,000",
    color: "border-candy-pink",
    bgColor: "bg-candy-light",
    textColor: "text-candy-pink",
    gradient: "from-candy-pink to-candy-rose",
    popular: false,
    features: [
      "Sensory play activities",
      "Music & rhymes",
      "Basic motor skills",
      "Free play sessions",
      "Art & craft time",
    ],
  },
  {
    program: "Nursery",
    age: "2.5 - 3.5 yrs",
    emoji: "🎨",
    monthlyFee: "₹3,500 – ₹6,000",
    admissionFee: "₹5,000 – ₹12,000",
    color: "border-sky-blue",
    bgColor: "bg-sky-light",
    textColor: "text-sky-deep",
    gradient: "from-sky-blue to-sky-deep",
    popular: true,
    features: [
      "Alphabet & phonics",
      "Number recognition",
      "Creative arts",
      "Outdoor activities",
      "Social skill building",
      "Writing readiness",
    ],
  },
  {
    program: "LKG",
    age: "3.5 - 4.5 yrs",
    emoji: "📚",
    monthlyFee: "₹4,000 – ₹7,000",
    admissionFee: "₹8,000 – ₹15,000",
    color: "border-grass-green",
    bgColor: "bg-grass-light",
    textColor: "text-grass-green",
    gradient: "from-grass-green to-grass-mint",
    popular: false,
    features: [
      "Reading & writing",
      "Math concepts",
      "EVS introduction",
      "Hindi basics",
      "Group projects",
      "Physical education",
    ],
  },
  {
    program: "UKG",
    age: "4.5 - 5.5 yrs",
    emoji: "🎓",
    monthlyFee: "₹4,000 – ₹7,000",
    admissionFee: "₹10,000 – ₹15,000",
    color: "border-lavender-purple",
    bgColor: "bg-lavender-light",
    textColor: "text-lavender-purple",
    gradient: "from-lavender-purple to-lavender-soft",
    popular: false,
    features: [
      "Advanced reading",
      "Math operations",
      "English & Hindi",
      "General knowledge",
      "School readiness",
      "Life skills",
    ],
  },
];

export default function FeeStructure() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="fees" className="py-20 bg-white relative overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 text-lavender-purple font-bold text-sm tracking-wider uppercase mb-3 font-body">
            <HiSparkles /> Fee Structure <HiSparkles />
          </span>
          <h2 className="section-title">
            Affordable &{" "}
            <span className="text-gradient-warm">Transparent</span> Pricing 💰
          </h2>
          <p className="section-subtitle">
            Quality education at reasonable fees. Books and uniform are charged separately.
            Multiple payment options available including online payment.
          </p>
        </motion.div>

        {/* Fee Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {feeData.map((fee, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`relative bg-white rounded-3xl border-2 ${fee.color} shadow-lg hover:shadow-2xl 
                       transition-all duration-500 overflow-hidden`}
            >
              {/* Popular Badge */}
              {fee.popular && (
                <div
                  className={`absolute top-0 right-0 bg-gradient-to-r ${fee.gradient} text-white 
                           px-4 py-1 rounded-bl-2xl text-xs font-bold flex items-center gap-1`}
                >
                  <FaCrown size={10} /> Most Popular
                </div>
              )}

              {/* Header */}
              <div className={`${fee.bgColor} p-6 text-center`}>
                <div className="text-4xl mb-2">{fee.emoji}</div>
                <h3 className={`font-heading text-2xl ${fee.textColor}`}>{fee.program}</h3>
                <p className="text-gray-400 font-body text-sm">Age: {fee.age}</p>
              </div>

              {/* Pricing */}
              <div className="p-6">
                <div className="text-center mb-6">
                  <p className="text-xs text-gray-400 font-body uppercase tracking-wider mb-1">Monthly Fee</p>
                  <p className={`font-heading text-2xl ${fee.textColor}`}>{fee.monthlyFee}</p>
                  <div className="mt-3 pt-3 border-t border-gray-100">
                    <p className="text-xs text-gray-400 font-body">Admission Fee (One-time)</p>
                    <p className="font-bold text-gray-600 font-body">{fee.admissionFee}</p>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {fee.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2">
                      <FaCheck className={`${fee.textColor} flex-shrink-0`} size={12} />
                      <span className="text-sm text-gray-500 font-body">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  href="#contact"
                  className={`block text-center py-3 rounded-2xl bg-gradient-to-r ${fee.gradient} 
                           text-white font-bold text-sm hover:shadow-lg transition-all duration-300 font-body`}
                >
                  Enroll Now ✨
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-start gap-2 bg-sunny-light px-6 py-4 rounded-2xl border border-yellow-200">
            <FaStar className="text-sunny-yellow mt-1 flex-shrink-0" />
            <div className="text-left">
              <p className="text-sm font-bold text-gray-700 font-body">Note:</p>
              <p className="text-xs text-gray-500 font-body">
                Books and uniform fees are charged separately. Sibling discount available.
                Fees may vary. Contact us for the latest fee details and payment plans.
              </p>
            </div>
          </div>
          <div className="mt-6">
            <Link
              href="/payment"
              className="btn-secondary inline-flex items-center gap-2 text-base"
            >
              💳 Pay Fees Online
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
