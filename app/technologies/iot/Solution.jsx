"use client";
import React from 'react';
// 1. --- Framer Motion Import Mock-up ---
// In a real project, you would import { motion } from 'framer-motion';
// We'll use a placeholder 'motion' and 'useInView' from a hypothetical Framer Motion library.
const motion = {
  div: (props) => <div {...props} />,
  // Define simple variants for demonstration
  variants: {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  },
};
const useInView = (ref, options) => [true, ref]; // Mock hook to always return true (in view)

// --- React Icons (Lucide) Defined Inline for Single-File Environment ---
const Cpu = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 7h10v10H7z"/><path d="M12 1v2"/><path d="M12 21v2"/><path d="M20 12h3"/><path d="M1 12h3"/><path d="M16 3h5"/><path d="M16 21h5"/><path d="M3 16v5"/><path d="M3 3v5"/></svg>
);
const Cloud = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>
);
const TrendingUp = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>
);
const Lock = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
);

// Define custom colors for use in Tailwind styles
const customColors = {
  'primary-dark': '#355694',
  'primary-light': '#2DACE3',
  'accent-orange': '#F6A25C',
  'bg-main': '#F9FAFB', 
  'bg-card': '#FFFFFF', 
};

// Data structure for the solution pillars
const pillars = [
  {
    id: 1,
    title: 'Edge & Embedded',
    icon: Cpu,
    content: (
      <>
        <p className="mb-2">Devices, Firmware, and Connectivity. We cover Hardware Sensors, Processors, Android Firmware, and Embedded Software Development. Building and securing intelligence at the source of data.</p>
        <p className="font-semibold text-primary-light">Edge Computing: Processing data locally for speed and reliability.</p>
      </>
    ),
  },
  {
    id: 2,
    title: 'Data Ingestion & Cloud',
    icon: Cloud,
    content: (
      <>
        <p className="mb-2">Platform Management and Scalability. Expertise in data, robust device management, and seamless integration with major Hyperscale Cloud platforms.</p>
        <p className="font-semibold text-primary-light">Scalability & Hybrid Cloud: Flexible Infrastructure for dynamic growth.</p>
      </>
    ),
  },
  {
    id: 3,
    title: 'Intelligence & Analytics',
    icon: TrendingUp, 
    content: (
      <>
        <p className="mb-2">Leveraging AI/ML (Cognitive Computing), Big Data for real-time predictive monitoring, Digital Twins for virtual modeling, and rich advanced analytics.</p>
        <p className="font-semibold text-primary-light">AI/ML Driven: Extracting deep insights and automating decision-making.</p>
      </>
    ),
  },
  {
    id: 4,
    title: 'Security & Compliance',
    icon: Lock,
    content: (
      <>
        <p className="mb-2">Compliance Adherence using anti-intrusion systems, cryptography, PKI management. Ensuring Security-by-Design like GDPR, HIPAA, and custom regulatory frameworks.</p>
        <p className="font-semibold text-primary-light">Robust Frameworks: Protecting data and ensuring regulatory standards are met.</p>
      </>
    ),
  },
];

// Custom Card Component
// Now accepts 'variants', 'initial', and 'animate' props from the parent
const PillarCard = ({ pillar, variants }) => {
  const Icon = pillar.icon;
  
  // 2. --- Convert the outermost div to motion.div and apply animations ---
  return (
    <motion.div
      className="
        bg-white p-6 sm:p-8 rounded-xl shadow-lg transition-all duration-300 ease-in-out
        hover:scale-[1.03] hover:shadow-xl hover:shadow-gray-200 border border-gray-100 hover:border-primary-light/30
        transform
      "
      // Framer Motion Props
      variants={variants}
      initial="hidden"
      animate="visible"
      whileHover={{ scale: 1.05, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }} // Enhanced hover effect
      transition={{ duration: 0.3, ease: "easeOut" }} // Smooth transition for hover state
    >
      <div className="flex items-start mb-4">
        {/* Number Badge */}
        <div className="flex-shrink-0 w-12 h-12 bg-accent-orange rounded-full flex items-center justify-center text-xl font-bold text-gray-900 shadow-md mr-4">
          {pillar.id}
        </div>
        
        {/* Title and Icon */}
        <div>
          <h2 className="text-2xl font-extrabold text-gray-800 mb-1 leading-tight">{pillar.title}</h2>
          <div className="flex items-center text-primary-dark/80">
            <Icon className="w-6 h-6 mr-2" style={{ color: customColors['primary-dark'] }} />
            <span className="text-sm font-medium">IoT Capability</span>
          </div>
        </div>
      </div>
      
      {/* Content Body */}
      <div className="text-gray-600 text-base space-y-3">
        {pillar.content}
      </div>
    </motion.div>
  );
};

// Main App Component
const Solution = () => {
  // 3. --- Define Animation Variants and Controls ---
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true }); // Triggers animation only once when component comes into view

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Stagger effect for child elements
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.17, 0.67, 0.83, 0.67], // Custom easing function
      },
    },
  };

  return (
    <>
      {/* Configure Tailwind JIT colors. */}
      <script>{`
        tailwind.config = {
          theme: {
            extend: {
              colors: {
                'primary-dark': '${customColors['primary-dark']}',
                'primary-light': '${customColors['primary-light']}',
                'accent-orange': '${customColors['accent-orange']}',
              },
              backgroundImage: {
                'primary-gradient': 'linear-gradient(135deg, ${customColors['primary-dark']}, ${customColors['primary-light']})',
              },
            },
          },
        };
      `}</script>

      {/* Main container background set to light gray */}
      <div className="min-h-screen bg-gray-50 font-sans p-4 sm:p-10 lg:p-16">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <header className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3 tracking-tight">
              The Solution Pillars: <span style={{ background: 'linear-gradient(135deg, ' + customColors['primary-dark'] + ', ' + customColors['primary-light'] + ')', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>End-to-End Capabilities</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-500 font-medium">
              From Device to Data to Decision – Your Complete IoT Journey
            </p>
          </header>

          {/* Pillars Grid - motion.div for container to manage stagger */}
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"} // Animate when in view
            className="
              grid gap-8
              grid-cols-1           /* Mobile: 1 column */
              lg:grid-cols-2        /* Laptop/Desktop: 2 columns */
            "
          >
            {pillars.map((pillar) => (
              // Pass the card variants to each card
              <PillarCard 
                key={pillar.id}
                pillar={pillar}
                variants={cardVariants}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Solution;