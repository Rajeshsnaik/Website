"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';

// --- Configuration and Data ---
const STATS_DATA = [
  { value: "10+", label: "Years of Experience", icon: "🗓️" },
  { value: "2", label: "Global Offices", icon: "🏢" },
  { value: "20+", label: "Satisfied Clients", icon: "🤝" },
];

const LOGO_DATA = [
  { id: 1, name: "Partner Alpha", url: "https://placehold.co/100x50/355694/ffffff?text=Partner+1" },
  { id: 2, name: "Partner Beta", url: "https://placehold.co/100x50/2DACE3/000000?text=Partner+2" },
  { id: 3, name: "Partner Gamma", url: "https://placehold.co/100x50/F6A25C/000000?text=Partner+3" },
  { id: 4, name: "Partner Delta", url: "https://placehold.co/100x50/355694/ffffff?text=Partner+4" },
  { id: 5, name: "Partner Epsilon", url: "https://placehold.co/100x50/2DACE3/000000?text=Partner+5" },
  { id: 6, name: "Partner Zeta", url: "https://placehold.co/100x50/F6A25C/000000?text=Partner+6" },
];

// Custom Colors mapped to Tailwind (using direct hex for accuracy)
const PRIMARY_DARK = '#355694';
const PRIMARY_LIGHT = '#2DACE3';
const ACCENT_ORANGE = '#F6A25C';

// --- Custom Components ---

// A visually distinct input field
// Note: Input text color remains black/gray for readability, regardless of section background.
const CustomInput = ({ id, label, type = 'text', placeholder, isTextArea = false, value, onChange }) => (
  <div className="flex flex-col space-y-1"> {/* Slightly reduced space-y here */}
    <label htmlFor={id} className="text-sm font-medium text-gray-700">
      {label}
    </label>
    {isTextArea ? (
      <textarea
        id={id}
        name={id}
        placeholder={placeholder}
        rows="3" /* Reduced from 4 to 3 */
        className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400 transition duration-200 resize-none shadow-sm" /* py-2 for reduced height */
        required
        value={value}
        onChange={onChange}
      ></textarea>
    ) : (
      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400 transition duration-200 shadow-sm" /* py-2 for reduced height */
        required
        value={value}
        onChange={onChange}
      />
    )}
  </div>
);

