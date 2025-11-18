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

const ContactParallax = ({ title }) => {
  const { scrollYProgress } = useScroll();

  const yText = useTransform(scrollYProgress, [0, 1], [-30, 30]);
  const yButton = useTransform(scrollYProgress, [0, 1], [20, -20]);

  return (
    <section className="relative h-[300px] w-full overflow-hidden bg-black flex items-center justify-center">

      {/* Background Grid */}
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ backgroundColor: '#0a0a0a', opacity: 0.85 }}
      >
        <div 
          className="absolute inset-0 z-0 opacity-60" 
          style={{ backgroundImage: 'repeating-linear-gradient(0deg, #1a1a1a, #1a1a1a 1px, transparent 1px, transparent 80px), repeating-linear-gradient(90deg, #1a1a1a, #1a1a1a 1px, transparent 1px, transparent 80px)' }}
        />
      </div>

      {/* Content */}
      <motion.div 
        className="relative z-10 text-center px-2 max-w-3xl"
        style={{ y: yText }}
      >
        <h2 className="text-xl md:text-3xl lg:text-4xl font-extrabold text-white leading-tight mb-5 tracking-tight">
          Stop Monitoring, Start{' '}
          <span 
            className="text-transparent bg-clip-text" 
            style={{ backgroundImage: GRADIENT_PRIMARY }}
          >
            Predicting
          </span>
          .
        </h2>

        <p className="text-sm md:text-base text-gray-300 mb-8 max-w-xl mx-auto">
          Unlock the true potential of your physical assets with intelligent, proactive IOT solutions designed for the future of your enterprise.
        </p>

        <motion.a
          href="/contact" 
          className="inline-block px-6 py-2 mt-4 text-base md:text-lg font-semibold rounded-full shadow-lg transition-all duration-300 ease-in-out hover:scale-[1.06] active:scale-[0.97]"
          style={{ 
            backgroundImage: GRADIENT_PRIMARY,
            y: yButton, 
            color: 'white',
            boxShadow: `0 0 15px ${COLORS.primaryLight}80`,
          }}
        >
          {title || 'Get in Touch'}
        </motion.a>
      </motion.div>
    </section>
  );
};

export default ContactParallax;
