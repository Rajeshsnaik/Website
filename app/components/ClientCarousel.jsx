"use client";

import React from 'react';
import { motion } from 'framer-motion';

// --- Data ---
const clientLogos = [
  { id: 1, name: 'Client A', imageUrl: '/images/client-logo-1.png' },
  { id: 2, name: 'Client B', imageUrl: '/images/client-logo-2.png' },
  { id: 3, name: 'Client C', imageUrl: '/images/client-logo-3.png' },
  { id: 4, name: 'Client D', imageUrl: '/images/client-logo-4.png' },
  { id: 5, name: 'Client E', imageUrl: '/images/client-logo-5.png' },
  { id: 6, name: 'Client F', imageUrl: '/images/client-logo-6.png' },
  { id: 7, name: 'Client G', imageUrl: '/images/client-logo-7.png' },
  { id: 8, name: 'Client H', imageUrl: '/images/client-logo-8.png' },
  { id: 9, name: 'Client I', imageUrl: '/images/client-logo-9.png' },
  { id: 10, name: 'Client J', imageUrl: '/images/client-logo-10.png' },
];

// --- Animation Variants ---
const carouselVariants = {
  animate: {
    x: ["0%", "-50%"], 
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 30,
        ease: "linear",
      },
    },
  },
};

const ClientCarousel = () => {
  return (
    // Reverted to gray-50 background, reduced padding
    <section className="relative w-full py-10 md:py-16 overflow-hidden bg-gray-50">
      
      {/* Subtle Center Glow to differentiate */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
            background: "radial-gradient(circle at center, rgba(255,255,255,0.8) 0%, transparent 70%)"
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        <div className="mb-10">
            {/* Eyebrow Label */}
            <span 
                className="inline-block py-1 px-3 rounded-full text-xs font-bold tracking-widest mb-3 border border-blue-100"
                style={{ 
                    backgroundColor: "rgba(255, 255, 255, 0.5)", 
                    color: "var(--color-primary-light)" 
                }}
            >
                Trusted Partners
            </span>

            {/* Gradient Heading */}
            <h2 
                className="text-3xl md:text-4xl font-extrabold"
                style={{
                    background: "var(--gradient-primary)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                }}
            >
                Our Valued Clients
            </h2>
        </div>

      </div>

      <div className="relative w-full">
        {/* Side Fades - Matching gray-50 background */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>
        
        <div className="flex overflow-hidden">
          <motion.div
            className="flex items-center gap-12 md:gap-20 px-4"
            variants={carouselVariants}
            animate="animate" 
            style={{ width: "fit-content" }}
          >
            {/* Double Loop */}
            {[...clientLogos, ...clientLogos].map((client, index) => (
              <div 
                key={`${client.id}-${index}`}
                className="flex-shrink-0 w-28 md:w-36 flex items-center justify-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 hover:scale-105 transition-all duration-500 cursor-pointer"
              >
                <img
                  src={client.imageUrl}
                  alt={client.name}
                  className="max-h-12 md:max-h-14 w-auto object-contain"
                  loading="lazy" 
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ClientCarousel;