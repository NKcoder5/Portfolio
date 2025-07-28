import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h2>Contact</h2>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" name="name" required />
        <input type="email" placeholder="Your Email" name="email" required />
        <textarea placeholder="Your Message" name="message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
      <div className="social-links">
        <a href="#">LinkedIn</a>
        <a href="#">GitHub</a>
        <a href="#">Twitter</a>
      </div>
    </section>
  );
};

export default Contact; 