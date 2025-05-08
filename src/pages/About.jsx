import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-container">
      <h1>About TechTrend</h1>
      <p>
        At <span className="highlight">TechTrend</span>, we are passionate about bringing you the latest and greatest in technology. 
        From cutting-edge gadgets to insightful tech news, we aim to keep you informed and inspired.
      </p>
      <div className="about-content">
        <div className="about-section">
          <h2>Our Mission</h2>
          <p>
            To empower tech enthusiasts and professionals by providing reliable and up-to-date information 
            about the ever-evolving world of technology.
          </p>
        </div>
        <div className="about-section">
          <h2>Why Choose Us?</h2>
          <ul>
            <li>Comprehensive coverage of the latest tech trends</li>
            <li>Expert reviews and insights</li>
            <li>A community of like-minded tech enthusiasts</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;