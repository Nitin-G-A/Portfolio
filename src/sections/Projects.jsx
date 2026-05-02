import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/projects.css";

import projectImg from "../assets/hero.png"; // replace with your images

const Projects = () => {
  const [open, setOpen] = useState(null);

  const projects = [
    {
      title: "AI Learning Platform",
      tagline: "AI-powered personalized learning system",
      metrics: ["10K+ Users", "5 Modules", "Real-time"],
      problem: "Students lack structured learning paths.",
      solution: "AI generates adaptive learning paths.",
      features: ["Personalized learning", "Progress tracking", "AI recommendations"],
      tech: ["React", "FastAPI", "PostgreSQL"],
      github: "#",
      live: "#"
    },
    {
      title: "OS Dashboard",
      tagline: "Real-time system monitoring dashboard",
      image: projectImg,
      metrics: ["Encryption", "Scheduler", "Real-time"],
      problem: "Hard to monitor system tasks efficiently.",
      solution: "Dashboard with task scheduling and encryption.",
      features: ["Task Manager", "Encryption", "Live Monitoring"],
      tech: ["JavaScript", "Python"],
      github: "#",
      live: "#"
    },
    {
      title: "AI Recipe App",
      tagline: "Smart cooking assistant",
      image: projectImg,
      metrics: ["AI Generated", "Voice Input", "Fast"],
      problem: "Users struggle to decide recipes.",
      solution: "AI suggests recipes based on ingredients.",
      features: ["Voice Search", "Ingredient Match", "AI Suggestions"],
      tech: ["React", "API"],
      github: "#",
      live: "#"
    },
    {
      title: "Finance Tracker",
      tagline: "Personal expense manager",
      image: projectImg,
      metrics: ["Charts", "Reports", "Secure"],
      problem: "Hard to track expenses manually.",
      solution: "Automated tracking with analytics.",
      features: ["Graphs", "Reports", "Budget Alerts"],
      tech: ["React", "Node", "SQL"],
      github: "#",
      live: "#"
    }
  ];

  return (
    <section id="projects" className="projects">
      <h2>PROJECTS</h2>

      <div className="projects-grid">
        {projects.map((p, i) => (
          <motion.div
            className="project-card-pro"
            key={i}
            whileHover={{ scale: 1.02 }}
          >

            {/* HEADER */}
            <div className="header">
              <div>
                <h3>{p.title}</h3>
                <p>{p.tagline}</p>
              </div>

              <div className="btns">
                <a href={p.live} target="_blank">Visit</a>
                <a href={p.github} target="_blank">GitHub</a>
              </div>
            </div>

            {/* METRICS */}
            <div className="metrics">
              {p.metrics.map((m, idx) => (
                <div key={idx} className="metric-box">{m}</div>
              ))}
            </div>

            {/* PROBLEM */}
            <div className="block problem">
              <p>{p.problem}</p>
            </div>

            {/* SOLUTION */}
            <div className="block solution">
              <p>{p.solution}</p>
            </div>

            {/* ACCORDION */}
            <div className="accordion" onClick={() => setOpen(open === i ? null : i)}>
              Key Features {open === i ? "▲" : "▼"}
            </div>

            <AnimatePresence>
              {open === i && (
                <motion.div
                  className="features-grid"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                >
                  {p.features.map((f, idx) => (
                    <div key={idx} className="feature-box">{f}</div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            {/* TECH */}
            <div className="tech">
              {p.tech.map((t, idx) => (
                <span key={idx}>{t}</span>
              ))}
            </div>

          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;