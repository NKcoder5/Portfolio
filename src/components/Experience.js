import React from 'react';
import './Experience.css';

const Experience = () => {
  return (
    <section className="experience" id="experience">
      <h2>Experience</h2>
      <div className="experience-list">
        <div className="experience-item">
          <h3>Job Title 1</h3>
          <h4>Company Name | Year - Year</h4>
          <p>Short description of your role, achievements, and responsibilities.</p>
        </div>
        <div className="experience-item">
          <h3>Job Title 2</h3>
          <h4>Company Name | Year - Year</h4>
          <p>Short description of your role, achievements, and responsibilities.</p>
        </div>
        {/* Add more experience items as needed */}
      </div>
    </section>
  );
};

export default Experience; 