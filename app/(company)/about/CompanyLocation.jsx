"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";

const CompanyLocation = () => {
  return (
    <section className="w-full py-20 px-4 bg-white dark:bg-gray-900 overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          
          {/* --- Left Side: Address Info --- */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col items-start space-y-6"
          >
            {/* Icon Box */}
            <div className="p-4 rounded-2xl bg-blue-50 dark:bg-gray-800 shadow-sm inline-block">
              <MapPin 
                size={48} 
                style={{ color: "var(--color-primary-dark)" }} 
                strokeWidth={1.5}
              />
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold text-gray-400 uppercase tracking-widest">
                Our Location
              </h3>
              <p className="text-2xl md:text-3xl font-medium leading-relaxed text-gray-800 dark:text-white">
                55/C/42/1, 40th Cross Rd,<br />
                Jaynagar 8th Block,<br />
                <span 
                  style={{ 
                    background: "var(--gradient-primary)", 
                    WebkitBackgroundClip: "text", 
                    WebkitTextFillColor: "transparent" 
                  }}
                  className="font-bold"
                >
                  Bengaluru - 560 070, India
                </span>
              </p>
            </div>

            {/* "Open in Maps" Button */}
            <motion.a
              href="https://www.google.com/maps/search/?api=1&query=55/C/42/1+40th+Cross+Rd+Jaynagar+8th+Block+Bengaluru"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-semibold shadow-lg hover:shadow-xl transition-shadow"
              style={{ background: "var(--gradient-primary)" }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Navigation size={18} />
              <span>Get Directions</span>
            </motion.a>
          </motion.div>

          {/* --- Right Side: Google Map --- */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="w-full h-[400px] rounded-3xl overflow-hidden shadow-lg border-2 border-gray-200 dark:border-gray-700 relative"
            // Changed: shadow-2xl -> shadow-lg
            // Changed: border-4 border-white -> border-2 border-gray-200 (softer border)
          >
            {/* Google Maps Embed */}
            <iframe
              width="100%"
              height="100%"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              title="Office Location"
              style={{ filter: "grayscale(0%) contrast(1.1)" }}
              src={`https://maps.google.com/maps?q=55%2FC%2F42%2F1%2C+40th+Cross+Rd%2C+Jayanagar+8th+Block%2C+Bengaluru&t=&z=15&ie=UTF8&iwloc=&output=embed`}
              allowFullScreen
            ></iframe>
            
            {/* Optional: Overlay to prevent accidental zoom while scrolling the page */}
            <div className="absolute inset-0 pointer-events-none border-2 border-transparent rounded-3xl shadow-inner"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default CompanyLocation;