"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

// Rotating Words
const rotatingWords = [
  "IoT Solutions",
  "App Development",
  "Cloud Infrastructure",
  "AI Integrations",
  "Enterprise Platforms",
];

// --- UPDATED DATA STRUCTURE: Objects with src and label ---

const imagesLeft = [
  { src: "/hero/1.webp", label: "IoT Dashboard" },
  { src: "/hero/2.webp", label: "Mobile Banking" },
  { src: "/hero/3.webp", label: "Cloud Analytics" },
  { src: "/hero/4.webp", label: "AI Modeling" },
  { src: "/hero/5.webp", label: "SaaS Platform" },
];

const imagesRight = [
  { src: "/hero/6.webp", label: "E-Commerce" },
  { src: "/hero/7.webp", label: "Fintech App" },
  { src: "/hero/8.webp", label: "Telemedicine" },
  { src: "/hero/9.webp", label: "Logistics Tracker" },
  { src: "/hero/10.webp", label: "Social Network" },
];

const Hero = () => {
  const [index, setIndex] = useState(0);

  // Rotate text every 2.5 seconds
  useEffect(() => {
    const id = setInterval(() => {
      setIndex((v) => (v + 1) % rotatingWords.length);
    }, 2500);
    return () => clearInterval(id);
  }, []);

  return (
    <section 
      className="relative w-full min-h-[85vh] lg:min-h-[90vh] text-white overflow-hidden flex items-center"
      style={{ background: "var(--gradient-primary)" }}
    >

      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      ></div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 py-12 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* --- LEFT CONTENT --- */}
          <div className="flex flex-col items-start z-10">
            {/* Badge */}
            <span className="inline-block px-3 py-1 mb-5 rounded-full text-[11px] font-bold tracking-wider bg-white/10 backdrop-blur-md border border-white/20 text-white">
              10+ years expertise
            </span>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
              Architecting the <br /> Future of
            </h1>

            {/* Rotating Text Container */}
            <div className="h-12 md:h-14 lg:h-16 overflow-hidden mt-2 relative w-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={rotatingWords[index]}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -30, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "backOut" }}
                  className="absolute top-0 left-0"
                >
                  <span
                    className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text"
                    style={{
                       color: "var(--color-accent-orange)",
                       textShadow: "0px 2px 10px rgba(0,0,0,0.1)"
                    }}
                  >
                    {rotatingWords[index]}
                  </span>
                </motion.div>
              </AnimatePresence>
            </div>

            <p className="mt-5 text-base md:text-lg text-white/90 leading-relaxed max-w-lg font-medium">
              We don't just build software — we craft digital assets designed for
              scale, resilience, and captivating user experiences.
            </p>

            <div className="mt-8">
              <a
                href="/contact"
                className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl"
                style={{ backgroundColor: "var(--color-accent-orange)" }}
              >
                Launch your Vision
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* --- RIGHT IMAGES --- */}
          <div 
            className="relative h-[450px] lg:h-[550px] w-full overflow-hidden rounded-3xl bg-white/10 border border-white/10 shadow-2xl rotate-1 lg:rotate-2"
            style={{
                maskImage: "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
                WebkitMaskImage: "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)"
            }}
          >
            <div className="grid grid-cols-2 gap-5 h-full p-5">

              {/* Column 1 (Up Scroll) */}
              <div className="relative w-full h-full overflow-hidden">
                <motion.div
                  className="flex flex-col gap-5"
                  animate={{ y: ["0%", "-50%"] }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                >
                  {/* We map over the duplicated array to create the infinite loop */}
                  {[...imagesLeft, ...imagesLeft].map((item, i) => (
                    <div
                      key={i}
                      className="relative w-full aspect-[4/5] rounded-xl overflow-hidden shadow-md bg-gray-800 group"
                    >
                      <Image
                        src={item.src} // Access .src property
                        alt={item.label}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 50vw, 25vw"
                        unoptimized
                      />

                      {/* --- TECHNOLOGY LABEL OVERLAY --- */}
                      {/* Gradient for readability */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 z-10" />
                      
                      {/* The Badge */}
                      <div className="absolute bottom-3 left-3 z-20">
                        <span className="inline-block px-2.5 py-1 text-[10px] font-bold tracking-wide text-white bg-white/20 backdrop-blur-md rounded-md border border-white/30 shadow-sm">
                            {item.label}
                        </span>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* Column 2 (Down Scroll) */}
              <div className="relative w-full h-full overflow-hidden">
                <motion.div
                  className="flex flex-col gap-5"
                  animate={{ y: ["-50%", "0%"] }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                >
                  {[...imagesRight, ...imagesRight].map((item, i) => (
                    <div
                      key={i}
                      className="relative w-full aspect-[4/5] rounded-xl overflow-hidden shadow-md bg-gray-800"
                    >
                      <Image
                        src={item.src} // Access .src property
                        alt={item.label}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 50vw, 25vw"
                        unoptimized
                      />

                      {/* --- TECHNOLOGY LABEL OVERLAY --- */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 z-10" />
                      
                      <div className="absolute bottom-3 left-3 z-20">
                        <span className="inline-block px-2.5 py-1 text-[10px] font-bold tracking-wide text-white bg-white/20 backdrop-blur-md rounded-md border border-white/30 shadow-sm">
                            {item.label}
                        </span>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;