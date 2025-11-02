"use client";

"use client";

// components/Portfolio.jsx or pages/portfolio.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa'; 

// --- 1. DATA DEFINITION (Remains the same) ---
const categories = ['All Projects', 'Web Development', 'Mobile Apps', 'Consulting', 'Enterprise IT'];

const projectsData = Array.from({ length: 16 }, (_, i) => ({
    id: i + 1,
    name: `Project Alpha ${i + 1}`,
    description: `A successful ${i % 3 === 0 ? 'web' : i % 3 === 1 ? 'mobile' : 'enterprise'} solution delivery for a leading industry client.`,
    category: categories[(i % 4) + 1], 
    imageUrl: `/images/project-${(i % 5) + 1}.jpg`, 
    link: `/portfolio/project-alpha-${i + 1}`,
}));

// --- 2. FRAMER MOTION VARIANTS ---

const heroVariants = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

// Updated card variants for smoother animation
const cardVariants = {
    hidden: { opacity: 0, y: 50 }, // Start lower than before
    visible: { 
        opacity: 1, 
        y: 0, 
        transition: { 
            duration: 0.7, 
            ease: "easeOut" // Use a smooth easing function
        } 
    },
    // The scale property from before is removed for a cleaner slide-up effect
};

// --- 3. COMPONENT START ---

const Portfolio = () => {
    const [activeCategory, setActiveCategory] = useState(categories[0]);

    const filteredProjects = activeCategory === categories[0]
        ? projectsData
        : projectsData.filter(project => project.category === activeCategory);

    return (
        <div className="bg-gray-50 min-h-screen">
            
            {/* 3.1. Hero Section (Remains the same) */}
            <motion.section
                className="relative py-24 md:py-32 text-white overflow-hidden bg-cover bg-center"
                style={{ backgroundImage: 'url(/images/portfolio-hero-bg.jpg)' }}
                variants={heroVariants}
                initial="initial"
                animate="animate"
            >
                {/* Overlay for better text readability */}
                <div className="absolute inset-0 bg-indigo-900 bg-opacity-80"></div>
                
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.h1
                        className="text-5xl font-extrabold tracking-tight sm:text-6xl"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
                    >
                        Successful projects and solutions
                    </motion.h1>
                    <motion.p
                        className="mt-4 max-w-3xl mx-auto text-xl text-indigo-200"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0, transition: { delay: 0.4 } }}
                    >
                        Wide breadth of Web, Mobile, Software Development and Consulting services across the entire IT spectrum for all your Enterprise needs.
                    </motion.p>
                </div>
            </motion.section>
            
            {/* 3.2. Filter/Tag Section (Remains the same) */}
            <section className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-wrap justify-center gap-3">
                    {categories.map((category) => (
                        <motion.button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-6 py-2 rounded-full font-medium transition duration-300 ${
                                activeCategory === category
                                    ? 'bg-indigo-600 text-white shadow-lg'
                                    : 'bg-white text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 border border-gray-200'
                            }`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {category}
                        </motion.button>
                    ))}
                </div>
            </section>
            
            {/* 3.3. Projects Grid */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <motion.div 
                    layout 
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    <AnimatePresence>
                        {filteredProjects.map((project) => (
                            <motion.div
                                key={project.id}
                                layout
                                variants={cardVariants}
                                initial="hidden"
                                // --- SCROLL-TRIGGERED ANIMATION SETUP ---
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.2 }} // Animate only once when 20% of card is visible
                                // --- END SCROLL-TRIGGERED SETUP ---
                                exit="hidden"
                                className="relative bg-white rounded-xl shadow-none overflow-hidden group cursor-pointer border border-gray-100"
                                whileHover={{ y: -5 }} 
                            >
                                {/* Project Image Area */}
                                <div className="h-48 w-full overflow-hidden">
                                    <img
                                        src={project.imageUrl}
                                        alt={project.name}
                                        // --- LAZY LOADING IMPLEMENTED ---
                                        loading="lazy" 
                                        // --- END LAZY LOADING ---
                                        className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                                    />
                                </div>
                                
                                {/* Text Content (Remains the same) */}
                                <div className="p-5">
                                    <span className="text-xs font-semibold uppercase text-indigo-600 tracking-wider">{project.category}</span>
                                    <h3 className="mt-1 text-xl font-bold text-gray-900 line-clamp-2">{project.name}</h3>
                                    <p className="mt-2 text-sm text-gray-500 line-clamp-3">{project.description}</p>
                                </div>

                                {/* View More Overlay on Hover (Remains the same) */}
                                <motion.a 
                                    href={project.link}
                                    className="absolute inset-0 bg-indigo-600 bg-opacity-90 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 p-4 text-white text-center"
                                >
                                    <h4 className="2xl font-bold">{project.name}</h4>
                                    <p className="mt-2 mb-4 text-sm font-medium">Click to view case study</p>
                                    <span className="flex items-center text-sm font-semibold">
                                        View More <FaArrowRight className="ml-2 w-3 h-3" />
                                    </span>
                                </motion.a>

                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
                
                {filteredProjects.length === 0 && (
                    <p className="text-center text-gray-500 mt-10">No projects found in this category.</p>
                )}
            </section>
            
        </div>
    );
};

export default Portfolio;