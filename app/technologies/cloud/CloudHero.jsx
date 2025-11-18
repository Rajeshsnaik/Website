"use client";

import React from "react";
import Image from "next/image";
// Import motion from framer-motion
import { motion } from "framer-motion";
import { Cloud, Zap, Scaling } from "lucide-react";

const COLORS = {
  primaryDark: "#355694",
  primaryLight: "#2DACE3",
  accentOrange: "#F6A25C",
  gradientPrimary: "linear-gradient(135deg, #355694, #2DACE3)",
};

// Animation variants for children (staggered effect)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Delay between each feature card's animation
    },
  },
};

// Animation variants for individual elements
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

// Wrap the FeatureCard with motion.div
const FeatureCard = ({ icon: Icon, title, description }) => (
  <motion.div
    variants={itemVariants} // Apply the individual item animation
    className="flex items-start space-x-3 p-4 bg-white/10 rounded-xl border border-white/20"
  >
    <Icon
      className="w-6 h-6 mt-1 flex-shrink-0"
      style={{ color: COLORS.primaryLight }}
    />
    <div>
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="text-sm text-gray-200 mt-0.5">{description}</p>
    </div>
  </motion.div>
);

const CloudHero = () => {
  const gradientHeadingStyle = {
    background: COLORS.gradientPrimary,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  return (
    <section className="relative w-full bg-black flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/path/to/your/image.jpg" // Add your image source here
        alt="Digital cloud network background"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-brightness-75"></div>

      {/* Content */}
      {/* Use motion.div as the main content container for sequence control */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 py-10">
        
        {/* Tag - Simple Fade In */}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-xs font-semibold uppercase tracking-widest text-white px-4 py-1.5 rounded-full inline-block shadow-md"
          style={{ backgroundColor: COLORS.primaryLight }}
        >
          Cloud Computing
        </motion.span>

        {/* Heading - Fade In from Bottom */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mt-4 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight"
          style={gradientHeadingStyle}
        >
          Technology Solutions <br />
          <span className="text-white text-[28px] sm:text-[32px] font-semibold">
            — Power Your Business from the Cloud.
          </span>
        </motion.h1>

        {/* Paragraph - Fade In from Bottom (Slight delay) */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          className="mt-6 text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto"
        >
          We help enterprises build future-ready cloud systems with scalable
          architecture, secure environments, and high-performance applications —
          tailored for ERPs, CRMs, automation workflows, and mission-critical
          business operations.
        </motion.p>

        {/* Features - Staggered Container */}
        <motion.div
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3"
          variants={containerVariants} // Apply container variants
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.8 }} // Delay the start of the stagger
        >
          <FeatureCard
            icon={Cloud}
            title="Scalability"
            description="Built to grow with your business—effortlessly and efficiently."
          />
          <FeatureCard
            icon={Zap}
            title="High Performance"
            description="Optimized engineering delivers fast, reliable, enterprise-grade speed."
          />
          <FeatureCard
            icon={Scaling}
            title="Flexible Deployment"
            description="Choose public, private, or hybrid cloud—your strategy, your way."
          />
        </motion.div>
      </div>
    </section>
  );
};

export default CloudHero;