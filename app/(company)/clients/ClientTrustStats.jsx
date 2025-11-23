"use client";

import React from "react";
import { motion } from "framer-motion";

const statsData = [
  {
    id: 1,
    number: "5+",
    label: "Fortune 50+ Clients",
    description: "Across 3+ countries.",
  },
  {
    id: 2,
    number: "75%",
    label: "Repeated Clients",
    description: "Approach us to improve, expand their existing and develop new solutions.",
  },
  {
    id: 3,
    number: "50%",
    label: "Loyal Clients",
    description: "Have continued to choose Blute Technologies for over 2+ years...",
  },
];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const ClientTrustStats = () => {
  return (
    <section
      className="relative w-full py-20 md:py-28 overflow-hidden flex flex-col items-center justify-center text-white"
      style={{ background: "var(--gradient-primary)" }}
    >
      {/* --- Animated World Map Background --- */}
      {/* Note: Ensure you have a white/transparent world map SVG at /images/world-map-white.svg 
          If not, the fallback text will simply not show the map but the gradient remains.
      */}
      <motion.div
        className="absolute inset-0 z-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: "url('/images/world-map-white.svg')", // Replace with your actual SVG path
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        // "Breathing" Animation for the map
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      ></motion.div>

      <div className="container relative z-10 mx-auto px-4 text-center">
        
        {/* --- Header Section --- */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-20 max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 drop-shadow-md">
            We are what our clients need us to be.
          </h2>
          <p className="text-lg md:text-xl font-medium opacity-90 text-blue-50">
            They trust us to help them create impactful software solutions.
          </p>
        </motion.div>

        {/* --- Stats Grid --- */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 items-start"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {statsData.map((stat) => (
            <motion.div
              key={stat.id}
              variants={itemVariants}
              className="flex flex-col items-center justify-center text-center px-4"
            >
              {/* Big Number */}
              <motion.div
                className="text-6xl md:text-7xl font-extrabold tracking-tight mb-4"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                style={{ textShadow: "0 4px 10px rgba(0,0,0,0.1)" }}
              >
                {stat.number}
              </motion.div>

              {/* Label */}
              <h3 
                className="text-xl md:text-2xl font-bold tracking-wide mb-3"
                style={{ color: "var(--color-accent-orange)" }} // Using accent color for pop
              >
                {stat.label}
              </h3>

              {/* Description (Low Opacity) */}
              <p className="text-sm md:text-base font-medium opacity-80 leading-relaxed max-w-xs mx-auto">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ClientTrustStats;