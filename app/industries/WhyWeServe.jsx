"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Lightbulb, Cpu, ShieldCheck } from "lucide-react";

const reasons = [
  {
    id: "01",
    title: "Domain Expertise",
    description: "Deep-rooted understanding of sector-specific nuances allowing us to hit the ground running immediately.",
    icon: Briefcase,
  },
  {
    id: "02",
    title: "Problem-Solving",
    description: "A proven track record of untangling complex legacy issues and delivering modern, efficient solutions.",
    icon: Lightbulb,
  },
  {
    id: "03",
    title: "Technical Capabilities",
    description: "Access to a vast pool of full-stack experts proficient in the latest enterprise-grade technologies.",
    icon: Cpu,
  },
  {
    id: "04",
    title: "Compliance Knowledge",
    description: "Strict adherence to industry standards (GDPR, HIPAA, ISO) ensuring your data remains secure.",
    icon: ShieldCheck,
  },
];

const WhyWeServe = () => {
  return (
   <section className="relative w-full py-12 md:py-16 overflow-hidden bg-white">
      
      {/* --- Background: Light Mesh Pattern on White --- */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0,0,0,0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,0,0,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      ></div>

      {/* Subtle White Gradient Overlay (to blend edges) */}
      <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white pointer-events-none z-0"></div>

      <div className="container relative z-10 mx-auto px-4">
        
        {/* --- Header Section --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20 max-w-3xl mx-auto"
        >
          {/* Gradient Heading */}
          <h2 
            className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6"
            style={{
              background: "var(--gradient-primary)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Why We Serve These Industries
          </h2>
          
          <p className="text-lg text-gray-500 font-medium leading-relaxed">
            Bridging the gap between technological potential and real-world business needs with precision and care.
          </p>
        </motion.div>

        {/* --- 4-Column Feature Block --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              // Card: White bg with shadow to pop against the white section background
              className="relative bg-white rounded-2xl p-8 flex flex-col h-full shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100"
            >
              {/* Decorative Number Watermark */}
              <span 
                className="absolute -right-4 -top-6 text-9xl font-black opacity-5 pointer-events-none select-none"
                style={{ color: "var(--color-primary-dark)" }}
              >
                {item.id}
              </span>

              {/* Icon Section */}
              <div className="mb-6 relative z-10">
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center shadow-sm"
                  style={{ backgroundColor: "rgba(45, 172, 227, 0.1)" }} // Light blue bg
                >
                  <item.icon 
                    size={28} 
                    strokeWidth={2}
                    style={{ color: "var(--color-primary-dark)" }} 
                  />
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10 mt-auto">
                <h3 
                  className="text-xl font-bold mb-3"
                  style={{ color: "var(--color-primary-dark)" }}
                >
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed font-medium">
                  {item.description}
                </p>
              </div>

              {/* Bottom Colored Border for accent */}
              <div 
                className="absolute bottom-0 left-0 w-full h-1.5"
                style={{ background: "var(--gradient-primary)" }}
              ></div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyWeServe;