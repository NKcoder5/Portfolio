import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <img
          src={process.env.PUBLIC_URL + '/logo192.png'} // Placeholder profile pic
          alt="Profile"
          className="hero-profile-pic"
        />
        <h1>Your Name</h1>
        <h2>Your Professional Title</h2>
        <p>Short tagline or introduction goes here. Make it catchy and professional!</p>
        <div className="hero-social-links">
          <a href="#" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="#" target="_blank" rel="noopener noreferrer">HackerRank</a>
          <a href="#" target="_blank" rel="noopener noreferrer">LeetCode</a>
          {/* Add more links as needed */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
 