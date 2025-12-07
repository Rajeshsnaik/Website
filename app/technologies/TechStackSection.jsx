"use client";

import React from 'react';
import { motion } from 'framer-motion';

// --- Data Arrays ---
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


// --- TechPill Component (Redesigned) ---
const TechPill = ({ name, iconPath }) => {
    // Assuming images are in public/images/
    const imgSrc = `/images/${iconPath}`;

    return (
        <motion.div
            // Hover Animation: Lift & Border Color Change
            whileHover={{ y: -5 }}
            className="group relative flex flex-col items-center justify-center p-4 rounded-2xl bg-white border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-transparent"
        >
            {/* Hover Border Gradient Trick */}
            <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[var(--color-primary-light)] transition-colors duration-300 pointer-events-none"></div>

            {/* Icon Container */}
            <div 
                className="w-14 h-14 rounded-full bg-blue-50/50 flex items-center justify-center mb-3 group-hover:bg-blue-100/50 transition-colors duration-300"
            >
                {iconPath ? (
                    <img 
                        src={imgSrc} 
                        alt={`${name} Icon`} 
                        className="w-8 h-8 object-contain"
                        loading="lazy" 
                    />
                ) : (
                    <div className="text-xs font-bold text-gray-400">?</div>
                )}
            </div>
            
            {/* Text Name */}
            <span 
                className="text-xs font-bold text-center text-gray-600 group-hover:text-[var(--color-primary-dark)] transition-colors duration-300"
            >
                {name}
            </span>
        </motion.div>
    );
};


// --- TechSection Component (Category Wrapper) ---
const TechSection = ({ title, data }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };
  
  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
<div className="">
  <div className="flex items-center gap-3 mb-4">

        <h3 className="text-xl md:text-2xl font-bold text-[var(--color-primary-dark)]">
            {title}
        </h3>
        <div className="h-px flex-grow bg-gray-200"></div>
      </div>
      
      {/* Grid Layout for Pills */}
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {data.map((tech, index) => (
          <motion.div key={index} variants={itemVariants}>
            <TechPill name={tech.name} iconPath={tech.iconPath} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};


// --- Main Component ---
const TechStackSection = () => {
    return (
        <section className="relative w-full py-24 md:py-32 overflow-hidden bg-white">
            
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

            
            <div className="container relative z-10 mx-auto px-4">
                
                {/* Section Header */}
                <motion.div 
                    className="text-center mb-16 max-w-4xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                   
                    
                    {/* Gradient Heading */}
                    <h2 
                        className="text-4xl md:text-5xl font-extrabold tracking-tight"
                        style={{
                            background: "var(--gradient-primary)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                        }}
                    >
                        Our Deep Expertise
                    </h2>
                </motion.div>

                {/* Content Sections */}
                <div className="max-w-7xl mx-auto">
                    
                    <TechSection
                        title="Enterprise Software & Big Data"
                        data={techStackData.enterprise}
                    />
                    
                    <TechSection
                        title="Web Development"
                        data={techStackData.webDev}
                    />

                    <TechSection
                        title="Internet of Things (IoT)"
                        data={techStackData.iot}
                    />

                    <TechSection
                        title="Blockchain Development"
                        data={techStackData.blockchain}
                    />
                    
                    <TechSection
                        title="Mobile Application"
                        data={techStackData.mobile}
                    />

                    <TechSection
                        title="AI & Machine Learning"
                        data={techStackData.aiMl}
                    />

                    <TechSection
                        title="AR / VR Development"
                        data={techStackData.arVr}
                    />
                    
                </div>
            </div>
        </section>
    );
};

export default TechStackSection;