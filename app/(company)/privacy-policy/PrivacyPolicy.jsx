"use client";

import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Database, Zap, UserCheck, Key, BookOpen, Mail } from 'lucide-react';


// Define icons map using Brand Colors via inline styles
const iconMap = {
  'why-reading-this': <BookOpen className="w-6 h-6 mr-3" style={{ color: "var(--color-primary-light)" }} />,
  'what-data-we-collect': <Database className="w-6 h-6 mr-3" style={{ color: "var(--color-accent-orange)" }} />,
  'why-use-data': <Zap className="w-6 h-6 mr-3" style={{ color: "var(--color-primary-light)" }} />,
  'how-share-data': <Key className="w-6 h-6 mr-3" style={{ color: "var(--color-primary-dark)" }} />,
  'your-rights': <UserCheck className="w-6 h-6 mr-3" style={{ color: "var(--color-primary-light)" }} />,
  'data-security': <ShieldCheck className="w-6 h-6 mr-3" style={{ color: "var(--color-primary-dark)" }} />,
  'cookies': <Zap className="w-6 h-6 mr-3" style={{ color: "var(--color-accent-orange)" }} />, // Orange for alerts/cookies
  'contact-us': <Mail className="w-6 h-6 mr-3" style={{ color: "var(--color-primary-light)" }} />,
};

// Define the content structure
const policyContent = [
  { id: 'why-reading-this', title: "1. Why You're Reading This", content: (
    <>
      <p>Blute Technologies Pvt. Ltd. (“Blute Technologies”, “we”) is an international software development company. This <strong>Privacy Policy</strong> explains what data we collect from you through our website <a href="https://www.blute.co.in" style={{ color: "var(--color-primary-light)" }} className="font-medium hover:underline transition-all">www.blute.co.in</a> and its subdomains, how we use it, and your rights over that data.</p>
      
      {/* Branded Alert Box: Primary Light Border */}
      <div className="mt-4 p-4 bg-blue-50 border-l-4 rounded-r-lg shadow-sm" style={{ borderColor: "var(--color-primary-light)" }}>
        <p className="text-gray-700">
          By using our website, contacting us, or applying for a job, you <strong>agree to this Policy</strong>. We do not knowingly collect data from children under 16.
        </p>
      </div>
      
      <p className="mt-4 text-gray-700">For any questions, contact our Data Protection Officer at <strong>info@blute.co.in</strong>.</p>
    </>
  )},
  { id: 'what-data-we-collect', title: '2. What Data We Collect', content: (
    <>
      <p>We collect only the information needed to operate our website, communicate with you, and process applications. We categorize the data collected below:</p>
      
      <div className="mt-6"> 
        <h4 className="font-bold mb-3 text-lg" style={{ color: "var(--color-primary-dark)" }}>Data you provide:</h4> 
        {/* Bullets using Accent Orange */}
        <ul className="list-inside space-y-2 mt-2 custom-list">
          <li className='flex items-start'><span style={{ color: "var(--color-accent-orange)" }} className="mr-2">•</span> Name, email, phone, and message details when you contact us.</li>
          <li className='flex items-start'><span style={{ color: "var(--color-accent-orange)" }} className="mr-2">•</span> Personal and professional details (like your CV) when applying for a job.</li>
          <li className='flex items-start'><span style={{ color: "var(--color-accent-orange)" }} className="mr-2">•</span> Data from referrals or public sources (e.g., job portals).</li>
        </ul>
      </div>

      <div className="mt-6"> 
        <h4 className="font-bold mb-3 text-lg" style={{ color: "var(--color-primary-dark)" }}>Data we collect automatically:</h4> 
        <ul className="list-inside space-y-2 mt-2 custom-list">
          <li className='flex items-start'><span style={{ color: "var(--color-accent-orange)" }} className="mr-2">•</span> Device information (model, OS, browser type).</li>
          <li className='flex items-start'><span style={{ color: "var(--color-accent-orange)" }} className="mr-2">•</span> IP address, location, and website usage details.</li>
          <li className='flex items-start'><span style={{ color: "var(--color-accent-orange)" }} className="mr-2">•</span> Cookies (see Section 7).</li>
        </ul>
      </div>
    </>
  )},
  { id: 'why-use-data', title: '3. Why We Use Your Data', content: (
    <>
      <p className="font-medium text-gray-700">We process your data only when legally allowed — with your consent, to fulfill a contract, comply with the law, or for our legitimate interests.</p>
      <p className="mt-4 font-semibold text-gray-800">We use your data for the following essential purposes:</p>
      <ul className="list-inside ml-4 space-y-2 mt-2 custom-list">
        <li className='flex items-start'><span style={{ color: "var(--color-primary-light)" }} className="mr-2">✓</span> Respond to your queries and organize communications.</li>
        <li className='flex items-start'><span style={{ color: "var(--color-primary-light)" }} className="mr-2">✓</span> Send marketing materials (with your consent, which you can withdraw).</li>
        <li className='flex items-start'><span style={{ color: "var(--color-primary-light)" }} className="mr-2">✓</span> Manage recruitment and evaluate job applications efficiently.</li>
        <li className='flex items-start'><span style={{ color: "var(--color-primary-light)" }} className="mr-2">✓</span> Maintain business, client, and vendor relationships.</li>
        <li className='flex items-start'><span style={{ color: "var(--color-primary-light)" }} className="mr-2">✓</span> Ensure system security and prevent fraud.</li>
        <li className='flex items-start'><span style={{ color: "var(--color-primary-light)" }} className="mr-2">✓</span> Fulfill corporate or legal obligations.</li>
      </ul>
    </>
  )},
  { id: 'how-share-data', title: '4. How We Use and Share Data', content: (
    <>
      <p>We may store and process your data within India or internationally across Blute Technologies’ offices and service providers (like Workable for recruitment). We implement <strong>Standard Contractual Clauses (SCCs)</strong> where required.</p>
      
      {/* Branded Alert Box: Accent Orange (Warning style) */}
      <div className="mt-4 p-4 bg-orange-50 border-l-4 rounded-r-lg shadow-sm" style={{ borderColor: "var(--color-accent-orange)" }}>
        <p className="text-gray-800">
          Your data may be shared only when legally required — e.g., with clients, auditors, or authorities — always on a need-to-know basis and following strict legal obligations.
        </p>
      </div>
    </>
  )},
  { id: 'your-rights', title: '5. Your Rights', content: (
    <>
      <p className="font-semibold text-gray-800">As a data subject, you are empowered with the following rights:</p>
      <ul className="list-inside ml-4 space-y-2 mt-2 custom-list">
        <li className='flex items-start'><span style={{ color: "var(--color-accent-orange)" }} className="mr-2">★</span> <strong>Right to Access:</strong> Access, correct, or delete your data.</li>
        <li className='flex items-start'><span style={{ color: "var(--color-accent-orange)" }} className="mr-2">★</span> <strong>Right to Object:</strong> Restrict or object to processing.</li>
        <li className='flex items-start'><span style={{ color: "var(--color-accent-orange)" }} className="mr-2">★</span> <strong>Right to Withdraw Consent:</strong> Withdraw consent at any time.</li>
        <li className='flex items-start'><span style={{ color: "var(--color-accent-orange)" }} className="mr-2">★</span> <strong>Right to Portability:</strong> Request data transfer to another party.</li>
      </ul>
      <p className="mt-4 p-3 bg-gray-100 rounded-lg border border-gray-200">
        To exercise these rights, email <strong>info@blute.co.in</strong>. We may verify your identity before proceeding to protect your data.
      </p>
    </>
  )},
  { id: 'data-security', title: '6. Data Retention and Security', content: (
    <>
      <p>We store data only as long as necessary for the purposes mentioned or to meet legal requirements. When no longer needed, it’s securely deleted.</p>
      <p className="mt-4 font-bold flex items-center" style={{ color: "var(--color-primary-dark)" }}>
        <ShieldCheck className="w-5 h-5 mr-2" />
        We use industry-leading security measures to prevent unauthorized access, loss, or misuse of your data.
      </p>
    </>
  )},
  { id: 'cookies', title: '7. Cookies', content: (
    <>
      <p>We use cookies to improve your experience, analyze site performance, and secure our website.</p>
      <ul className="list-inside ml-4 space-y-2 mt-4 custom-list">
        <li className='flex items-start'><span style={{ color: "var(--color-primary-light)" }} className="mr-2">→</span> <strong>Functional Cookies:</strong> Essential for website use.</li>
        <li className='flex items-start'><span style={{ color: "var(--color-primary-light)" }} className="mr-2">→</span> <strong>Analytical Cookies:</strong> Help us improve site performance (e.g., Google Analytics).</li>
        <li className='flex items-start'><span style={{ color: "var(--color-primary-light)" }} className="mr-2">→</span> <strong>Third-party Cookies:</strong> Used for marketing and analytics.</li>
      </ul>
      <p className="mt-4 text-sm text-gray-500">You can manage or delete cookies via your browser settings. Blocking cookies may limit some website functions.</p>
    </>
  )},
  { id: 'contact-us', title: '8. Contact Us', content: (
    <>
      <p>For questions or requests about this Policy, contact us directly:</p>
      <div className="mt-3 text-lg font-semibold p-4 rounded-lg shadow-inner border border-gray-100" style={{ color: "var(--color-primary-dark)", backgroundColor: "rgba(45, 172, 227, 0.1)" }}>
        Email: <strong>info@blute.co.in</strong>
      </div>
    </>
  )},
];

