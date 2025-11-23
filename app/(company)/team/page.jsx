"use client";

import React from "react";
import { motion } from "framer-motion";
import { Linkedin } from "lucide-react"; // Switched to Lucide for consistency

// Team data
const teamMembers = [
  {
    name: "VITTALADAS BHAT",
    title: "Co-Founder and Chief Executive Officer",
    image: "/images/vittaladas-bhat.jpg",
    linkedinUrl: "#",
  },
  {
    name: "SUDARSHAN SHENVI",
    title: "Co-Founder and Director - Technology",
    image: "/images/sudarshan-shenvi.jpg",
    linkedinUrl: "#",
  },
  {
    name: "SATYA PRAKASH H M",
    title: "Co-Founder and Director - Sales",
    image: "/images/satya-prakash-hm.jpg",
    linkedinUrl: "#",
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80 } },
};

const LeadershipTeam = () => {
  return (
    <section 
      className="relative py-20 sm:py-28 overflow-hidden"
      style={{ background: "var(--gradient-primary)" }} // Using Global Gradient
    >
      {/* Background Glow Orbs */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute -top-24 -left-24 w-96 h-96 bg-white/20 rounded-full blur-3xl"
      ></motion.div>
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 7, repeat: Infinity }}
        className="absolute -bottom-20 -right-20 w-96 h-96 bg-white/20 rounded-full blur-3xl"
      ></motion.div>

      {/* Title + Description */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-sm"
        >
          Leadership Team
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-4 text-lg md:text-xl text-white/90"
        >
          Talented leadership team
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-6 text-base md:text-lg text-white/80 max-w-3xl mx-auto leading-relaxed"
        >
          Continued success at{" "}
          <span className="font-bold text-white">
            Blute Technologies
          </span>
          . Our high-profile leadership team combines deep industry expertise
          and innovation to drive growth and deliver exceptional results.
        </motion.p>
      </div>

      {/* Team Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative z-10 mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto px-6"
      >
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="group relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
          >
            {/* Profile Image */}
            <div className="relative mb-6">
              {/* Gradient Border using CSS Variables */}
              <div 
                className="h-44 w-44 rounded-full p-[3px]"
                style={{ 
                  background: "linear-gradient(to right, var(--color-primary-light), var(--color-accent-orange))" 
                }}
              >
                <div
                  className="h-full w-full rounded-full bg-cover bg-center bg-gray-300 border-4 border-white/10"
                  style={{ backgroundImage: `url(${member.image})` }}
                ></div>
              </div>

              {/* LinkedIn Icon */}
              <a
                href={member.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`LinkedIn profile of ${member.name}`}
                className="absolute bottom-2 right-2 p-2.5 rounded-full text-white transform hover:scale-110 transition-transform duration-300 shadow-lg flex items-center justify-center"
                style={{ background: "var(--color-primary-dark)" }} // Using Dark Blue Brand Color
              >
                <Linkedin size={20} fill="currentColor" className="text-white" />
              </a>
            </div>

            {/* Name & Title */}
            <h3 className="text-xl font-bold text-white uppercase tracking-wide">
              {member.name}
            </h3>
            <p className="mt-2 text-sm font-medium text-white/80 h-10 flex items-start justify-center">
              {member.title}
            </p>

            {/* Animated underline */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "50%" }}
              transition={{ duration: 0.6 }}
              className="h-[3px] rounded-full mt-4 mx-auto"
              style={{ background: "var(--color-accent-orange)" }} // Using Orange Accent
            ></motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default LeadershipTeam;