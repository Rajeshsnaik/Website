"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Briefcase, 
  Cpu, 
  AppWindow, 
  Smartphone, 
  ShieldCheck, 
  Network, 
  RefreshCw, 
  Lock 
} from "lucide-react";

// Services Data - Sorted Alphabetically (A-Z)
const services = [
  {
    id: 1,
    title: "Cyber Security",
    path: "/services/cyber-security",
    description: "Comprehensive threat protection, risk assessment, and compliance strategies to safeguard digital assets.",
    icon: ShieldCheck,
  },
  {
    id: 2,
    title: "DevOps",
    path: "/services/devops",
    description: "Streamlining development and operations with CI/CD pipelines to accelerate delivery and improve software quality.",
    icon: RefreshCw,
  },
  {
    id: 3,
    title: "DevSecOps",
    path: "/services/devsecops",
    description: "Integrating security practices within the DevOps pipeline to ensure code is secure from inception to deployment.",
    icon: Lock,
  },
  {
    id: 4,
    title: "Enterprise Application",
    path: "/services/enterprise-application",
    description: "Scalable, robust software solutions designed to streamline complex business operations and enhance productivity.",
    icon: AppWindow,
  },
  {
    id: 5,
    title: "IT Consulting",
    path: "/services/it-consulting",
    description: "Strategic guidance to align technology with business goals, optimizing infrastructure and digital transformation roadmaps.",
    icon: Briefcase,
  },
  {
    id: 6,
    title: "Mobile Applications",
    path: "/services/mobile-applications",
    description: "Native and cross-platform mobile solutions delivering seamless user experiences on iOS and Android devices.",
    icon: Smartphone,
  },
  {
    id: 7,
    title: "Networking",
    path: "/services/networking",
    description: "Designing and maintaining secure, high-performance network infrastructures for reliable connectivity.",
    icon: Network,
  },
  {
    id: 8,
    title: "Product Engineering",
    path: "/services/product-engineering",
    description: "End-to-end product lifecycle management, from conceptualization and design to development and modernization.",
    icon: Cpu,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const iconFloatVariant = {
  animate: {
    y: [0, -6, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const ServicesWeProvide = () => {
  return (
    <section className="relative w-full py-12 md:py-16 overflow-hidden bg-white">
      
      {/* --- Background: Light Grey Mesh Pattern --- */}
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

      {/* Gradient subtle overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white pointer-events-none z-0"></div>

      <div className="container relative z-10 mx-auto px-4">
        
        {/* --- Header Section (Centered & Gradient) --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 max-w-4xl mx-auto"
        >
          {/* Gradient Heading */}
          <h2 
            className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6"
            style={{
              background: "var(--gradient-primary)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Services We Provide
          </h2>
          
          {/* Regular Font Paragraph */}
          <p className="text-lg text-gray-500 font-normal leading-relaxed opacity-80 max-w-2xl mx-auto">
            Empowering businesses with cutting-edge technology solutions, from core infrastructure to advanced application development.
          </p>
        </motion.div>


        {/* --- 8-Column Grid (Cards with Explicit Links) --- */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {services.map((item) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
            >
              <Link 
                href={item.path} 
                className="block h-full"
              >
                <div 
                  className="group relative p-8 rounded-[2rem] bg-white/60 backdrop-blur-lg border-2 border-white/50 shadow-lg transition-all duration-500 hover:shadow-2xl h-full flex flex-col"
                >
                  {/* Hover Border CSS */}
                  <style jsx>{`
                    .group:hover {
                      border-color: var(--color-primary-light);
                      transform: translateY(-10px);
                    }
                  `}</style>

                  {/* Icon Container (FIXED SIZE) */}
                  <div className="mb-6 w-16 h-16 flex items-center justify-center rounded-2xl bg-blue-50/50 group-hover:bg-blue-100/50 transition-colors duration-300">
                    <motion.div
                       variants={iconFloatVariant}
                       animate="animate"
                    >
                        <item.icon
                          size={32}
                          strokeWidth={1.5}
                          style={{ color: "var(--color-primary-light)" }}
                        />
                    </motion.div>
                  </div>

                  {/* Card Title */}
                  <h3 
                    className="text-xl font-bold mb-3 group-hover:text-[var(--color-primary-dark)] transition-colors"
                    style={{ color: "var(--color-primary-dark)" }}
                  >
                    {item.title}
                  </h3>

                  {/* Card Description */}
                  <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                    {item.description}
                  </p>

                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesWeProvide;