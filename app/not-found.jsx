"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-6 py-10 bg-primary-dark text-white">
      {/* Animated 404 */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-7xl md:text-9xl font-extrabold mb-4"
      >
        404
      </motion.h1>

      {/* Subheading */}
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-2xl md:text-3xl font-semibold mb-3"
      >
        Page Not Found
      </motion.h2>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="text-base md:text-lg text-white/90 max-w-lg mb-8"
      >
        The page you’re looking for doesn’t exist or has been moved. Please check the URL or go back to where you came from.
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        className="flex flex-col sm:flex-row gap-4"
      >
        <Link
          href="/"
          className="bg-accent-orange hover:bg-primary-light transition-all duration-300 text-white px-6 py-3 rounded-xl font-medium shadow-lg"
        >
          Go Home
        </Link>

        <button
          onClick={() => window.history.back()}
          className="border border-white/70 hover:bg-white/10 transition-all duration-300 text-white px-6 py-3 rounded-xl font-medium"
        >
          Go Back
        </button>
      </motion.div>
    </main>
  );
}
