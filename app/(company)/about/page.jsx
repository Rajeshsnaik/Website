"use client";
import React from 'react';
import { motion } from 'framer-motion';
// NOTE: Assuming you have access to icons (e.g., from react-icons/fa or a custom component)
// For demonstration, these are placeholders:
const Icon = ({ children, className }) => <div className={className}>{children}</div>;
const FaCode = ({ className }) => <Icon className={className}>{"</>"}</Icon>;
const FaRocket = ({ className }) => <Icon className={className}>🚀</Icon>;
const FaLightbulb = ({ className }) => <Icon className={className}>💡</Icon>;
const FaUsers = ({ className }) => <Icon className={className}>👥</Icon>;
const FaGlobe = ({ className }) => <Icon className={className}>🌐</Icon>;
const FaCloud = ({ className }) => <Icon className={className}>☁️</Icon>;
const FaLaptop = ({ className }) => <Icon className={className}>💻</Icon>;
const FaCube = ({ className }) => <Icon className={className}>🧊</Icon>;
const FaVrCardboard = ({ className }) => <Icon className={className}>👓</Icon>;
const FaBrain = ({ className }) => <Icon className={className}>🧠</Icon>;

// --- Framer Motion Configuration ---

// Parent container animation for staggered children
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

// Item animation for fade-in and subtle lift
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};


const STATS = [
    { value: "2+", label: "Years in Operation", icon: FaRocket },
    { value: "10+", label: "Global Clients", icon: FaGlobe },
    { value: "25+", label: "Expert Engineers", icon: FaUsers },
    { value: "2", label: "Office Locations", icon: FaCode },
];

const EXPERTISE_AREAS = [
    { title: "Internet of Things (IoT)", icon: FaCube, description: "Interconnected smart devices and distributed sensor data applications." },
    { title: "Cognitive Computing (AI/ML)", icon: FaBrain, description: "Cloud-based AI models, machine learning algorithms, and data analysis." },
    { title: "Blockchain (DLT)", icon: FaCode, description: "Public/private blockchains, distributed transaction platforms, and smart contracts." },
    { title: "Extended Reality (AR/VR)", icon: FaVrCardboard, description: "Mixed reality applications, industrial AR/VR solutions, and 3D modeling." },
    { title: "Customer Experience (UI/UX)", icon: FaLaptop, description: "UI/Front-end design, CX digital journeys, and low-code mobile platforms." },
    { title: "Cloud Computing", icon: FaCloud, description: "Scalable and integrated solutions to digitally transform your business." },
];

export default function AboutBlute() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* 1. Hero Section - Animated Header */}
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="pt-32 pb-24 text-white bg-blue-900 shadow-xl"
      >
        <div className="container mx-auto px-6 max-w-7xl">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4">
            We are <span className="text-yellow-400">Blute Technologies.</span>
          </h1>
          <p className="max-w-3xl text-xl font-light opacity-80">
            A leading IT services company, digital transformation, and outsourcing partner, dedicated to helping enterprises simplify, strengthen, and transform their business with efficiency and innovation.
          </p>
        </div>
      </motion.header>

      {/* 2. Mission & Vision Section */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={container}
        className="py-20 bg-white"
      >
        <div className="container mx-auto px-6 max-w-7xl">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-16">
            Our Vision: Orchestrating Innovation
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div variants={item} className="p-8 border-l-4 border-yellow-500 bg-gray-50 rounded-lg shadow-md">
              <FaLightbulb className="text-4xl text-yellow-500 mb-4" />
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Vision</h3>
              <p className="text-gray-600">
                To accelerate the adoption of cutting-edge technologies, untangle the complex issues that emerge during digital transformation, and orchestrate ongoing innovation for our partners worldwide.
              </p>
            </motion.div>
            <motion.div variants={item} className="p-8 border-l-4 border-yellow-500 bg-gray-50 rounded-lg shadow-md">
              <FaRocket className="text-4xl text-yellow-500 mb-4" />
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Mission</h3>
              <p className="text-gray-600">
                To lead the process from ideation and concept to delivery, providing ongoing maintenance and support to enhance business growth with transformative, enterprise-class solutions that create reliable competitive advantage.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* 3. Stats Section - Animated Numbers */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
        variants={container}
        className="py-16 bg-blue-50"
      >
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {STATS.map((stat, index) => (
              <motion.div
                key={index}
                variants={item}
                className="flex flex-col items-center p-4"
              >
                <stat.icon className="text-6xl text-blue-600 mb-3" />
                <p className="text-5xl font-extrabold text-blue-900">{stat.value}</p>
                <p className="text-lg text-gray-600 mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
      
      {/* 4. Core Expertise Section - Cards with Hover Effects */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-4">
            Our Centers of Excellence
          </h2>
          <p className="text-xl text-center text-gray-600 mb-16 max-w-4xl mx-auto">
            We leverage six dedicated centers of excellence and innovation labs to provide highly customized, scalable solutions.
          </p>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            variants={container}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {EXPERTISE_AREAS.map((area, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ scale: 1.05, boxShadow: "0 10px 15px rgba(0, 0, 0, 0.1)" }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-white p-6 rounded-xl border border-gray-100 shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-yellow-100 rounded-full mr-4">
                    <area.icon className="text-2xl text-yellow-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">{area.title}</h3>
                </div>
                <p className="text-gray-600">
                  {area.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5. Services Overview/CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-6 max-w-7xl text-center">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-4xl font-bold mb-4"
            >
                Start Your Digital Journey Today
            </motion.h2>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-xl font-light mb-8 max-w-3xl mx-auto opacity-90"
            >
                From IT Consulting and Product Engineering to Cyber Security and DevOps, our comprehensive services cover the entire technology lifecycle.
            </motion.p>
            <motion.a
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 150, delay: 0.4 }}
                viewport={{ once: true }}
                href="/contact"
                className="inline-block px-10 py-4 bg-yellow-500 text-blue-900 text-lg font-semibold rounded-full hover:bg-yellow-400 transition duration-300 transform hover:scale-105 shadow-2xl"
            >
                Talk to Our Team
            </motion.a>
        </div>
      </section>

    </div>
  );
}