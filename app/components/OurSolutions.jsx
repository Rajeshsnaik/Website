"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

// --- Configuration ---
const primaryDark = '#355694'; 
const primaryLight = '#2DACE3'; 
const accentOrange = '#F6A25C'; 

// --- Dummy Project Data ---
const projects = [
    {
        id: 1,
        title: "Global Supply Chain Platform",
        description: "Optimized logistics and inventory management for a multinational client, reducing operational costs.",
        industry: "Logistics",
        image: "/images/project_supply_chain.avif", // Update path
        link: "#project-1"
    },
    {
        id: 2,
        title: "Personalized FinTech App",
        description: "Built a secure mobile banking application offering AI-driven investment recommendations and portfolio tracking.",
        industry: "FinTech",
        image: "/images/project_fintech_app.jpg", // Update path
        link: "#project-2"
    },
    {
        id: 3,
        title: "Enterprise HR Dashboard",
        description: "Designed a comprehensive analytics and visualization tool for human resources management, enhancing decision making.",
        industry: "Enterprise",
        image: "/images/project_hr_dashboard.jpg", // Update path
        link: "#project-3"
    },
];

// --- Helper Hook to Detect Mobile ---
const useIsMobile = () => {
    const [isMobile, setIsMobile] = React.useState(false);

    React.useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return isMobile;
};

// --- Card Component (Project Cards 1, 2, 3) ---
const ProjectCard = ({ project }) => {
    const isMobile = useIsMobile();
    
    const imageHoverVariants = {
        rest: { scale: 1 },
        hover: { scale: 1.07, transition: { duration: 0.5 } }
    };

    const buttonVariants = {
        rest: { opacity: 0, y: 10 },
        hover: { opacity: 1, y: 0, transition: { duration: 0.3 } },
        mobile: { opacity: 1, y: 0, transition: { duration: 0 } }
    };

    return (
        <motion.a 
            href={project.link}
            className="flex flex-col rounded-xl shadow-lg bg-white overflow-hidden transition-all duration-300 sm:hover:shadow-2xl cursor-pointer h-full group"
            initial="rest"
            whileHover={isMobile ? "mobile" : "hover"} 
            animate={isMobile ? "mobile" : "rest"}
        >
            {/* Image Container */}
            <div className="relative w-full overflow-hidden aspect-[4/3] md:h-[65%]">
                <motion.div 
                    variants={imageHoverVariants}
                    animate={isMobile ? "rest" : undefined}
                    className="absolute inset-0"
                >
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 30vw"
                        style={{ objectFit: 'cover' }}
                        priority={false}
                    />
                </motion.div>

                {/* Industry Label */}
                <div className="absolute bottom-4 left-4 z-10">
                    <div 
                        className="flex items-center rounded-full py-1 px-3 text-white text-xs font-semibold backdrop-blur-sm"
                        style={{ background: `rgba(53, 86, 148, 0.5)` }}
                    >
                        <span className="w-2 h-2 rounded-full mr-2" style={{ backgroundColor: accentOrange }}></span>
                        {project.industry}
                    </div>
                </div>

                {/* Know More Button */}
                <motion.div 
                    variants={buttonVariants}
                    animate={isMobile ? "mobile" : "rest"} 
                    className="absolute inset-0 flex items-center justify-center bg-black/30 z-20"
                >
                    <button 
                        className="py-2 px-5 text-sm md:py-3 md:px-6 rounded-full font-bold text-white transition-colors duration-300"
                        style={{ backgroundColor: accentOrange }}
                    >
                        Know More
                    </button>
                </motion.div>
            </div>

            {/* Text Content */}
            <div className="p-4 md:p-5 flex flex-col justify-between flex-grow">
                <div>
                    <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2" style={{ color: primaryDark }}>
                        {project.title}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-2 overflow-hidden text-ellipsis">
                        {project.description}
                    </p>
                </div>
            </div>
        </motion.a>
    );
};

// --- Metric Card Component (Card 4) ---
const MetricCard = () => (
    <div 
        className="flex flex-col justify-center items-center p-6 md:p-8 rounded-xl shadow-lg text-center h-full min-h-[300px] md:min-h-[400px]"
        style={{ 
            background: `linear-gradient(145deg, ${primaryDark}, ${primaryLight})`,
            color: 'white'
        }}
    >
        <motion.p
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 100, delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold mb-2"
            style={{ color: accentOrange }}
        >
            10+
        </motion.p>
        
        <h3 className="text-2xl md:text-3xl font-semibold mb-3">
            Loyal Clients
        </h3>
        
        <p className="text-white/80 text-base md:text-lg mb-6 md:mb-8 max-w-xs">
            Over two years of operation providing stellar software solutions.
        </p>

        <motion.a
            href="#stories"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block py-2 px-5 text-sm md:py-3 md:px-6 rounded-full font-bold transition-transform duration-200 shadow-md"
            style={{ 
                backgroundColor: accentOrange,
                color: primaryDark
            }}
        >
            More Successful Stories
        </motion.a>
    </div>
);

// --- Main Section Component ---
const OurSolutions = () => {
    return (
        <section className="py-12 md:py-24" style={{ backgroundColor: '#ffffff' }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* UPDATED TITLE: 
                  - Gradient Text using configuration colors
                  - Larger Font Size (text-4xl md:text-5xl)
                */}
                <h2 
                    className="text-4xl md:text-5xl font-extrabold text-center mb-10 md:mb-16"
                    style={{
                        background: `linear-gradient(135deg, ${primaryDark}, ${primaryLight})`,
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                        color: "transparent" // Fallback
                    }}
                >
                    Our Solutions
                </h2>

                {/* Grid Layout */}
                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={{
                        visible: { transition: { staggerChildren: 0.1 } },
                        hidden: {},
                    }}
                >
                    {/* Project Cards (1, 2, 3) */}
                    {projects.map((project) => (
                        <motion.div 
                            key={project.id} 
                            className="col-span-1"
                            variants={{
                                hidden: { opacity: 0, y: 50 },
                                visible: { opacity: 1, y: 0 }
                            }}
                            transition={{ duration: 0.6 }}
                        >
                            <ProjectCard project={project} />
                        </motion.div>
                    ))}
                    
                    {/* Metric Card (4th Card) */}
                    <motion.div 
                        className="col-span-1"
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0 }
                        }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <MetricCard />
                    </motion.div>
                </motion.div>

            </div>
        </section>
    );
};

export default OurSolutions;