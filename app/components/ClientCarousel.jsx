"use client";

import React from 'react';
import { motion } from 'framer-motion';

// --- 1. Data Definition (Remains the same) ---
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
  // Duplicate a few logos for seamless loop
  { id: 11, name: 'Client A', imageUrl: '/images/client-logo-1.png' },
  { id: 12, name: 'Client B', imageUrl: '/images/client-logo-2.png' },
  { id: 13, name: 'Client C', imageUrl: '/images/client-logo-3.png' },
];

// --- 2. Framer Motion Variants / Animation Setup (Remains the same) ---
const carouselVariants = {
  start: {
    x: 0,
    transition: {
      duration: 0, 
    },
  },
  animate: {
    // The translation needs to be recalculated for the 4-logo mobile view 
    // to ensure a smooth transition, but the main animation setup remains the same.
    x: [0, -((100 / 6) * 7) + '%'], 
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 35,
        ease: "linear",
        delay: 2, 
      },
    },
  },
};

const ClientCarousel = () => {
  return (
    <section className="py-16 sm:py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Our Clients
        </h2>
        <p className="mt-2 max-w-3xl mx-auto text-lg text-gray-600">
          Trusted by leading companies across various industries.
        </p>
      </div>

      <div className="mt-12 relative">
        <div className="absolute inset-y-0 left-0 w-1/12 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-1/12 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>
        
        <div className="flex overflow-hidden py-4">
          <motion.div
            className="flex flex-nowrap"
            variants={carouselVariants}
            initial="start" 
            animate="animate" 
          >
            {[...clientLogos, ...clientLogos].map((client, index) => (
              <div 
                key={client.id + '-' + index} 
                // --- KEY CHANGE: Use w-1/4 for mobile (default and sm) ---
                // w-1/4 (25% width) = 4 visible logos
                // md:w-1/4 (4 visible) - Kept the same
                // lg:w-1/6 (16.66% width) = 6 visible logos (Laptop view)
                className="flex-none w-1/4 md:w-1/4 lg:w-1/6 p-4 flex items-center justify-center"
              >
                <img
                  src={client.imageUrl}
                  alt={client.name}
                  className="max-h-16 w-auto object-contain filter grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition duration-300"
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