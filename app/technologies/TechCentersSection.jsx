"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Aperture, Cloud, Zap, Cpu, ArrowRight } from "lucide-react";

// --- Data ---
const technologyCenters = [
  {
    name: "Web Development",
    icon: Aperture,
    link: "/technologies/web-applications",
    description: "Building scalable, secure web applications using modern frameworks like React and Next.js, focusing on optimal cross-platform user experience.",
  },
  {
    name: "Cloud Infrastructure",
    icon: Cloud,
    link: "/technologies/cloud",
    description: "Leveraging scalable cloud services (AWS, Google Cloud) for deployment, storage, and processing, prioritizing high availability.",
  },
  {
    name: "Internet of Things (IoT)",
    icon: Zap,
    link: "/technologies/iot",
    description: "Designing smart, connected devices and sensor networks to gather real-time data, enabling intelligent automation.",
  },
  {
    name: "Cognitive Computing",
    icon: Cpu,
    link: "/technologies/cognitive-computing",
    description: "Developing intelligent systems including AI, Machine Learning, and NLP for complex decision support and predictive analytics.",
  },
];

// --- Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const iconFloatVariant = {
  animate: {
    y: [0, -6, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const TechCentersSection = () => {
  return (
    <section className="relative w-full py-24 md:py-32 overflow-hidden bg-white">
      
      {/* --- Background: Light Mesh Pattern --- */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0,0,0,0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,0,0,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      ></div>

      {/* Subtle Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white pointer-events-none z-0"></div>

      <div className="container relative z-10 mx-auto px-4">
        
        {/* --- Header Section --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 max-w-4xl mx-auto"
        >
         

          {/* Gradient Heading */}
          <h2 
            className="text-4xl md:text-5xl font-extrabold tracking-tight"
            style={{
              background: "var(--gradient-primary)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            The Innovation Engine
          </h2>
        </motion.div>

        {/* --- 4-Column Grid --- */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {technologyCenters.map((tech) => (
            <motion.div key={tech.name} variants={cardVariants} className="h-full">
              <Link href={tech.link} className="block h-full">
                <div 
                  className="group relative p-8 rounded-[2rem] bg-white/60 backdrop-blur-lg border-2 border-white/50 shadow-lg transition-all duration-500 hover:shadow-2xl h-full flex flex-col"
                >
                  {/* CSS for Hover Border Color */}
                  <style jsx>{`
                    .group:hover {
                      border-color: var(--color-primary-light);
                      transform: translateY(-10px);
                    }
                  `}</style>

                  {/* Icon Container (Fixed Size) */}
                  <div className="mb-6 w-16 h-16 flex items-center justify-center rounded-2xl bg-blue-50/50 group-hover:bg-blue-100/50 transition-colors duration-300">
                    <motion.div
                       variants={iconFloatVariant}
                       animate="animate"
                    >
                        <tech.icon
                          size={32}
                          strokeWidth={1.5}
                          style={{ color: "var(--color-primary-light)" }}
                        />
                    </motion.div>
                  </div>

                  {/* Title */}
                  <h3 
                    className="text-xl font-bold mb-3 group-hover:text-[var(--color-primary-dark)] transition-colors"
                    style={{ color: "var(--color-primary-dark)" }}
                  >
                    {tech.name}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed flex-grow mb-6">
                    {tech.description}
                  </p>

                  {/* Explore Link (Bottom) */}
                  <div className="flex items-center gap-2 text-sm font-bold mt-auto transition-colors" style={{ color: "var(--color-accent-orange)" }}>
                    <span>Explore Now</span>
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </div>

                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechCentersSection;