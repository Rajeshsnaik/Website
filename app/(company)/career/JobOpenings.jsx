"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Clock, Briefcase, ArrowRight } from "lucide-react";

// Job Data
const jobs = [
  {
    id: 1,
    title: "FullStack Developer",
    location: "Bengaluru, India",
    type: "Fulltime",
    mode: "Remote",
    department: "Engineering",
  },
  {
    id: 2,
    title: "UI/UX Designer",
    location: "Bengaluru, India",
    type: "Fulltime",
    mode: "Hybrid",
    department: "Design",
  },
  {
    id: 3,
    title: "DevOps Engineer",
    location: "Bengaluru, India",
    type: "Contract",
    mode: "On-site",
    department: "Operations",
  },
  {
    id: 4,
    title: "Product Manager",
    location: "Bengaluru, India",
    type: "Fulltime",
    mode: "Hybrid",
    department: "Product",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const JobOpenings = () => {
  return (
    <section
      id="job-openings" // ID for anchor linking
      className="w-full py-24 bg-gray-50 dark:bg-gray-950 relative"
    >
      <div className="container mx-auto px-4 max-w-5xl">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold tracking-tight inline-block"
            style={{
              background: "var(--gradient-primary)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Current Openings
          </motion.h2>
          <p className="mt-4 text-gray-500 dark:text-gray-400">
            Find your next challenge and help us build the future.
          </p>
        </div>

        {/* Job List Container */}
        <motion.div
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {jobs.map((job) => (
            <motion.div
              key={job.id}
              variants={cardVariants}
              className="group relative w-full bg-white dark:bg-gray-900 rounded-[2rem] p-6 md:p-8 shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
            >
              {/* --- Left Side: Job Info --- */}
              <div className="flex flex-col space-y-3">
                {/* Department Tag */}
                <span className="inline-block px-3 py-1 text-xs font-bold tracking-wider text-blue-600 bg-blue-50 dark:bg-blue-900/30 dark:text-blue-300 rounded-full w-fit">
                  {job.department}
                </span>

                {/* Job Title */}
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white group-hover:text-[var(--color-primary-dark)] transition-colors">
                  {job.title}
                </h3>

                {/* Meta Info (Location, Type) */}
                <div className="flex flex-wrap items-center gap-4 text-sm md:text-base font-medium text-gray-400 dark:text-gray-500">
                  <div className="flex items-center gap-1.5">
                    <MapPin size={16} />
                    <span>{job.location}</span>
                  </div>
                  <span className="hidden md:block w-1 h-1 bg-gray-300 rounded-full"></span>
                  <div className="flex items-center gap-1.5">
                    <Briefcase size={16} />
                    <span>{job.type}</span>
                  </div>
                  <span className="hidden md:block w-1 h-1 bg-gray-300 rounded-full"></span>
                  <div className="flex items-center gap-1.5">
                    <Clock size={16} />
                    <span>{job.mode}</span>
                  </div>
                </div>
              </div>

              {/* --- Right Side: Apply Button --- */}
              <div className="w-full md:w-auto">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full md:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-white shadow-md transition-transform"
                  style={{ background: "var(--gradient-primary)" }}
                >
                  Apply Now
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                </motion.button>
              </div>
              
              {/* Decorative Hover Border Effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-100 dark:group-hover:border-blue-900/30 rounded-[2rem] pointer-events-none transition-colors duration-300"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default JobOpenings;