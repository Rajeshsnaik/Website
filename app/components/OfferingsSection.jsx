"use client";

import React, { useState } from 'react';
import Link from 'next/link'; // Import Link
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

// --- Icon Imports ---
import { 
  FiLayers, FiCode, FiSettings, FiClipboard, FiCpu, FiShield, FiDatabase, FiGlobe
} from 'react-icons/fi';
import { BsGraphUp, BsShieldCheck, BsCart3 } from 'react-icons/bs';
import { 
  MdOutlineSmartphone, MdAttachMoney, MdOutlineLaptopMac, MdLocationCity, MdOutlineFactory, MdSchool, MdFlightTakeoff 
} from 'react-icons/md';
import { TbClipboardText } from 'react-icons/tb'; 

// --- Configuration ---
const primaryDark = '#355694'; 

// --- 1. DATA LISTS WITH LINKS ---

const servicesList = [
    { name: 'Mobile App Development', icon: MdOutlineSmartphone, path: '/services/mobile-app-development' },
    { name: 'Custom Software Dev', icon: MdOutlineLaptopMac, path: '/services/custom-software' },
    { name: 'IT Consulting & Strategy', icon: FiClipboard, path: '/services/it-consulting' },
    { name: 'UI / UX Design', icon: BsGraphUp, path: '/services/ui-ux-design' },
    { name: 'QA & Automation', icon: TbClipboardText, path: '/services/qa-automation' },
    { name: 'Cloud Solutions', icon: FiSettings, path: '/services/cloud-solutions' },
    { name: 'Cyber Security', icon: FiShield, path: '/services/cyber-security' },
    { name: 'Data Analytics', icon: FiDatabase, path: '/services/data-analytics' },
];

const industriesList = [
    { name: 'FinTech & Banking', icon: MdAttachMoney, path: '/industries/fintech' },
    { name: 'Healthcare & Pharma', icon: FiClipboard, path: '/industries/healthcare' },
    { name: 'E-commerce & Retail', icon: BsCart3, path: '/industries/retail' },
    { name: 'Real Estate', icon: MdLocationCity, path: '/industries/real-estate' },
    { name: 'Logistics', icon: FiGlobe, path: '/industries/logistics' },
    { name: 'Manufacturing', icon: MdOutlineFactory, path: '/industries/manufacturing' },
    { name: 'Education', icon: MdSchool, path: '/industries/education' },
    { name: 'Travel & Hospitality', icon: MdFlightTakeoff, path: '/industries/travel' },
];

const technologiesList = [
    { name: 'Frontend (React/Vue)', icon: FiLayers, path: '/technologies/frontend' },
    { name: 'Backend (Node/Python)', icon: FiCode, path: '/technologies/backend' },
    { name: 'Cloud & DevOps', icon: BsShieldCheck, path: '/technologies/cloud-devops' },
    { name: 'AI & Machine Learning', icon: FiCpu, path: '/technologies/ai-ml' },
];

// --- Card Data with Main Landing Page Links ---
const leftCardData = {
    services: {
        title: 'Bespoke Software Services',
        description: 'End-to-end digital solutions, from concept to full-scale deployment.',
        image: '/images/services-bg.webp',
        path: '/services' // Main landing page
    },
    technologies: {
        title: 'Technology & Architecture',
        description: 'Modern, scalable frameworks and cloud-native architecture.',
        image: '/images/tech_bg.webp',
        path: '/technologies'
    },
    industries: {
        title: 'Industry Solutions',
        description: 'Domain expertise crafting targeted digital products for your sector.',
        image: '/images/industry_bg.jpg',
        path: '/industries'
    }
};

const tabs = [
    { name: 'Services', key: 'services' },
    { name: 'Technologies', key: 'technologies' }, 
    { name: 'Industries', key: 'industries' },
];

// --- Variants ---
const listContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.05 }
    }
};

const listItemVariants = {
    hidden: { opacity: 0, x: 10 },
    visible: { opacity: 1, x: 0, transition: { type: 'tween', duration: 0.2 } } 
};

const imageVariants = {
    initial: { opacity: 0.5, scale: 1.05 },
    animate: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeInOut" } },
    exit: { opacity: 0.5, scale: 1.05, transition: { duration: 0.6, ease: "easeInOut" } }
};

const textCardVariants = {
    initial: { y: 30, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { delay: 0.1, duration: 0.6, ease: "easeOut" } },
    exit: { y: 30, opacity: 0, transition: { duration: 0.4, ease: "easeIn" } }
};


