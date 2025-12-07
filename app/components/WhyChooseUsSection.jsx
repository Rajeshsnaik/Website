"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ShieldCheck, Zap, TrendingUp, Handshake } from 'lucide-react';

// --- Configuration ---
const primaryDark = '#355694';
const primaryLight = '#2DACE3';

const features = [
    {
        icon: ShieldCheck, 
        title: "Unwavering Reliability",
        description: "Our solutions are built with enterprise-grade stability, ensuring 99.9% uptime and secure performance.",
    },
    {
        icon: Zap, 
        title: "Cutting-Edge Technology",
        description: "We utilize the latest AI and cloud infrastructures to deliver future-proof, high-speed applications.",
    },
    {
        icon: TrendingUp, 
        title: "Measurable ROI",
        description: "We focus on outcomes, guaranteeing digital transformation that directly increases your business revenue.",
    },
    {
        icon: Handshake, 
        title: "Dedicated Partnership",
        description: "From concept to deployment, you get a dedicated team providing continuous support and strategic guidance.",
    },
];

// --- Variants ---
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { type: "tween", duration: 0.4 },
    },
};

const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
        opacity: 1, 
        scale: 1,
        transition: { duration: 0.6, ease: "easeOut", delay: 0.2 } 
    },
};

// --- Sub-Components ---

const FeatureItem = ({ feature }) => (
    <motion.div 
        variants={itemVariants}
        className="group flex items-start space-x-5 p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300"
    >
        {/* Icon Box */}
        <div 
            className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-blue-50/50 group-hover:bg-blue-100/50 transition-colors duration-300"
        >
            <feature.icon 
                size={24} 
                style={{ color: primaryDark }} 
                className="stroke-2"
            />
        </div>
        
        {/* Text Content */}
        <div>
            <h3 
                className="text-lg font-bold mb-2 text-gray-800 group-hover:text-[var(--color-primary-dark)] transition-colors duration-300"
            >
                {feature.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
            </p>
        </div>
    </motion.div>
);

const WhyChooseUsSection = () => {
    return (
<section className="relative w-full py-12 md:py-16 overflow-hidden bg-white">

            
            {/* --- Background: Light Mesh Pattern --- */}
            <div
                className="absolute inset-0 z-0 pointer-events-none"
                style={{
                backgroundImage: `
                    linear-gradient(to right, rgba(0,0,0,0.04) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(0,0,0,0.04) 1px, transparent 1px)
                `,
                backgroundSize: "40px 40px",
                }}
            ></div>

            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white pointer-events-none z-0"></div>

            <div className="container relative z-10 mx-auto px-4 max-w-7xl">
                
                {/* --- Header Section --- */}
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <span 
                        className="inline-block py-1 px-3 rounded-full text-xs font-bold tracking-widest mb-4"
                        style={{ 
                        backgroundColor: "rgba(45, 172, 227, 0.1)", 
                        color: "var(--color-primary-light)" 
                        }}
                    >
                        Why Choose Us
                    </span>
                    <h2 
                        className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight"
                        style={{
                            background: "var(--gradient-primary)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                        }}
                    >
                        Built for Your Success
                    </h2>
                </div>

                {/* --- Content Grid --- */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    
                    {/* Left Side: Feature List */}
                    <motion.div 
                        className="space-y-6" 
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        {features.map((feature, index) => (
                            <FeatureItem key={index} feature={feature} />
                        ))}
                    </motion.div>

                    {/* Right Side: Image */}
                    <motion.div
                        variants={imageVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="relative h-[500px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-100 group"
                    >
                        {/* Image */}
                        <Image
                            src="/images/meeting.jpg" // Replace with local image
                            alt="Why Choose Us"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            unoptimized
                        />

                        {/* Gradient Overlay for Text Visibility (Optional) */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>

                        {/* Floating Badge (Decorative) */}
                        <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/95 backdrop-blur-md rounded-2xl shadow-lg border border-white/50">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold">
                                    98%
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-gray-900">Client Retention Rate</p>
                                    <p className="text-xs text-gray-500">Based on 5+ years of data</p>
                                </div>
                            </div>
                        </div>

                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default WhyChooseUsSection;