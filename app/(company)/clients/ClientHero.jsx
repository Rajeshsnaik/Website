"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Briefcase, Cpu, Globe, Anchor, Cloud, Database,
  Building2, Rocket, ShieldCheck, Zap, Layers,
  ShoppingCart, Activity, CreditCard
} from "lucide-react";

// Data for floating logos with initial positions
const floatingLogos = [
  // --- Top Zone ---
  { icon: Globe, top: "10%", left: "20%", delay: 0 },
  { icon: Cloud, top: "15%", left: "50%", delay: 1 },
  { icon: Rocket, top: "10%", right: "20%", delay: 2 },
  // --- Middle Left Zone ---
  { icon: Briefcase, top: "40%", left: "5%", delay: 0.5 },
  { icon: Database, top: "60%", left: "15%", delay: 1.5 },
  { icon: Layers, top: "30%", left: "25%", delay: 2.5 },
  // --- Middle Right Zone ---
  { icon: Cpu, top: "40%", right: "5%", delay: 0.8 },
  { icon: ShieldCheck, top: "60%", right: "15%", delay: 1.8 },
  { icon: Zap, top: "30%", right: "25%", delay: 2.8 },
  // --- Lower Side Zones ---
  { icon: Building2, bottom: "25%", left: "10%", delay: 1.2 },
  { icon: Anchor, bottom: "25%", right: "10%", delay: 2.2 },
  // Extra fillers
  { icon: ShoppingCart, top: "25%", left: "80%", delay: 3, size: 24, opacity: 0.4 },
  { icon: Activity, top: "70%", left: "5%", delay: 3.5, size: 28, opacity: 0.5 },
  { icon: CreditCard, top: "55%", right: "30%", delay: 1, size: 30, opacity: 0.3 },
];

// Animation for the floating effect
const floatAnimation = (delay) => ({
  y: [0, -30, 0, 30, 0],
  x: [0, 20, 0, -20, 0],
  rotate: [0, 10, -10, 0],
  transition: {
    delay: delay,
    duration: 15 + Math.random() * 10,
    repeat: Infinity,
    ease: "easeInOut",
  },
});

const ClientHero = () => {
  return (
    <section className="relative w-full min-h-[85vh] flex flex-col items-center justify-end overflow-hidden bg-gray-50 dark:bg-gray-900">
      
      {/* 1. Background Pattern */}
      <div
        className="absolute inset-0 z-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#cbd5e1 1.5px, transparent 1.5px)",
          backgroundSize: "30px 30px",
        }}
      ></div>
      {/* Gradient Glow */}
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-blue-100/50 via-transparent to-transparent dark:from-blue-900/30 pointer-events-none"></div>

      {/* 2. Floating Industry Logos Container */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {floatingLogos.map((item, index) => {
          const Icon = item.icon;
          const size = item.size || Math.floor(Math.random() * 20) + 40;
          const baseOpacity = item.opacity || 0.7;

          return (
            <motion.div
              key={index}
              className="absolute text-blue-300/40 dark:text-blue-500/30 blur-[1px]"
              style={{
                top: item.top,
                left: item.left,
                right: item.right,
                bottom: item.bottom,
                zIndex: index,
              }}
              animate={floatAnimation(item.delay)}
            >
              <Icon size={size} strokeWidth={1.5} style={{ opacity: baseOpacity }} />
            </motion.div>
          );
        })}
      </div>

      {/* 3. Main Content (Centered at Bottom) */}
      <motion.div
        className="relative z-30 text-center px-4 pb-20 md:pb-28 max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Page Identifier Button Label */}
        <motion.div 
          className="mb-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <span className="px-5 py-2 rounded-full bg-white dark:bg-gray-800 border border-blue-100 dark:border-gray-700 shadow-md text-sm font-bold uppercase tracking-widest text-[var(--color-primary-dark)]">
            Clients
          </span>
        </motion.div>

        {/* Updated Heading */}
        <h1
          className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-6"
          style={{
            background: "var(--gradient-primary)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Clients Projects with Successful Results...
        </h1>

        {/* Updated Paragraph (Truncated to ~3 lines visually) */}
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-10 leading-relaxed line-clamp-3 md:line-clamp-none">
          We are the trusted partner for leading enterprises, helping bring ideas to life and building sustainable business practices across industries. We aim to be the extended IT partner that empowers you to realize your potential through robust, cost-efficient software solutions. Blute Technologies was founded to help businesses imagine, plan, and develop success.
        </p>

        {/* Call to Action Button */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            href="/portfolio"
            className="group relative inline-flex items-center gap-2 px-10 py-5 rounded-full text-lg font-bold text-white shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
          >
            {/* Gradient Background Layer */}
            <span 
              className="absolute inset-0 z-0" 
              style={{ background: "var(--gradient-primary)" }}
            ></span>
            
            {/* Hover Overlay Layer */}
            <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></span>

            {/* Button Text & Icon */}
            <span className="relative z-10 flex items-center gap-2">
              Read Our Success Stories
              <Rocket className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </span>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ClientHero;