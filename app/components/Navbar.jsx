// navbar.jsx
'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image'; // 1. IMPORT NEXT.JS IMAGE
import { 
  List, X, CornerRightUp, ChevronDown, ChevronRight, 
  Code, FileText, Users, Briefcase, TrendingUp, DollarSign, 
  ShoppingCart, Heart, Factory, Banknote, Phone, Truck, BookOpen, 
  Shield, Server, HardHat, Zap, Layout, Globe
} from 'lucide-react';


// --- MOCK COMPONENTS ---
const Link = ({ href, children, className, onClick, ...props }) => (
  <a href={href} className={className} onClick={onClick} {...props}>
    {children}
  </a>
);

// --- NAVIGATION DATA & ICONS ---
const getIcon = (name) => {
    name = name.toLowerCase();
    if (name.includes('team')) return Users;
    if (name.includes('portfolio')) return Briefcase;
    if (name.includes('career')) return TrendingUp;
    if (name.includes('clients')) return DollarSign;
    if (name.includes('privacy') || name.includes('terms')) return FileText;
    
    if (name.includes('retail') || name.includes('commerce')) return ShoppingCart;
    if (name.includes('healthcare')) return Heart;
    if (name.includes('manufacturing')) return Factory;
    if (name.includes('bfsi')) return Banknote;
    if (name.includes('telecom')) return Phone;
    if (name.includes('transportation')) return Truck;
    if (name.includes('education')) return BookOpen;
    
    if (name.includes('web application') || name.includes('application')) return Layout;
    if (name.includes('cloud')) return Server;
    if (name.includes('iot')) return Zap;
    if (name.includes('computing')) return Globe;

    if (name.includes('consulting')) return HardHat;
    if (name.includes('engineering')) return Code;
    if (name.includes('security') || name.includes('government')) return Shield;
    if (name.includes('networking')) return Globe;
    if (name.includes('devops')) return Code;

    return Code;
}

const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { 
    name: 'About', 
    href: '/about',
    children: [
      { name: 'Team', href: '/team' },
      { name: 'Portfolio', href: '/portfolio' },
      { name: 'Career', href: '/career' },
      { name: 'Clients', href: '/clients' },
      { name: 'Privacy Policy', href: '/privacy-policy' },
      { name: 'Terms of Use', href: '/terms-of-use' },
    ]
  },
  {
    name: 'Industries',
    href: '/industries',
    children: [
      { name: 'Retail & E-commerce', href: '/industries/retail' },
      { name: 'Healthcare', href: '/industries/healthcare' },
      { name: 'Manufacturing', href: '/industries/manufacturing' },
      { name: 'BFSI', href: '/industries/bfsi' },
      { name: 'Telecom', href: '/industries/telecom' },
      { name: 'Transportation', href: '/industries/transportation' },
      { name: 'Education', href: '/industries/education' },
      { name: 'Government', href: '/industries/government' },
    ]
  },
  {
    name: 'Technologies',
    href: '/technologies',
    children: [
      { name: 'Web Application', href: '/technologies/web' },
      { 'name': 'Cloud', 'href': '/technologies/cloud' },
      { 
        name: 'IoT', 
        href: '/technologies/iot',
        children: [ 
          { name: 'Industrial IoT', href: '/technologies/iot/industrial' },
          { name: 'Embedded Software', href: '/technologies/iot/embedded' },
          { name: 'Android Firmware', href: '/technologies/iot/android' },
          { name: 'Hardware Design', href: '/technologies/iot/hardware' },
        ]
      },
      { name: 'Cognitive Computing', href: '/technologies/cognitive' },
    ]
  },
  {
    name: 'Services',
    href: '/services',
    children: [
      { name: 'IT Consulting', href: '/services/consulting' },
      { name: 'Product Engineering', href: '/services/product-eng' },
      { 
        name: 'Enterprise Application', 
        href: '/services/enterprise-app',
        children: [ 
          { name: 'SAP Services', href: '/services/sap' },
          { name: 'Oracle Services', href: '/services/oracle' },
          { name: 'Microsoft Services', href: '/services/microsoft' },
          { name: 'Open Source Services', href: '/services/open-source' },
        ]
      },
      { 
        name: 'Mobile Applications', 
        href: '/services/mobile-apps',
        children: [ 
          { name: 'iOS Platform', href: '/services/ios' },
          { name: 'Android Platform', href: '/services/android' },
          { name: 'Windows Platform', href: '/services/windows' },
          { name: 'Hybrid Platform', href: '/services/hybrid' },
        ]
      },
      { name: 'Cyber Security', href: '/services/cyber-security' },
      { name: 'Networking', href: '/services/networking' },
      { name: 'DevOps', href: '/services/devops' },
      { name: 'DevSecOps', href: '/services/devsecops' },
    ]
  },
  { name: 'Contact', href: '/contact' },
];


