import React from 'react';
import './Home.css';
import gadget1Image from '../assets/4nex.jpg'; // Ensure the image is placed in the assets folder
import gadget2Image from '../assets/sw.png';
import gadget3Image from '../assets/buds.png';
function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to TechTrend</h1>
      <p>Your one-stop destination for the latest in technology trends and updates.</p>
      <button className="explore-button">Explore More</button>

      <div className="tech-section">
        <h2>Latest Gadgets</h2>
        <div className="gadgets">
          <div className="gadget">
            <img src={gadget1Image} alt="Gadget 1" />
            <h3>Smartphone X</h3>
            <p>Experience the future with cutting-edge performance and design.</p>
          </div>
          <div className="gadget">
            <img src={gadget2Image} alt="Gadget 2" />
            <h3>Smartwatch Pro</h3>
            <p>Track your health and stay connected on the go.</p>
          </div>
          <div className="gadget">
            <img src={gadget3Image} alt="Gadget 3" />
            <h3>Wireless Earbuds</h3>
            <p>Immerse yourself in high-quality sound with no strings attached.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;