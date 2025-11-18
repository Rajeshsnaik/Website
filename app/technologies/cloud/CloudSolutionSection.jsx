"use client";

// components/CloudSolutionSection.jsx
import { useMemo } from 'react';
import { motion } from 'framer-motion';
import {
  Zap, // For Speed/Agility
  Layers, // For Flexibility/Models
  TrendingUp, // For Digital Transformation
  Cloud,
  HardDrive,
  Cpu,
  Server,
  Shuffle,
  Lock,
  Globe,
  Monitor,
  Database,
  Code,
  Smartphone,
  CheckCircle
} from 'lucide-react';

/**
 * 💡 Custom Colors Mapping (Tailwind config extension assumed)
 * primary-dark: #355694
 * primary-light: #2DACE3
 * accent-orange: #F6A25C
 */

const primaryDark = 'text-[#355694]';
const primaryLight = 'text-[#2DACE3]';
const accentOrange = 'text-[#F6A25C]';
const gradientPrimary = 'bg-gradient-to-br from-[#355694] to-[#2DACE3]';

const featurePillars = [
  {
    icon: Zap,
    title: 'Scale, Speed & Efficiency',
    description: 'Cloud solutions for high responsiveness and efficiency. We leverage the power of **AWS, Azure, and GCP** to optimize your operations.',
    details: [
      { name: 'SaaS', icon: Monitor, color: primaryLight, desc: 'Decreased maintenance, increased productivity.' },
      { name: 'PaaS', icon: Code, color: primaryDark, desc: 'Rapid design, deployment, and scaling.' },
      { name: 'IaaS', icon: Server, color: accentOrange, desc: 'Lower costs on storage, server, and maintenance.' },
    ],
  },
  {
    icon: Layers,
    title: 'Flexible Cloud Models',
    description: 'We help you adopt the right cloud architecture for your specific business needs, ensuring maximum security and efficiency.',
    details: [
      { name: 'Public Cloud', icon: Globe, color: primaryLight, desc: 'Full migration for dramatic cost savings.' },
      { name: 'Hybrid Cloud', icon: Lock, color: primaryDark, desc: 'Combine cloud and on-premises for sensitive data.' },
      { name: 'Multi-cloud', icon: Shuffle, color: accentOrange, desc: 'Seamless cooperation across multiple platforms.' },
    ],
  },
  {
    icon: TrendingUp,
    title: 'Digital Transformation Catalyst',
    description: 'Fuel your transformation with Big Data on the Cloud. We ensure continuous operation of your high-load systems.',
    details: [
      { name: 'Data Management', icon: Database, color: primaryLight, desc: 'Manage data for Machine Learning and Deep Learning models.' },
      { name: 'High-Load Systems', icon: Cpu, color: primaryDark, desc: 'Architecture, DevOps, Continuous Integration/Delivery (CI/CD).' },
      { name: 'Key Integrations', icon: Smartphone, color: accentOrange, desc: 'IoT, Blockchain, Mobile Apps, AR, and Customer Engagement.' },
    ],
  },
];

// Framer Motion Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Stagger the cards
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const CloudSolutionSection = () => {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="lg:text-center mb-12"
        >
          <p className={`text-lg font-semibold ${accentOrange}`}>
            Cloud Innovation Strategy
          </p>
          <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            <span className={primaryDark}>Blute Technologies:</span> Your Cloud Innovation Partner
          </h2>
          <p className="mt-4 max-w-3xl text-xl text-gray-500 lg:mx-auto">
            We deliver complete, **cost-effective enterprise application solutions**. Our expert cloud strategy eliminates innovation barriers, utilizing the agility and cost-benefits of the Cloud for design, development, and deployment.
          </p>
        </motion.div>

        <hr className="my-10 border-gray-100" />
        
        {/* Features Grid */}
        <motion.div
          className="mt-10 space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {featurePillars.map((pillar, index) => (
            <motion.div
              key={index}
              className="group relative flex flex-col p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 border border-gray-100"
              variants={itemVariants}
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className={`p-3 rounded-lg ${gradientPrimary} shadow-lg`}>
                  <pillar.icon className="h-8 w-8 text-white" aria-hidden="true" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {pillar.title}
                </h3>
              </div>
              
              <p className="mt-2 text-base text-gray-500 min-h-[50px]">
                {pillar.description}
              </p>

              {/* Detail Points */}
              <ul className="mt-6 space-y-4">
                {pillar.details.map((detail, dIndex) => (
                  <li key={dIndex} className="flex items-start">
                    <div className="flex-shrink-0">
                      <CheckCircle className={`h-6 w-6 ${detail.color}`} aria-hidden="true" />
                    </div>
                    <div className="ml-3 text-base text-gray-600">
                      <strong className="font-semibold text-gray-800">{detail.name}:</strong> {detail.desc}
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </div>
  );
};

export default CloudSolutionSection;