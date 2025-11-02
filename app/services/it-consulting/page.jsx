'use client'; // CRITICAL: This directive ensures Framer Motion and all interactive components run client-side.

import {
  motion
} from 'framer-motion';
import {
  FaArrowRight,
  FaCubes,
  FaLightbulb,
  FaChartLine,
  FaShieldAlt,
  FaRulerCombined,
  FaCode,
  FaProjectDiagram,
  FaRobot,
  FaVrCardboard,
  FaLink,
  FaDatabase,
  FaWifi,
  FaCloud
} from 'react-icons/fa';

// --- Brand Colors and Animation Variants ---
const colors = {
  darkBlue: '#355694',
  lightBlue: '#2DACE3',
  orange: '#F6A25C',
  // Lighter shades for the hero background to reduce intensity
  lightenedDarkBlue: '#5B79B3',
  lightenedLightBlue: '#5EC9EE',
};

const easing = [0.6, -0.05, 0.01, 0.99];

const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing
    },
  },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    },
  },
};

// --- Data Structures ---

const servicesData = [
  // 1. Enterprise Architecture Advisory (Expanded content used for new section)
  {
    icon: FaRulerCombined,
    title: "Enterprise Architecture Advisory",
    longDesc: "Our Enterprise Architecture experts can help you make the transition from outdated and ineffective IT delivery systems and architectures to a cloud-based infrastructure that streamlines delivery and allows for implementation of new technologies into your software strategy.",
    image: "https://placehold.co/800x400/355694/FFFFFF?text=Enterprise+Architecture"
  },
  // 2. IT Strategy & New Technology Consulting (Expanded content used for new section)
  {
    icon: FaLightbulb,
    title: "IT Strategy & New Technology Consulting",
    longDesc: "Today, you need to ensure the consistent delivery of high-quality IT products and services for your enterprise workflow and your customers. You also need to implement new technologies to stay competitive and meet the demands of modern users. Our IT solutions consulting will help your strike the balance between these two objectives, ensuring they don’t conflict between one another.",
    image: "https://placehold.co/800x400/2DACE3/FFFFFF?text=IT+Strategy"
  },
  // 3. Software Portfolio Consulting (Expanded content used for new section)
  {
    icon: FaCode,
    title: "Software Portfolio Consulting",
    longDesc: "Our IT consulting advisors will conduct a deep analysis of how your business and employees use your existing enterprise software, as well as of your enterprise mobile strategy. Then, they will provide suggestions for the required changes, new developments, and integration of third-party solutions to remove the existing roadblocks.",
    image: "https://placehold.co/800x400/F6A25C/FFFFFF?text=Software+Portfolio"
  },
  // Remaining services data (not used in ServicesHighlight section but maintained for context)
  {
    icon: FaProjectDiagram,
    title: "Digital Transformation Planning",
    shortDesc: "A structured approach to transforming core business processes using digital capabilities.",
    fullDesc: "From ideation to execution, we guide your full digital transformation journey, focusing on customer experience, operational agility, and new revenue streams.",
  },
];


const technologiesData = [{
  icon: FaCloud,
  title: "Cloud Strategy (Hybrid/Multi)",
  desc: "Leverage scalable and flexible cloud environments tailored to your enterprise needs.",
}, {
  icon: FaLink,
  title: "Blockchain & Distributed Ledger",
  desc: "Consulting on secure, transparent, and efficient decentralized systems for various industries.",
}, {
  icon: FaWifi,
  title: "IoT & Smart Systems Integration",
  desc: "Integrating connected devices and data streams for real-time insights and operational automation.",
}, {
  icon: FaRobot,
  title: "AI/ML Adoption & Strategy",
  desc: "Strategic implementation of Artificial Intelligence to automate processes and unlock new business insights.",
}, {
  icon: FaVrCardboard,
  title: "AR/VR Enterprise Solutions",
  desc: "Consulting on immersive technologies for training, collaboration, and enhanced customer experiences.",
}, {
  icon: FaDatabase,
  title: "Big Data & Analytics Roadmaps",
  desc: "Turning vast amounts of raw data into actionable intelligence and competitive advantage.",
}, ];

