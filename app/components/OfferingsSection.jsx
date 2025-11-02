"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

// --- Icon Imports (Using icons that best match the design style) ---
import { FiSettings, FiClipboard, FiLayers, FiCode, FiUsers } from 'react-icons/fi';
import { BsPencilSquare, BsGraphUp, BsShieldCheck } from 'react-icons/bs';
import { MdOutlineSmartphone, MdLightbulb, MdLocationCity, MdAttachMoney, MdOutlineLaptopMac } from 'react-icons/md';
import { IoCallOutline } from 'react-icons/io5'; 
import { TbClipboardText } from 'react-icons/tb'; 

// --- Configuration ---
const primaryColor = '#355694'; // Dark Blue
const secondaryColor = '#2DACE3'; // Light Blue
const gradient = `linear-gradient(to right, ${primaryColor}, ${secondaryColor})`;
const tabGradient = `linear-gradient(to right, #355694, #2DACE3)`; 

const sectionBackgroundColor = '#F0F5F9'; // A very light gray-blue

const servicesList = [
    { name: 'Mobile Application Development', icon: IoCallOutline },
    { name: 'Mobile Application Development', icon: MdLightbulb },
    { name: 'IT Consulting', icon: FiClipboard },
    { name: 'UI / UX Design', icon: MdOutlineLaptopMac },
    { name: 'QA & Testing', icon: TbClipboardText },
];

const technologiesList = [
    { name: 'Frontend (React/Vue/Angular)', icon: FiLayers },
    { name: 'Backend (Node.js/Python/Java)', icon: FiCode },
    { name: 'Cloud Computing (AWS/Azure/GCP)', icon: FiSettings },
    { name: 'Data & AI/ML', icon: BsGraphUp },
    { name: 'DevOps & CI/CD', icon: BsShieldCheck },
];

const industriesList = [
    { name: 'FinTech & Banking', icon: MdAttachMoney },
    { name: 'Healthcare & Pharma', icon: FiClipboard },
    { name: 'E-commerce & Retail', icon: MdOutlineSmartphone },
    { name: 'Real Estate & PropTech', icon: MdLocationCity },
    { name: 'Logistics & Supply Chain', icon: FiUsers },
];

const tabs = [
    { name: 'SERVICES', key: 'services' },
    { name: 'TECHNOOGIES', key: 'technologies' }, 
    { name: 'INDUSTRIES', key: 'industries' },
];

// Framer Motion Variants
const listContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            when: "beforeChildren",
            staggerChildren: 0.1,
        }
    }
};

const listItemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { type: 'tween', duration: 0.3 } }
};

