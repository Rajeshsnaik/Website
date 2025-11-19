"use client";

import React from "react";
import { motion } from "framer-motion";
import { Rocket, Eye } from "lucide-react";

const MissionVision = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="relative w-full py-24 overflow-hidden bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
      
      {/* 1. Background: CSS Dot Pattern (Simulating the Map/Network) */}
      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#cbd5e1 1.5px, transparent 1.5px)',
          backgroundSize: '24px 24px', // creates the grid dots
        }}
      ></div>
      
      {/* Optional: Gradient Overlay to fade the edges of the background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-transparent to-white/80 dark:to-gray-900/80 pointer-events-none"></div>


      <div className="container relative z-10 mx-auto px-4">
        
        {/* 2. Header with Gradient */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight inline-block"
            style={{
              background: "var(--gradient-primary)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Our Mission & Vision
          </motion.h2>
        </div>

        {/* 3. Main Content Area */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-0"
        >
          
          {/* --- MISSION SECTION (Left) --- */}
          <motion.div variants={itemVariants} className="relative group w-[320px] h-[320px] md:w-[380px] md:h-[380px] flex items-center justify-center">
            
            {/* The Orange "Wing" Background */}
            {/* We create a circle, clip it in half, and rotate it to point left/up */}
            <div 
              className="absolute w-[120%] h-[120%] rounded-full transition-transform duration-500 group-hover:scale-105"
              style={{
                background: "var(--color-accent-orange)",
                clipPath: "polygon(0 0, 50% 0, 50% 100%, 0 100%)", // Left Half Only
                transform: "rotate(45deg)", // Rotates the half-circle to angle it
                zIndex: 0,
                opacity: 0.9
              }}
            />

            {/* White Content Circle */}
            <div className="relative z-10 w-full h-full bg-white dark:bg-gray-800 rounded-full shadow-2xl flex flex-col items-center justify-center p-8 text-center border-4 border-gray-100 dark:border-gray-700">
              <div className="mb-4 p-3 rounded-full bg-orange-50 dark:bg-gray-700">
                <Rocket size={40} style={{ color: "var(--color-accent-orange)" }} />
              </div>
              <h3 className="text-2xl font-bold mb-3 uppercase tracking-wider" style={{ color: "var(--color-accent-orange)" }}>
                Mission
              </h3>
              <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                To lead the process from ideation to delivery, providing ongoing support 
                to enhance business growth with transformative enterprise-class solutions.
              </p>
            </div>
          </motion.div>

          {/* --- VISION SECTION (Right) --- */}
          {/* Negative margin on desktop creates the overlap effect */}
          <motion.div variants={itemVariants} className="relative group w-[320px] h-[320px] md:w-[380px] md:h-[380px] flex items-center justify-center md:-ml-12 mt-4 md:mt-0">
            
            {/* The Blue "Wing" Background */}
            {/* We create a circle, clip it in half, and rotate it to point right/down */}
            <div 
              className="absolute w-[120%] h-[120%] rounded-full transition-transform duration-500 group-hover:scale-105"
              style={{
                background: "var(--color-primary-dark)", // Dark Blue
                clipPath: "polygon(50% 0, 100% 0, 100% 100%, 50% 100%)", // Right Half Only
                transform: "rotate(45deg)", // Rotates the half-circle
                zIndex: 0,
                opacity: 0.9
              }}
            />

            {/* White Content Circle */}
            <div className="relative z-10 w-full h-full bg-white dark:bg-gray-800 rounded-full shadow-2xl flex flex-col items-center justify-center p-8 text-center border-4 border-gray-100 dark:border-gray-700">
              <div className="mb-4 p-3 rounded-full bg-blue-50 dark:bg-gray-700">
                <Eye size={40} style={{ color: "var(--color-primary-dark)" }} />
              </div>
              <h3 className="text-2xl font-bold mb-3 uppercase tracking-wider" style={{ color: "var(--color-primary-dark)" }}>
                Vision
              </h3>
              <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                To help enterprises accelerate adoption of latest technologies, untangle 
                complex issues, and orchestrate ongoing innovation.
              </p>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default MissionVision;