// --- FRAMER MOTION VARIANTS (KEPT THE SAME) ---
const itemVariants = {
  hidden: { y: -20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100, damping: 20 } },
};

const containerVariants = {
  hidden: { transition: { staggerChildren: 0.07, delayChildren: 0.2 } },
  visible: { transition: { staggerChildren: 0.05, staggerDirection: 1 } },
};

const dropdownVariants = {
  hidden: { opacity: 0, y: -10, transition: { duration: 0.2 } },
  visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
};

const subDropdownVariants = {
  hidden: { opacity: 0, x: -10, transition: { duration: 0.2 } },
  visible: { opacity: 1, x: 0, transition: { duration: 0.2 } },
};

const menuVariants = {
  closed: { 
    height: 0, 
    opacity: 0,
    transition: { type: 'tween', duration: 0.3, staggerChildren: 0.05, staggerDirection: -1 }
  },
  open: {
    height: 'auto',
    opacity: 1,
    transition: { type: 'tween', duration: 0.4, staggerChildren: 0.07, delayChildren: 0.2 }
  }
};

const mobileItemVariants = {
  closed: { y: 20, opacity: 0 },
  open: { y: 0, opacity: 1, transition: { duration: 0.3 } },
};

// --- HELPER COMPONENTS ---

// Component for the second level dropdown (e.g., Enterprise App -> SAP Services)
const NestedDropdown = ({ link }) => {
  const [isNestedOpen, setIsNestedOpen] = useState(false);
  const timeoutRef = useRef(null);
  
  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setIsNestedOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsNestedOpen(false);
    }, 150);
  };

  const Icon = getIcon(link.name);

  return (
    <li 
      key={link.name} 
      role="none" 
      className="relative"
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave}
    >
      <Link
        href={link.href}
        // MODIFIED: Removed dark classes for sub-link text and background
        className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-sky-500 transition duration-150 group"
        role="menuitem"
      >
        <div className="flex items-center">
          {/* MODIFIED: Removed dark classes for icon color */}
          <Icon className="w-4 h-4 mr-2 text-sky-500 group-hover:text-sky-500 transition-colors duration-150" />
          {link.name}
        </div>
        {/* MODIFIED: Removed dark classes for ChevronRight */}
        <ChevronRight className="w-3 h-3 ml-2 text-gray-400 group-hover:text-sky-500" />
      </Link>

      <AnimatePresence>
        {isNestedOpen && link.children && (
          <motion.ul
            key={link.name + "-sub-dropdown"}
            variants={subDropdownVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            // MODIFIED: Removed dark classes for sub-sub-dropdown background and border
            className="absolute left-full top-0 ml-1 w-56 bg-white border border-gray-200 rounded-lg shadow-xl py-2 z-50 origin-left"
            role="menu"
          >
            {link.children.map((subChild) => {
                return (
                    <li key={subChild.name} role="none">
                      <Link
                        href={subChild.href}
                        // MODIFIED: Removed dark classes for sub-sub-link text and background
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-sky-500 transition duration-150 group"
                        role="menuitem"
                      >
                        {subChild.name}
                      </Link>
                    </li>
                );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </li>
  );
};

// Component for the main level dropdown (e.g., Services)
const DesktopDropdownLink = ({ link }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 150);
  };

  const hasChildren = link.children && link.children.length > 0;

  // Simple Link (no dropdown)
  if (!hasChildren) {
    return (
      <motion.li variants={itemVariants} role="none">
        <Link
          href={link.href}
          // MODIFIED: Removed dark classes for link text and hover underline
          className="text-sm font-medium text-gray-700 hover:text-sky-500 transition duration-300 relative group cursor-pointer py-1"
          role="menuitem"
        >
          {link.name}
          {/* MODIFIED: Removed dark classes for hover underline color */}
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-sky-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
        </Link>
      </motion.li>
    );
  }

  // Dropdown Link
  return (
    <motion.li 
      variants={itemVariants} 
      role="none" 
      className="relative" 
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave}
    >
      <Link
        href={link.href}
        // MODIFIED: Removed dark classes for link text and hover underline
        className="text-sm font-medium text-gray-700 hover:text-sky-500 transition duration-300 relative group cursor-pointer py-1 flex items-center"
        role="menuitem"
      >
        {link.name}
        {/* MODIFIED: Removed dark classes for ChevronDown */}
        <ChevronDown className="w-3 h-3 ml-1 text-gray-400 group-hover:text-sky-500 transition-transform duration-200" />
        {/* MODIFIED: Removed dark classes for hover underline color */}
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-sky-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
      </Link>

      <AnimatePresence>
        {isDropdownOpen && hasChildren && (
          <motion.ul
            key={link.name + "-dropdown"}
            variants={dropdownVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            // MODIFIED: Removed dark classes for main dropdown background and border
            className="absolute left-0 mt-3 w-60 bg-white border border-gray-200 rounded-lg shadow-xl py-2 z-50 origin-top"
            role="menu"
          >
            {link.children.map((child) => (
                child.children ? (
                    <NestedDropdown key={child.name} link={child} />
                ) : (
                    <li key={child.name} role="none">
                        <Link
                          href={child.href}
                          // MODIFIED: Removed dark classes for link text and background
                          className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-sky-500 transition duration-150 group"
                          role="menuitem"
                        >
                          {React.createElement(getIcon(child.name), { 
                              // MODIFIED: Removed dark classes for icon color
                              className: "w-4 h-4 mr-2 text-sky-500 group-hover:text-sky-500 transition-colors duration-150" 
                          })}
                          {child.name}
                        </Link>
                    </li>
                )
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.li>
  );
};

// Component for mobile collapsible menu
const MobileCollapsibleLink = ({ link, closeMenu }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const hasChildren = link.children && link.children.length > 0;
  const Icon = getIcon(link.name);

  return (
    <motion.li variants={mobileItemVariants} role="none" className="overflow-hidden">
      <Link
        href={link.href}
        onClick={(e) => { e.preventDefault(); hasChildren ? setIsCollapsed(!isCollapsed) : closeMenu(); }}
        // MODIFIED: Removed dark classes for link text and background
        className="flex items-center justify-between px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-sky-500 rounded-md transition duration-200"
        role="menuitem"
      >
        <div className="flex items-center">
            {/* MODIFIED: Removed dark classes for icon color */}
            <Icon className="w-5 h-5 mr-3 text-sky-500" />
            {link.name}
        </div>
        {hasChildren && (
          <ChevronDown 
            // MODIFIED: Removed dark classes for ChevronDown color
            className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${isCollapsed ? 'rotate-180' : 'rotate-0'}`}
          />
        )}
      </Link>

      <AnimatePresence initial={false}>
        {isCollapsed && hasChildren && (
          <motion.ul
            key={link.name + "-mobile-sub"}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            // MODIFIED: Removed dark classes for border color
            className="ml-4 pl-4 border-l border-gray-300 space-y-1 mt-1"
            role="menu"
          >
            {link.children.map((child) => {
                const SubIcon = getIcon(child.name);
                return (
                    <li key={child.name} role="none">
                      <Link
                        href={child.href}
                        onClick={closeMenu}
                        // MODIFIED: Removed dark classes for link text and background
                        className="flex items-center px-3 py-2 text-sm font-normal text-gray-600 hover:bg-gray-100 hover:text-sky-500 rounded-md transition duration-200"
                        role="menuitem"
                      >
                         {/* MODIFIED: Removed dark classes for icon color */}
                         <SubIcon className="w-4 h-4 mr-3 text-sky-500" />
                        {child.name}
                      </Link>
                    </li>
                )
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.li>
  );
};


// --- MAIN COMPONENT START ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Hardcoding theme-related styles to 'light' for a consistent look now that the theme toggle is gone.
  const theme = 'light'; 

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const MotionHeader = motion('header');

  // Calculate background color dynamically with transparency for blur effect
  // MODIFIED: Simplified navBg calculation to a light-mode default
  const navBg = scrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 1)'; // white equivalent

  // --- LOGO CONFIGURATION ---
  const LOGO_SRC = '/images/Logo/logo-5.png';
  const LOGO_WIDTH = 160; // Set explicit width in pixels
  const LOGO_HEIGHT = 40; // Set explicit height in pixels (matches h-10, h-12 etc.)
  
  // NOTE: When using Next/Image, the layout and size classes (like h-40 w-auto)
  // are often replaced by explicit width/height props and potentially 'fill' or 'responsive' layout.
  // We'll use fixed width and height for a typical navbar logo.


  return (
    <MotionHeader
      initial={false}
      animate={{ 
        // MODIFIED: Simplified boxShadow to a light-mode default
        boxShadow: scrolled ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)' : 'none',
        backgroundColor: navBg,
      }}
      transition={{ duration: 0.2 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm transition-shadow duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo - REPLACED WITH NEXT/IMAGE */}
          <motion.div variants={itemVariants} initial="hidden" animate="visible">
            <Link href="/" className="flex items-center">
              <Image 
                src={LOGO_SRC}
                alt="Company Logo"
                width={140} // Required prop
                height={65} // Required prop
                // The container div should manage the visible size. 
                // We'll use a wrapper div to ensure the size is constrained in the link.
                // className="w-auto h-auto" // Optional: remove h-40 if using fixed sizes
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.nav 
            className="hidden lg:flex"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            role="navigation"
          >
            <motion.ul className="flex space-x-8 items-center" role="menubar">
              {NAV_LINKS.map((link) => (
                <DesktopDropdownLink key={link.name} link={link} />
              ))}
            </motion.ul>
          </motion.nav>
          
          {/* Action Items (Button) - Desktop Right Side */}
          <motion.div 
            className="hidden lg:flex items-center space-x-4" 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
             {/* REMOVED: Theme Toggle Button (Desktop) */}
            
            {/* Get in Touch Button (Desktop) */}
            <motion.div 
              variants={itemVariants} 
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(56, 189, 248, 0.5)' }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 text-sm font-semibold text-white bg-sky-600 rounded-lg shadow-lg hover:bg-sky-500 transition duration-300"
                onClick={() => console.log('Get in Touch clicked')}
              >
                Get in Touch
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Mobile Action Items (Menu Button) - Mobile Right Side */}
          <div className="flex lg:hidden items-center space-x-2">
             {/* REMOVED: Theme Toggle Button (Mobile) */}
             
            {/* Mobile Menu Button (3-line icon) */}
            <motion.button
              onClick={toggleMenu}
              // MODIFIED: Removed dark classes for button color
              className="p-2 text-gray-700 hover:text-sky-500 rounded-md transition duration-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6" /> : <List className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            // MODIFIED: Removed dark classes for mobile menu background and border
            className="lg:hidden bg-white/95 backdrop-blur-sm pb-4 border-t border-gray-200 absolute w-full"
          >
            <motion.ul className="flex flex-col space-y-2 px-4 py-2" role="menu">
              {NAV_LINKS.map((link) => (
                <MobileCollapsibleLink key={link.name} link={link} closeMenu={() => setIsOpen(false)} />
              ))}
              
              {/* Mobile "Get in Touch" button */}
              <motion.li variants={mobileItemVariants} className="pt-2">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-4 py-2 text-sm font-semibold text-white bg-sky-600 rounded-lg shadow-lg hover:bg-sky-500 transition duration-300"
                  onClick={() => { console.log('Mobile Get in Touch clicked'); setIsOpen(false); }}
                >
                  Get in Touch
                </motion.button>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </MotionHeader>
  );
};

export default Navbar;