// List Item Component
const ServiceListItem = ({ list, activeTabKey }) => (
    <AnimatePresence mode="wait"> 
        <motion.div key={activeTabKey} className="h-full w-full">
            <motion.ul
                variants={listContainerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4"
            >
                {list.map((item) => (
                    <motion.li
                        key={item.name}
                        variants={listItemVariants}
                    >
                        <Link 
                            href={item.path}
                            className="flex items-center space-x-3 p-2 rounded-lg transition-all duration-200 hover:bg-gray-50 cursor-pointer group"
                        >
                            {/* Icon Box */}
                            <div 
                                className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-lg bg-blue-50/50 group-hover:bg-blue-100/50 transition-colors duration-300"
                            >
                                <item.icon
                                    size={20}
                                    style={{ color: primaryDark }}
                                />
                            </div>
                            {/* Text */}
                            <span className="text-sm font-semibold text-gray-700 group-hover:text-black transition-colors duration-200 leading-tight"> 
                                {item.name}
                            </span>
                        </Link>
                    </motion.li>
                ))}
            </motion.ul>
        </motion.div>
    </AnimatePresence>
);


const OfferingsSection = () => {
    const [activeTab, setActiveTab] = useState('services');

    const getContent = () => {
        switch (activeTab) {
            case 'services': return servicesList;
            case 'technologies': return technologiesList;
            case 'industries': return industriesList;
            default: return [];
        }
    };

    const cardContent = leftCardData[activeTab]; 

    return (
        <section className="relative w-full py-8 md:py-12 overflow-hidden bg-white">
            
            {/* Background Pattern */}
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
            <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white pointer-events-none z-0"></div>

            <div className="container relative z-10 mx-auto px-4 max-w-6xl">
                
                {/* Header */}
                <motion.div 
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <h2 
                        className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight"
                        style={{
                            background: "var(--gradient-primary)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                        }}
                    >
                        Our Offerings
                    </h2>
                </motion.div>

                {/* Tabs */}
                <div className="flex justify-center mb-12">
                    <div className="flex bg-gray-100/50 backdrop-blur-sm rounded-full p-1.5 shadow-inner">
                        {tabs.map((tab) => {
                            const isTabActive = activeTab === tab.key;
                            return (
                                <button
                                    key={tab.key}
                                    onClick={() => setActiveTab(tab.key)}
                                    className={`relative px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 z-10 ${
                                        isTabActive ? 'text-white shadow-md' : 'text-gray-500 hover:text-gray-900'
                                    }`}
                                >
                                    {isTabActive && (
                                        <motion.div
                                            layoutId="tabIndicator"
                                            className="absolute inset-0 rounded-full z-[-1]"
                                            style={{ background: "var(--gradient-primary)" }}
                                            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                                        />
                                    )}
                                    {tab.name}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Content Card */}
                <motion.div
                    className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 flex flex-col md:flex-row min-h-[500px]"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    
                    {/* Left: Image Side (40%) */}
                    <div className="relative w-full md:w-5/12 overflow-hidden h-64 md:h-auto">
                        <AnimatePresence mode="wait">
                            <motion.div 
                                key={cardContent.image}
                                variants={imageVariants}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                className="absolute inset-0"
                            >
                                <Image
                                    src={cardContent.image}
                                    alt={cardContent.title}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 40vw"
                                    unoptimized
                                />
                            </motion.div>

                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>

                            <motion.div 
                                key={cardContent.title + "-text"}
                                variants={textCardVariants}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                className="absolute bottom-0 left-0 right-0 p-8 z-20"
                            >
                                <div className="text-white">
                                    <h3 className="text-2xl font-bold mb-3 leading-tight">
                                        {cardContent.title}
                                    </h3>
                                    <p className="text-sm text-white/90 mb-5 leading-relaxed">
                                        {cardContent.description}
                                    </p>
                                    
                                    {/* Updated Link Button */}
                                    <Link 
                                        href={cardContent.path}
                                        className="text-xs font-bold tracking-wider py-2 px-4 border border-white/40 rounded-full hover:bg-white hover:text-[var(--color-primary-dark)] transition-all duration-300 inline-block"
                                    >
                                        View More
                                    </Link>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Right: List Side (60%) */}
                    <div className="w-full md:w-7/12 p-8 md:p-10 flex flex-col justify-center bg-white relative">
                        <div className="absolute right-0 top-0 opacity-[0.03] pointer-events-none transform translate-x-1/4 -translate-y-1/4">
                             <svg width="300" height="300" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                             </svg>
                        </div>
                        
                        <ServiceListItem list={getContent()} activeTabKey={activeTab} />
                    </div>

                </motion.div>

            </div>
        </section>
    );
};

export default OfferingsSection;