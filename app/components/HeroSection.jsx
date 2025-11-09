"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
    initial: { y: 30, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: -30, opacity: 0 },
};

// --- Hero Card Component (Right Side) ---
const HeroCard = ({ imageSrc, serviceName }) => (
    <motion.div
        key={serviceName} // Key is crucial for Framer Motion exit/enter transitions
        initial={{ opacity: 0, x: 50, scale: 0.95, rotate: 1 }}
        animate={{ opacity: 1, x: 0, scale: 1, rotate: 0 }}
        exit={{ opacity: 0, x: -50, scale: 0.95, rotate: -1 }} 
        // REDUCED DURATION: 0.5s for faster visual swap
        transition={{ duration: 0.5, ease: [0.42, 0, 0.58, 1] }} 
        className="w-full h-full p-6 shadow-2xl rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20"
        style={{ 
            background: `linear-gradient(145deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))`,
        }}
    >
        <div className="relative w-full h-full overflow-hidden rounded-xl">
            <img 
                src={imageSrc} 
                alt={serviceName} 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.02]"
            />
        </div>
        <p className="mt-4 text-center text-xl font-semibold text-white">
            {serviceName}
        </p>
    </motion.div>
);


// --- Main Hero Section Component (Left & Right) ---
const HeroSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // KEY CHANGE: Reduced interval from 3000ms to 2000ms
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => 
                (prevIndex + 1) % services.length
            );
        }, 2000); // Change service every 2 seconds

        return () => clearInterval(interval);
    }, []);

    const currentService = services[currentIndex];
    const currentImage = serviceImages[currentService];

    return (
        <section 
            className="relative overflow-hidden pt-24 pb-24 md:pt-32 md:pb-40"
            style={{ background: 'var(--gradient-primary)' }}
        >
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    
                    {/* --- Left Side Content --- */}
                    <div className="lg:col-span-7 text-white z-10">
                        {/* TOP TEXT: 10+ years experience */}
                        <motion.p 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-lg font-medium text-color-accent-orange uppercase tracking-widest"
                            style={{ color: 'var(--color-accent-orange)' }}
                        >
                            <span role="img" aria-label="star">✨</span> 10+ Years of Experience
                        </motion.p>
                        
                        {/* DYNAMIC HEADING */}
                        <h1 className="mt-4 text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight overflow-hidden">
                            We Engineer Digital
                            <br className="hidden md:inline" />
                            <span 
                                className="inline-block text-transparent bg-clip-text"
                                style={{ 
                                    backgroundImage: 'linear-gradient(45deg, #ffffff, var(--color-accent-orange))',
                                }}
                            >
                                <AnimatePresence mode="wait">
                                    <motion.span
                                        key={currentService}
                                        variants={textVariants}
                                        initial="initial"
                                        animate="animate"
                                        exit="exit"
                                        // REDUCED DURATION: 0.4s for faster slide
                                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }} 
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
                            className="mt-6 text-xl text-white/90 max-w-lg"
                        >
                            Transforming ideas into resilient digital solutions. We combine deep industry knowledge with cutting-edge technology to drive your business growth and redefine user experience.
                        </motion.p>

                        {/* CTA Button */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="mt-10"
                        >
                            <a 
                                href="#contact" 
                                className="inline-flex items-center justify-center px-8 py-3 text-lg font-semibold rounded-full shadow-lg transition-transform hover:scale-[1.03] duration-300"
                                style={{ 
                                    backgroundColor: 'var(--color-accent-orange)', 
                                    color: 'var(--color-primary-dark)' 
                                }}
                            >
                                Start Your Project Today <span className="ml-2">→</span>
                            </a>
                        </motion.div>
                    </div>

                    {/* --- Right Side (Dynamic Image Card) --- */}
                    <div className="lg:col-span-5 relative flex justify-center lg:justify-end mt-12 lg:mt-0 h-[400px] md:h-[500px]">
                        <div className="absolute w-full h-full max-w-md">
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
            
            {/* Background Shape for Visual Interest */}
            <div 
                className="absolute -bottom-1/4 -right-1/4 w-3/4 h-3/4 rounded-full opacity-10 blur-3xl"
                style={{ backgroundColor: 'var(--color-accent-orange)' }}
            ></div>
        </section>
    );
};

export default HeroSection;