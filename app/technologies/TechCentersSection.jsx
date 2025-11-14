"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Aperture, Cloud, Zap, Cpu } from 'lucide-react'; // Using lucide-react for modern icons

// --- Configuration Data (Text adjusted for 2-line display) ---
const technologyCenters = [
  {
    name: "Web Development",
    icon: Aperture,
    link: "/technologies/web-applications",
    description: "Building scalable, secure web applications using modern frameworks like React and Next.js, focusing on optimal cross-platform user experience. Our teams specialize in full-stack development, delivering high-performance, accessible, and maintainable digital products.",
  },
  {
    name: "Cloud Infrastructure",
    icon: Cloud,
    link: "/technologies/cloud",
    description: "Leveraging scalable cloud services (AWS, Google Cloud) for deployment, storage, and processing, prioritizing high availability and security. We manage migrations, optimize resource usage, and implement advanced containerization strategies like Kubernetes.",
  },
  {
    name: "Internet of Things (IoT)",
    icon: Zap,
    link: "/technologies/iot",
    description: "Designing and integrating smart, connected devices and sensor networks to gather real-time data, enabling intelligent automation and predictive insights across industrial and consumer environments. We focus on device security and reliable data ingestion.",
  },
  {
    name: "Cognitive Computing",
    icon: Cpu,
    link: "/technologies/cognitive-computing",
    description: "Developing intelligent systems that mimic human thought processes, including AI, Machine Learning, and NLP for complex decision support. Our projects include custom large language models and predictive analytics tailored to specific industry needs.",
  },
];

// --- Custom Colors ---
const primaryDark = '#355694';
const primaryLight = '#2DACE3';
const accentOrange = '#F6A25C';

// --- Framer Motion Variants ---
const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Stagger delay between children
      when: "beforeChildren",
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1, 
    transition: { 
      type: "spring", 
      stiffness: 70, 
      damping: 10 
    } 
  },
};

const TechCentersSection = () => {

  // Consistent style for all icons using the primary dark color
  const iconStyle = { 
      background: primaryDark, 
      boxShadow: `0 4px 8px -2px ${primaryDark}40`, // Reduced shadow intensity
      color: 'white' 
  };

  return (
    <div className="py-20 bg-gray-50 dark:bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2 
            className="text-sm font-semibold uppercase tracking-widest"
            style={{ color: primaryLight }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.5 }}
          >
            Core Tech Centers
          </motion.h2>
          <motion.h1
            className="mt-2 text-4xl sm:text-5xl lg:text-5xl font-extrabold text-gray-900 dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            The Innovation Engine
          </motion.h1>
        </div>

        {/* 4-Card Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {technologyCenters.map((tech) => {
            const Icon = tech.icon;

            return (
              <motion.a
                key={tech.name}
                href={tech.link}
                // Added 'group' class to enable group-hover effects on children
                className="block p-6 group bg-white/95 dark:bg-gray-800 rounded-xl shadow-xl hover:shadow-2xl transition duration-300 transform hover:scale-[1.03] border-t-2 border-b-2 border-transparent hover:border-b-primary-light"
                variants={cardVariants}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
              >
                <div className="flex items-center space-x-4 mb-4">
                  {/* Icon with Round Background (w-12 h-12) */}
                  <div 
                    className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center p-2"
                    style={iconStyle}
                  >
                    <Icon size={24} strokeWidth={2.5} />
                  </div>
                  
                  {/* Card Heading */}
                  <h3 
                    className="text-xl font-bold text-gray-900 dark:text-white leading-snug"
                    style={{ color: primaryDark }}
                  >
                    {tech.name}
                  </h3>
                </div>
                
                {/* Paragraph: Removed line clamp, allowing full text to display */}
                <p 
                  // Paragraph text color reduced in opacity
                  className="mt-4 text-gray-500/90 dark:text-gray-400 text-base leading-relaxed"
                >
                  {tech.description}
                </p>
                
                {/* Visual Link Indicator: Enhanced Design */}
                <div 
                  className="mt-6 text-base font-bold flex items-center transition duration-300"
                  style={{ color: accentOrange }}
                >
                  {/* Underline effect on hover */}
                  <span className="group-hover:border-b-2 border-accent-orange pb-px transition-all duration-300">
                    Explore Now
                  </span> 
                  
                  {/* Enhanced Arrow Design with Circular Hover Effect */}
                  <span 
                    className="ml-2 w-7 h-7 flex items-center justify-center rounded-full transition-all duration-300"
                    style={{ 
                        color: accentOrange, 
                        // Use a transparent background that fills slightly on hover
                        backgroundColor: 'transparent',
                        // On hover, change background color (using transparent class here for generality)
                        // In a real Tailwind setup, we would define group-hover:bg-accent-orange/10
                    }}
                  >
                    <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                  </span>
                </div>
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default TechCentersSection;