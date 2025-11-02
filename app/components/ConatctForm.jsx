"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Upload } from 'lucide-react';

// --- Color & Style Definitions ---
const ACCENT_PRIMARY = '#2DACE3'; // Light Blue (Primary Accent)
const ACCENT_SECONDARY = '#F6A25C'; // Orange (Secondary Accent/Button Highlight)
const ACCENT_BLUE_ACCENT = '#355694'; // Original Dark Blue for glow
const BORDER_DARK_BLACK = '#1a1a1a'; // Dark border for form/high contrast
const BORDER_SOFT_GRAY = '#d1d5db'; // Soft gray border for inputs/internal elements
const BORDER_DIVIDER_GRAY = '#4a5568'; // New, softer dark gray for the main divider
const BG_LIGHT_SECTION = '#f7f8fa'; // Very light cool gray background (The 'Descent Background')
const TEXT_DARK = '#1a1a1a'; // Dark text for contrast

// --- Framer Motion Variants ---

// Stagger container for a sequence of animations
const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

// Fade in and slide up (used for most elements)
const fadeInUp = {
  initial: { y: 40, opacity: 0 },
  whileInView: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 70,
      damping: 10,
    },
  },
};

// --- Reusable Components ---

const StatCard = ({ count, label }) => (
  <motion.div
    variants={fadeInUp}
    className="p-5 md:p-6 rounded-xl border shadow-md transition-all duration-500 hover:scale-[1.03] text-center cursor-pointer" // Added cursor-pointer for hover effect
    style={{
      backgroundColor: '#ffffff', // Clean white background
      borderColor: BORDER_SOFT_GRAY, // Soft border
    }}
  >
    <div className="text-4xl md:text-5xl font-extrabold mb-1" style={{ color: ACCENT_SECONDARY }}>
      {count}
    </div>
    <div className="text-sm uppercase tracking-wider font-semibold" style={{ color: TEXT_DARK }}>{label}</div>
  </motion.div>
);

const PartnerLogo = ({ name }) => {
  // Component for Alliances & Partnership Logos
  return (
    <motion.div
      variants={fadeInUp}
      className="flex items-center space-x-2 p-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-[1.05]"
      style={{
        backgroundColor: '#ffffff',
        border: `1px solid ${BORDER_SOFT_GRAY}`,
      }}
    >
      {/* Placeholder for actual SVG/Image logo */}
      <div
        className="w-4 h-4 rounded-full"
        style={{
          backgroundColor: ACCENT_PRIMARY,
          boxShadow: `0 0 8px ${ACCENT_PRIMARY}`, // Subtle glow
        }}
      ></div>
      <span className="text-base font-bold" style={{ color: TEXT_DARK }}>
        {name}
      </span>
    </motion.div>
  );
};

const ContactForm = () => {
  // Simple state for demonstration
  const [formData, setFormData] = React.useState({});
  const [isNdaChecked, setIsNdaChecked] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData, 'NDA:', isNdaChecked);
    // Add your actual form submission logic here
  };

  const InputField = ({ label, id, type = 'text', rows = 1 }) => (
    <div className="mb-4">
      <label htmlFor={id} className="text-sm font-medium sr-only" style={{ color: TEXT_DARK }}>
        {label}
      </label>
      {rows > 1 ? (
        <textarea
          id={id}
          rows={rows}
          placeholder={label}
          className="w-full p-3 mt-1 rounded-lg border focus:ring-2 focus:ring-opacity-50 transition-all focus:ring-blue-500" // Added focus ring for accessibility
          style={{
            backgroundColor: '#ffffff',
            borderColor: BORDER_SOFT_GRAY,
            color: TEXT_DARK,
            resize: 'vertical',
            boxShadow: '0 0 5px rgba(0, 0, 0, 0.05)',
            minHeight: '100px',
          }}
          onChange={(e) => setFormData({ ...formData, [id]: e.target.value })}
        ></textarea>
      ) : (
        <input
          type={type}
          id={id}
          placeholder={label}
          className="w-full p-3 mt-1 rounded-lg border focus:ring-2 focus:ring-opacity-50 transition-all focus:ring-blue-500"
          style={{
            backgroundColor: '#ffffff',
            borderColor: BORDER_SOFT_GRAY,
            color: TEXT_DARK,
            boxShadow: '0 0 5px rgba(0, 0, 0, 0.05)',
          }}
          onChange={(e) => setFormData({ ...formData, [id]: e.target.value })}
        />
      )}
    </div>
  );

  return (
    <motion.div
      variants={fadeInUp} // Applied motion variant to the form container
      className="p-6 md:p-8 lg:p-10 rounded-2xl shadow-2xl relative z-10 w-full"
      style={{
        backgroundColor: '#ffffff', // Pure white form background
        border: `1px solid ${BORDER_DARK_BLACK}`, // Dark border for contrast
        // Subtle, colored shadow for a premium look
        boxShadow: `0 15px 30px -10px rgba(45, 172, 227, 0.2), 0 0 10px rgba(0, 0, 0, 0.05)`,
      }}
    >
      <h3 className="text-3xl font-bold mb-6" style={{ color: TEXT_DARK }}>
        Start a Conversation
      </h3>
      <form onSubmit={handleSubmit}>
        <InputField label="Your Full Name" id="name" />
        <InputField label="Work Email" id="email" type="email" />
        <InputField label="Company / Organization" id="company" />
        <InputField label="Tell us about your project" id="details" rows={4} />

        {/* NDA and Attach File Row */}
        <div className="flex items-center justify-between mt-4 mb-8 text-sm">
          <label className="flex items-center cursor-pointer select-none" style={{ color: TEXT_DARK }}>
            <input
              type="checkbox"
              className="form-checkbox h-4 w-4 rounded transition duration-150 ease-in-out"
              style={{
                backgroundColor: '#ffffff',
                borderColor: BORDER_SOFT_GRAY,
                color: ACCENT_PRIMARY,
              }}
              checked={isNdaChecked}
              onChange={() => setIsNdaChecked(!isNdaChecked)}
            />
            <span className="ml-2 font-medium">Request NDA</span>
          </label>

          <a href="#" className="flex items-center font-medium transition-colors hover:opacity-80" style={{ color: ACCENT_PRIMARY }}>
            <Upload className="h-4 w-4 mr-1" />
            Attach File
          </a>
        </div>

        {/* Submit Button with Gradient and Hover Effect */}
        <motion.button
          type="submit"
          className="w-full text-white font-bold py-3 px-4 rounded-xl text-lg relative overflow-hidden group transition-all duration-300 ease-out shadow-lg"
          style={{
            backgroundImage: `linear-gradient(90deg, ${ACCENT_SECONDARY}, ${ACCENT_PRIMARY})`,
            boxShadow: `0 8px 25px rgba(246, 162, 92, 0.3)`, // Orange glow
          }}
          // Framer motion interactive styles
          whileHover={{ scale: 1.02, boxShadow: `0 12px 30px rgba(246, 162, 92, 0.5)` }}
          whileTap={{ scale: 0.98 }}
        >
          SUBMIT YOUR REQUEST
        </motion.button>
      </form>
    </motion.div>
  );
};

