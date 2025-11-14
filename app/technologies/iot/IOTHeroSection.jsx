"use client";

import React from 'react';
// Assuming Framer Motion is available in the environment
import { motion } from 'framer-motion';
import { ClockIcon, LightbulbIcon, EyeIcon } from 'lucide-react';

// --- Framer Motion Variants ---

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const cardVariants = {
    hidden: { scale: 0.9, opacity: 0, y: 50 },
    visible: { scale: 1, opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, delay: 0.8 } },
};

// --- Custom Styles for Gradient Text ---

const gradientTextStyle = {
  // Emulating the requested custom gradient: linear-gradient(135deg, #355694, #2DACE3)
  backgroundImage: 'linear-gradient(135deg, #355694, #2DACE3)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  textFillColor: 'transparent',
};

/**
 * A responsive hero section for an IoT technology page, inspired by a digital/futuristic aesthetic.
 * Uses Framer Motion for subtle entry animations.
 */
const IOTHeroSection = () => {
  const valueMetrics = [
    { icon: ClockIcon, label: 'Reduction in Downtime', value: '25%' },
    { icon: LightbulbIcon, label: 'Energy Savings', value: '40%' }, 
    { icon: EyeIcon, label: 'Real-Time Visibility', value: 'Visibility' }, 
  ];

  return (
    <div className="min-h-[80vh] bg-gray-950 text-gray-100 flex items-center justify-center p-4 font-inter relative overflow-hidden">
      
      {/* --- BACKGROUND IMAGE AND OVERLAY --- */}
      
      {/* Layer 1: Placeholder Background Image (Dark Futuristic City) - Now includes lazy loading */}
      <img
        src="/images/iot.jpg"
        alt="Digital city scape background"
        // Added scale-125 for a "bigger" look and adjusted image opacity to 40%
        className="absolute inset-0 w-full h-full object-cover opacity-40 transform scale-125"
        aria-hidden="true"
        loading="lazy" 
      />
      
      {/* Layer 2: Dark gradient overlay to ensure text contrast (Opacity increased to 80%) */}
      <div className="absolute inset-0 bg-gray-950 opacity-80 pointer-events-none" />

      {/* Layer 3: Digital Lines/Pattern Overlay */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 w-full h-1/2 bg-repeat-x" style={{
            backgroundImage: 'radial-gradient(circle, #2DACE3 1px, transparent 1px)',
            backgroundSize: '10px 10px',
        }} />
        <div className="absolute bottom-0 w-full h-1/2 bg-repeat-x transform rotate-180" style={{
            backgroundImage: 'radial-gradient(circle, #355694 1px, transparent 1px)',
            backgroundSize: '10px 10px',
        }} />
      </div>
      
      {/* --- MAIN CONTENT --- */}
      <motion.div
        className="max-w-6xl mx-auto text-center z-10 py-12" 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main Headline */}
        <motion.h1
          className="text-4xl sm:text-6xl lg:text-6xl font-extrabold tracking-tight mb-5 leading-tight lg:leading-snug"
          variants={itemVariants}
          style={gradientTextStyle}
        >
          Transforming Physical Assets into Digital Intelligence
        </motion.h1>

        {/* Sub-headline/Description */}
        <motion.p
          className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto mb-12 px-2"
          variants={itemVariants}
        >
          We engineer secure, end-to-end IoT solutions—from Embedded Systems and Edge Computing to Cloud Integration and AI-Driven Analytics, to drive real-time operational efficiency.
        </motion.p>

        {/* Value Pitch Card */}
        <motion.div
          className="bg-gray-800/80 backdrop-blur-sm p-6 sm:p-8 rounded-xl shadow-2xl mx-auto max-w-4xl border border-transparent"
          variants={cardVariants}
          style={{ 
            // Neon border effect using the light primary color
            boxShadow: '0 0 30px rgba(45, 172, 227, 0.4)',
            borderColor: '#2DACE3' 
          }}
        >
          <p 
            className="text-base sm:text-lg font-bold uppercase text-cyan-400 mb-6 tracking-widest"
          >
            Value Pitch
          </p>
          <div className="grid grid-cols-3 gap-4 sm:gap-8">
            {valueMetrics.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <div key={index} className="flex flex-col items-center p-3 sm:p-0">
                  <motion.div 
                    variants={itemVariants} 
                    className="text-4xl mb-3 text-green-400"
                    style={{ filter: 'drop-shadow(0 0 8px rgba(92, 246, 170, 0.7))' }} // Subtle neon shadow
                  >
                    <Icon className="w-8 h-8 sm:w-10 sm:h-10 mx-auto" strokeWidth={1.5} />
                  </motion.div>
                  <motion.p 
                    variants={itemVariants} 
                    className="text-3xl sm:text-4xl font-bold mb-1 text-white"
                  >
                    {metric.value}
                  </motion.p>
                  <motion.p 
                    variants={itemVariants} 
                    className="text-xs sm:text-sm text-gray-400 mt-1 max-w-[120px] mx-auto"
                  >
                    {metric.label}
                  </motion.p>
                </div>
              );
            })}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default IOTHeroSection;