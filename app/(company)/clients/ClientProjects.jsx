"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { generateSlug } from "../../utils/slug";

// Sample Data for 4 Projects
const projectsData = [
  {
    id: 1,
    tag: "Mobile App",
    title: "Garbage Management Solution using IoT",
    description: "This provides the individuals to make day to day transactions and allows managing personal finances, fund transfer, purchases and other transactions electronically.",
    image: "/api/placeholder/600/600?text=Mobile+Wallet", // Replace with real image
  },
  {
    id: 2,
    tag: "Web Development",
    title: "E-Commerce Suite",
    description: "A comprehensive platform enabling retailers to manage inventory, process payments seamlessly, and provide personalized shopping experiences to customers globally.",
    image: "/api/placeholder/600/600?text=E-Commerce",
  },
  {
    id: 3,
    tag: "IoT Solutions",
    title: "Smart Home Hub",
    description: "An integrated IoT ecosystem allowing users to control lighting, security, and climate systems remotely through a unified, secure cloud-based dashboard.",
    image: "/api/placeholder/600/600?text=IoT+Hub",
  },
  {
    id: 4,
    tag: "Cloud Infrastructure",
    title: "Data Migration Tool",
    description: "Enterprise-grade software designed to securely migrate legacy database systems to modern cloud architectures with zero downtime and data integrity checks.",
    image: "/api/placeholder/600/600?text=Cloud+Migration",
  },
];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const ClientProjects = () => {
  return (
    <section className="relative w-full py-24 md:py-32 overflow-hidden bg-gray-50 dark:bg-gray-900">
      
      {/* 1. Background Pattern (Same as Hero) */}
      <div
        className="absolute inset-0 z-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#cbd5e1 1.5px, transparent 1.5px)",
          backgroundSize: "30px 30px",
        }}
      ></div>

      {/* 2. Giant Background Watermark Text */}
      <div className="absolute top-10 left-0 w-full overflow-hidden pointer-events-none z-0 flex justify-center items-center">
        <span
          className="text-[12vw] font-black uppercase tracking-tighter opacity-5 whitespace-nowrap leading-none"
          style={{
            background: "var(--gradient-primary)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Explore Our Projects
        </span>
      </div>

      <div className="container relative z-10 mx-auto px-4">
        
        {/* --- Section Heading --- */}
        <motion.div
          className="text-center mb-16 md:mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
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
            Explore Our Projects
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Learn why professionals trust our solutions to complete their customers' journey.
          </p>
        </motion.div>

        {/* --- Projects Grid --- */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projectsData.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className="group relative bg-white dark:bg-gray-800 rounded-[2rem] shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col md:flex-row h-full border border-gray-100 dark:border-gray-700"
              whileHover={{ y: -5 }}
            >
              {/* Left Side: Image */}
              <div className="w-full md:w-2/5 h-64 md:h-auto relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-blue-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Right Side: Content */}
              <div className="w-full md:w-3/5 p-8 flex flex-col justify-center items-start space-y-4">
                
                {/* Tech Tag (Rounded Button style) */}
                <span 
                  className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide bg-blue-50 dark:bg-gray-700"
                  style={{ color: "var(--color-primary-dark)" }}
                >
                  {project.tag}
                </span>

                {/* Project Title (Gradient) */}
                <h3
                  className="text-2xl md:text-3xl font-bold"
                  style={{
                    background: "var(--gradient-primary)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base leading-relaxed line-clamp-3 md:line-clamp-none">
                  {project.description}
                </p>

                {/* Hover Interaction: View More */}
                <div className="pt-2">
                  <Link href={`/portfolio/${generateSlug(project.title)}`} className="inline-flex items-center gap-2 font-bold text-gray-800 dark:text-white group-hover:text-[var(--color-primary-light)] transition-colors">
                    <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-out">
                      View Case Study
                    </span>
                    <div className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 group-hover:bg-[var(--gradient-primary)] transition-colors duration-300">
                       <ArrowRight size={18} className="text-gray-600 dark:text-gray-300 group-hover:text-white transition-colors" />
                    </div>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* --- Bottom Button --- */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Link
            href="/portfolio"
            className="inline-flex items-center justify-center px-10 py-4 text-lg font-bold text-white rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            style={{ background: "var(--gradient-primary)" }}
          >
            More Success Stories
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default ClientProjects;