function PrivacyPolicy() {
  const contentRefs = useRef({});
  const [activeSection, setActiveSection] = useState(policyContent[0].id);

  // Smooth scroll function
  const scrollToSection = (id) => {
    const element = contentRefs.current[id];
    if (element) {
      const topOffset = element.getBoundingClientRect().top + window.pageYOffset - 100;
      window.scrollTo({
        top: topOffset,
        behavior: 'smooth',
      });
      setActiveSection(id);
    }
  };

  // Scroll observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-150px 0px -80% 0px', threshold: 0 }
    );

    policyContent.forEach((item) => {
      const element = contentRefs.current[item.id];
      if (element) observer.observe(element);
    });

    return () => {
      policyContent.forEach((item) => {
        const element = contentRefs.current[item.id];
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  // Navigation Component
  const Navigation = () => (
    <div className="lg:sticky lg:top-24 lg:h-[calc(100vh-6rem)] overflow-y-auto w-full lg:w-64">
      <nav className="p-4 lg:p-0">
        <h3 className="uppercase text-xs font-bold text-gray-400 mb-4 tracking-widest hidden lg:block">
          Table of Contents
        </h3>
        <ul className="flex flex-wrap lg:flex-col gap-2 lg:space-y-1">
          {policyContent.map((item) => (
            <li key={item.id}>
              <motion.button
                onClick={() => scrollToSection(item.id)}
                // Logic: If active, use Gradient background + White Text. If inactive, Gray text + Hover effect using Primary color
                className={`text-left text-sm py-2 px-3 rounded-xl w-full transition-all duration-300 focus:outline-none flex items-center 
                  ${activeSection === item.id 
                    ? 'font-extrabold text-white shadow-lg' 
                    : 'font-medium text-gray-600 hover:bg-gray-100'
                  }`}
                style={{
                  background: activeSection === item.id ? "var(--gradient-primary)" : "transparent",
                  color: activeSection !== item.id ? "" : "white" // Handled by class above, but ensuring safety
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {item.title.split('.')[0]}
                {/* Number/Text separation logic */}
                <span 
                  className="ml-2 text-xs truncate"
                  style={{ color: activeSection === item.id ? "rgba(255,255,255,0.8)" : "inherit" }}
                >
                  {item.title.split('.')[1].trim()}
                </span>
              </motion.button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50"> 
      
      {/* Header Area with Global Gradient */}
      <div 
        className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 shadow-xl text-white"
        style={{ background: "var(--gradient-primary)" }}
      >
        <motion.h1 
          className="text-5xl font-extrabold text-center tracking-tighter"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Your Data, Our Promise.
        </motion.h1>
        <motion.p 
          className="mt-3 text-center text-xl font-light opacity-90"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Blute Technologies Online Privacy Policy
        </motion.p>
        <motion.p 
          className="mt-2 text-center text-sm text-white/70"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Last Updated: January 1, 2026
        </motion.p>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:flex lg:space-x-12">
        {/* Left-Side Navigation */}
        <div className="lg:w-1/4 mb-10 lg:mb-0 border-b lg:border-b-0 lg:border-r border-gray-200 lg:pr-6">
          <Navigation />
        </div>

        {/* Right-Side Content */}
        <div className="lg:w-3/4">
          {policyContent.map((item) => (
            <section 
              key={item.id} 
              id={item.id}
              ref={(el) => (contentRefs.current[item.id] = el)}
              className="mb-16 pt-4" 
            >
              {/* Section Header */}
              <motion.h2 
                className="text-2xl font-extrabold text-gray-900 mb-6 pb-3 flex items-center border-b-4"
                style={{ borderColor: "rgba(45, 172, 227, 0.2)" }} // Light blue border
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                {iconMap[item.id]}
                {item.title}
              </motion.h2>
              
              {/* Section Content */}
              <motion.div 
                className="text-gray-700 leading-relaxed space-y-6"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                {item.content}
              </motion.div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;