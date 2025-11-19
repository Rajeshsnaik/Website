import React from 'react';
import { motion } from 'framer-motion';
import { Layers } from 'lucide-react';

// Defining the custom colors requested
const BRAND = {
  dark: '#355694',
  light: '#2DACE3',
  orange: '#F6A25C',
};

const App = () => {
  return (
    <div className="bg-gray-50">
      {/* Navigation Placeholder for context */}
      <nav className="w-full p-6 bg-white shadow-sm flex justify-between items-center">
        <div className="font-bold text-xl text-[#355694]">Blute Tech</div>
        <div className="hidden md:flex space-x-6 text-gray-600">
          <span>Home</span>
          <span className="text-[#2DACE3]">About</span>
          <span>Services</span>
          <span>Contact</span>
        </div>
      </nav>

      {/* MAIN HERO / ABOUT SECTION */}
      <AboutHero />

      {/* Filler content to demonstrate scroll/integration */}
      <div className="container mx-auto py-10 px-6 text-center text-gray-400">
        <p>Scroll down for more content...</p>
      </div>
    </div>
  );
};

const AboutHeroCode = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    // Reduced height from min-h-[85vh] to min-h-[60vh] (approx 500-600px depending on screen)
    <section className="relative w-full min-h-[60vh] flex items-center overflow-hidden py-12 md:py-0">
      
      {/* --- BACKGROUND LAYER --- */}
      <div className="absolute inset-0 z-0">
        {/* 1. The Image */}
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2069" 
          alt="Office Background" 
          className="w-full h-full object-cover"
        />
        
        {/* 2. Dark Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-slate-900/80 mix-blend-multiply" />

        {/* 3. The Brand Gradient Overlay (Low Opacity) */}
        <div 
          className="absolute inset-0 opacity-60"
          style={{
            background: `linear-gradient(135deg, ${BRAND.dark}CC, ${BRAND.light}CC)`
          }}
        />
      </div>

      {/* --- CONTENT LAYER --- */}
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >

          {/* LEFT SIDE: Content */}
          <div className="text-white max-w-2xl">
            
            {/* Presentation "Button" / Tag */}
            <motion.div variants={itemVariants} className="mb-6">
              <span 
                className="inline-block px-4 py-1.5 rounded-full text-sm font-bold tracking-wide uppercase bg-white/10 backdrop-blur-md border border-white/20 shadow-lg"
                style={{ color: BRAND.orange }}
              >
                Company Profile
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight"
            >
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F6A25C] to-white">Blute Technology</span>
            </motion.h1>

            {/* Paragraph Content */}
            <motion.div variants={itemVariants} className="relative">
              {/* Vertical Accent Line */}
              <div 
                className="absolute left-0 top-1 bottom-1 w-1 rounded-full"
                style={{ backgroundColor: BRAND.light }}
              ></div>
              
              <p className="pl-6 text-lg md:text-xl text-gray-100 font-light leading-relaxed lg:line-clamp-3">
                Blute Technologies is a leading IT services company, a digital transformation and outsourcing partner of choice for clients in all industries across the world. We adopt cutting-edge technologies to empower clients transform digitally, create business values and success in the ever-changing economic environment.
              </p>
            </motion.div>
            
            {/* Button Removed here as requested */}
          </div>

          {/* RIGHT SIDE: Logo Placeholder ONLY */}
          <motion.div 
            variants={itemVariants}
            className="flex justify-center lg:justify-end"
          >
            {/* Simplified Container for Logo */}
            <div className="relative group">
              {/* Glow Effect */}
              <div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full blur-3xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"
                style={{ backgroundColor: BRAND.light }}
              ></div>

              {/* Logo Box - White square for logo image */}
              <motion.div 
                className="relative z-10 w-64 h-64 bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl flex items-center justify-center shadow-2xl overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                 {/* REPLACE THIS ICON/DIV WITH YOUR LOGO IMG TAG:
                    <img src="/path/to/logo.png" alt="Blute Logo" className="w-full h-full object-contain p-8" />
                 */}
                 <Layers className="w-32 h-32 text-white opacity-90" />
              </motion.div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default AboutHeroCode;