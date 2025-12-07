"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  ClipboardList, 
  PencilRuler, 
  Code2, 
  ShieldCheck, 
  Rocket 
} from "lucide-react";

// --- Process Step Data ---
const processSteps = [
  {
    id: 1,
    title: "Requirement Understanding",
    description: "Deep dive workshops to define scope, goals, and user needs.",
    icon: ClipboardList,
  },
  {
    id: 2,
    title: "Planning & Proposal",
    description: "Strategic roadmap, architecture design, and detailed project estimation.",
    icon: PencilRuler,
  },
  {
    id: 3,
    title: "Execution (Development)",
    description: "Agile development sprints with regular updates and transparent coding.",
    icon: Code2,
  },
  {
    id: 4,
    title: "Quality Assurance",
    description: "Rigorous testing (automated & manual) to ensure bug-free performance.",
    icon: ShieldCheck,
  },
  {
    id: 5,
    title: "Delivery & Support",
    description: "Seamless deployment, training, and ongoing maintenance and scaling.",
    icon: Rocket,
  },
];

// --- Animation Variants ---

// Parent variant to manage staggering of the steps
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.8, // Significant delay between steps activating
      delayChildren: 0.3,   // Wait a bit before starting
    },
  },
};

// Variant for individual steps (Icon turning active)
const stepVariants = {
  hidden: { 
    scale: 0.9, 
    opacity: 0.5,
    color: "#9CA3AF" // Gray-400
  },
  visible: { 
    scale: 1, 
    opacity: 1,
    color: "var(--color-primary-light)", // Turn Electric Blue
    transition: { 
      duration: 0.5, 
      type: "spring",
      bounce: 0.4
    }
  },
};

// Variant for the connecting line filling up
const lineVariants = {
  hidden: { scaleX: 0 },
  visible: { 
    scaleX: 1,
    transition: { 
      // Duration = (Number of steps - 1) * stagger delay + step duration
      // This ensures the line finishes roughly when the last icon activates
      duration: (processSteps.length - 1) * 0.8 + 0.5, 
      ease: "easeInOut" 
    }
  }
};


const HowWeWork = () => {
  return (
 <section className="relative w-full py-12 md:py-20 overflow-hidden bg-white">

      
      {/* --- Background: Light Mesh Pattern (Consistency) --- */}
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
       <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white pointer-events-none z-0"></div>


      <div className="container relative z-10 mx-auto px-4">
        
        {/* --- Header Section --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20 max-w-3xl mx-auto"
        >
          <span 
            className="inline-block py-1 px-3 rounded-full text-xs font-bold tracking-widest mb-4"
            style={{ 
              backgroundColor: "rgba(45, 172, 227, 0.1)", 
              color: "var(--color-primary-light)" 
            }}
          >
            Our Process
          </span>
          <h2 
            className="text-4xl md:text-5xl font-extrabold tracking-tight"
            style={{
              background: "var(--gradient-primary)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            How We Work
          </h2>
        </motion.div>

        {/* --- Timeline Container --- */}
        <div className="relative max-w-6xl mx-auto">
            
          {/* --- The Connecting Lines --- 
             Positioned absolutely behind the steps.
             We need a base gray line and an animated colored line on top.
          */}
          <div className="absolute top-[40px] left-0 w-full h-1 bg-gray-100 z-0 hidden md:block">
            {/* The animated filling line */}
            <motion.div
                variants={lineVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="h-full bg-[var(--color-primary-light)] origin-left"
                style={{ 
                    boxShadow: "0 0 10px var(--color-primary-light)"
                }}
            />
          </div>


          {/* --- The Steps (Flex Row) --- */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            // Flex row on desktop, stack on mobile for readability
            className="relative z-10 flex flex-col md:flex-row justify-between items-start gap-10 md:gap-4"
          >
            {processSteps.map((step, index) => {
                const isLast = index === processSteps.length - 1;
                
                return (
                <div key={step.id} className="relative flex flex-col items-center text-center flex-1 md:px-2">
                    
                    {/* Mobile Vertical Connectors (Hidden on Desktop) */}
                    {!isLast && (
                        <div className="absolute md:hidden left-1/2 bottom-[-40px] h-10 w-1 bg-gray-100 -translate-x-1/2 z-0"></div>
                    )}

                    {/* Icon Container (Animates color and scale) */}
                    <motion.div
                        variants={stepVariants}
                        // White background ensures the line behind it doesn't show through the icon circle
                        className="w-20 h-20 rounded-full bg-white border-4 border-current flex items-center justify-center mb-6 relative z-10 shadow-sm"
                        style={{ 
                            // Dynamic shadow that glows when active
                            boxShadow: "var(--tw-shadow), 0 0 15px -5px currentColor"
                        }}
                    >
                        <step.icon size={32} strokeWidth={1.5} />
                    </motion.div>
                    
                    {/* Text Content */}
                    <h3 className="text-lg font-bold text-[var(--color-primary-dark)] mb-2">
                        {step.title}
                    </h3>
                    <p className="text-sm text-gray-500 font-medium leading-relaxed max-w-[200px] mx-auto">
                        {step.description}
                    </p>
                </div>
                )
            })}
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default HowWeWork;