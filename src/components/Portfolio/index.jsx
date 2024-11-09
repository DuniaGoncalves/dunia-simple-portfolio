import React from 'react';
import { motion } from 'framer-motion';
import './main.css';

const Portfolio = () => {
  const projects = [
    {
      title: "Task Manager",
      description: "A responsive web application that helps users manage their tasks efficiently.",
      liveLink: "https://listtaskmanager.netlify.app/",
      codeLink: "https://github.com/DuniaGoncalves/task-manager",
    },
    {
      title: "Decor & Rentals",
      description: "A portfolio website with dynamic animations, showcasing my design and coding skills.",
      liveLink: "https://decorandrentals.netlify.app/",
      codeLink: "https://github.com/DuniaGoncalves/decor-rentals-site",
    },
    {
      title: "Ecommerce Site",
      description: "IN PROGRESS: An interactive e-commerce platform featuring a custom-built shopping cart and checkout.",
      liveLink: "#",
      codeLink: "#",
    },
  ];

  return (
    <section id="portfolio" className="portfolio-section">
      <h2>Portfolio</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <motion.div
            className="project-card"
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileHover={{ scale: 1.05 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-links">
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer">View Project</a>
              <a href={project.codeLink} target="_blank" rel="noopener noreferrer">View Code</a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
