"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center bg-[--gradient-primary] text-white px-6">
      {/* Animated Spinner */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ rotate: 360, scale: 1 }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
          ease: "easeInOut",
        }}
        className="w-16 h-16 border-4 border-white/30 border-t-accent-orange rounded-full mb-8"
      ></motion.div>

      {/* Loading Text */}
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-2xl md:text-3xl font-semibold"
      >
        Loading...
      </motion.h1>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="text-sm md:text-base text-white/80 mt-2"
      >
        Please wait a moment while we prepare your page.
      </motion.p>
    </main>
  );
}
