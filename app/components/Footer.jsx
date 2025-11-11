'use client';

import React from 'react';
import { motion } from 'framer-motion'; // Import motion
import { 
  CornerRightUp, Mail, Phone, MapPin, 
  Facebook, Twitter, Linkedin, Instagram
} from 'lucide-react';
import { useTheme } from './ThemeProvider'; // Assuming ThemeProvider is in place
import Image from 'next/image';

// --- ANIMATION VARIANTS ---
// 1. Container for the main 6-column grid to stagger children
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Delay between each grid item's animation
      when: "beforeChildren",
    },
  },
};

// 2. Variants for each individual grid item (fade-up effect)
const itemVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

// --- NAVIGATION DATA (Mirroring Navbar links) ---

const NAV_LINKS_MAP = {
  Services: [
    { name: 'IT Consulting', href: '/services/consulting' },
    { name: 'Product Engineering', href: '/services/product-eng' },
    { name: 'Enterprise Application', href: '/services/enterprise-app' },
    { name: 'Mobile Applications', href: '/services/mobile-apps' },
    { name: 'Cyber Security', href: '/services/cyber-security' },
    { name: 'DevOps', href: '/services/devops' },
  ],
  Technologies: [
    { name: 'Web Application', href: '/technologies/web' },
    { name: 'Cloud', href: '/technologies/cloud' },
    { name: 'IoT', href: '/technologies/iot' },
    { name: 'Cognitive Computing', href: '/technologies/cognitive' },
  ],
  Industries: [
    { name: 'Retail & E-commerce', href: '/industries/retail' },
    { name: 'Healthcare', href: '/industries/healthcare' },
    { name: 'Manufacturing', href: '/industries/manufacturing' },
    { name: 'BFSI', href: '/industries/bfsi' },
    { name: 'Transportation', href: '/industries/transportation' },
    { name: 'Government', href: '/industries/government' },
  ],
  Company: [
    { name: 'About Us', href: '/about' },
    { name: 'Team', href: '/about/team' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Career', href: '/career' },
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms of Use', href: '/terms-of-use' },
  ]
};

const SOCIAL_LINKS = [
    { icon: Facebook, href: '#facebook', label: 'Facebook' },
    { icon: Twitter, href: '#twitter', label: 'Twitter' },
    { icon: Linkedin, href: '#linkedin', label: 'LinkedIn' },
    { icon: Instagram, href: '#instagram', label: 'Instagram' },
];

// --- Sub-Component for Grid Links ---
// Note: This component is now wrapped in motion.div inside the Footer
const FooterLinkSection = ({ title, links }) => (
  <div>
    <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-50 border-b border-sky-500/50 pb-1 inline-block">
      {title}
    </h3>
    <ul className="space-y-3">
      {links.map((link) => (
        <li key={link.name}>
          <a
            href={link.href}
            className="text-sm text-gray-600 dark:text-gray-300 hover:text-sky-500 dark:hover:text-sky-400 transition-colors duration-200"
          >
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

// --- Main Footer Component ---
const Footer = () => {
  // Use the theme hook for potential future color adjustments
  const { theme } = useTheme(); 

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 pt-16 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* === MAIN 6-COLUMN GRID (Animated Container) === */}
        <motion.div
          className="grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-3 lg:grid-cols-6 lg:gap-x-8 lg:gap-y-0 pb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible" // Triggers animation when scrolled into view
          viewport={{ once: true, amount: 0.2 }} // Only animate once, when 20% visible
        >
          
          {/* GRID 1: Logo & Slogan (Animated Item) */}
         <motion.div 
    className="col-span-2 lg:col-span-1 flex flex-col space-y-4"
    variants={itemVariants}
>
    <p className="text-base font-bold text-sky-600 dark:text-sky-400">
        10+ YEARS EXPERIENCE
    </p>
    
    {/* --- REPLACED SECTION START --- */}
    <div className="flex items-center space-x-2">
        <Image
            src="/images/Logo/logo.png" // Path to your logo file
            // web-app/public/images/client-logo-3.png
            alt="Blute Tech Logo"
            width={200} // Set the actual width of your logo
            height={40} // Set the actual height of your logo
            // Tailwind classes to adjust the appearance if needed
            className="h-30 w-auto" 
        />
    </div>
    {/* --- REPLACED SECTION END --- */}

    <p className="text-sm text-gray-500 dark:text-gray-400 italic mt-2">
        Driving innovation through expertise.
    </p>
</motion.div>

          {/* GRID 2: Services (Animated Item) */}
          <motion.div variants={itemVariants}>
            <FooterLinkSection title="Services" links={NAV_LINKS_MAP.Services} />
          </motion.div>

          {/* GRID 3: Technologies (Animated Item) */}
          <motion.div variants={itemVariants}>
            <FooterLinkSection title="Technologies" links={NAV_LINKS_MAP.Technologies} />
          </motion.div>

          {/* GRID 4: Industries (Animated Item) */}
          <motion.div variants={itemVariants}>
            <FooterLinkSection title="Industries" links={NAV_LINKS_MAP.Industries} />
          </motion.div>

          {/* GRID 5: Company (Animated Item) */}
          <motion.div variants={itemVariants}>
            <FooterLinkSection title="Company" links={NAV_LINKS_MAP.Company} />
          </motion.div>

          {/* GRID 6: Contact (Animated Item) */}
          <motion.div 
            className="col-span-2 lg:col-span-1"
            variants={itemVariants}
          >
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-50 border-b border-sky-500/50 pb-1 inline-block">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="w-5 h-5 mr-3 text-sky-500 flex-shrink-0 mt-0.5" />
                <a href="mailto:info@blutetech.com" className="text-sm text-gray-600 dark:text-gray-300 hover:text-sky-500 dark:hover:text-sky-400">
                  info@blutetech.com
                </a>
              </li>
              <li className="flex items-start">
                <Phone className="w-5 h-5 mr-3 text-sky-500 flex-shrink-0 mt-0.5" />
                <a href="tel:+1234567890" className="text-sm text-gray-600 dark:text-gray-300 hover:text-sky-500 dark:hover:text-sky-400">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-sky-500 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  123 Tech Avenue,<br/>Silicon Valley, CA 94000
                </p>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* --- LAST SECTION: COPYRIGHT & SOCIAL ICONS (Simple Fade In) --- */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex flex-col md:flex-row justify-between items-center border-t border-gray-300 dark:border-gray-700 py-6 space-y-4 md:space-y-0"
        >
          
          {/* Copyright */}
          <p className="text-sm text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} Blute Tech | <a href="/privacy-policy" className="hover:text-sky-500 transition-colors">Privacy Policy</a>
          </p>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 dark:text-gray-400 hover:text-sky-500 dark:hover:text-sky-400 transition-colors duration-200"
                aria-label={label}
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </motion.div>

      </div>
    </footer>
  );
};

export default Footer;
