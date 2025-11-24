"use client";

// TechnologyHero.jsx
import React from 'react';
import { motion } from 'framer-motion';

// --- Framer Motion Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const filterVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, type: "spring", stiffness: 100 } },
};

const TechnologyHero = () => {
  // Define custom styles based on the theme variables
  const primaryDark = '#355694';
  const primaryLight = '#2DACE3';
  const accentOrange = '#F6A25C';
  
  // Define a dark color for the overlay base
  const overlayDark = 'rgba(18, 25, 33, 0.85)';
  const overlayMedium = 'rgba(18, 25, 33, 0.5)';
  const overlayTransparent = 'rgba(18, 25, 33, 0.0)';

  return (
    // Removed any possible external margin or padding (though the parent component is responsible for this)
    <div className="relative h-[85vh] min-h-[550px] flex items-center overflow-hidden">
      
      {/* 1. Background Image and Dynamic Overlay */}
      <div className="absolute inset-0 z-0">
        {/* Background Image - Replace with your actual image path */}
        <div 
          className="w-full h-full bg-cover bg-center" 
          style={{ 
            backgroundImage: "url('/images/tech-bg-placeholder.png')", // Change this path
            backgroundColor: "#000", // Fallback color
          }}
          aria-hidden="true"
        ></div>

        {/* Dynamic Gradient Overlay */}
        <div 
          className="absolute inset-0"
          style={{
            // Removed any bottom-specific opacity by using only a left-to-right gradient (linear-gradient(to right, ...))
            // This ensures the opacity only changes horizontally, not vertically.
            background: `linear-gradient(to right, 
              ${overlayDark} 0%, 
              ${overlayMedium} 40%, 
              ${overlayTransparent} 80%, 
              ${overlayTransparent} 100%)`,
          }}
          aria-hidden="true"
        ></div>
      </div>

      {/* 2. Content Container (Z-index 10 to be on top) */}
      <motion.div
        // Added 'mb-0' just in case, though not strictly needed on this container
        className="relative z-10 w-full px-6 md:px-12 lg:px-24 mb-0" 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-xl text-white">
          {/* A. Small Filter-like Design with "Technology" Text */}
          <motion.div
            className="inline-block mb-6 p-1 pl-4 pr-6 rounded-full font-semibold text-sm tracking-widest uppercase shadow-lg"
            style={{ 
              background: `linear-gradient(90deg, ${primaryDark} 0%, ${primaryLight} 100%)`,
              color: 'white',
            }}
            variants={filterVariants}
          >
            <span 
              className="inline-block py-1 px-3 rounded-full mr-3 text-xs"
              style={{ 
                backgroundColor: accentOrange,
                boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
              }}
            >
              •
            </span>
            Technology
          </motion.div>

          {/* B. Heading (Two lines) */}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4"
            variants={itemVariants}
          >
            The Future is
            <br />
            <span style={{ color: accentOrange }}>Intelligent</span> and Connected
          </motion.h1>

          {/* C. Paragraph (Two lines) */}
          <motion.p
            className="text-lg md:text-xl font-light opacity-85 mt-6 max-w-lg"
            variants={itemVariants}
          >
            Explore the cutting-edge innovations driving global transformation, from
            AI-powered systems to hyper-efficient quantum computing.
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
};

export default TechnologyHero;