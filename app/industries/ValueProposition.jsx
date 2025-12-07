"use client";

import React from "react";
import { motion } from "framer-motion";
import { Settings, Cloud, Rocket } from "lucide-react";

const valuePoints = [
  {
    id: 1,
    title: "Process Automation",
    description:
      "We identify bottlenecks and implement intelligent workflows to streamline operations, reducing manual effort and error.",
    icon: Settings,
  },
  {
    id: 2,
    title: "Scalable Architecture",
    description:
      "Our solutions are built on robust, future-proof foundations designed to grow seamlessly alongside your business demands.",
    icon: Cloud,
  },
  {
    id: 3,
    title: "Rapid Deployment",
    description:
      "Using agile methodologies and modern CI/CD pipelines, we accelerate time-to-market without compromising quality.",
    icon: Rocket,
  },
];

// Animation variants for the staggered entrance of cards
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
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

// Subtle floating animation for the icons
const iconFloatVariant = {
  animate: {
    y: [0, -8, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const ValueProposition = () => {
  return (
    <section className="relative w-full py-24 md:py-32 overflow-hidden bg-white">
      {/* --- Background: Light Grey Mesh Pattern --- */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0,0,0,0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,0,0,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px", // Adjust size of the mesh grid
        }}
      ></div>

      {/* Gradient subtle overlay to soften edges */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white pointer-events-none z-0"></div>

      <div className="container relative z-10 mx-auto px-4">
        
        {/* --- Header & Intro Text --- */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-left mb-20 max-w-3xl"
        >
          <div className="inline-block relative mb-6">
            <h2 
              className="text-4xl md:text-5xl font-extrabold tracking-tight relative z-10"
              style={{ color: "var(--color-primary-dark)" }}
            >
              Comprehensive Platform & Custom Development.
            </h2>
            {/* Thick Blue Underline */}
            <div 
              className="absolute -bottom-3 left-0 h-2 w-1/3 rounded-full"
              style={{ backgroundColor: "var(--color-primary-light)" }} // Electric Blue
            ></div>
          </div>
          
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed mt-8">
            We don't just build software; we understand your ecosystem. Our process
            involves deep-dive consulting followed by precision engineering.
          </p>
        </motion.div>


        {/* --- Three-Column Grid (Glassmorphism Cards) --- */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
        >
          {valuePoints.map((item) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              // Glassmorphism Styles: frosted bg, blur, soft border, shadow
              className="group relative p-8 rounded-[2rem] bg-white/60 backdrop-blur-lg border-2 border-white/50 shadow-xl transition-all duration-500"
              // Hover Effect: Lift up and change border color
              whileHover={{ 
                y: -12, 
                borderColor: "var(--color-primary-light)", // Electric Blue border on hover
                boxShadow: "0 25px 50px -12px rgba(45, 172, 227, 0.15)" // colored shadow on hover
              }}
            >
              {/* Icon Container */}
              <div className="mb-8 inline-block p-4 rounded-2xl bg-blue-50/50 group-hover:bg-blue-100/50 transition-colors duration-300">
                <motion.div
                   variants={iconFloatVariant}
                   animate="animate"
                >
                    <item.icon
                    size={40}
                    strokeWidth={1.5}
                    style={{ color: "var(--color-primary-light)" }} // Electric blue icon
                    />
                </motion.div>
              </div>

              {/* Card Title */}
              <h3 
                className="text-2xl font-bold mb-4"
                style={{ color: "var(--color-primary-dark)" }}
              >
                {item.title}
              </h3>

              {/* Card Description */}
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ValueProposition;