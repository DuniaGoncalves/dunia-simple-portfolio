import React from 'react';
import './main.css';

const Portfolio = () => {
  const projects = [
    {
      title: "Project One",
      description: "A responsive web application that helps users manage their tasks efficiently.",
      liveLink: "#",
      codeLink: "#",
    },
    {
      title: "Project Two",
      description: "An interactive e-commerce platform featuring a custom-built shopping cart and checkout.",
      liveLink: "#",
      codeLink: "#",
    },
    {
      title: "Project Three",
      description: "A portfolio website with dynamic animations, showcasing my design and coding skills.",
      liveLink: "#",
      codeLink: "#",
    },
  ];

  return (
    <section id="portfolio" className="portfolio-section">
      <h2>Portfolio</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-links">
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer">View Project</a>
              <a href={project.codeLink} target="_blank" rel="noopener noreferrer">View Code</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
