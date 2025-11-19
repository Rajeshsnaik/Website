"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, Users, UserCheck, Building2 } from "lucide-react";

const statsData = [
  {
    id: 1,
    icon: Calendar,
    number: "2+",
    label: "Years in Operation",
  },
  {
    id: 2,
    icon: Users,
    number: "10+",
    label: "Clients",
  },
  {
    id: 3,
    icon: UserCheck,
    number: "25+",
    label: "Full Time Employees",
  },
  {
    id: 4,
    icon: Building2,
    number: "2",
    label: "Offices",
  },
];

// 1. Animation Variants
// Controls the parent container (the grid)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Time delay between each item appearing
      delayChildren: 0.1,
    },
  },
};

// Controls each individual stat item
const itemVariants = {
  hidden: { opacity: 0, y: 30 }, // Start invisible and 30px lower
  visible: {
    opacity: 1,
    y: 0, // Move to original position
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const CompanyStats = () => {
  return (
    <section
      className="w-full py-16 flex items-center justify-center shadow-lg overflow-hidden"
      style={{ background: "var(--gradient-primary)" }}
    >
      <div className="container mx-auto px-4">
        {/* motion.div acts as the Grid Container 
           viewport={{ once: true }} ensures it animates only the first time you scroll to it
        */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-white"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }} // Starts when 30% of section is visible
        >
          {statsData.map((stat) => (
            <motion.div
              key={stat.id}
              variants={itemVariants} // Applies the fade-up animation
              className="flex flex-col items-center justify-center text-center space-y-3"
            >
              {/* Icon Section */}
              <div className="flex items-center justify-center">
                <stat.icon
                  size={24}
                  strokeWidth={2}
                  style={{ color: "var(--color-accent-orange)" }}
                />
              </div>

              {/* Number Section with Hover Effect */}
              <motion.div
                className="text-4xl md:text-5xl font-bold tracking-tight cursor-default"
                whileHover={{ scale: 1.2 }} // The hover effect requested earlier
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                {stat.number}
              </motion.div>

              {/* Label Text */}
              <p className="text-sm md:text-base font-medium opacity-90 tracking-wide">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CompanyStats;