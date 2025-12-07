"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    name: "Alex Johnson",
    company: "Innovate Solutions Inc.",
    feedback: "The development team exceeded expectations! The final product is fast, beautiful, and exactly what we needed. Highly recommend their expertise.",
    imageUrl: "/feedback-1.jpg"
  },
  {
    id: 2,
    name: "Maria Rodriguez",
    company: "Global Ventures Co.",
    feedback: "Amazing attention to detail and flawless execution. The use of Next.js and Tailwind made for an incredibly performant site. A pleasure to work with from start to finish.",
    imageUrl: "/feedback-2.jpg"
  },
  {
    id: 3,
    name: "David Lee",
    company: "Future Tech Ltd.",
    feedback: "Top-tier service! We are incredibly happy with the results and will surely use their services again.",
    imageUrl: "/feedback-3.jpg"
  },
  {
    id: 4,
    name: "Sarah Chen",
    company: "Creative Agency Hub",
    feedback: "Responsive design was a key factor for us, and the team delivered perfectly. The Framer Motion animations add a polished, modern feel. The collaborative process was seamless.",
    imageUrl: "/feedback-4.jpg"
  },
  {
    id: 5,
    name: "Michael B.",
    company: "Venture Capital Group",
    feedback: "Professional, timely, and experts in the modern web stack.",
    imageUrl: "/feedback-5.jpeg"
  },
  {
    id: 6,
    name: "Olivia W.",
    company: "E-Commerce Startup",
    feedback: "The site's load speed is incredible. We saw a 20% increase in mobile performance immediately.",
    imageUrl: "/feedback-6.jpeg"
  }
];

// --- Card Component ---
const TestimonialCard = ({ testimonial }) => (
  // 1. 'h-full' ensures the wrapper fills the parent's stretched height
  <div className="flex-none w-full md:w-1/2 lg:w-1/3 px-4 h-full"> 
    
    {/* 2. 'h-full' + 'flex flex-col' ensures the white card fills the wrapper */}
    <div className="group relative bg-white border border-gray-100 shadow-lg rounded-[2rem] p-8 h-full flex flex-col hover:shadow-xl transition-shadow duration-300">
      
      {/* Hover Border Effect */}
      <div className="absolute inset-0 rounded-[2rem] border-2 border-transparent group-hover:border-[var(--color-primary-light)] transition-colors duration-300 pointer-events-none"></div>

      {/* Header Row */}
      <div className="flex items-center space-x-4 mb-6 relative z-10 flex-shrink-0"> 
        <div className="flex-shrink-0 relative w-16 h-16 rounded-full overflow-hidden border-2 border-gray-50">
          <Image
            src={testimonial.imageUrl}
            alt={testimonial.name}
            fill
            className="object-cover"
            unoptimized 
          />
        </div>
        <div> 
          <h3 className="text-lg font-bold text-[var(--color-primary-dark)] leading-tight">
            {testimonial.name}
          </h3>
          <p className="text-xs font-bold text-[var(--color-accent-orange)] tracking-wider mt-1">
            {testimonial.company}
          </p>
        </div>
      </div>
      
      {/* Feedback Body - 'flex-grow' pushes bottom content down if needed */}
      <div className="flex-grow relative z-10"> 
        <p className="text-sm text-gray-600 leading-relaxed italic">
          "{testimonial.feedback}"
        </p>
      </div>
    </div>
  </div>
);

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % (testimonials.length - 2)); 
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
 <section className="relative w-full py-12 md:py-16 bg-white font-sans">
      <div className="container mx-auto px-4 max-w-7xl h-full">
        
        {/* Header */}
        <div className="text-center mb-10 max-w-3xl mx-auto">
            <h2 
                className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight"
                style={{
                    background: "var(--gradient-primary)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                }}
            >
                Client Feedback
            </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative overflow-hidden py-4"> 
            <motion.div
              // 3. 'items-stretch' is the MAGIC property. It forces all flex children to match the height of the tallest child.
              className="flex items-stretch" 
              animate={{ x: `-${currentIndex * (100 / 3)}%` }} 
              transition={{ type: "spring", stiffness: 50, damping: 20 }}
            >
              {testimonials.map((t) => (
                <TestimonialCard key={t.id} testimonial={t} />
              ))}
            </motion.div>
        </div>
          
        {/* Dots */}
        <div className="flex justify-center mt-8 space-x-3">
            {[...Array(testimonials.length - 2)].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  currentIndex === index 
                    ? 'bg-[var(--color-primary-light)] w-8' 
                    : 'bg-gray-200 hover:bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
        </div>

      </div>
    </section>
  );
};

export default TestimonialCarousel;