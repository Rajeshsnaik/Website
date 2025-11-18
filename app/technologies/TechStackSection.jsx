"use client";

import React from 'react';
import { motion } from 'framer-motion';

// --- TechPill Component (Icon Presentation) ---

/**
 * Reusable component that uses an <img> tag for icons from the public folder.
 */
const TechPill = ({ name, iconPath }) => {
    const imgSrc = `/images/${iconPath}`;
    const primaryLight = "#2DACE3"; 

    return (
        <motion.div
            // Framer Motion Props for the hover effect
            whileHover={{ scale: 1.08 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            
            // Tailwind CSS Styling: Column layout
            className="flex flex-col items-center justify-start text-gray-800 p-2 cursor-pointer
                       w-[100px] sm:w-[130px] transition-transform duration-300 group"
        >
            {/* Icon Container: Circular background and shadow */}
            <div 
                className="w-[90px] h-[90px] sm:w-[100px] sm:h-[100px] rounded-full bg-white flex items-center justify-center 
                           shadow-md ring-1 ring-inset ring-gray-100/50 mb-3 
                           group-hover:shadow-xl transition-shadow duration-300"
            >
                {iconPath ? (
                    <img 
                        src={imgSrc} 
                        alt={`${name} Icon`} 
                        className="w-12 h-12 object-contain" 
                    />
                ) : (
                    <div className="text-sm font-semibold text-gray-400">?</div>
                )}
            </div>
            
            {/* Text Name */}
            <span className="text-xs sm:text-sm font-semibold text-center whitespace-nowrap text-gray-700 group-hover:text-primary-dark transition-colors duration-300">
                {name}
            </span>
        </motion.div>
    );
};


// --- Data Arrays (Paths added instead of components) ---

const techStackData = {
  enterprise: [ 
    { name: 'Java', iconPath: 'client-logo-2.png' }, 
    { name: '.NET Core', iconPath: 'client-logo-3.png' }, 
    { name: 'Python', iconPath: 'python.png' }, 
    { name: 'Node.js', iconPath: 'nodejs.png' }, 
    { name: 'SQL Server', iconPath: 'sqlserver.png' }, 
    { name: 'PostgreSQL', iconPath: 'postgresql.png' },
    { name: 'MongoDB', iconPath: 'mongodb.png' }, 
    { name: 'Kafka', iconPath: 'kafka.png' }, 
    { name: 'RabbitMQ', iconPath: 'rabbitmq.png' }, 
    { name: 'Docker', iconPath: 'docker.png' }, 
    { name: 'Kubernetes', iconPath: 'kubernetes.png' }, 
    { name: 'SAP', iconPath: 'sap.png' },
    { name: 'Oracle EBS', iconPath: 'oracle.png' }, 
    { name: 'Salesforce', iconPath: 'salesforce.png' }, 
    { name: 'Microservices', iconPath: 'microservices.png' }, 
    { name: 'CI/CD (Jenkins)', iconPath: 'jenkins.png' }, 
    { name: 'Terraform', iconPath: 'terraform.png' }, 
    { name: 'Ansible', iconPath: 'ansible.png' }, 
    { name: 'Power BI', iconPath: 'powerbi.png' }, 
    { name: 'Tableau', iconPath: 'tableau.png' } 
  ],
  webDev: [
    { name: 'Next.js', iconPath: 'nextjs.png' }, 
    { name: 'React', iconPath: 'react.png' }, 
    { name: 'Angular', iconPath: 'angular.png' }, 
    { name: 'Vue.js', iconPath: 'vuejs.png' }, 
    { name: 'Tailwind CSS', iconPath: 'tailwindcss.png' }, 
    { name: 'Sass', iconPath: 'sass.png' }, 
    { name: 'Django', iconPath: 'django.png' }, 
    { name: 'Laravel', iconPath: 'laravel.png' }, 
    { name: 'Gatsby', iconPath: 'gatsby.png' }, 
    { name: 'Strapi', iconPath: 'strapi.png' } 
  ],
  iot: [
    { name: 'C/C++', iconPath: 'cpp.png' }, 
    { name: 'Python (IoT)', iconPath: 'python.png' }, 
    { name: 'Raspberry Pi', iconPath: 'rpi.png' }, 
    { name: 'Arduino', iconPath: 'arduino.png' }, 
    { name: 'AWS IoT Core', iconPath: 'aws.png' }, 
    { name: 'Azure IoT Hub', iconPath: 'azure.png' },
    { name: 'MQTT', iconPath: 'mqtt.png' }, 
    { name: 'Zigbee', iconPath: 'zigbee.png' }, 
    { name: 'Bluetooth LE', iconPath: 'ble.png' }, 
    { name: 'Node-RED', iconPath: 'nodered.png' } 
  ],
  blockchain: [
    { name: 'Solidity', iconPath: 'solidity.png' }, 
    { name: 'Ethereum', iconPath: 'ethereum.png' }, 
    { name: 'Hyperledger', iconPath: 'hyperledger.png' } 
  ],
  mobile: [
    { name: 'React Native', iconPath: 'react.png' }, 
    { name: 'Flutter', iconPath: 'flutter.png' }, 
    { name: 'Swift/iOS', iconPath: 'swift.png' }, 
    { name: 'Kotlin/Android', iconPath: 'kotlin.png' }, 
    { name: 'Xamarin', iconPath: 'xamarin.png' }, 
    { name: 'Dart', iconPath: 'dart.png' }, 
    { name: 'Firebase', iconPath: 'firebase.png' }, 
    { name: 'Amplify', iconPath: 'amplify.png' } 
  ],
  aiMl: [
    { name: 'TensorFlow', iconPath: 'tensorflow.png' }, 
    { name: 'PyTorch', iconPath: 'pytorch.png' }, 
    { name: 'Scikit-learn', iconPath: 'scikitlearn.png' } 
  ],
  arVr: [
    { name: 'Unity', iconPath: 'unity.png' }, 
    { name: 'Unreal Engine', iconPath: 'unreal.png' }, 
    { name: 'ARKit', iconPath: 'arkit.png' }, 
    { name: 'ARCore', iconPath: 'arcore.png' } 
  ],
};


// --- 3. TechSection Component (The Wrapper with Scroll Animation) ---

/**
 * Renders a single category section, with Framer Motion scroll animation.
 */
const TechSection = ({ title, data }) => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="mb-16" // 🎯 FIX: Increased bottom margin for more separation
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      {/* Sub-section Heading */}
      <h3 className="text-xl font-normal mb-6 text-gray-600 border-b border-gray-400/30 pb-2">
        {title}
      </h3>
      
      <motion.div
        className="flex flex-wrap gap-y-6 gap-x-4 justify-center sm:justify-start"
        variants={containerVariants}
      >
        {data.map((tech, index) => (
          <motion.div key={index} variants={itemVariants}>
            <TechPill name={tech.name} iconPath={tech.iconPath} />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};


// --- 4. Main Component Export (Header Fixed) ---

const TechStackSection = () => {
    const primaryLight = "#2DACE3";

    return (
        <section className="px-4 sm:px-6 lg:px-8 pb-1 bg-gray-50">

            
            {/* Section Header */}
            <div className="text-center mb-12">
                
                {/* 1. "The Tech Stacks" (Small, Uppercase, Light Color) */}
                <motion.span 
                    className="text-sm font-semibold uppercase tracking-widest block"
                    style={{ color: primaryLight }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{ duration: 0.5 }}
                >
                    The Tech Stacks
                </motion.span>
                
                {/* 2. "Our Deep Expertise" (Big, Bold, Gradient) */}
                <motion.span
                    className="mt-2 text-4xl sm:text-5xl lg:text-5xl font-extrabold text-gray-900 block"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.7 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    <span>
                        Our Deep Expertise
                    </span>
                </motion.span>
                
            </div>

            <div className="max-w-7xl mx-auto">
                
                <TechSection
                    title="Enterprise Software Development | Big Data | Data Analytics | Cloud Computing"
                    data={techStackData.enterprise}
                />
                
                <TechSection
                    title="Web Development"
                    data={techStackData.webDev}
                />

                <TechSection
                    title="Internet of Things (IoT) Development"
                    data={techStackData.iot}
                />

                <TechSection
                    title="Blockchain Development"
                    data={techStackData.blockchain}
                />
                
                <TechSection
                    title="Mobile Application Development"
                    data={techStackData.mobile}
                />

                <TechSection
                    title="Artificial Intelligence/Machine Learning"
                    data={techStackData.aiMl}
                />

                <TechSection
                    title="Augmented & Virtual Reality Development"
                    data={techStackData.arVr}
                />
                
            </div>
        </section>
    );
};

export default TechStackSection;