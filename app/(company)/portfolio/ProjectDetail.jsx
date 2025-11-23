"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import Link from "next/link";
import Image from "next/image"; // Import Next.js Image

const ProjectDetail = ({ project }) => {
  if (!project) return null;

  return (
    <article className="w-full min-h-screen bg-white dark:bg-gray-950 font-sans">

      <div className="container mx-auto px-4 max-w-5xl pb-24">
        
        {/* --- Header Section --- */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="space-y-5 mb-10"
        >
          {/* 1. Tech Tag (Fixed Design & Color) */}
          <motion.span 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="inline-block px-5 py-1.5 rounded-full text-xs md:text-sm font-bold uppercase tracking-widest text-white shadow-sm"
            style={{ 
              background: "linear-gradient(135deg, var(--color-primary-dark), #2563eb)" 
            }}
          >
            {project.category}
          </motion.span>

          {/* 2. Project Heading (Reduced Size & Tight Leading) */}
          <h1 
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1]"
            style={{
              background: "var(--gradient-primary)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {project.title}
          </h1>

          {/* 3. Subheading (Lower Opacity) */}
          <p className="text-lg md:text-xl text-gray-600/90 dark:text-gray-400 leading-relaxed max-w-3xl">
            {project.subtitle}
          </p>
          
          {/* Meta Data */}
          {(project.year || project.duration) && (
             <div className="flex items-center gap-6 text-sm font-medium text-gray-400 pt-3 border-t border-gray-100 dark:border-gray-800 w-fit pr-10">
               {project.year && (
                 <div className="flex items-center gap-2">
                   <Calendar size={15} /> <span>{project.year}</span>
                 </div>
               )}
               {project.duration && (
                 <div className="flex items-center gap-2">
                   <Clock size={15} /> <span>{project.duration}</span>
                 </div>
               )}
             </div>
          )}
        </motion.div>


        {/* --- Image Section (Next.js Image Optimized) --- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.99 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-lg mb-14 border border-gray-100 dark:border-gray-800 bg-gray-100"
        >
          <Image 
            src={project.image} 
            alt={project.title} 
            fill
            priority // Fast Loading: Loads immediately
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
            className="object-cover"
          />
          {/* Subtle sheen overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none"></div>
        </motion.div>


        {/* --- Overview / Info Section --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Label Column (Sticky) */}
          <div className="lg:col-span-3">
            <div className="lg:sticky lg:top-32">
              <h3 
                className="text-xl font-bold tracking-widest mb-3"
                style={{ color: "var(--color-accent-orange)" }}
              >
                Overview
              </h3>
              <div className="h-1 w-10 rounded-full mb-6 bg-gray-200 dark:bg-gray-700"></div>
            </div>
          </div>

          {/* Content Column */}
          <motion.div 
            className="lg:col-span-9 space-y-6"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {project.overview?.map((paragraph, index) => (
              <p 
                key={index} 
                className="text-base md:text-lg text-gray-600/90 dark:text-gray-300 leading-8 font-normal"
              >
                {paragraph}
              </p>
            ))}

            <div className="pt-10 mt-10 border-t border-gray-100 dark:border-gray-800">
              <p className="text-sm text-gray-400 italic font-medium flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
                More details coming soon...
              </p>
            </div>
          </motion.div>
        </div>

      </div>
    </article>
  );
};

export default ProjectDetail;