import React from "react";
import ProjectDetail from "../ProjectDetail"; // Ensure this path points to your component
import { notFound } from "next/navigation";

// ALL PROJECTS DATA
const projects = [
  {
    slug: "garbage-management-solution-using-iot",
    category: "IoT Solution",
    title: "Garbage Management Solution using IoT",
    subtitle:
      "Blute Technologies offers Smart Waste Solution, a comprehensive platform to automate the complete process of waste management.",
    image: "/images/project1.jpg", // Make sure these images exist in your public folder
    year: "2024",
    duration: "Ongoing",
    overview: [
      "One of the main concerns with our environment has been solid waste management which impacts the health and environment of our society. The detection, monitoring and management of wastes is one of the primary problems of the present era. The traditional way of manually monitoring the wastes in waste bins is a cumbersome process and utilizes more human effort, time and cost which can easily be avoided with our present technologies.",
      "Blute Technologies offers Smart Waste Solution, a comprehensive platform to automate the complete process of waste management. This is our IoT Garbage Monitoring system, an innovative way that will help to keep the cities clean and healthy."
    ]
  },
  {
    slug: "water-quality-monitoring-iot",
    category: "IoT Solution",
    title: "Real-Time Water Quality Monitoring System",
    subtitle:
      "This IoT solution monitors pH, turbidity, and TDS in real-time to ensure clean and safe water.",
    image: "/images/project2.jpg",
    year: "2024",
    duration: "Completed",
    overview: [
      "Water contamination is a growing issue requiring smart monitoring.",
      "Our sensors provide reliable real-time water quality data."
    ]
  },
  {
    slug: "smart-energy-meter",
    category: "Energy Solution",
    title: "Smart Energy Meter with Live Consumption Tracking",
    subtitle:
      "Track and control electricity usage using IoT-based smart metering.",
    image: "/images/project3.jpg",
    year: "2023",
    duration: "Completed",
    overview: [
      "Energy wastage increases electricity bills unnecessarily.",
      "Our solution gives live consumption alerts and analytics."
    ]
  }
];

// 1. Generate Static Params (Pre-builds pages for performance)
export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

// 2. Generate Dynamic Metadata (SEO)
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: `${project.title} | Blute Technologies`,
    description: project.subtitle,
  };
}

// 3. Main Page Component (Server Component)
export default async function ProjectPage({ params }) {
  // In Next.js 15+, params must be awaited
  const { slug } = await params;
  
  const project = projects.find((p) => p.slug === slug);

  // If slug doesn't match any project, show 404
  if (!project) {
    notFound();
  }

  // Pass data to the Client Component
  return <ProjectDetail project={project} />;
}