// --- Main Component ---
const ContactHeroSection = () => {
  return (
    <section
      className="py-16 sm:py-24 overflow-hidden relative"
      style={{
        fontFamily: 'Inter, sans-serif',
        backgroundColor: BG_LIGHT_SECTION, // Full width 'descent background'
        minHeight: '100vh',
        color: TEXT_DARK, // Global dark text color
      }}
    >
      {/* Background radial gradient glow for atmosphere */}
      <div
        className="absolute inset-0 z-0 opacity-10"
        style={{
          background: `radial-gradient(circle at 10% 20%, ${ACCENT_PRIMARY} 0%, transparent 30%), radial-gradient(circle at 90% 80%, ${ACCENT_BLUE_ACCENT} 0%, transparent 35%)`,
        }}
      ></div>

      {/* Content wrapper: Max width 90% (max-w-7xl) and centered (mx-auto) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 1. Left (Content) and Right (Form) Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-16">
          
          {/* LEFT COLUMN: Promotional Content */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, amount: 0.2 }} // Animation runs only once when entering viewport
            className="pt-4" // slight padding to align with sticky form on large screens
          >
            {/* Title */}
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-6xl font-extrabold my-4 leading-tight"
            >
              LET&apos;S BRING YOUR NEXT BIG IDEA TO <span style={{ color: ACCENT_SECONDARY }}>LIFE</span>
            </motion.h2>

            {/* Sub Content (2 Lines) */}
            <motion.p variants={fadeInUp} className="text-xl max-w-lg mb-4">
              Share your vision – we&apos;ll transform it into intelligent, scalable, and high-performance digital solutions.
            </motion.p>
            <motion.p variants={fadeInUp} className="text-lg max-w-lg mb-10 text-gray-600">
              Our team combines deep industry expertise with cutting-edge technology to deliver results that matter.
            </motion.p>

            {/* 4 Small Boxes (Content A -> Stat Cards) */}
            <motion.div
              variants={staggerContainer} // Nested stagger for the cards
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true, amount: 0.1 }}
              className="grid grid-cols-2 gap-4 max-w-xl"
            >
              <StatCard count="200+" label="Projects Delivered" />
              <StatCard count="150+" label="Global Clients" />
              <StatCard count="5" label="International Offices" />
              <StatCard count="50+" label="Years of Combined Experience" />
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN: Contact Form (Made 'sticky' to visually match height on scroll) */}
          <motion.div 
            className="lg:sticky lg:top-8 w-full"
            // The sticky property ensures the form stays in view or matches the top of the left column
          >
            <ContactForm />
          </motion.div>
        </div>

        {/* 2. Full Width Content (Alliances and Quote) - Below the two columns */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, amount: 0.1 }}
          className="w-full pt-12 mt-12"
          style={{ borderTop: `1px solid ${BORDER_DIVIDER_GRAY}` }} // Divider line
        >

          {/* Alliances & Partnerships */}
          <motion.div variants={fadeInUp} className="mb-12">
            <h3 className="text-lg uppercase tracking-widest font-semibold mb-6" style={{ color: ACCENT_PRIMARY }}>
              Alliances & Strategic Partnerships
            </h3>
            {/* Partnership logos wrapper */}
            <div className="flex flex-wrap gap-4">
              <PartnerLogo name="Microsoft" />
              <PartnerLogo name="Oracle" />
              <PartnerLogo name="AWS" />
              <PartnerLogo name="SAP" />
              <PartnerLogo name="Google Cloud" />
              <PartnerLogo name="Salesforce" />
            </div>
          </motion.div>

          {/* Last Mentioned Line */}
          <motion.p
            variants={fadeInUp}
            className="text-lg italic font-light mt-12 pt-4 border-t"
            style={{ color: ACCENT_PRIMARY, borderColor: BORDER_SOFT_GRAY }}
          >
            &quot;Trusted by Industry Leaders. Driven by Innovation. Ready for Your Challenge.&quot;
          </motion.p>

        </motion.div>
      </div>
    </section>
  );
};

export default ContactHeroSection;