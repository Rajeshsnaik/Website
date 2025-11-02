"use client";

import Head from 'next/head';
import { motion } from 'framer-motion';
import { Briefcase, Smartphone, Globe, Cloud, Palette, CheckCircle, Lightbulb, TrendingUp, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react'; // <-- IMPORTED hooks
import ClientCarousel from '../components/ClientCarousel';
import ContactHeroSection from '../components/ConatctForm';

// --- Configuration ---
const BRAND_COLORS = {
  darkBlue: '#355694',
  lightBlue: '#2DACE3',
  orange: '#F6A25C',
};

const serviceData = [
  { icon: Briefcase, title: 'Custom Software Development', description: 'Tailored solutions built from the ground up to meet your unique business requirements.' },
  { icon: Smartphone, title: 'Mobile App Development', description: 'Native and cross-platform mobile apps for iOS and Android, focusing on performance and UX.' },
  { icon: Globe, title: 'Web Application Development', description: 'Scalable, modern, and high-performance web applications using cutting-edge technologies.' },
  { icon: Cloud, title: 'Cloud Integration Services', description: 'Seamless migration, deployment, and management of applications on leading cloud platforms.' },
  { icon: Palette, title: 'UI/UX Design', description: 'Creating intuitive, engaging, and accessible user interfaces that drive user satisfaction.' },
  { icon: CheckCircle, title: 'QA & Testing', description: 'Comprehensive quality assurance to ensure bug-free, robust, and reliable software products.' },
  { icon: Lightbulb, title: 'IT Consulting', description: 'Expert guidance and strategic planning to help you harness technology for business growth.' },
  { icon: TrendingUp, title: 'Product Engineering', description: 'Full-cycle product development from concept to launch and continuous improvement.' },
];

// --- Framer Motion Variants (UNCHANGED) ---

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  // Keeping initial state (y: 20, opacity: 0)
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

const imageVariants = {
  hidden: { x: 50, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
};

// FIX: Create a motion component for the ArrowRight icon
const MotionArrowRight = motion(ArrowRight);

// --- Service Card Component (CLEANED) ---

const ServiceCard = ({ icon: Icon, title, description }) => {
  return (
    <motion.div
      variants={itemVariants}
      // Relying on intrinsic motion props (FIX for previous hydration issues)
      whileHover={{ 
        scale: 1.03, // Subtle scale up
        boxShadow: `0 8px 20px rgba(0, 0, 0, 0.15), 0 0 10px ${BRAND_COLORS.lightBlue}30`, // Softer shadow
        backgroundColor: BRAND_COLORS.lightBlue + '10' // Subtle light blue fill
      }}
      transition={{ 
        type: "spring", 
        stiffness: 300, 
        damping: 20,
        backgroundColor: { duration: 0.3 }
      }}
      
      // Initial styling
      className="p-8 bg-white rounded-2xl shadow-md border border-gray-100 cursor-pointer overflow-hidden relative 
                 transition-colors duration-300" 
    >
      <div className="flex flex-col items-start space-y-4 relative z-20">
        
        {/* Icon */}
        <div className="p-4 rounded-xl shadow-lg transition-all duration-300" style={{ backgroundColor: BRAND_COLORS.lightBlue }}>
          <Icon className="w-8 h-8 text-white transition-colors duration-300" />
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold mt-3" style={{ color: BRAND_COLORS.darkBlue }}>{title}</h3>
        
        {/* Content Section: Always visible */}
        <div className="w-full">
            {/* One-line description */}
            <p className="text-gray-600 mb-4 h-12 overflow-hidden text-ellipsis line-clamp-2">
                {description} 
            </p>

            {/* Know More Link/Button */}
            <motion.a 
                href="#"
                className="inline-flex items-center font-bold text-lg py-1 transition-all duration-300"
                style={{ color: BRAND_COLORS.darkBlue }} 
            >
                {/* Text animation */}
                <motion.span 
                    className="transition-all duration-300"
                    whileHover={{ color: BRAND_COLORS.orange }}
                >
                    Know More
                </motion.span> 
                
                {/* Arrow animation using the MotionArrowRight component (FIXED) */}
                <MotionArrowRight 
                    className="w-5 h-5 ml-2 transition-transform duration-300" 
                    style={{ color: BRAND_COLORS.orange }}
                    whileHover={{ x: 3 }} 
                />
            </motion.a>
        </div>
      </div>
    </motion.div>
  );
};


// --- Main Component (HYDRATION FIX APPLIED) ---
const ServicesPage = () => {
    // FIX: State to track client-side mounting
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true); // Component is now mounted on the client
    }, []);

    // Conditionally set the initial state to prevent SSR mismatch
    const initialAnimationProps = isMounted ? "hidden" : false;


  return (
    <>
      <Head>
        <title>Services | Blute Technologies - Software Development</title>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />
      </Head>

      <main className="font-['Inter',_sans-serif] antialiased">
        
        {/* 1. Page Header Section */}
        <section 
          className="py-20 px-6 sm:px-10 lg:px-20"
          style={{ 
            background: `linear-gradient(135deg, ${BRAND_COLORS.darkBlue}, ${BRAND_COLORS.lightBlue})` 
          }}
        >
          <div className="max-w-7xl mx-auto">
            {/* Top Tag */}
            <motion.div 
              initial={initialAnimationProps} // Hydration Fix: Use conditional initial state
              animate="visible"
              transition={{ duration: 0.4 }}
              className="mb-6 inline-block py-1 px-3 rounded-full text-sm font-medium text-white shadow-md"
              style={{ backgroundColor: BRAND_COLORS.orange }}
            >
              Services
            </motion.div>

            {/* Two-Column Layout */}
            <motion.div
              initial={initialAnimationProps} // Hydration Fix
              animate="visible"
              variants={containerVariants}
              className="flex flex-col lg:flex-row items-center justify-between gap-12 text-white"
            >
              {/* Left Side: Text Content */}
              <motion.div variants={containerVariants} className="lg:w-1/2">
             
                <motion.h2 
                  variants={itemVariants} 
                  className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
                >
                  <span style={{ color: BRAND_COLORS.orange }}>Software</span> Development Services
                </motion.h2>
                
                <motion.p 
                  variants={itemVariants} 
                  className="text-lg mb-4 leading-relaxed opacity-90"
                >
                  Blute Technologies provides a broad range of <span className="font-semibold" style={{ color: BRAND_COLORS.orange }}>software development</span>, product engineering, mobile application development, and web application development services to help you harness the power of the latest technologies across the entire IT spectrum.
                </motion.p>
                
                <motion.p 
                  variants={itemVariants} 
                  className="text-lg leading-relaxed opacity-90"
                >
                  We assist enterprises in making critical decisions and benefit them from seamless coordination across strategy, implementation, and management of their technology solutions. With strong <span className="font-semibold" style={{ color: BRAND_COLORS.orange }}>quality orientation</span>, cross-technology expertise, and distributed project management capabilities, we have deep expertise to help you build, sustain, and modernize enterprise software — offering unique product and industry-specific software solutions.
                </motion.p>
              </motion.div>

              {/* Right Side: Hero Image */}
              <motion.div
                variants={imageVariants}
                className="lg:w-1/2 flex justify-center lg:justify-end mt-10 lg:mt-0"
              >
                {/* Placeholder Image */}
                <div 
                  className="w-full max-w-lg h-80 rounded-xl shadow-2xl overflow-hidden transform hover:scale-[1.02] transition-transform duration-500"
                  style={{ 
                    backgroundImage: `url(https://via.placeholder.com/600x400/${BRAND_COLORS.lightBlue.substring(1)}/FFFFFF?text=Software+Development+Hero)`, 
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    boxShadow: `0 20px 30px -10px ${BRAND_COLORS.darkBlue}80`,
                  }}
                >
                  
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
        
        {/* Separator */}
        <hr className="border-t border-gray-100" />

        {/* 2. Services We Offer Section */}
        <section className="py-24 px-6 sm:px-10 lg:px-20 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            {/* Title */}
            <motion.h2 
              initial={initialAnimationProps} // Hydration Fix
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              className="text-4xl sm:text-5xl font-bold text-center mb-4" 
              style={{ color: BRAND_COLORS.darkBlue }}
            >
              Software Development Services We Offer
            </motion.h2>
            <div 
              className="h-1.5 w-24 mx-auto mb-20 rounded-full" 
              style={{ backgroundColor: BRAND_COLORS.orange }}
            ></div>

            {/* Responsive Grid Layout for Service Cards */}
            <motion.div
              initial={initialAnimationProps} // Hydration Fix
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
            >
              {serviceData.map((service, index) => (
                // FIX: Render ServiceCard only if mounted, otherwise render a static placeholder
                isMounted ? 
                    <ServiceCard key={index} {...service} /> :
                    <div key={index} className="p-8 bg-white rounded-2xl shadow-md border border-gray-100 h-60">
                        {/* Static content for server render / placeholder */}
                        <div className="p-4 rounded-xl bg-gray-200 w-16 h-16 mb-4"></div>
                        <div className="h-6 bg-gray-200 rounded w-3/4 mb-3"></div>
                        <div className="h-4 bg-gray-200 rounded w-full mb-4"></div>
                        <div className="h-4 bg-gray-200 rounded w-full"></div>
                    </div>
              ))}
            </motion.div>
          </div>
        </section>
      </main>
      <ClientCarousel />
      <ContactHeroSection /> 
    </>
  );
};

export default ServicesPage;