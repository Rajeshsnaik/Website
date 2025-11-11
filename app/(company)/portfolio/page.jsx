"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const categories = ["All Projects", "Web Development", "Mobile Apps", "Consulting", "Enterprise IT"];

const projectsData = Array.from({ length: 16 }, (_, i) => ({
  id: i + 1,
  name: `Project Alpha ${i + 1}`,
  description: `A successful ${
    i % 3 === 0 ? "web" : i % 3 === 1 ? "mobile" : "enterprise"
  } solution delivery for a leading industry client.`,
  category: categories[(i % 4) + 1],
  imageUrl: `/images/project-${(i % 5) + 1}.jpg`,
  link: `/portfolio/project-alpha-${i + 1}`,
}));

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  const filteredProjects =
    activeCategory === categories[0]
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  return (
    <div className="bg-gradient-to-br from-indigo-50 via-white to-purple-50 min-h-screen font-inter">

      {/* 🌟 Hero Section */}
      <motion.section
        className="relative py-28 md:py-36 text-white overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: "url(/images/portfolio-hero-bg.jpg)" }}
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/90 via-purple-900/80 to-indigo-800/90"></div>

        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <motion.h1
            className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
          >
            Our Portfolio of Excellence
          </motion.h1>
          <motion.p
            className="mt-5 max-w-3xl mx-auto text-lg md:text-xl text-indigo-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.4 } }}
          >
            Delivering cutting-edge web, mobile, and enterprise solutions for clients across industries.
          </motion.p>
        </div>
      </motion.section>

      {/* 🔹 Category Filter */}
      <section className="py-10 max-w-6xl mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.96 }}
              className={`px-6 py-2.5 rounded-full text-sm md:text-base font-medium transition-all duration-300 shadow-sm ${
                activeCategory === category
                  ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md"
                  : "bg-white/70 backdrop-blur-md border border-gray-200 text-gray-700 hover:bg-indigo-50 hover:text-indigo-700"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>
      </section>

      {/* 🧩 Project Grid */}
      <section className="max-w-6xl mx-auto px-4 pb-20">
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                className="relative bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg border border-gray-100 overflow-hidden group cursor-pointer hover:shadow-2xl transition-all duration-500"
                whileHover={{ y: -8 }}
              >
                {/* Image */}
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={project.imageUrl}
                    alt={project.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <span className="text-xs font-semibold uppercase text-indigo-600 tracking-wider">
                    {project.category}
                  </span>
                  <h3 className="mt-2 text-lg font-bold text-gray-900 line-clamp-2">
                    {project.name}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600 line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Hover Overlay */}
                <motion.a
                  href={project.link}
                  className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-700 text-white text-center opacity-0 group-hover:opacity-100 transition duration-500"
                >
                  <h4 className="text-xl font-bold">{project.name}</h4>
                  <p className="mt-1 text-sm text-indigo-100">
                    Click to view case study
                  </p>
                  <div className="mt-3 flex items-center gap-2 text-sm font-semibold">
                    View More <FaArrowRight className="w-3 h-3" />
                  </div>
                </motion.a>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <p className="text-center text-gray-500 mt-10">
            No projects found in this category.
          </p>
        )}
      </section>
    </div>
  );
};

export default Portfolio;
