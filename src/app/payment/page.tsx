"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaGraduationCap,
  FaCreditCard,
  FaShieldAlt,
  FaCheckCircle,
  FaArrowLeft,
} from "react-icons/fa";
import { HiSparkles } from "react-icons/hi2";
import toast from "react-hot-toast";

const feeOptions = [
  { type: "monthly", label: "Monthly Fee", icon: "📅" },
  { type: "admission", label: "Admission Fee", icon: "🎓" },
  { type: "books", label: "Books & Materials", icon: "📚" },
  { type: "uniform", label: "Uniform", icon: "👕" },
  { type: "other", label: "Other", icon: "📋" },
];

const programFees: Record<string, number> = {
  playgroup: 4000,
  nursery: 5000,
  lkg: 6000,
  ukg: 6000,
};

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Razorpay: any;
  }
}

export default function PaymentPage() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [formData, setFormData] = useState({
    studentName: "",
    studentId: "",
    parentName: "",
    parentEmail: "",
    parentPhone: "",
    program: "",
    feeType: "monthly",
    month: "",
    amount: 0,
    customAmount: "",
  });

  const handleProgramChange = (program: string) => {
    setFormData({
      ...formData,
      program,
      amount: formData.feeType === "monthly" ? (programFees[program] || 0) : formData.amount,
    });
  };

  const handleFeeTypeChange = (feeType: string) => {
    let amount = 0;
    if (feeType === "monthly" && formData.program) {
      amount = programFees[formData.program] || 0;
    } else if (feeType === "admission") {
      amount = 10000;
    }
    setFormData({ ...formData, feeType, amount });
  };

  const handlePayment = async () => {
    setLoading(true);
    const finalAmount = formData.customAmount ? parseFloat(formData.customAmount) : formData.amount;

    if (!finalAmount || finalAmount <= 0) {
      toast.error("Please enter a valid amount");
      setLoading(false);
      return;
    }

    try {
      // Create payment order
      const res = await fetch("/api/payments/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          studentId: formData.studentId || "guest",
          amount: finalAmount,
          feeType: formData.feeType,
          month: formData.month,
          description: `${formData.feeType} fee for ${formData.studentName}`,
        }),
      });

      const data = await res.json();

      if (data.razorpayOrder && data.key) {
        // Open Razorpay checkout
        const options = {
          key: data.key,
          amount: data.razorpayOrder.amount,
          currency: "INR",
          name: "Love2Learn AI Kids School",
          description: `${formData.feeType} Fee Payment`,
          order_id: data.razorpayOrder.id,
          handler: async function (response: {
            razorpay_payment_id: string;
            razorpay_order_id: string;
            razorpay_signature: string;
          }) {
            // Verify payment
            const verifyRes = await fetch("/api/payments/verify", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
                paymentId: data.payment.id,
              }),
            });

            const verifyData = await verifyRes.json();
            if (verifyData.success) {
              setPaymentSuccess(true);
              toast.success("🎉 Payment successful!");
            }
          },
          prefill: {
            name: formData.parentName,
            email: formData.parentEmail,
            contact: formData.parentPhone,
          },
          theme: {
            color: "#FF6B9D",
          },
        };

        const razorpay = new window.Razorpay(options);
        razorpay.open();
      } else {
        // Demo mode - simulate payment
        toast.success("🎉 Payment recorded! (Demo mode - Razorpay not configured)");
        setPaymentSuccess(true);
      }
    } catch {
      toast.error("Payment failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (paymentSuccess) {
    return (
      <div className="min-h-screen bg-gradient-kids flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-3xl p-10 shadow-2xl text-center max-w-md w-full"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <FaCheckCircle className="text-green-500" size={40} />
          </motion.div>
          <h2 className="font-heading text-3xl text-gray-800 mb-2">Payment Successful! 🎉</h2>
          <p className="text-gray-500 font-body mb-2">
            Thank you for your payment, {formData.parentName || "Parent"}!
          </p>
          <p className="text-gray-400 font-body text-sm mb-6">
            Amount: ₹{formData.customAmount || formData.amount} | {formData.feeType} fee
          </p>
          <p className="text-gray-400 font-body text-xs mb-8">
            A confirmation has been recorded. Please keep this for your reference.
          </p>
          <div className="flex flex-col gap-3">
            <Link href="/" className="btn-primary text-center">
              ← Back to Home
            </Link>
            <button
              onClick={() => {
                setPaymentSuccess(false);
                setStep(1);
                setFormData({
                  studentName: "",
                  studentId: "",
                  parentName: "",
                  parentEmail: "",
                  parentPhone: "",
                  program: "",
                  feeType: "monthly",
                  month: "",
                  amount: 0,
                  customAmount: "",
                });
              }}
              className="btn-outline text-center"
            >
              Make Another Payment
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-kids py-10">
      {/* Razorpay Script */}
      {/* eslint-disable-next-line @next/next/no-before-interactive-script-outside-document */}
      <script src="https://checkout.razorpay.com/v1/checkout.js" async />

      <div className="max-w-3xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-500 hover:text-candy-pink 
                     transition-colors font-body text-sm mb-6"
          >
            <FaArrowLeft size={12} /> Back to Home
          </Link>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-14 h-14 bg-gradient-to-br from-candy-pink to-sunny-yellow rounded-2xl flex items-center justify-center shadow-lg">
              <FaGraduationCap className="text-white text-2xl" />
            </div>
          </div>
          <h1 className="font-heading text-3xl md:text-4xl text-gray-800 mb-2">
            💳 Online Fee Payment
          </h1>
          <p className="text-gray-500 font-body">
            Love2Learn AI Kids School — Secure & Easy Payment Portal
          </p>
        </motion.div>

        {/* Steps Indicator */}
        <div className="flex items-center justify-center gap-4 mb-8">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center gap-2">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-heading text-sm transition-all ${
                  step >= s
                    ? "bg-gradient-to-r from-candy-pink to-sunny-orange text-white shadow-lg"
                    : "bg-gray-200 text-gray-400"
                }`}
              >
                {s}
              </div>
              {s < 3 && (
                <div
                  className={`w-12 h-1 rounded-full transition-all ${
                    step > s ? "bg-candy-pink" : "bg-gray-200"
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        {/* Step 1: Student Info */}
        {step === 1 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-3xl p-8 shadow-lg border border-pink-50"
          >
            <h2 className="font-heading text-xl text-gray-800 mb-1 flex items-center gap-2">
              <HiSparkles className="text-candy-pink" /> Student Information
            </h2>
            <p className="text-gray-400 font-body text-sm mb-6">
              Enter the student details for fee payment
            </p>

            <div className="space-y-4">
              <div>
                <label className="text-sm font-bold text-gray-600 font-body mb-1 block">
                  Student&apos;s Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.studentName}
                  onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:border-candy-pink 
                           focus:ring-2 focus:ring-candy-pink/20 outline-none transition-all font-body text-sm"
                  placeholder="Enter student's full name"
                />
              </div>

              <div>
                <label className="text-sm font-bold text-gray-600 font-body mb-1 block">
                  Student ID (if available)
                </label>
                <input
                  type="text"
                  value={formData.studentId}
                  onChange={(e) => setFormData({ ...formData, studentId: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:border-candy-pink 
                           focus:ring-2 focus:ring-candy-pink/20 outline-none transition-all font-body text-sm"
                  placeholder="e.g., L2L-2026-001"
                />
              </div>

              <div>
                <label className="text-sm font-bold text-gray-600 font-body mb-1 block">
                  Program *
                </label>
                <select
                  required
                  value={formData.program}
                  onChange={(e) => handleProgramChange(e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:border-candy-pink 
                           focus:ring-2 focus:ring-candy-pink/20 outline-none transition-all font-body text-sm bg-white"
                >
                  <option value="">Select program</option>
                  <option value="playgroup">🧸 Playgroup</option>
                  <option value="nursery">🎨 Nursery</option>
                  <option value="lkg">📚 LKG</option>
                  <option value="ukg">🎓 UKG</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-bold text-gray-600 font-body mb-1 block">
                    Parent Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.parentName}
                    onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:border-candy-pink 
                             focus:ring-2 focus:ring-candy-pink/20 outline-none transition-all font-body text-sm"
                    placeholder="Parent's name"
                  />
                </div>
                <div>
                  <label className="text-sm font-bold text-gray-600 font-body mb-1 block">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.parentPhone}
                    onChange={(e) => setFormData({ ...formData, parentPhone: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:border-candy-pink 
                             focus:ring-2 focus:ring-candy-pink/20 outline-none transition-all font-body text-sm"
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-bold text-gray-600 font-body mb-1 block">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  value={formData.parentEmail}
                  onChange={(e) => setFormData({ ...formData, parentEmail: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:border-candy-pink 
                           focus:ring-2 focus:ring-candy-pink/20 outline-none transition-all font-body text-sm"
                  placeholder="parent@email.com"
                />
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  if (formData.studentName && formData.program && formData.parentName && formData.parentPhone && formData.parentEmail) {
                    setStep(2);
                  } else {
                    toast.error("Please fill all required fields");
                  }
                }}
                className="btn-primary"
              >
                Next: Fee Details →
              </motion.button>
            </div>
          </motion.div>
        )}

        {/* Step 2: Fee Details */}
        {step === 2 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-3xl p-8 shadow-lg border border-pink-50"
          >
            <h2 className="font-heading text-xl text-gray-800 mb-1 flex items-center gap-2">
              <FaCreditCard className="text-sky-blue" /> Fee Details
            </h2>
            <p className="text-gray-400 font-body text-sm mb-6">
              Select the fee type and enter the amount
            </p>

            <div className="space-y-4">
              {/* Fee Type Selection */}
              <div>
                <label className="text-sm font-bold text-gray-600 font-body mb-2 block">
                  Fee Type *
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {feeOptions.map((option) => (
                    <button
                      key={option.type}
                      onClick={() => handleFeeTypeChange(option.type)}
                      className={`p-3 rounded-2xl border-2 text-center transition-all ${
                        formData.feeType === option.type
                          ? "border-candy-pink bg-candy-light"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <div className="text-2xl mb-1">{option.icon}</div>
                      <div className="text-xs font-bold text-gray-700 font-body">{option.label}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Month Selection for monthly fees */}
              {formData.feeType === "monthly" && (
                <div>
                  <label className="text-sm font-bold text-gray-600 font-body mb-1 block">
                    Month *
                  </label>
                  <select
                    required
                    value={formData.month}
                    onChange={(e) => setFormData({ ...formData, month: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:border-candy-pink 
                             focus:ring-2 focus:ring-candy-pink/20 outline-none transition-all font-body text-sm bg-white"
                  >
                    <option value="">Select month</option>
                    {["January", "February", "March", "April", "May", "June", 
                      "July", "August", "September", "October", "November", "December"].map((m) => (
                      <option key={m} value={`${m} 2026`}>{m} 2026</option>
                    ))}
                  </select>
                </div>
              )}

              {/* Amount */}
              <div>
                <label className="text-sm font-bold text-gray-600 font-body mb-1 block">
                  Amount (₹) *
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-body">₹</span>
                  <input
                    type="number"
                    value={formData.customAmount || formData.amount}
                    onChange={(e) => setFormData({ ...formData, customAmount: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 rounded-2xl border border-gray-200 focus:border-candy-pink 
                             focus:ring-2 focus:ring-candy-pink/20 outline-none transition-all font-body text-sm"
                    placeholder="Enter amount"
                    min="1"
                  />
                </div>
                {formData.feeType === "monthly" && formData.program && (
                  <p className="text-xs text-gray-400 font-body mt-1">
                    Suggested fee for {formData.program}: ₹{programFees[formData.program]}
                  </p>
                )}
              </div>
            </div>

            <div className="mt-6 flex justify-between">
              <button onClick={() => setStep(1)} className="btn-outline">
                ← Back
              </button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  const amount = formData.customAmount ? parseFloat(formData.customAmount) : formData.amount;
                  if (amount > 0) {
                    setStep(3);
                  } else {
                    toast.error("Please enter a valid amount");
                  }
                }}
                className="btn-primary"
              >
                Next: Review →
              </motion.button>
            </div>
          </motion.div>
        )}

        {/* Step 3: Review & Pay */}
        {step === 3 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-3xl p-8 shadow-lg border border-pink-50"
          >
            <h2 className="font-heading text-xl text-gray-800 mb-1 flex items-center gap-2">
              <FaShieldAlt className="text-grass-green" /> Review & Pay
            </h2>
            <p className="text-gray-400 font-body text-sm mb-6">
              Please review the details before making payment
            </p>

            {/* Summary Card */}
            <div className="bg-gradient-kids rounded-2xl p-6 mb-6">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 font-body text-sm">Student Name</span>
                  <span className="font-bold text-gray-800 font-body">{formData.studentName}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 font-body text-sm">Program</span>
                  <span className="font-bold text-gray-800 font-body capitalize">{formData.program}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 font-body text-sm">Fee Type</span>
                  <span className="font-bold text-gray-800 font-body capitalize">{formData.feeType}</span>
                </div>
                {formData.month && (
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 font-body text-sm">Month</span>
                    <span className="font-bold text-gray-800 font-body">{formData.month}</span>
                  </div>
                )}
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 font-body text-sm">Parent Name</span>
                  <span className="font-bold text-gray-800 font-body">{formData.parentName}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 font-body text-sm">Contact</span>
                  <span className="font-bold text-gray-800 font-body">{formData.parentPhone}</span>
                </div>
                <hr className="border-gray-200" />
                <div className="flex justify-between items-center pt-2">
                  <span className="text-lg font-heading text-gray-800">Total Amount</span>
                  <span className="text-2xl font-heading text-candy-pink">
                    ₹{formData.customAmount || formData.amount}
                  </span>
                </div>
              </div>
            </div>

            {/* Security Note */}
            <div className="flex items-start gap-3 bg-green-50 rounded-2xl p-4 mb-6">
              <FaShieldAlt className="text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm font-bold text-gray-700 font-body">Secure Payment</p>
                <p className="text-xs text-gray-500 font-body">
                  Your payment is secured with Razorpay&apos;s 256-bit encryption.
                  We do not store your card details.
                </p>
              </div>
            </div>

            <div className="flex justify-between">
              <button onClick={() => setStep(2)} className="btn-outline">
                ← Back
              </button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={loading}
                onClick={handlePayment}
                className="btn-primary flex items-center gap-2 disabled:opacity-50"
              >
                {loading ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    <FaCreditCard /> Pay ₹{formData.customAmount || formData.amount}
                  </>
                )}
              </motion.button>
            </div>
          </motion.div>
        )}

        {/* Trust Badges */}
        <div className="mt-8 flex flex-wrap justify-center gap-6 text-gray-400">
          <div className="flex items-center gap-2 text-xs font-body">
            <FaShieldAlt /> 256-bit Encryption
          </div>
          <div className="flex items-center gap-2 text-xs font-body">
            <FaCreditCard /> Razorpay Secured
          </div>
          <div className="flex items-center gap-2 text-xs font-body">
            <FaCheckCircle /> Instant Confirmation
          </div>
        </div>
      </div>
    </div>
  );
}
