"use client";

// components/ContactParallaxCompact.jsx
import { motion, useScroll, useTransform } from 'framer-motion';
import React from 'react';

// --- Custom Theme Colors ---
const COLORS = {
  primaryDark: '#355694',
  primaryLight: '#2DACE3',
  accentOrange: '#F6A25C',
};

const GRADIENT_PRIMARY = `linear-gradient(135deg, ${COLORS.primaryDark}, ${COLORS.primaryLight})`;

const ContactParallax = ({title}) => {
  // 1. Setup Scroll Tracking
  const { scrollYProgress } = useScroll();

  // 2. Define Parallax Transformation 
  const yText = useTransform(scrollYProgress, [0, 1], [-50, 50]); 
  const yButton = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    // Height is fixed to h-[400px] for a low-profile banner
    <section className="relative h-[400px] w-full overflow-hidden bg-black flex items-center justify-center">
      
      {/* --- Background: Dark/Futuristic Grid Pattern (Stays fixed) --- */}
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ 
          backgroundColor: '#0a0a0a',
          maskImage: `linear-gradient(rgba(0,0,0,1), rgba(0,0,0,0.5), rgba(0,0,0,1))`,
          opacity: 0.8,
        }}
      >
        {/* Subtle overlay lines */}
        <div className="absolute inset-0 z-0 opacity-70" style={{ backgroundImage: 'repeating-linear-gradient(0deg, #1c1c1c, #1c1c1c 1px, transparent 1px, transparent 100px), repeating-linear-gradient(90deg, #1c1c1c, #1c1c1c 1px, transparent 1px, transparent 100px)'}}></div>
      </div>
      
      {/* --- Content Container (Parallax Movement) --- */}
      <motion.div 
        className="relative z-10 text-center px-4 max-w-4xl"
        style={{ y: yText }} // Apply the main text parallax effect
      >
        {/* 1. Headline */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white leading-tight mb-4 tracking-tight">
          Stop Monitoring, Start{' '}
          <span 
            className="text-transparent" 
            style={{ 
              backgroundImage: GRADIENT_PRIMARY, 
              WebkitBackgroundClip: 'text', 
              WebkitTextFillColor: 'transparent' 
            }}
          >
            Predicting
          </span>
          .
        </h2>
        
        {/* 2. Paragraph: Margin increased from mb-8 to mb-12 */}
        <p className="text-base md:text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
          Unlock the true potential of your physical assets with intelligent, 
          proactive IOT solutions designed for the future of your enterprise.
        </p>

        {/* 3. Button */}
        <motion.a
          href="/contact" 
          className="inline-block px-8 py-3 text-lg font-semibold rounded-full shadow-xl transition-all duration-300 ease-in-out hover:scale-[1.05] focus:outline-none focus:ring-4 focus:ring-opacity-75"
          style={{ 
            backgroundImage: GRADIENT_PRIMARY,
            y: yButton, 
            color: 'white', 
            boxShadow: `0 0 20px ${COLORS.primaryLight}90`, 
          }}
        >
            {title || 'Get in Touch'}
        </motion.a>
      </motion.div>
    </section>
  );
};

export default ContactParallax;