"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const CareerHero = () => {
  // Animation variants for the content to fade up
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // Infinite up-and-down animation for the arrow icon
  const arrowAnimation = {
    y: [0, 5, 0], // Move down 5px, then back to 0
    transition: {
      duration: 1.5, // Complete one cycle in 1.5 seconds
      ease: "easeInOut",
      repeat: Infinity, // Loop forever
    },
  };

  return (
    <section className="relative w-full py-24 md:py-32 overflow-hidden bg-gray-50 dark:bg-gray-900 flex items-center">
      {/* --- Background Elements --- */}
      {/* Subtle Dot Pattern */}
      <div
        className="absolute inset-0 z-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#cbd5e1 1.5px, transparent 1.5px)",
          backgroundSize: "24px 24px",
        }}
      ></div>
      {/* Soft Gradient Light Source from Top-Left */}
      <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-blue-100/40 to-transparent dark:from-blue-900/20 blur-3xl pointer-events-none"></div>

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* --- Left Side: Big Gradient Heading --- */}
          <motion.div variants={itemVariants} className="text-center lg:text-left">
            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight"
              style={{
                background: "var(--gradient-primary)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                // Fallback color if gradient doesn't load
                color: "var(--color-primary-dark)",
              }}
            >
              Join the company with the bold new vision.
            </h1>
          </motion.div>

          {/* --- Right Side: Content & Button --- */}
          <motion.div variants={itemVariants} className="flex flex-col items-center lg:items-start space-y-8">
            {/* 4-Line Paragraph */}
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl text-center lg:text-left">
              We are forging a new path in technology, driven by innovation and a passion for excellence.
              Be part of a collaborative team where your ideas shape the future.
              We offer an environment that nurtures growth, challenges convention, and rewards bold thinking.
              Explore your potential with us and help build the extraordinary.
            </p>

            {/* "Job Openings" Button with Animated Arrow */}
            <motion.a
              href="#job-openings" // Replace with your actual section ID or URL
              className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full text-white font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              style={{
                background: "var(--gradient-primary)",
                // Optional: Use accent orange for a different look
                // background: "var(--color-accent-orange)",
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Job Openings</span>
              {/* Animated Arrow Icon */}
              <motion.span animate={arrowAnimation}>
                <ArrowDown size={24} strokeWidth={2.5} />
              </motion.span>
              
              {/* Optional: A subtle glow effect on hover */}
              <div className="absolute inset-0 rounded-full bg-white/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CareerHero;