"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

// --- Services List for Dynamic Text & Images ---
const services = [
    'Web Development', 
    'Mobile Apps', 
    'Cloud Solutions', 
    'UI/UX Design'
];

// Dummy image data corresponding to services (Replace with your actual image paths/URLs)
const serviceImages = {
    'Web Development': '/images/web_dev_card.avif',
    'Mobile Apps': '/images/mobile_app_card.avif',
    'Cloud Solutions': '/images/cloud_solution_card.png',
    'UI/UX Design': '/images/ui_ux_card.avif',
};

// --- Framer Motion Variants for Smooth Text Slide (Left Side) ---
const textVariants = {
    initial: { y: 40, opacity: 0 }, // Stronger slide from below
    animate: { y: 0, opacity: 1 },
    exit: { y: -40, opacity: 0 }, // Stronger slide to the top
};

// --- Hero Card Component (Right Side) ---
const HeroCard = ({ imageSrc, serviceName }) => (
    <motion.div
        key={serviceName} // Key is crucial for Framer Motion exit/enter transitions
        initial={{ opacity: 0, scale: 0.9, rotateY: 15, rotateZ: -1 }} // More dramatic, 3D entrance
        animate={{ opacity: 1, scale: 1, rotateY: 0, rotateZ: 0 }}
        exit={{ opacity: 0, scale: 0.9, rotateY: -15, rotateZ: 1 }} // Smooth exit
        // SMOOTHER DURATION & EASE: Increased duration for a gentler transition
        transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }} 
        className="w-full h-full p-6 shadow-2xl rounded-3xl bg-white/5 backdrop-blur-md border border-white/20 relative overflow-hidden" // Increased roundedness
        style={{ 
            // Better 3D shadow effect
            filter: 'drop-shadow(0 20px 20px rgba(0,0,0,0.2))',
            transformStyle: 'preserve-3d', // Enables true 3D
        }}
    >
        {/* Subtle Shine Effect for Premium Look */}
        <div className="absolute top-0 left-0 w-full h-full opacity-20"
             style={{ 
                 background: 'radial-gradient(circle at 100% 0%, rgba(255, 255, 255, 0.15) 0%, transparent 60%)' 
             }}>
        </div>

       <div className="relative w-full h-full overflow-hidden rounded-2xl">
  <Image
    src={imageSrc}
    alt={serviceName}
    fill
    className="object-cover transition-transform duration-700 hover:scale-[1.05] will-change-transform"
    sizes="(max-width: 768px) 100vw,
           (max-width: 1200px) 50vw,
           33vw"
    priority={false} 
  />
</div>
        <p className="mt-6 text-center text-2xl font-bold text-white tracking-wider">
            {serviceName}
        </p>
    </motion.div>
);


// --- Main Hero Section Component (Left & Right) ---
const HeroSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => 
                (prevIndex + 1) % services.length
            );
        }, 3000); // Change service every 3 seconds

        return () => clearInterval(interval);
    }, []);

    const currentService = services[currentIndex];
    const currentImage = serviceImages[currentService];

    return (
        <section 
            // Ensures full viewport height
            className="relative overflow-hidden min-h-screen py-16 md:py-24" 
            style={{ 
                background: 'var(--gradient-primary)'
            }}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex items-center h-full"> 
                {/* Centers content vertically within the full height screen */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center w-full"> 
                    
                    {/* --- Left Side Content --- */}
                    <div className="lg:col-span-7 text-white z-10">
                        {/* TOP TEXT: Experience and Authority */}
                        <motion.p 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-lg font-semibold text-color-accent-orange uppercase tracking-[0.2em]"
                            style={{ color: 'var(--color-accent-orange)' }}
                        >
                            <span role="img" aria-label="lightning">⚡</span> FUTURE-PROOFING DIGITAL
                        </motion.p>
                        
                        {/* DYNAMIC HEADING - FIXED: Removed whitespace-nowrap and slightly adjusted font size for clean wrap */}
                        <h1 className="mt-6 text-4xl md:text-5xl lg:text-5xl font-extrabold leading-snug overflow-hidden">
                            Architecting the Future of{' '}
                            <span 
                                className="inline-block text-transparent bg-clip-text"
                                style={{ 
                                    backgroundImage: 'linear-gradient(45deg, #e0f2fe, var(--color-accent-orange))',
                                    paddingLeft: '0.25em', 
                                }}
                            >
                                <AnimatePresence mode="wait">
                                    <motion.span
                                        key={currentService}
                                        variants={textVariants}
                                        initial="initial"
                                        animate="animate"
                                        exit="exit"
                                        transition={{ duration: 0.5, ease: [0.6, 0.01, 0, 0.9] }} 
                                        className="inline-block"
                                    >
                                        {currentService}
                                    </motion.span>
                                </AnimatePresence>
                            </span>
                        </h1>

                        {/* SLOGAN PARAGRAPH */}
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="mt-8 text-xl text-white/90 max-w-xl"
                        >
                            We don't just build software, we craft digital assets designed for scale, resilience, and captivating user experiences that drive measurable business outcomes.
                        </motion.p>

                        {/* CTA Button */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="mt-12"
                        >
                            <a 
                                href="#contact" 
                                className="inline-flex items-center justify-center px-10 py-4 text-xl font-bold rounded-full shadow-2xl transition-all hover:scale-[1.05] duration-500 ease-out transform group" 
                                style={{ 
                                    color: 'var(--color-primary-dark)',
                                    // UPDATED GRADIENT using --color-accent-orange and --color-primary-light
                                    backgroundImage: 'linear-gradient(135deg, var(--color-accent-orange), var(--color-primary-light))', 
                                    textShadow: '0 1px 1px rgba(0,0,0,0.1)'
                                }}
                            >
                                Launch Your Vision <span className="ml-3 text-2xl group-hover:translate-x-1 transition-transform">→</span>
                            </a>
                        </motion.div>
                    </div>

                    {/* --- Right Side (Dynamic Image Card) --- */}
                    <div className="lg:col-span-5 relative flex justify-center lg:justify-end mt-16 lg:mt-0 h-[450px] md:h-[600px] perspective-1000"> 
                        <div className="absolute w-full h-full max-w-lg"> 
                            <AnimatePresence mode="wait">
                                <HeroCard 
                                    imageSrc={currentImage} 
                                    serviceName={currentService} 
                                />
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Background Shapes */}
            <div 
                className="absolute -bottom-1/4 -right-1/4 w-3/4 h-3/4 rounded-full opacity-10 blur-3xl"
                style={{ backgroundColor: 'var(--color-accent-orange)' }}
            ></div>
            <div 
                className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 rounded-full opacity-5 blur-3xl"
                style={{ backgroundColor: 'var(--color-accent-orange)' }}
            ></div>
        </section>
    );
};

export default HeroSection;