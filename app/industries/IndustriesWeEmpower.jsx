"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ShoppingCart, 
  HeartPulse, 
  Factory, 
  Landmark, 
  RadioTower, 
  Truck, 
  GraduationCap, 
  Building2 
} from "lucide-react";

// Industries Sorted A-Z with EXPLICIT PATHS
const industries = [
  {
    id: 1,
    title: "BFSI",
    path: "/industries/bfsi",
    description: "Secure fintech solutions, digital banking platforms, and fraud detection algorithms.",
    icon: Landmark,
  },
  {
    id: 2,
    title: "Education",
    path: "/industries/education",
    description: "Interactive e-learning platforms, student management systems, and virtual classrooms.",
    icon: GraduationCap,
  },
  {
    id: 3,
    title: "Government",
    path: "/industries/government",
    description: "Digital governance portals, smart city initiatives, and secure citizen data management.",
    icon: Building2,
  },
  {
    id: 4,
    title: "Healthcare",
    path: "/industries/healthcare",
    description: "Empowering patient care with telemedicine platforms, EHR integration, and data security.",
    icon: HeartPulse,
  },
  {
    id: 5,
    title: "Manufacturing",
    path: "/industries/manufacturing",
    description: "Driving Industry 4.0 with IoT monitoring, supply chain automation, and predictive maintenance.",
    icon: Factory,
  },
  {
    id: 6,
    title: "Retail & Ecommerce",
    path: "/industries/retail",
    description: "Creating seamless omnichannel experiences and intelligent inventory management systems.",
    icon: ShoppingCart,
  },
  {
    id: 7,
    title: "Telecom",
    path: "/industries/telecom",
    description: "Next-gen network management, OSS/BSS transformation, and 5G readiness solutions.",
    icon: RadioTower,
  },
  {
    id: 8,
    title: "Transportation",
    path: "/industries/transportation",
    description: "Smart logistics, fleet management tracking, and optimized route planning systems.",
    icon: Truck,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
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

const IndustriesWeEmpower = () => {
  return (
    <section className="relative w-full py-12 md:py-16 overflow-hidden bg-white">
      
      {/* --- Background: Light Grey Mesh Pattern --- */}
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

      {/* Gradient subtle overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white pointer-events-none z-0"></div>

      <div className="container relative z-10 mx-auto px-4">
        
        {/* --- Header Section (Centered & Gradient) --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 max-w-4xl mx-auto"
        >
          {/* Gradient Heading */}
          <h2 
            className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6"
            style={{
              background: "var(--gradient-primary)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            The Industries We Empower
          </h2>
          
          {/* Regular Font Paragraph */}
          <p className="text-lg text-gray-500 font-normal leading-relaxed opacity-80 max-w-2xl mx-auto">
            Delivering tailored digital transformation and innovative solutions across diverse sectors to drive global growth.
          </p>
        </motion.div>


        {/* --- 8-Column Grid (Cards with Explicit Links) --- */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {industries.map((item) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
            >
              <Link 
                href={item.path} 
                className="block h-full"
              >
                <div 
                  className="group relative p-8 rounded-[2rem] bg-white/60 backdrop-blur-lg border-2 border-white/50 shadow-lg transition-all duration-500 hover:shadow-2xl h-full flex flex-col"
                >
                  {/* Hover Border CSS */}
                  <style jsx>{`
                    .group:hover {
                      border-color: var(--color-primary-light);
                      transform: translateY(-10px);
                    }
                  `}</style>

                  {/* Icon Container (FIXED SIZE) */}
                  {/* Changed to w-16 h-16 with flex center to ensure consistent background size */}
                  <div className="mb-6 w-16 h-16 flex items-center justify-center rounded-2xl bg-blue-50/50 group-hover:bg-blue-100/50 transition-colors duration-300">
                    <motion.div
                       variants={iconFloatVariant}
                       animate="animate"
                    >
                        <item.icon
                          size={32}
                          strokeWidth={1.5}
                          style={{ color: "var(--color-primary-light)" }}
                        />
                    </motion.div>
                  </div>

                  {/* Card Title */}
                  <h3 
                    className="text-xl font-bold mb-3 group-hover:text-[var(--color-primary-dark)] transition-colors"
                    style={{ color: "var(--color-primary-dark)" }}
                  >
                    {item.title}
                  </h3>

                  {/* Card Description */}
                  <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                    {item.description}
                  </p>

                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default IndustriesWeEmpower;