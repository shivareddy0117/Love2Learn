"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { HiSparkles } from "react-icons/hi2";
import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiClock,
  FiSend,
} from "react-icons/fi";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [formData, setFormData] = useState({
    childName: "",
    childAge: "",
    parentName: "",
    email: "",
    phone: "",
    program: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        toast.success("🎉 Inquiry submitted successfully! We'll contact you soon.");
        setFormData({
          childName: "",
          childAge: "",
          parentName: "",
          email: "",
          phone: "",
          program: "",
          message: "",
        });
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch {
      toast.error("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-kids relative overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 text-coral font-bold text-sm tracking-wider uppercase mb-3 font-body">
            <HiSparkles /> Get In Touch <HiSparkles />
          </span>
          <h2 className="section-title">
            Start Your Child&apos;s{" "}
            <span className="text-gradient-warm">Journey</span> Today! 🚀
          </h2>
          <p className="section-subtitle">
            Fill out the form below and we&apos;ll get back to you within 24 hours.
            You can also visit us or give us a call!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="bg-white rounded-3xl p-6 shadow-lg border border-pink-50">
              <h3 className="font-heading text-xl text-gray-800 mb-6">Contact Information</h3>

              <div className="space-y-5">
                <a
                  href="tel:+919876543210"
                  className="flex items-start gap-4 group hover:bg-pink-50 p-3 rounded-2xl transition-colors"
                >
                  <div className="w-12 h-12 bg-candy-light rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <FiPhone className="text-candy-pink" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-700 font-body text-sm">Phone</h4>
                    <p className="text-gray-500 font-body text-sm">+91 98765 43210</p>
                    <p className="text-gray-400 font-body text-xs">Mon-Sat, 8am to 6pm</p>
                  </div>
                </a>

                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 group hover:bg-green-50 p-3 rounded-2xl transition-colors"
                >
                  <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <FaWhatsapp className="text-green-500" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-700 font-body text-sm">WhatsApp</h4>
                    <p className="text-gray-500 font-body text-sm">+91 98765 43210</p>
                    <p className="text-gray-400 font-body text-xs">Quick responses</p>
                  </div>
                </a>

                <a
                  href="mailto:hello@love2learn.school"
                  className="flex items-start gap-4 group hover:bg-blue-50 p-3 rounded-2xl transition-colors"
                >
                  <div className="w-12 h-12 bg-sky-light rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <FiMail className="text-sky-blue" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-700 font-body text-sm">Email</h4>
                    <p className="text-gray-500 font-body text-sm">hello@love2learn.school</p>
                    <p className="text-gray-400 font-body text-xs">We reply within 24hrs</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-3">
                  <div className="w-12 h-12 bg-sunny-light rounded-xl flex items-center justify-center flex-shrink-0">
                    <FiMapPin className="text-sunny-orange" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-700 font-body text-sm">Location</h4>
                    <p className="text-gray-500 font-body text-sm">
                      Near Residential Colony,
                      <br />
                      Hyderabad, Telangana
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-3">
                  <div className="w-12 h-12 bg-lavender-light rounded-xl flex items-center justify-center flex-shrink-0">
                    <FiClock className="text-lavender-purple" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-700 font-body text-sm">School Hours</h4>
                    <p className="text-gray-500 font-body text-sm">
                      Mon - Sat: 8:30 AM - 3:30 PM
                    </p>
                    <p className="text-gray-400 font-body text-xs">Office: 8 AM - 6 PM</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-6 pt-6 border-t border-gray-100">
                <p className="text-sm font-bold text-gray-600 mb-3 font-body">Follow Us</p>
                <div className="flex gap-3">
                  <a
                    href="#"
                    className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white hover:scale-110 transition-transform"
                  >
                    <FaInstagram size={18} />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center text-white hover:scale-110 transition-transform"
                  >
                    <FaWhatsapp size={18} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Inquiry Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="lg:col-span-3"
          >
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-pink-50">
              <h3 className="font-heading text-xl text-gray-800 mb-2">Admission Inquiry Form</h3>
              <p className="text-gray-400 font-body text-sm mb-6">
                Fill in the details below and we&apos;ll schedule a school visit for you! 🏫
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-bold text-gray-600 font-body mb-1 block">
                      Child&apos;s Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.childName}
                      onChange={(e) => setFormData({ ...formData, childName: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:border-candy-pink 
                               focus:ring-2 focus:ring-candy-pink/20 outline-none transition-all font-body text-sm"
                      placeholder="Enter child's name"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-bold text-gray-600 font-body mb-1 block">
                      Child&apos;s Age *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.childAge}
                      onChange={(e) => setFormData({ ...formData, childAge: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:border-candy-pink 
                               focus:ring-2 focus:ring-candy-pink/20 outline-none transition-all font-body text-sm"
                      placeholder="e.g., 2.5 years"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-bold text-gray-600 font-body mb-1 block">
                    Parent/Guardian Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.parentName}
                    onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:border-candy-pink 
                             focus:ring-2 focus:ring-candy-pink/20 outline-none transition-all font-body text-sm"
                    placeholder="Enter parent's name"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-bold text-gray-600 font-body mb-1 block">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:border-candy-pink 
                               focus:ring-2 focus:ring-candy-pink/20 outline-none transition-all font-body text-sm"
                      placeholder="parent@email.com"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-bold text-gray-600 font-body mb-1 block">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:border-candy-pink 
                               focus:ring-2 focus:ring-candy-pink/20 outline-none transition-all font-body text-sm"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-bold text-gray-600 font-body mb-1 block">
                    Program Interested In *
                  </label>
                  <select
                    required
                    value={formData.program}
                    onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:border-candy-pink 
                             focus:ring-2 focus:ring-candy-pink/20 outline-none transition-all font-body text-sm 
                             bg-white appearance-none cursor-pointer"
                  >
                    <option value="">Select a program</option>
                    <option value="playgroup">🧸 Playgroup (1.5 - 2.5 yrs)</option>
                    <option value="nursery">🎨 Nursery (2.5 - 3.5 yrs)</option>
                    <option value="lkg">📚 LKG (3.5 - 4.5 yrs)</option>
                    <option value="ukg">🎓 UKG (4.5 - 5.5 yrs)</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm font-bold text-gray-600 font-body mb-1 block">
                    Message (Optional)
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:border-candy-pink 
                             focus:ring-2 focus:ring-candy-pink/20 outline-none transition-all font-body text-sm resize-none"
                    placeholder="Any specific questions or requirements..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {loading ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <FiSend /> Submit Inquiry
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
