"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function NotFoundPage() {
  const pathname = usePathname();
  const router = useRouter();
  const [prevUrl, setPrevUrl] = useState("");

  useEffect(() => {
    setPrevUrl(document.referrer);
  }, []);

  const isHomeActive = pathname === "/";
  const isGoBackActive = prevUrl.includes(window.location.origin); // came from internal page

  return (
    <section
      className="relative min-h-screen flex items-center justify-center text-white px-4 overflow-hidden"
      style={{ background: "var(--gradient-primary)" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center flex flex-col items-center justify-center space-y-6 z-10"
      >
        {/* Heading */}
        <motion.h1
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-8xl md:text-9xl font-extrabold drop-shadow-lg"
        >
          404
        </motion.h1>

        {/* Subtitle */}
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-2xl md:text-3xl font-semibold"
        >
          Oops! Page Not Found
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-white/90 max-w-md text-base md:text-lg"
        >
          The page you’re looking for doesn’t exist or might have been moved.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="flex items-center gap-4"
        >
          {/* Home Button */}
          <motion.div
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255,255,255,0.5)" }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            <Link
              href="/"
              className={`inline-block cursor-pointer border font-semibold px-8 py-3 rounded-xl backdrop-blur-md transition-all duration-300 ${
                isHomeActive
                  ? "bg-white/40 border-white text-white shadow-xl"
                  : "bg-white/10 border-white/30 text-white hover:bg-white/20"
              }`}
            >
              Home
            </Link>
          </motion.div>

          {/* Go Back Button */}
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255,255,255,0.5)" }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
            onClick={() => router.back()}
            className={`inline-block border font-semibold px-8 py-3 rounded-xl backdrop-blur-md transition-all duration-300 ${
              isGoBackActive
                ? "bg-white/40 border-white text-white shadow-xl"
                : "bg-white/10 border-white/30 text-white hover:bg-white/20"
            }`}
          >
            Go Back
          </motion.button>
        </motion.div>

        {/* Floating Glow BG */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15, scale: [1, 1.2, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-[300px] h-[300px] bg-white rounded-full blur-3xl"
        />
      </motion.div>
    </section>
  );
}