// Component for rendering the list items
const ServiceListItem = ({ list, activeTabKey }) => (
    <motion.div key={activeTabKey} className="h-full w-full" >
        <motion.ul
            variants={listContainerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-y-8 sm:gap-x-12 lg:grid-cols-1 xl:grid-cols-2"
        >
            {list.map((item, index) => (
                <motion.li
                    key={index}
                    variants={listItemVariants}
                    className="flex items-start space-x-4 pr-4 py-1"
                >
                    <div className="flex-shrink-0 p-3 rounded-full bg-white shadow-sm border border-gray-100 relative">
                        <item.icon
                            className="w-6 h-6"
                            style={{ color: primaryColor }}
                        />
                    </div>
                    {/* *** FIX APPLIED HERE: Removed font-medium for regular text weight *** */}
                    <span className="text-lg text-gray-800 self-center"> 
                        {item.name}
                    </span>
                </motion.li>
            ))}
        </motion.ul>
    </motion.div>
);


const OfferingsSection = () => {
    const [activeTab, setActiveTab] = useState('services');

    const getContent = () => {
        switch (activeTab) {
            case 'services':
                return <ServiceListItem list={servicesList} activeTabKey={activeTab} />;
            case 'technologies':
                return <ServiceListItem list={technologiesList} activeTabKey={activeTab} />;
            case 'industries':
                return <ServiceListItem list={industriesList} activeTabKey={activeTab} />;
            default:
                return null;
        }
    };


    return (
        <section 
            className="py-16 md:py-24 overflow-hidden w-full" 
            style={{ backgroundColor: sectionBackgroundColor }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Main Title is still full content width (max-w-7xl) */}
                <h2 className="text-3xl md:text-4xl font-extrabold text-black text-center mb-12">
                    OUR OFFERINGS
                </h2>

                {/* --- Tab Navigation Pill --- */}
                <div className="flex justify-center mb-12">
                    <div className="flex bg-white rounded-full shadow-lg overflow-hidden p-0.5" style={{ borderRadius: '50px' }}>
                        {tabs.map((tab) => {
                            const isTabActive = activeTab === tab.key;
                            
                            return (
                                <motion.button
                                    key={tab.key}
                                    onClick={() => setActiveTab(tab.key)}
                                    className={`relative py-3 px-10 text-base font-semibold transition-colors duration-300 ease-in-out focus:outline-none whitespace-nowrap`}
                                    style={isTabActive ? { color: 'white' } : { color: primaryColor }}
                                >
                                    {/* The animated background that slides */}
                                    {isTabActive && (
                                        <motion.div
                                            layoutId="tabIndicator"
                                            transition={{ type: 'spring', stiffness: 500, damping: 50 }}
                                            className="absolute inset-0 z-0 rounded-full"
                                            style={{ backgroundImage: tabGradient }} 
                                        />
                                    )}

                                    {/* The text content */}
                                    <span className="relative z-10">
                                        {tab.name}
                                    </span>
                                </motion.button>
                            );
                        })}
                    </div>
                </div>
                {/* --- End Tab Navigation Pill --- */}

                {/* --- Content Area (Constrained to ~75% of the screen width and centered) --- */}
                <div className="max-w-[1200px] mx-auto w-full md:w-[75%] lg:w-[75%]">
                    <motion.div
                        key={activeTab + "-content"} 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
                        className="bg-white rounded-2xl shadow-xl p-0 flex flex-col md:flex-row min-h-[450px]"
                        style={{ borderRadius: '20px' }} 
                    >
                        
                        {/* Left Side: Image and Product Engineering Card - WIDTH INCREASED FOR LG */}
                        {/* Changed lg:w-5/12 to lg:w-6/12 (50%) */}
                        <div className="relative md:w-6/12 lg:w-6/12 flex-shrink-0 rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none overflow-hidden h-64 md:h-auto">

                            {/* The Image (Using Next.js Image component) */}
                            <div className="absolute inset-0">
                                <Image
                                    src="/coverpage.jpg" 
                                    alt="Product engineering team collaborating"
                                    fill
                                    style={{ objectFit: "cover" }}
                                    priority={true}
                                />
                            </div>

                            {/* Dark Overlay with Text Card */}
                            <div className="absolute inset-0 bg-gradient-to-t from-transparent via-[#355694] to-[#355694]/70 opacity-90 p-6 flex items-end">
                                <div className="text-white">
                                    <h3 className="text-xl font-bold mb-3">
                                        Product Engineering
                                    </h3>
                                    
                                    <p className="text-sm mb-4 max-w-sm">
                                        Create complex enterprise software, ensure reliable software integration, modrnose your legacy system.
                                    </p>
                                    <button className="text-sm font-semibold py-2 px-5 border-2 border-white text-white hover:bg-white hover:text-[#355694] transition-colors duration-300">
                                        VIEW MORE &gt;
                                    </button>
                                </div>
                            </div>

                            {/* *** FIX APPLIED HERE: Simplified gear icon positioning for better stability *** */}
                            {/* The floating blue gear icon */}
                            <div className="absolute top-1/4 right-0 transform translate-x-1/2 -translate-y-1/2 p-5 rounded-full bg-white shadow-xl" style={{ border: `1px solid ${secondaryColor}`}}>
                                <FiSettings className="w-8 h-8" style={{ color: secondaryColor }} />
                            </div>
                        </div>

                        {/* Right Side: Services List / Tab Content - WIDTH DECREASED FOR LG */}
                        {/* Changed lg:w-7/12 to lg:w-6/12 (50%) */}
                        <div className="md:w-6/12 lg:w-6/12 p-6 md:p-12 flex flex-col justify-center">
                            {getContent()}
                        </div>
                    </motion.div>
                </div>
                {/* --- End Content Area --- */}
            </div>
        </section>
    );
};

export default OfferingsSection;