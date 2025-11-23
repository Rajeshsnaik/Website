"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Layers, Smartphone, Monitor, Briefcase } from "lucide-react";

const categories = ["All Projects", "Web Development", "Mobile Apps", "Consulting", "Enterprise IT"];

// Generating dummy data with reliable placeholders
const projectsData = Array.from({ length: 16 }, (_, i) => ({
  id: i + 1,
  name: `Project Alpha ${i + 1}`,
  description: `A successful ${
    i % 3 === 0 ? "web" : i % 3 === 1 ? "mobile" : "enterprise"
  } solution delivery for a leading industry client.`,
  category: categories[(i % 4) + 1],
  // Using placeholder service for demo purposes so images show up immediately
  imageUrl: `/api/placeholder/600/400?text=Project+${i + 1}`, 
  link: `#project-${i + 1}`,
}));

const Portfolio_Main = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  const filteredProjects =
    activeCategory === categories[0]
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 relative font-sans">
      
      {/* 1. Background: CSS Dot Pattern (Consistent with other pages) */}
      <div
        className="absolute inset-0 z-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#cbd5e1 1.5px, transparent 1.5px)",
          backgroundSize: "24px 24px",
        }}
      ></div>

      {/* 🌟 Hero Section */}
      <motion.section
        className="relative pt-32 pb-16 px-6 text-center z-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.h1
            className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight"
            style={{
              background: "var(--gradient-primary)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
          >
            Our Portfolio of Excellence
          </motion.h1>
          <motion.p
            className="mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.4 } }}
          >
            Delivering cutting-edge web, mobile, and enterprise solutions for clients across industries.
          </motion.p>
        </div>
      </motion.section>

      {/* 🔹 Category Filter */}
      <section className="relative z-10 py-8 max-w-6xl mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2.5 rounded-full text-sm md:text-base font-medium transition-all duration-300 shadow-sm border ${
                activeCategory === category
                  ? "text-white border-transparent shadow-md"
                  : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:bg-gray-50"
              }`}
              // Apply gradient background only if active
              style={{
                background: activeCategory === category ? "var(--gradient-primary)" : "",
              }}
            >
              {category}
            </motion.button>
          ))}
        </div>
      </section>

      {/* 🧩 Project Grid */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 pb-24">
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="relative bg-white dark:bg-gray-800 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-500"
                whileHover={{ y: -5 }}
              >
                {/* Image Container */}
                <div className="h-56 overflow-hidden relative">
                  {/* Fallback Image / Placeholder */}
                  <img
                    src={project.imageUrl}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Gradient Overlay on Hover (Using Brand Gradient) */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-90 transition duration-500"
                    style={{ background: "var(--gradient-primary)" }}
                  ></div>
                </div>

                {/* Content (Visible by default) */}
                <div className="p-6 relative bg-white dark:bg-gray-800 z-10">
                  <span 
                    className="text-xs font-bold uppercase tracking-wider"
                    style={{ color: "var(--color-accent-orange)" }}
                  >
                    {project.category}
                  </span>
                  <h3 className="mt-2 text-xl font-bold text-gray-900 dark:text-white line-clamp-1 group-hover:text-[var(--color-primary-light)] transition-colors">
                    {project.name}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
                    {project.description}
                  </p>
                </div>

                {/* Hover Overlay Content (Appears over the image) */}
                <motion.a
                  href={project.link}
                  className="absolute top-0 left-0 w-full h-56 flex flex-col items-center justify-center text-white text-center opacity-0 group-hover:opacity-100 transition duration-500 z-20 px-4"
                >
                  <div className="p-3 bg-white/20 backdrop-blur-sm rounded-full mb-2">
                    <ArrowRight className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-bold">View Case Study</h4>
                  <p className="text-xs text-white/80 mt-1">
                    {project.category}
                  </p>
                </motion.a>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-gray-500 mt-10"
          >
            No projects found in this category.
          </motion.p>
        )}
      </section>
    </div>
  );
};

export default Portfolio_Main;