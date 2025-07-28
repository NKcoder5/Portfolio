import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>
      <div className="projects-list">
        <div className="project-card">
          <img src="https://via.placeholder.com/150" alt="Project 1" />
          <h3>Project Title 1</h3>
          <p>Short description of the project. Technologies used, features, etc.</p>
          <a href="#">View Project</a>
        </div>
        <div className="project-card">
          <img src="https://via.placeholder.com/150" alt="Project 2" />
          <h3>Project Title 2</h3>
          <p>Short description of the project. Technologies used, features, etc.</p>
          <a href="#">View Project</a>
        </div>
        {/* Add more project cards as needed */}
      </div>
    </section>
  );
};

export default Projects; 