"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  Globe,
  Anchor,
  Zap,
  Cloud,
  ShieldCheck,
  Cpu,
  Database,
  Layers,
  Command,
} from "lucide-react"; // Using placeholder icons to represent client logos

const clientsData = [
  { id: 1, name: "Global Tech", icon: Globe },
  { id: 2, name: "Secure Corp", icon: ShieldCheck },
  { id: 3, name: "Fast Energy", icon: Zap },
  { id: 4, name: "Cloud Systems", icon: Cloud },
  { id: 5, name: "Anchor Logistics", icon: Anchor },
  { id: 6, name: "Future AI", icon: Cpu },
  { id: 7, name: "Data Flow", icon: Database },
  { id: 8, name: "Layered Solutions", icon: Layers },
  { id: 9, name: "Command Center", icon: Command },
  { id: 10, name: "Biz Partners", icon: Briefcase },
];

// Animation: Container (staggers the children)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Fast ripple effect
    },
  },
};

// Animation: Individual Circle (Pop up)
const itemVariants = {
  hidden: { opacity: 0, scale: 0.5, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 260, damping: 20 },
  },
};

const AboutOurClients = () => {
  return (
    <section className="relative w-full py-20 px-4 overflow-hidden bg-gray-50 dark:bg-gray-900 flex flex-col items-center">
      
      {/* 1. Background: Network-like Dot Pattern (matches previous section) */}
      <div
        className="absolute inset-0 z-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#cbd5e1 1.5px, transparent 1.5px)",
          backgroundSize: "30px 30px",
        }}
      ></div>

      {/* 2. Decorative Faint Gradient Blobs (optional, adds depth like reference image) */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"></div>
      <div className="absolute top-40 right-0 w-72 h-72 bg-orange-100/30 rounded-full blur-3xl"></div>

      <div className="container relative z-10 mx-auto max-w-6xl text-center">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2
            className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4"
            style={{
              background: "var(--gradient-primary)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Our Clients
          </h2>
          {/* Decorative Underline */}
          <div className="h-1 w-24 mx-auto rounded-full bg-gray-300 dark:bg-gray-700 relative overflow-hidden">
             <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-50"></div>
          </div>
        </motion.div>

        {/* Clients Grid */}
        {/* Mobile: 2 cols, Tablet: 3 cols, Desktop: 5 cols (for 10 items) */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 justify-center items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {clientsData.map((client) => (
            <motion.div
              key={client.id}
              variants={itemVariants}
              className="flex flex-col items-center group"
            >
              {/* Circle Card */}
              <motion.div
                className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center relative z-10 border border-gray-100 dark:border-gray-700 cursor-pointer"
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0px 20px 30px rgba(0,0,0,0.1)", // Enhanced shadow on hover
                  transition: { type: "spring", stiffness: 400, damping: 10 },
                }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Icon / Logo Placeholder */}
                {/* Replace <client.icon /> with <img src={client.logoUrl} /> for real images */}
                <client.icon
                  size={40}
                  className="text-gray-400 group-hover:text-[var(--color-primary-dark)] transition-colors duration-300"
                />
              </motion.div>
              
              {/* Optional: Client Name (Hidden by default, appears on hover?) 
                  Or just static below like the reference image implies labels might be useful 
              */}
              <motion.p 
                className="mt-4 text-sm font-medium text-gray-500 dark:text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute -bottom-8"
              >
                {client.name}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutOurClients;