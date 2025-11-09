"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

// --- Icon Imports ---
import { FiLayers, FiCode, FiUsers, FiSettings, FiClipboard } from 'react-icons/fi';
import { BsGraphUp, BsShieldCheck } from 'react-icons/bs';
import { MdOutlineSmartphone, MdAttachMoney, MdOutlineLaptopMac, MdLocationCity } from 'react-icons/md';
import { TbClipboardText } from 'react-icons/tb'; 

// --- Configuration ---
const primaryDark = '#355694'; 
const primaryLight = '#2DACE3'; 
const accentOrange = '#F6A25C'; 

const sectionBackgroundColor = '#F0F5F9'; 

// --- Data Lists ---
const servicesList = [
    { name: 'Mobile Application Development', icon: MdOutlineSmartphone, link: '#' },
    { name: 'Custom Software Development', icon: MdOutlineLaptopMac, link: '#' },
    { name: 'IT Consulting & Strategy', icon: FiClipboard, link: '#' },
    { name: 'UI / UX Design', icon: BsGraphUp, link: '#' },
    { name: 'QA & Testing Automation', icon: TbClipboardText, link: '#' },
];

const technologiesList = [
    { name: 'Frontend (React/Vue/Angular)', icon: FiLayers, link: '#' },
    { name: 'Backend (Node.js/Python/Java)', icon: FiCode, link: '#' },
    { name: 'Cloud Computing (AWS/Azure/GCP)', icon: FiSettings, link: '#' },
    { name: 'Data & AI/ML', icon: BsGraphUp, link: '#' },
    { name: 'DevOps & CI/CD', icon: BsShieldCheck, link: '#' },
];

const industriesList = [
    { name: 'FinTech & Banking', icon: MdAttachMoney, link: '#' },
    { name: 'Healthcare & Pharma', icon: FiClipboard, link: '#' },
    { name: 'E-commerce & Retail', icon: MdOutlineSmartphone, link: '#' },
    { name: 'Real Estate & PropTech', icon: MdLocationCity, link: '#' },
    { name: 'Logistics & Supply Chain', icon: FiUsers, link: '#' },
];

// --- NEW LEFT CARD DATA STRUCTURE ---
const leftCardData = {
    services: {
        title: 'Bespoke Software Services',
        description: 'We deliver end-to-end digital solutions, from initial concept design and development to full-scale deployment and maintenance.',
        image: '/images/services_bg.jpg' // PLACEHOLDER IMAGE 1
    },
    technologies: {
        title: 'Technology & Architecture',
        description: 'Leverage modern, scalable frameworks and cloud-native architecture for high performance, security, and future-proof systems.',
        image: '/images/tech_bg.jpg' // PLACEHOLDER IMAGE 2
    },
    industries: {
        title: 'Industry-Specific Solutions',
        description: 'Our domain expertise allows us to craft targeted digital products that solve complex challenges specific to your market sector.',
        image: '/images/industry_bg.jpg' // PLACEHOLDER IMAGE 3
    }
};
// NOTE: You must update the placeholder paths above with your actual images (e.g., /images/services_bg.jpg)

// Map filter keys to a representative icon for the intersecting icon
const filterIcons = {
    'services': MdOutlineSmartphone,
    'technologies': FiCode,
    'industries': MdLocationCity,
};

const tabs = [
    { name: 'SERVICES', key: 'services' },
    { name: 'TECHNOLOGIES', key: 'technologies' }, 
    { name: 'INDUSTRIES', key: 'industries' },
];

// --- Framer Motion Variants ---
const listContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            when: "beforeChildren",
            staggerChildren: 0.08, 
        }
    }
};

const listItemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { type: 'tween', duration: 0.25 } } 
};

// Variants for the left card image/text animation (simple fade/scale for image, slide for text)
const imageVariants = {
    initial: { opacity: 0.5, scale: 1.05 },
    animate: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeInOut" } },
    exit: { opacity: 0.5, scale: 1.05, transition: { duration: 0.6, ease: "easeInOut" } }
};

const textCardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { delay: 0.1, duration: 0.6, ease: "easeOut" } },
    exit: { y: 50, opacity: 0, transition: { duration: 0.4, ease: "easeIn" } }
};


