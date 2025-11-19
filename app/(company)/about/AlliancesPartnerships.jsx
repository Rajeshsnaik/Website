"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Server,
  Database,
  CloudLightning,
  Code2,
  Cpu,
  Globe2,
  HardDrive,
  Laptop2,
  MonitorCheck,
  Wifi,
} from "lucide-react";

// 10 Partner Placeholder Icons
const partnersData = [
  { id: 1, name: "TechAlliance", icon: Server },
  { id: 2, name: "DataCore", icon: Database },
  { id: 3, name: "CloudNine", icon: CloudLightning },
  { id: 4, name: "CodeMasters", icon: Code2 },
  { id: 5, name: "ChipSet", icon: Cpu },
  { id: 6, name: "GlobalNet", icon: Globe2 },
  { id: 7, name: "DriveSys", icon: HardDrive },
  { id: 8, name: "DevOps Pro", icon: Laptop2 },
  { id: 9, name: "SecureMonitor", icon: MonitorCheck },
  { id: 10, name: "ConnectWi", icon: Wifi },
];

const AlliancesPartnerships = () => {
  return (
    <section className="w-full py-24 overflow-hidden bg-transparent">
      <div className="container mx-auto px-4 mb-16 text-center">
        {/* Heading: Title Case & Gradient */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold tracking-tight inline-block"
          style={{
            background: "var(--gradient-primary)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Alliances & Partnerships
        </motion.h2>
        
        <p className="mt-4 text-gray-500 text-lg">
          Collaborating with industry leaders to deliver excellence.
        </p>
      </div>

      {/* Carousel Wrapper with Fade Mask */}
      {/* The mask-image creates a fade effect on the left and right edges */}
      <div 
        className="relative w-full flex overflow-hidden"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        }}
      >
        {/* The Moving Track */}
        <motion.div
          className="flex flex-nowrap items-center gap-12 md:gap-24"
          // We move from 0% to -50% because we duplicated the list. 
          // Once it hits -50% (the end of the first set), it snaps back to 0% instantly for a seamless loop.
          animate={{ x: ["0%", "-50%"] }} 
          transition={{
            ease: "linear",
            duration: 25, // Adjust speed here (higher number = slower)
            repeat: Infinity,
          }}
        >
          {/* We render the list TWICE to create the infinite loop effect */}
          {[...partnersData, ...partnersData].map((partner, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center flex-shrink-0 group cursor-default"
            >
              {/* Icon Container */}
              <div className="p-4 rounded-xl transition-all duration-300 transform group-hover:scale-110">
                <partner.icon
                  size={60} // Large, visible icons
                  strokeWidth={1.5}
                  className="text-gray-400 dark:text-gray-600 transition-colors duration-300 group-hover:text-[var(--color-primary-dark)]"
                />
              </div>
              
              {/* Optional Name (visible on hover) */}
              {/* <span className="mt-2 text-sm font-semibold text-[var(--color-primary-dark)] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {partner.name}
              </span> */}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AlliancesPartnerships;