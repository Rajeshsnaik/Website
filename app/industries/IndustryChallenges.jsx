"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, AlertCircle } from "lucide-react";

// Data
const challengeData = [
  {
    id: 1,
    industry: "Healthcare",
    challenge: "Fragmented patient data and slow retrieval times delaying critical diagnosis.",
    solution: "Unified Cloud-based EHR systems ensuring real-time, secure data access anywhere.",
  },
  {
    id: 2,
    industry: "Retail",
    challenge: "Inaccurate inventory tracking leading to overstocking or stockouts.",
    solution: "AI-driven demand forecasting combined with automated supply chain workflows.",
  },
  {
    id: 3,
    industry: "Manufacturing",
    challenge: "Unplanned machinery downtime causing massive production revenue losses.",
    solution: "IoT-enabled Predictive Maintenance systems that detect faults before they occur.",
  },
  {
    id: 4,
    industry: "BFSI",
    challenge: "Rising sophisticated fraud attempts slipping past traditional security layers.",
    solution: "Real-time Machine Learning anomaly detection algorithms for instant fraud prevention.",
  },
  {
    id: 5,
    industry: "Education",
    challenge: "Low student engagement and lack of personalized learning paths.",
    solution: "Gamified E-Learning platforms with AI-adaptive curriculum for every student.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const rowVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const IndustryChallenges = () => {
  return (
    <section className="relative w-full py-20 overflow-hidden">
      
      {/* --- 1. Low Opacity Gradient Background --- */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.03]" // Very subtle tint (3%)
        style={{ background: "var(--gradient-primary)" }}
      ></div>

      <div className="container relative z-10 mx-auto px-4 max-w-5xl">
        
        {/* --- Header Section --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 
            className="text-3xl md:text-4xl font-extrabold tracking-tight mb-3"
            style={{
              background: "var(--gradient-primary)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Industry Challenges & Your Solutions
          </h2>
          <p className="text-base text-gray-500 font-medium">
            Turning complex sector-specific obstacles into competitive advantages.
          </p>
        </motion.div>

        {/* --- Table Grid Structure --- */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="rounded-3xl border border-gray-200 overflow-hidden shadow-sm bg-white"
        >
          {/* Table Header (Title Case & Bigger Font) */}
          <div className="hidden md:grid grid-cols-2 bg-gray-50 border-b border-gray-200 py-6 px-8">
            <h4 
              className="text-xl font-bold tracking-tight"
              style={{ color: "var(--color-primary-dark)" }}
            >
              The Challenge
            </h4>
            <h4 
              className="text-xl font-bold tracking-tight"
              style={{ color: "var(--color-primary-dark)" }}
            >
              Our Solution
            </h4>
          </div>

          {/* Table Rows (Compact Padding) */}
          {challengeData.map((item) => (
            <motion.div
              key={item.id}
              variants={rowVariants}
              className={`
                group grid grid-cols-1 md:grid-cols-2 relative
                border-b border-gray-100 last:border-b-0
                hover:bg-blue-50/20 transition-colors duration-200
              `}
            >
              {/* --- Col 1: The Challenge --- */}
              {/* Reduced padding (p-6) for smaller table feel */}
              <div className="p-6 md:px-8 border-b md:border-b-0 md:border-r border-gray-100 relative">
                
                {/* Industry Tag */}
                <span 
                  className="inline-block px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider mb-3"
                  style={{ 
                    backgroundColor: "rgba(53, 86, 148, 0.08)", 
                    color: "var(--color-primary-dark)" 
                  }}
                >
                  {item.industry}
                </span>

                <div className="flex items-start gap-3">
                  <AlertCircle size={18} className="text-red-400 mt-0.5 flex-shrink-0" />
                  {/* Smaller content font size (text-sm) */}
                  <p className="text-sm md:text-base text-gray-700 font-medium leading-relaxed">
                    {item.challenge}
                  </p>
                </div>
              </div>

              {/* --- Col 2: The Solution --- */}
              <div className="p-6 md:px-8 flex flex-col justify-center">
                <div className="flex items-start gap-3">
                  <CheckCircle2 
                    size={20} 
                    className="mt-0.5 flex-shrink-0"
                    style={{ color: "var(--color-accent-orange)" }} 
                  />
                  {/* Smaller content font size (text-sm) */}
                  <p className="text-sm md:text-base text-gray-600 font-medium leading-relaxed">
                    {item.solution}
                  </p>
                </div>
              </div>

              {/* Decorative Accent on Hover (Left Bar) */}
              <div 
                className="absolute left-0 top-0 bottom-0 w-1 bg-transparent group-hover:bg-[var(--color-primary-light)] transition-colors duration-300"
              ></div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default IndustryChallenges;