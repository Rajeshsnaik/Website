"use client";

// components/CompetitiveEdgeSection.jsx
import { motion } from 'framer-motion';
import { AiOutlineExperiment, AiOutlineTeam, AiOutlineCloudServer } from 'react-icons/ai'; 

const features = [
  {
    title: 'The IOT Innovation Lab',
    description:
      'Our dedicated IOT Centre of Excellence is a hub for ideation, incunation, and rapid prototyping of novel concepts, concepts. We transfrm cutting research into tangible, tangible, future-proof solutions.',
    icon: AiOutlineExperiment, 
  },
  {
    title: 'Trusted Technology Partners',
    description:
      'Strategic alliances empowering your enterprise with best-class solutions',
    icon: AiOutlineTeam, 
    partners: [
        'AWS', 'Azure', 'Microsoft Cloud', 'DELL', 'Google Cloud', 'Cisco', 'IBM', 'Accenture Cloud'
    ]
  },
  {
    title: 'The Ecosystem Advantage',
    description:
      'We offer true full-stack advantage. From enabling Hardware (Sensors, Tablets) to advanced Analytical Tools intufne Autplicative Mobile Appitions - Blute orchestrats your entire IOT journey',
    icon: AiOutlineCloudServer, 
    details: [
        { label: 'Analytical Tools', value: 'Analications' },
        { label: 'Cloud', value: 'Contegration' },
        { label: 'Connectivity', value: 'Enabling Hardware' },
    ]
  },
];

// Framer Motion Variants (Unchanged)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15,
    },
  },
};

// Card Component
const FeatureCard = ({ feature, index }) => {
    const cardBorderColor = 'var(--color-primary-light)'; 
    const IconComponent = feature.icon; 

    return (
      <motion.div
        variants={itemVariants}
        // Adjusted hover:shadow-[0_0_25px_rgba(45,172,227,0.7)] to a smaller, black-related shadow
        // Using a black shadow with reduced opacity and spread.
        className="relative flex flex-col p-6 sm:p-8 lg:p-10 rounded-xl bg-gray-100 shadow-2xl transition-all duration-300 hover:shadow-[0_4px_15px_rgba(0,0,0,0.2)]"
        style={{
            border: `1px solid rgba(45,172,227,0.2)`,
        }}
      >
        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-900">
          {feature.title}
        </h3>

        {/* Icon/Graphic Placeholder with Gradient Glow */}
        <div 
          className="w-16 h-16 sm:w-20 sm:h-20 p-2 mb-6 flex items-center justify-center rounded-lg"
          style={{
            background: 'rgba(45,172,227,0.1)',
            boxShadow: '0 0 15px rgba(45,172,227,0.5)',
          }}
        >
          <IconComponent 
             className="w-10 h-10 sm:w-12 sm:h-12" 
             style={{ color: cardBorderColor }}
             size={48} 
          />
        </div>

        {/* Main Description */}
        <p className="text-sm text-gray-700 mb-6 flex-grow">
          {feature.description}
        </p>

        {/* Dynamic Content based on the feature */}
        {feature.partners && (
            <div className="mt-4 grid grid-cols-3 sm:grid-cols-4 gap-2">
                {feature.partners.map((partner, pIndex) => (
                    <div 
                        key={pIndex} 
                        className="p-1 sm:p-2 border rounded text-xs text-center font-medium"
                        style={{
                            borderColor: 'rgba(45,172,227,0.3)',
                            color: 'var(--color-accent-orange)', 
                        }}
                    >
                        {partner}
                    </div>
                ))}
            </div>
        )}

        {feature.details && (
            <div className="mt-4 space-y-3">
                {feature.details.map((detail, dIndex) => (
                    <div key={dIndex} className="flex justify-between items-center text-sm">
                        <span className="text-gray-600 font-medium">{detail.label}</span>
                        <span 
                            className="font-bold tracking-wider" 
                            style={{ color: cardBorderColor }}
                        >
                            {detail.value}
                        </span>
                    </div>
                ))}
            </div>
        )}
      </motion.div>
    );
};


// Main Component (Unchanged)
const WhyBlute = () => {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Why Blute: <span 
                style={{ 
                    background: 'var(--gradient-primary)', 
                    WebkitBackgroundClip: 'text', 
                    WebkitTextFillColor: 'transparent' 
                }}
            >
                The Competitive Edge
            </span>
          </h2>
          <p className="mt-4 text-lg text-gray-700">
            Beyond Capabilities: Our Unique Approach to Your IOT Success
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }} 
        >
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyBlute;