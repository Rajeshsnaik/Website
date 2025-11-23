"use client";

import React from "react";
import { motion } from "framer-motion";

// Sample Data for the Gallery
// We define specific span classes here to create the "Bento" layout
const galleryItems = [
  {
    id: 1,
    // Tall image (spans 2 rows vertical)
    src: "/images/dusserha.jpg", 
    caption: "Dussehra Celebration 2024",
    className: "md:row-span-2 h-full",
  },
  {
    id: 2,
    // Wide image (spans 2 columns horizontal)
    src: "/images/office-anniversary.jpg", 
    caption: "Office Anniversary Bash",
    className: "md:col-span-2 h-full",
  },
  {
    id: 3,
    // Standard square
    src: "/images/deepavali.avif", 
    caption: "Deepavali Festivities",
    className: "h-full",
  },
  {
    id: 4,
    // Standard square
    src: "/images/meeting.jpg", 
    caption: "Office Annual Meeting 2025",
    className: "h-full",
  },
  {
    id: 5,
    // Wide image bottom (spans 2 columns)
    src: "/images/Christmas.webp", 
    caption: "Christmas Celebration 2025",
    className: "md:col-span-2 h-full",
  },
    {
    id: 4,
    // Standard square
    src: "/images/trip.jpg", 
    caption: "Goa Trip 2025",
    className: "h-full",
  },
  
];

// Animation variants for the items popping in
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const LifeAtBlute = () => {
  return (
    <section className="w-full py-24 bg-white dark:bg-gray-900 relative overflow-hidden">
       {/* Background Pattern (Consistent with previous sections) */}
       <div
        className="absolute inset-0 z-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#cbd5e1 1.5px, transparent 1.5px)",
          backgroundSize: "24px 24px",
        }}
      ></div>
      
      <div className="container relative z-10 mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-extrabold tracking-tight inline-block"
            style={{
              background: "var(--gradient-primary)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Life at Blute
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            More than just work. A glimpse into our culture, celebrations, and moments together.
          </p>
        </div>

        {/* Bento Grid Gallery */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          // The Grid definition: 3 columns on desktop, base row height of 240px
          className="grid grid-cols-1 md:grid-cols-3 auto-rows-[240px] gap-4 md:gap-6"
        >
          {galleryItems.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              // 'group' class is essential here for the hover effect to work on children
              className={`relative group rounded-[2rem] overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 ${item.className}`}
            >
              {/* Image with slight zoom on hover */}
              <img
                src={item.src}
                alt={item.caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Hover Overlay Gradient (Darkens bottom for readability) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"></div>

              {/* Caption Content (Slides up from bottom) */}
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out flex items-end">
                <p className="text-white text-sm md:text-base font-medium tracking-wide leading-snug">
                  {item.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default LifeAtBlute;