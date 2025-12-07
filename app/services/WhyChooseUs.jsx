"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Award, 
  BadgeCheck, 
  Smile, 
  Headphones, 
  FileCheck2 
} from "lucide-react";

// Differentiators Data
const differentiators = [
  {
    id: 1,
    title: "10+ Years Experience",
    description: "A decade of proven track record delivering complex digital solutions and navigating shifting technology landscapes.",
    icon: Award,
  },
  {
    id: 2,
    title: "Certified Professionals",
    description: "Our team consists of certified experts across AWS, Azure, Google Cloud, and modern development frameworks.",
    icon: BadgeCheck,
  },
  {
    id: 3,
    title: "99% Client Satisfaction",
    description: "We prioritize long-term partnerships, reflected in our high retention rates and glowing client testimonials.",
    icon: Smile,
  },
  {
    id: 4,
    title: "End-to-End Support",
    description: "From initial consultation and prototyping to deployment and 24/7 post-launch maintenance.",
    icon: Headphones,
  },
  {
    id: 5,
    title: "Transparent Pricing",
    description: "No hidden costs or surprise fees. We offer clear, detailed engagement models tailored to your budget.",
    icon: FileCheck2,
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
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const WhyChooseUs = () => {
  return (
    // Distinct Background Color (Very faint blue tint) to separate sections
    <section 
        className="relative w-full py-20 md:py-28 overflow-hidden"
        style={{ backgroundColor: "rgba(53, 86, 148, 0.03)" }}
    >
      
      <div className="container relative z-10 mx-auto px-4">
        
        {/* --- Header Section --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          {/* Eyebrow */}
          <span 
            className="inline-block py-1 px-4 rounded-full text-xs font-bold tracking-widest mb-4 border"
            style={{ 
              borderColor: "rgba(246, 162, 92, 0.3)", 
              color: "var(--color-accent-orange)" 
            }}
          >
            The Blute Difference
          </span>

          {/* CATCHY GRADIENT HEADING */}
          <h2 
            className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6"
            style={{
              background: "var(--gradient-primary)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Proven Expertise. <br className="hidden md:block" /> Unmatched Reliability.
          </h2>
          
          <p className="text-lg text-gray-500 font-medium leading-relaxed opacity-90 max-w-2xl mx-auto">
            We don't just act as vendors; we act as partners invested in your growth, ensuring reliability, quality, and innovation at every step.
          </p>
        </motion.div>


        {/* --- Cards Layout (Horizontal Blocks) --- */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto"
        >
          {differentiators.map((item, index) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              // Center the last item if it's odd
              className={`${index === differentiators.length - 1 ? "md:col-span-2 md:w-2/3 md:mx-auto" : ""}`}
            >
              <div 
                className="group relative p-6 md:p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col sm:flex-row items-start gap-6"
              >
                {/* Decorative Left Border on Hover */}
                <div className="absolute left-0 top-6 bottom-6 w-1 rounded-r-full bg-[var(--color-primary-light)] scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-center"></div>

                {/* Icon Container */}
                <div 
                    className="flex-shrink-0 w-16 h-16 rounded-xl flex items-center justify-center transition-colors duration-300"
                    style={{ backgroundColor: "rgba(45, 172, 227, 0.1)" }}
                >
                    <item.icon
                      size={32}
                      strokeWidth={1.5}
                      style={{ color: "var(--color-primary-dark)" }}
                    />
                </div>

                {/* Text Content */}
                <div className="flex-grow">
                    <h3 
                      className="text-xl font-bold mb-2 group-hover:text-[var(--color-primary-dark)] transition-colors"
                      style={{ color: "#333" }}
                    >
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {item.description}
                    </p>
                </div>

              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;