// Stat Card component
const StatCard = ({ value, label, icon }) => (
  <motion.div
    // Card background is explicitly white for contrast against the light section background
    className="flex flex-col items-center justify-center p-4 h-32 bg-white rounded-2xl shadow-lg border-b-4"
    style={{ borderColor: PRIMARY_LIGHT }}
    whileHover={{ scale: 1.05, boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)' }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <div className="text-4xl mb-1">{icon}</div>
    <div className="text-3xl font-extrabold" style={{ color: PRIMARY_DARK }}>{value}</div>
    <p className="text-center text-xs text-gray-600 font-medium">{label}</p>
  </motion.div>
);

// Alliance Logo Scroller Component
const LogoScroller = () => {
  // Duplicate logos for seamless infinite scroll effect
  const logos = [...LOGO_DATA, ...LOGO_DATA];

  return (
    <div className="mt-8">
      <h3 className="text-xl font-bold mb-4 text-gray-900"> {/* Updated to dark text */}
        Alliances & Partnerships
      </h3>
      <div className="overflow-hidden relative h-20 w-full rounded-xl border border-gray-200 bg-white shadow-inner">
        {/* CSS for animation (placed inline as we can only use one file) */}
        <style jsx="true">{`
          @keyframes scroll-logos {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); } /* Scrolls one full set of logos */
          }
          .logo-track {
            display: flex;
            width: 200%; /* Double the width to hold the duplicated logos */
            animation: scroll-logos 25s linear infinite;
          }
          .logo-item {
            flex-shrink: 0;
            width: 12.5%; /* Assuming 8 items are visible at once (4 + 4) */
            padding: 0 10px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .logo-item img {
            max-height: 40px;
            filter: grayscale(100%);
            transition: filter 0.3s;
          }
          .logo-item:hover img {
            filter: grayscale(0%);
          }
        `}</style>

        <div className="logo-track">
          {logos.map((logo, index) => (
            <div key={`${logo.id}-${index}`} className="logo-item">
              <img
                src={logo.url}
                alt={logo.name}
                onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/100x50/ccc/000?text=Logo" }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- Main App Component ---
export default function ConatctForm() {
  const controls = useAnimation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    country: 'USA',
  });
  const [submitStatus, setSubmitStatus] = useState(null); // success | error | null

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    
    // Simulate API call success (replacing the prohibited alert())
    setSubmitStatus('success');
    setTimeout(() => setSubmitStatus(null), 5000); // Clear message after 5 seconds

    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      message: '',
      country: 'USA',
    });
  };

  const countryOptions = ["USA", "Canada", "UK", "Australia", "India", "Germany", "Other"];

  // Framer Motion Sequence for header entrance
  useEffect(() => {
    controls.start(i => ({
      y: 0,
      opacity: 1,
      transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" }
    }));
  }, [controls]);

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="font-sans bg-white">
      
      {/* MAIN CONTENT AREA - 
        1. Changed background to very low opacity blue (bg-indigo-50).
        2. Restored full padding (p-X utilities).
      */}
      <div className="p-4 sm:p-8 lg:p-12 bg-indigo-50"> 
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
          
          {/* LEFT SIDE: Headings, Stats, and Alliances */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            variants={variants}
            className="space-y-8" /* Spacing retained for visual flow */
          >
            {/* Text color updated to dark gray for contrast against light blue background */}
            <motion.h1
              custom={0}
              initial="hidden"
              animate={controls}
              className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 text-left" 
            >
              Let's Build Something Great Together
            </motion.h1>
            <motion.p
              custom={1}
              initial="hidden"
              animate={controls}
              className="text-xl text-gray-700 text-left" 
            >
              Partner with us to transform your vision into reality.
            </motion.p>

            {/* STATS ROW */}
            <div className="grid grid-cols-3 gap-4">
              {STATS_DATA.map((stat, index) => (
                <motion.div 
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <StatCard {...stat} />
                </motion.div>
              ))}
            </div>

            {/* ALLIANCES & PARTNERSHIPS SCROLLER */}
            <LogoScroller />

          </motion.div>

          {/* RIGHT SIDE: Contact Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            variants={variants}
          >
            {/* Form background updated to solid white for clear separation */}
            <div className="p-4 sm:p-5 bg-white border border-gray-200 rounded-3xl shadow-xl h-full"> 
              <h3 className="text-2xl font-bold mb-6 text-gray-800">
                Ready to start?
              </h3>
              
              {/* Submission Feedback Message */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-3 mb-4 text-sm font-medium text-green-800 bg-green-100 rounded-lg"
                >
                  🚀 Success! Your message has been sent. We'll be in touch shortly.
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4"> 
                
                <CustomInput id="name" label="Name" placeholder="Your full name" name="name" value={formData.name} onChange={handleChange} />
                <CustomInput id="email" label="Email" type="email" placeholder="you@example.com" name="email" value={formData.email} onChange={handleChange} />
                <CustomInput id="company" label="Company Name (Optional)" placeholder="Your company name" name="company" value={formData.company} onChange={handleChange} />

                {/* Country Select */}
                <div className="flex flex-col space-y-1"> 
                  <label htmlFor="country" className="text-sm font-medium text-gray-700">
                    Country
                  </label>
                  <select
                    id="country"
                    name="country"
                    className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400 transition duration-200 shadow-sm appearance-none" 
                    required
                    value={formData.country}
                    onChange={handleChange}
                  >
                    {countryOptions.map(country => (
                      <option key={country} value={country}>{country}</option>
                    ))}
                  </select>
                </div>

                <CustomInput id="message" label="Message" placeholder="Tell us about your project goals..." isTextArea={true} name="message" value={formData.message} onChange={handleChange} />

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  className="w-full text-white font-bold py-3 px-6 rounded-2xl text-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-[1.01]" 
                  style={{ background: `linear-gradient(135deg, ${PRIMARY_DARK}, ${PRIMARY_LIGHT})` }}
                  whileHover={{ scale: 1.015 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Talk to our team
                </motion.button>

                {/* Disclaimer */}
                <p className="text-xs text-center text-gray-500 pt-2">
                  By sending this form I confirm that I have read and accept Blute Technologies' <a href="#" className="font-medium underline" style={{ color: PRIMARY_LIGHT }}>Privacy Policy</a>
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}