'use client';

// components/LeadershipTeam.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin } from 'react-icons/fa'; // Assuming react-icons is now installed

// Define the data for the team members
const teamMembers = [
  {
    name: "VITTALADAS BHAT",
    title: "Co-Founder and Chief Executive Officer",
    image: "/images/vittaladas-bhat.jpg", // Replace with the actual image path
    linkedinUrl: "#", // Replace with the actual LinkedIn URL
  },
  {
    name: "SUDARSHAN SHENVI",
    title: "Co-Founder and Director - Technology",
    image: "/images/sudarshan-shenvi.jpg", // Replace with the actual image path
    linkedinUrl: "#", // Replace with the actual LinkedIn URL
  },
  {
    name: "SATYA PRAKASH H M",
    title: "Co-Founder and Director - Sales",
    image: "/images/satya-prakash-hm.jpg", // Replace with the actual image path
    linkedinUrl: "#", // Replace with the actual LinkedIn URL
  },
];

// Framer Motion animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

const LeadershipTeam = () => {
  return (
    <section className="py-16 sm:py-24 bg-gray-50 overflow-hidden">
      
      {/* 1. Top Section - Title and Description */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-extrabold text-indigo-700 sm:text-5xl lg:text-6xl"
        >
          Leadership Team
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 max-w-3xl mx-auto text-xl text-gray-600"
        >
          Talented leadership team
        </motion.p>

        {/* FIX: Bold text applied using <span> and font-bold class */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-6 max-w-4xl mx-auto text-lg text-gray-500"
        >
          Continued success at <span className="font-bold text-gray-700">Blute Technologies</span>. The Board Members have prompted to have a high-profile team with deep experience and the most talented minds in software development. Meet the company’s leaders and the smart and hard-working people who deliver innovative ideas to companies like yours.
        </motion.p>
      </div>

      {/* 2. Team Member Grid Section */}
      <motion.div
        className="mt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {teamMembers.map((member) => (
            <motion.div
              key={member.name}
              // CLEANUP: Removed bg-white, padding, shadow, and rounded-xl classes
              className="flex flex-col items-center text-center relative p-4" 
              variants={itemVariants}
            >
              {/* Image and LinkedIn Badge */}
              {/* Image container still retains the border, ring, and a mild shadow for the profile circle itself */}
              <div className="relative h-48 w-48 rounded-full border-4 border-indigo-500 ring-4 ring-indigo-200 shadow-xl mb-6 transform hover:scale-105 transition duration-300">
                <div
                    className="h-full w-full bg-cover bg-center rounded-full"
                    style={{ backgroundImage: `url(${member.image})` }}
                >
                </div>

                {/* LinkedIn Icon/Badge */}
                <a
                  href={member.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-0 right-0 bg-white p-1 rounded-full text-indigo-600 hover:text-indigo-800 transition duration-150 transform hover:scale-110"
                  aria-label={`LinkedIn profile of ${member.name}`}
                >
                  <FaLinkedin className="h-6 w-6 bg-blue-500 rounded-full text-white p-0.5" />
                </a>
              </div>

              {/* Name and Title */}
              <div className="text-gray-900">
                <h3 className="text-xl font-bold uppercase tracking-wider">{member.name}</h3>
                <p className="mt-1 text-sm font-medium text-indigo-600">{member.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default LeadershipTeam;