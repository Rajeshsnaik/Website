"use client";

import React from "react";
import { motion } from "framer-motion";
import { Database, Zap, Building2, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Database,
    title: "Become Data-Centric",
    description:
      "Cloud computing solutions will help your business seize, store, and leverage all of your data effectively across teams and systems.",
  },
  {
    icon: Zap,
    title: "Scale, Speed, Agility",
    description:
      "Cloud lets you launch projects quickly with enterprise-level scalability, high reliability, and full operational flexibility.",
  },
  {
    icon: Building2,
    title: "Enterprise-Wide",
    description:
      "Cloud technology helps your business stay extensible, elastic, secure, cost-efficient, and always ready for sudden demand spikes.",
  },
  {
    icon: TrendingUp,
    title: "Digital Transformation",
    description:
      "Accelerate digital modernization with seamless Public, Private, and Hybrid Cloud integration for long-term business innovation.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 20 },
  },
};

export default function TransformBusinessSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <h2
          className="text-4xl sm:text-5xl font-extrabold text-center mb-12"
          style={{ color: "#355694" }}
        >
          Transform Your Business
        </h2>

        {/* Features Grid */}
        <motion.div
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="flex flex-col items-center text-center bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 
                         min-h-[350px] h-full"  // 🔥 Ensures Equal Card Height
            >

              {/* Icon Circle */}
              <div
                className="w-16 h-16 flex items-center justify-center rounded-full mb-4"
                style={{
                  background: "linear-gradient(135deg, #355694, #2DACE3)",
                }}
              >
                <feature.icon className="w-8 h-8 text-[#F6A25C]" strokeWidth={2.4} />
              </div>

              {/* Title */}
              <h3
                className="text-xl font-semibold mb-3"
                style={{ color: "#355694" }}
              >
                {feature.title}
              </h3>

              {/* Description — FULLY visible, NO cut */}
              <p className="text-gray-700 text-base leading-relaxed">
                {feature.description}
              </p>

              {/* Spacer to ensure equal height layout stays clean */}
              <div className="flex-grow" />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
