"use client";

// components/ContactParallaxCompact.jsx
import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react';
import { ArrowRight } from 'lucide-react'; // Ensure you have lucide-react installed

// --- Custom Theme Colors ---
const COLORS = {
  primaryDark: '#355694',
  primaryLight: '#2DACE3',
  accentOrange: '#F6A25C',
};

const GRADIENT_PRIMARY = `linear-gradient(135deg, ${COLORS.primaryDark}, ${COLORS.primaryLight})`;
const GRADIENT_TEXT = `linear-gradient(to right, ${COLORS.primaryLight}, #ffffff, ${COLORS.accentOrange})`;

const ContactParallax = ({ title }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Parallax Values
  const yBg = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const yText = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const opacityText = useTransform(scrollYProgress, [0, 0.5, 1], [0.6, 1, 0.6]);

  return (
    <section 
      ref={containerRef}
      className="relative h-[400px] w-full overflow-hidden bg-[#050a14] flex items-center justify-center border-t border-white/5"
    >
      
      {/* --- 1. Ambient Background Glows --- */}
      <motion.div style={{ y: yBg }} className="absolute inset-0 pointer-events-none">
        {/* Blue Glow Top Left */}
        <div 
          className="absolute -top-[20%] -left-[10%] w-[500px] h-[500px] rounded-full blur-[120px] opacity-20"
          style={{ backgroundColor: COLORS.primaryDark }}
        />
        {/* Cyan Glow Bottom Right */}
        <div 
          className="absolute -bottom-[20%] -right-[10%] w-[400px] h-[400px] rounded-full blur-[100px] opacity-15"
          style={{ backgroundColor: COLORS.primaryLight }}
        />
      </motion.div>

      {/* --- 2. Modern Dot Grid Pattern --- */}
      <div 
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)' // Fade edges
        }}
      ></div>

      {/* --- 3. Content --- */}
      <motion.div 
        className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        style={{ y: yText, opacity: opacityText }}
      >
        {/* Decorative Label */}
        <span 
          className="inline-block py-1 px-3 rounded-full text-[10px] font-bold tracking-[0.2em] mb-4 border border-white/10 bg-white/5 backdrop-blur-sm"
          style={{ color: COLORS.accentOrange }}
        >
          Future Ready
        </span>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6 tracking-tight">
          Stop Monitoring, Start{' '}
          <span 
            className="text-transparent bg-clip-text relative inline-block" 
            style={{ backgroundImage: GRADIENT_TEXT }}
          >
            Predicting
            {/* Text Glow */}
            <span className="absolute inset-0 blur-lg opacity-50 bg-clip-text text-transparent" style={{ backgroundImage: GRADIENT_TEXT }}>
              Predicting
            </span>
          </span>
          .
        </h2>

        <p className="text-base md:text-lg text-gray-400 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
          Unlock the true potential of your physical assets with intelligent, proactive IoT solutions designed for the future of your enterprise.
        </p>

        <motion.a
          href="/contact" 
          className="group relative inline-flex items-center gap-2 px-8 py-3.5 text-base md:text-lg font-bold text-white rounded-full overflow-hidden transition-all duration-300"
          style={{ 
            backgroundImage: GRADIENT_PRIMARY,
            boxShadow: `0 10px 30px -10px ${COLORS.primaryDark}`,
          }}
          whileHover={{ scale: 1.05, boxShadow: `0 20px 40px -10px ${COLORS.primaryLight}` }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Button Shine Effect */}
          <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
          
          <span className="relative z-10">{title || 'Get in Touch'}</span>
          <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </motion.a>
      </motion.div>
    </section>
  );
};

export default ContactParallax;