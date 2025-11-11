"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// --- Sample Data for 6 Testimonials ---
const testimonials = [
  {
    id: 1,
    name: "Alex Johnson",
    company: "Innovate Solutions Inc.",
    feedback: "The development team exceeded expectations! The final product is fast, beautiful, and exactly what we needed. Highly recommend their expertise. This extra sentence ensures the card size is robust enough for longer content and tests the wrapping functionality across multiple lines.",
    imageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?fit=crop&w=300&h=300&q=80"
  },
  {
    id: 2,
    name: "Maria Rodriguez",
    company: "Global Ventures Co.",
    feedback: "Amazing attention to detail and flawless execution. The use of Next.js and Tailwind made for an incredibly performant site. A pleasure to work with. We are absolutely thrilled with the results we've seen since launching the new design.",
    imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?fit=crop&w=300&h=300&q=80"
  },
  {
    id: 3,
    name: "David Lee",
    company: "Future Tech Ltd.",
    feedback: "They turned our complex requirements into a simple, elegant solution. The performance boost from their optimized code is significant. Top-tier service! We are incredibly happy with the results and will surely use their services again.",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a812d6ce89d?fit=crop&w=300&h=300&q=80"
  },
  {
    id: 4,
    name: "Sarah Chen",
    company: "Creative Agency Hub",
    feedback: "Responsive design was a key factor for us, and the team delivered perfectly. The Framer Motion animations add a polished, modern feel. The entire process was seamless and highly collaborative.",
    imageUrl: "https://images.unsplash.com/photo-1542155823-1493011c7501?fit=crop&w=300&h=300&q=80"
  },
  {
    id: 5,
    name: "Michael B.",
    company: "Venture Capital Group",
    feedback: "Professional, timely, and experts in the modern web stack. Our new investor portal is secure, fast, and visually appealing. Five stars!",
    imageUrl: "https://images.unsplash.com/photo-1506794778202-dfa929662758?fit=crop&w=300&h=300&q=80"
  },
  {
    id: 6,
    name: "Olivia W.",
    company: "E-Commerce Startup",
    feedback: "The site's load speed is incredible, which has directly impacted our conversion rates. The continuous loop of the testimonials looks fantastic! We saw a 20% increase in mobile performance immediately after deployment.",
    imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29329?fit=crop&w=300&h=300&q=80"
  }
];

// --- Card Component for each Testimonial ---
const TestimonialCard = ({ testimonial }) => (
  // Card Wrapper: ensures only 3 cards are visible on desktop (w-[calc(100%/3)])
  <div className="flex-none w-full lg:w-[calc(100%/3)] px-4 mb-8"> 
    {/* Card Body: Changed to flex-col to stack header and feedback, using h-full for alignment */}
    <div className="bg-white border border-gray-100 shadow-xl rounded-2xl p-8 flex flex-col h-full"> 
      
      {/* 1. Header Row: Image + Name/Company (flex row) */}
      <div className="flex items-center space-x-6 pb-6 border-b border-gray-100 mb-6"> 
        
        {/* Left Side: Image */}
        <div className="flex-shrink-0">
          <img
            className="w-24 h-24 object-cover rounded-full border-4 border-indigo-500"
            src={testimonial.imageUrl}
            alt={testimonial.name}
            onError={(e) => { e.target.onerror = null; e.target.src = "https://via.placeholder.com/96" }}
          />
        </div>

        {/* Right Side: Name and Company Stack */}
        <div> 
          {/* Company Name (Very Small, Less Opacity) */}
          <p className="text-xs font-medium text-gray-500 mb-0 uppercase tracking-wider opacity-75">
            {testimonial.company}
          </p>
          {/* Client Name (Bit Smaller) */}
          <h3 className="text-xl font-bold text-gray-900 leading-tight">
            {testimonial.name}
          </h3>
        </div>
      </div>
      
      {/* 2. Feedback Body: Takes Full Width */}
      <div className="flex-grow whitespace-normal"> 
        <p className="text-sm text-gray-600 italic leading-relaxed">
          "{testimonial.feedback}"
        </p>
      </div>
    </div>
  </div>
);

// --- Main Carousel Component ---
const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardCount = testimonials.length;
  // Controls how many items are visible (3 on desktop)
  const visibleItems = 3; 
  const totalSlides = Math.ceil(cardCount / visibleItems);

  // Auto-rotate logic
  useEffect(() => {
    const interval = setInterval(() => {
      // Move to the next index, wrapping around to 0
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [totalSlides]);

  // Calculate the 'x' offset for the motion container
  const translateXValue = `-${currentIndex * (100 / (cardCount / visibleItems))}%`;

  return (
    <section className="py-24 bg-gray-50 overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-16">
          Client Feedback & Testimonials ✨
        </h2>

        {/* Carousel Container */}
        <div className="relative">
          <div className="overflow-hidden">
            <motion.div
              className="flex whitespace-nowrap" // Required for horizontal scroll animation
              style={{ x: translateXValue }}
              animate={{ x: translateXValue }}
              transition={{ type: "spring", stiffness: 60, damping: 20 }}
            >
              {testimonials.map((t) => (
                <TestimonialCard key={t.id} testimonial={t} />
              ))}
            </motion.div>
          </div>
          
          {/* Dots/Navigation */}
          <div className="flex justify-center m-5 space-x-4">
            {[...Array(totalSlides)].map((_, index) => (
              <button
                key={index}
                className={`w-4 h-4 rounded-full transition-colors duration-300 ${
                  currentIndex === index ? 'bg-indigo-600 shadow-md' : 'bg-indigo-300 hover:bg-indigo-400'
                }`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;