const processSteps = [{
  icon: FaCubes,
  title: "Analysis & Discovery",
  desc: "Deep dive into your current IT landscape, business processes, and strategic challenges.",
  color: colors.darkBlue
}, {
  icon: FaLightbulb,
  title: "Strategy & Roadmap",
  desc: "Develop a prioritized, phased roadmap detailing technology shifts and investment areas.",
  color: colors.lightBlue
}, {
  icon: FaChartLine,
  title: "Implementation & Performance",
  desc: "Oversee execution, track KPIs, and ensure solutions deliver expected business outcomes.",
  color: colors.orange
}, {
  icon: FaArrowRight,
  title: "Continuous Improvement",
  desc: "Establish governance and feedback loops for ongoing optimization and agility.",
  color: colors.darkBlue
}, ];

// --- Components ---

// 1. Hero Section Component
const HeroSection = () => {
  return (
    <div className="relative overflow-hidden pt-32 pb-24 md:pt-48 md:pb-32" style={{ background: `linear-gradient(135deg, ${colors.lightenedDarkBlue} 0%, ${colors.lightenedLightBlue} 100%)` }}>
      {/* Background Image Placeholder */}
      <div className="absolute inset-0 opacity-10 mix-blend-lighten pointer-events-none">
        <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('/images/it-consulting-hero-placeholder.webp')" }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Pill/Button */}
        <motion.p
          className="inline-flex items-center text-sm font-semibold mb-4 py-1 px-3 rounded-full text-white"
          style={{ backgroundColor: colors.orange }}
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Services <FaArrowRight className="mx-2 w-3 h-3" /> IT Consulting
        </motion.p>

        <motion.div variants={stagger} initial="initial" animate="animate">
          {/* Headline */}
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-4"
            variants={fadeInUp}
          >
            IT Consulting Services
          </motion.h1>

          {/* Sub-heading & Intro */}
          <motion.h2
            className="text-xl sm:text-2xl lg:text-3xl font-light text-white opacity-90 mb-6"
            variants={fadeInUp}
          >
            Strategic guidance to transform your business through technology.
          </motion.h2>

          <motion.p
            className="mt-4 max-w-3xl text-lg text-white opacity-80"
            variants={fadeInUp}
          >
            Blute Technologies helps businesses navigate complex digital challenges. We translate your business vision into a scalable, high-performing IT architecture, ensuring your technology investments drive competitive advantage and sustainable growth.
          </motion.p>

          {/* Call to Action Button */}
          <motion.div
            className="mt-8"
            variants={fadeInUp}
          >
            <motion.a
              href="#cta"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white shadow-lg"
              style={{ backgroundColor: colors.orange }}
              whileHover={{ scale: 1.05, backgroundColor: '#FFB87A' }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Request a Consultation
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

// 2. Services Highlight Section
const ServicesHighlight = () => {
  const serviceCards = servicesData.slice(0, 3);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Small Heading and Sub-Paragraphs - ALIGNED CENTER */}
        <h3 className="text-sm font-semibold uppercase tracking-wider mb-2 text-center" style={{ color: colors.darkBlue }}>
          Our Services
        </h3>
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 mb-6 text-center">
          Focused IT Advisory for Complex Challenges
        </h2>

        <div className="max-w-4xl text-lg text-gray-600 space-y-4 mb-16 mx-auto">
          <p>
            We don't just offer advice; we partner with you to implement real, measurable change. Our consulting approach is rooted in deep industry experience, translating high-level strategy into tangible technology roadmaps.
          </p>
          <p>
            From modernizing legacy systems to adopting bleeding-edge AI, our team ensures every technology choice aligns with your long-term vision, maximizes ROI, and minimizes operational disruption.
          </p>
        </div>

        {/* Dynamic 3-Card Grid with Hover Image/Text Swap */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {serviceCards.map((item, index) => (
            <motion.div
              key={item.title}
              className="group relative h-[400px] rounded-xl shadow-xl overflow-hidden cursor-pointer"
              whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Image Background (Full Width/Height) */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url(${item.image})` }}
              />

              {/* Gradient Overlay for Readability (Visible Always) */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />

              {/* Title (Visible First, Fades on Hover) */}
              <div className="absolute inset-0 flex items-end p-6 z-10 transition-opacity duration-300 group-hover:opacity-0">
                <h4 className="text-2xl font-bold text-white">
                  {item.title}
                </h4>
              </div>

              {/* Paragraph Overlay (Visible on Hover) - TEXT SIZE REDUCED ON HOVER */}
              <motion.div
                className="absolute inset-0 p-6 z-20 flex items-center bg-gray-900/95"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <div className="text-white">
                  <item.icon className="w-10 h-10 mb-4" style={{ color: colors.orange }} />
                  <h4 className="text-xl font-bold mb-3" style={{ color: colors.lightBlue }}>
                    {item.title}
                  </h4>
                  <p className="text-base font-light">
                    {item.longDesc}
                  </p>
                </div>
              </motion.div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// 3. Solutions & Technologies Spotlight Component
const TechnologySpotlight = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-3xl font-extrabold tracking-tight text-gray-900 text-center mb-4">
          Solutions & Emerging Technology Expertise
        </h3>
        <p className="text-xl text-gray-500 text-center max-w-3xl mx-auto mb-12">
          Future-proofing your business by strategically adopting the next wave of innovation.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {technologiesData.map((tech, index) => (
            <motion.div
              key={tech.title}
              className="flex flex-col items-center text-center p-4 rounded-lg hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <tech.icon className="w-10 h-10 mb-3" style={{ color: colors.lightBlue }} />
              <h4 className="text-lg font-semibold mb-1 text-gray-900">
                {tech.title}
              </h4>
              <p className="text-sm text-gray-500">
                {tech.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// 4. Process / How We Work Component
const ProcessTimeline = () => {
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: {
      opacity: 0,
      y: 100
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-3xl font-extrabold tracking-tight text-gray-900 text-center mb-16">
          Our Proven IT Consulting Process
        </h3>

        <motion.div
          className="relative flex flex-col md:flex-row justify-between items-start space-y-12 md:space-y-0 md:space-x-4 lg:space-x-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
        >
          {/* Horizontal Line Connector and Alignment FIX */}
          <div className="hidden md:block absolute w-full top-[31px] h-0.5 bg-gray-200 z-0 px-12" />

          {processSteps.map((step, index) => (
            <motion.div
              key={step.title}
              className="flex flex-col items-center text-center max-w-xs p-4 z-10 w-full"
              variants={item}
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mb-4 text-white shadow-lg relative"
                style={{ backgroundColor: step.color }}
              >
                <step.icon className="w-8 h-8" />
                {/* Connector Dot ensures the dot is centered on the timeline */}
                <span className="absolute w-3 h-3 rounded-full border-2 border-white" style={{ backgroundColor: step.color }} />
              </div>

              <span className="text-sm font-bold uppercase mb-1" style={{ color: colors.orange }}>
                Step {index + 1}
              </span>
              <h4 className="text-xl font-bold mb-2 text-gray-900">
                {step.title}
              </h4>
              <p className="text-gray-600">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// 5. Call to Action Component
const CallToAction = () => {
  return (
    <section id="cta" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-10 rounded-xl text-center shadow-2xl" style={{ backgroundColor: colors.darkBlue }}>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">
            Current state of IT does not align with your business strategy?
          </h3>
          <p className="text-xl text-white opacity-90 mb-8">
            Request our IT consulting services now. We'll help define your future-state architecture.
          </p>
          <motion.a
            href="#"
            className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-lg text-white shadow-xl transition duration-300"
            style={{ backgroundColor: colors.orange }}
            whileHover={{ scale: 1.05, backgroundColor: '#FFB87A' }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Get Started <FaArrowRight className="ml-3 w-4 h-4" />
          </motion.a>
        </div>
      </div>
    </section>
  );
};

// --- Main Page Component ---
const ITConsultingPage = () => {
  return (
    <div className="ITConsultingPage antialiased">
      
      {/* 1. Hero Section */}
      <HeroSection />

      <hr className="my-0 border-t border-gray-100" />

      {/* 2. Services Highlight Section */}
      <ServicesHighlight />

      <hr className="my-0 border-t border-gray-100" />

      {/* 3. Solutions & Technologies Spotlight */}
      <TechnologySpotlight />

      <hr className="my-0 border-t border-gray-100" />

      {/* 4. Process / How We Work */}
      <ProcessTimeline />

      <hr className="my-0 border-t border-gray-100" />

      {/* 5. Call to Action */}
      <CallToAction />
    </div>
  );
};

export default ITConsultingPage;