// Component for rendering the list items (Right Side - remains the same)
const ServiceListItem = ({ list, activeTabKey }) => (
    <AnimatePresence mode="wait"> 
        <motion.div key={activeTabKey} className="h-full w-full">
            <motion.ul
                variants={listContainerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-y-8 sm:gap-x-12 xl:grid-cols-2"
            >
                {list.map((item, index) => (
                    <motion.li
                        key={item.name}
                        variants={listItemVariants}
                        className="flex items-start space-x-4 pr-4 py-1 group transition-all duration-200 hover:bg-gray-50 rounded-lg -mx-2 px-2 cursor-pointer"
                    >
                        <div className="flex-shrink-0 p-3 rounded-full bg-white shadow-md relative group-hover:shadow-lg transition-shadow duration-300" 
                             style={{ border: `1px solid ${primaryLight}` }}>
                            <item.icon
                                className="w-6 h-6"
                                style={{ color: primaryDark }}
                            />
                        </div>
                        <span className="text-lg text-gray-800 self-center group-hover:text-black transition-colors duration-200"> 
                            {item.name}
                        </span>
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
            case 'services':
                return servicesList;
            case 'technologies':
                return technologiesList;
            case 'industries':
                return industriesList;
            default:
                return [];
        }
    };

    const DynamicIcon = filterIcons[activeTab];
    const cardContent = leftCardData[activeTab]; // Get the dynamic content


    return (
        <section 
            className="py-16 md:py-24 overflow-hidden w-full" 
            style={{ backgroundColor: sectionBackgroundColor }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <h2 className="text-3xl md:text-4xl font-extrabold text-black text-center mb-12">
                    OUR OFFERINGS
                </h2>

                {/* --- Tab Navigation Pill --- */}
                <div className="flex justify-center mb-12 px-4 sm:px-0">
                    <div 
                        className="flex bg-white rounded-full shadow-lg p-0.5 w-full max-w-lg sm:max-w-none" 
                        style={{ borderRadius: '50px' }}
                    >
                        {tabs.map((tab) => {
                            const isTabActive = activeTab === tab.key;
                            
                            return (
                                <motion.button
                                    key={tab.key}
                                    onClick={() => setActiveTab(tab.key)}
                                    className={`relative w-1/3 py-3 px-2 sm:px-10 text-sm sm:text-base font-semibold transition-colors duration-300 ease-in-out flex-shrink-0 focus:outline-none`}
                                    style={isTabActive ? { color: 'white' } : { color: primaryDark }}
                                >
                                    {isTabActive && (
                                        <motion.div
                                            layoutId="tabIndicator"
                                            transition={{ type: 'spring', stiffness: 500, damping: 50 }}
                                            className="absolute inset-0 z-0 rounded-full"
                                            style={{ backgroundImage: `linear-gradient(to right, ${primaryDark}, ${primaryLight})` }} 
                                        />
                                    )}

                                    <span className="relative z-10">
                                        {tab.name}
                                    </span>
                                </motion.button>
                            );
                        })}
                    </div>
                </div>
                {/* --- End Tab Navigation Pill --- */}

                {/* --- Content Area --- */}
                <div className="max-w-[1200px] mx-auto w-full relative">
                    <motion.div
                        key={activeTab + "-card-container"} 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
                        className="bg-white rounded-2xl shadow-xl p-0 flex flex-col md:flex-row min-h-[450px]"
                        style={{ borderRadius: '20px' }} 
                    >
                        
                        {/* Left Side: Image and Layered Text Card (50% width) */}
                        <div className="relative w-full md:w-6/12 flex-shrink-0 rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none overflow-hidden h-64 md:h-auto">
                            
                            {/* AnimatePresence for the image and text card content */}
                            <AnimatePresence mode="wait">
                                {/* 3rd Layer: The Image (Background) - Dynamic */}
                                <motion.div 
                                    key={cardContent.image} // Key must be image path to trigger replacement
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
                                        style={{ objectFit: "cover" }}
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        priority={true}
                                    />
                                </motion.div>

                                {/* 2nd Layer: Gradient Overlay (Static) */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent z-10"></div>

                                {/* 1st Layer: Text Content Card with Smooth Slide Animation - Dynamic */}
                                <motion.div 
                                    key={cardContent.title + "-text"} // Key for text transition
                                    variants={textCardVariants}
                                    initial="initial"
                                    animate="animate"
                                    exit="exit"
                                    className="absolute bottom-0 left-0 right-0 p-8 flex items-end z-20"
                                >
                                    <div className="text-white">
                                        <h3 className="text-2xl font-bold mb-2">
                                            {cardContent.title}
                                        </h3>
                                        
                                        <p className="text-base mb-4 max-w-sm">
                                            {cardContent.description}
                                        </p>
                                        
                                        {/* Filter Title */}
                                        {/* <p className="text-sm font-semibold mb-2 uppercase tracking-widest text-white/80">
                                            {activeTab}
                                        </p> */}

                                        <a href="#" className="text-sm font-semibold py-2 px-5 border-2 border-white text-white hover:bg-white hover:text-black transition-colors duration-300 inline-block">
                                            VIEW MORE &gt;
                                        </a>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Right Side: Services List / Tab Content (50% width) */}
                        <div className="w-full md:w-6/12 p-6 md:p-12 flex flex-col justify-center">
                            <ServiceListItem list={getContent()} activeTabKey={activeTab} />
                        </div>
                    </motion.div>

                    {/* --- Floating Accent Icon (Top Position & Dynamic) --- */}
                    {/* <AnimatePresence mode="wait">
                        <motion.div 
                            key={activeTab + "-floating-icon"}
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0, opacity: 0 }}
                            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                            
                            className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                                       p-5 rounded-full bg-white shadow-xl z-20 hidden md:block" 
                            style={{ border: `1px solid ${primaryLight}`}}
                        >
                            {DynamicIcon && <DynamicIcon className="w-8 h-8" style={{ color: primaryLight }} />}
                        </motion.div>
                    </AnimatePresence> */}
                </div>
                {/* --- End Content Area --- */}
            </div>
        </section>
    );
};

export default OfferingsSection;