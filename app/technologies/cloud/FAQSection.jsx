"use client";

// components/FAQSection.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

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


const faqData = [
  {
    question: 'How does Blute Technologies ensure data security and compliance in the cloud?',
    answer: 'We implement robust security measures including end-to-end encryption, multi-factor authentication, and regular security audits. Our solutions are designed to comply with industry-specific regulations (e.g., GDPR, HIPAA) by leveraging the advanced security features and compliance certifications of leading cloud providers like AWS, Azure, and GCP. We also offer hybrid cloud models for highly sensitive data.',
  },
  {
    question: 'Can your cloud solutions integrate with our existing on-premises infrastructure?',
    answer: 'Absolutely! Blute Technologies specializes in hybrid cloud strategies that seamlessly integrate your current on-premises systems with new cloud environments. This approach allows you to leverage cloud benefits while retaining critical data and applications securely within your private infrastructure, ensuring a smooth transition and maximized operational efficiency.',
  },
  {
    question: 'What is the typical timeline for migrating an enterprise application to the cloud with Blute Technologies?',
    answer: 'The timeline varies depending on the complexity, size, and specific requirements of the application. However, we follow an agile methodology, typically starting with an assessment phase (2-4 weeks), followed by planning and pilot migration (4-8 weeks), and then full-scale migration. Most projects range from 3 to 9 months, with continuous optimization post-migration. We prioritize minimal disruption to your ongoing operations.',
  },
  {
    question: 'How do you help businesses choose between IaaS, PaaS, and SaaS, or a combination?',
    answer: 'Our process begins with a comprehensive analysis of your business needs, existing IT infrastructure, budget, and long-term goals. We assess factors like control requirements, scalability, maintenance preferences, and development needs to recommend the most suitable model or a multi-cloud/hybrid combination. Our aim is to find the most cost-effective and efficient solution that aligns perfectly with your strategic objectives.',
  },
];

const FAQSection = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="lg:text-center mb-12"
        >
          <p className={`text-lg font-semibold ${accentOrange}`}>
            Got Questions?
          </p>
          <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            <span className={primaryDark}>Frequently Asked</span> Questions
          </h2>
          <p className="mt-4 text-xl text-gray-500 lg:mx-auto">
            Find answers to common inquiries about our cloud solutions and services.
          </p>
        </motion.div>

        <div className="mt-10 space-y-4">
          {faqData.map((faq, index) => (
            <motion.div
              key={index}
              className="border border-gray-100 rounded-xl shadow-sm overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <button
                className={`flex justify-between items-center w-full px-6 py-4 text-left focus:outline-none transition-all duration-300 ${
                  openQuestion === index
                    ? `${gradientPrimary} text-white`
                    : 'bg-gray-50 hover:bg-gray-100 text-gray-900'
                }`}
                onClick={() => toggleQuestion(index)}
              >
                <span className="text-lg font-semibold">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openQuestion === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className={`h-6 w-6 ${openQuestion === index ? 'text-white' : primaryDark}`} />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openQuestion === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="px-6 py-4 bg-white text-gray-700 leading-relaxed"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;