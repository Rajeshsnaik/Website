"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ShieldCheck, Zap, TrendingUp, Handshake } from 'lucide-react'; // Using Lucide Icons

// --- Configuration & Data ---

// Define colors based on your theme for easy use in styles
const theme = {
    primaryDark: '#355694',
    primaryLight: '#2DACE3',
    accentOrange: '#F6A25C',
};

// Data for the 4 reasons
const features = [
    {
        icon: ShieldCheck, 
        title: "Unwavering Reliability",
        description: "Our solutions are built with enterprise-grade stability, ensuring 99.9% uptime and secure performance.",
        color: theme.primaryDark,
    },
    {
        icon: Zap, 
        title: "Cutting-Edge Technology",
        description: "We utilize the latest AI and cloud infrastructures to deliver future-proof, high-speed applications.",
        color: theme.accentOrange,
    },
    {
        icon: TrendingUp, 
        title: "Measurable ROI",
        description: "We focus on outcomes, guaranteeing digital transformation that directly increases your business revenue.",
        color: theme.primaryLight,
    },
    {
        icon: Handshake, 
        title: "Dedicated Partnership",
        description: "From concept to deployment, you get a dedicated team providing continuous support and strategic guidance.",
        color: theme.primaryDark,
    },
];

// Framer Motion Variants
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
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 15,
        },
    },
};

// --- Sub-Components ---

/**
 * Single Feature/Reason Card (Shadows Removed)
 */
const FeatureItem = ({ feature }) => (
    <motion.div 
        // Shadow classes 'shadow-md' and 'hover:shadow-lg' removed here
        className="flex items-start space-x-4 p-5 bg-white rounded-xl transition-all duration-300"
        variants={itemVariants}
        whileHover={{ scale: 1.01, x: 5 }} 
    >
        {/* Icon with a rounded, light background */}
        <div 
            className="flex-shrink-0 mt-1 p-2 rounded-full" 
            style={{ backgroundColor: `${feature.color}1A` }} // 10% opacity of the feature color
        >
            <feature.icon 
                size={24} 
                style={{ color: feature.color }} 
                className="stroke-2"
            />
        </div>
        
        {/* Text Content */}
        <div>
            <h3 className="text-lg font-semibold mb-1" style={{ color: theme.primaryDark }}>
                {feature.title}
            </h3>
            <p className="text-gray-600 text-sm">
                {feature.description}
            </p>
        </div>
    </motion.div>
);

/**
 * Image Container (Shadows Removed)
 */
const ImageContainer = () => {
    return (
        <motion.div 
            className="relative w-full h-[400px] md:h-full md:min-h-[500px] flex items-center justify-center p-4 rounded-3xl overflow-hidden" 
            style={{
                background: `linear-gradient(145deg, ${theme.primaryLight}20, ${theme.primaryDark}20)`, 
                borderTopLeftRadius: '60px', 
                borderBottomRightRadius: '60px', 
                border: `1px solid ${theme.primaryLight}30` 
            }}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, delay: 0.3 }}
        >
            <div className="relative w-[90%] h-[90%] md:w-[95%] md:h-[95%] overflow-hidden">
                <Image
                    src="/images/dental_why_choose_us.avif" // Replace with your actual image path
                    alt="Professional team collaborating"
                    fill
                    sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 30vw"
                    style={{ 
                        objectFit: 'cover', 
                        borderTopLeftRadius: '60px', 
                        borderBottomRightRadius: '60px',
                        borderRadius: '12px', 
                    }}
                    priority={true}
                    // Shadow class 'shadow-xl' removed here
                    className="" 
                />
            </div>
        </motion.div>
    );
};


// --- Main Component (Section Shadow Removed) ---
const WhyChooseUsSection = () => {
    return (
        <section className="py-3 md:py-12 bg-blue-50"> 
            {/* The inner div previously had 'shadow-xl'. This is removed. */}
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 rounded-3xl p-8 md:p-12">
                
                {/* Title */}
                <motion.h2 
                    className="text-3xl md:text-5xl font-extrabold text-center mb-8 md:mb-16 relative" 
                    style={{ color: theme.primaryDark }}
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    Why Choose Us?
                    {/* Subtle orange underline */}
                    <motion.span 
                        className="absolute left-1/2 transform -translate-x-1/2 bottom-[-10px] h-1 w-20 rounded-full"
                        style={{ backgroundColor: theme.accentOrange }}
                        initial={{ width: 0 }}
                        whileInView={{ width: 80 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6, duration: 0.4 }}
                    />
                </motion.h2>

                {/* Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
                    
                    {/* Left Side: 4 Points */}
                    <motion.div 
                        className="space-y-6 md:space-y-8" 
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        {features.map((feature, index) => (
                            <FeatureItem key={index} feature={feature} />
                        ))}
                    </motion.div>

                    {/* Right Side: Image with Design */}
                    <div>
                        <ImageContainer />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default WhyChooseUsSection;