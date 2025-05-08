import React from 'react';
import './Contact.css';

function Contacts() {
  return (
    <div className="contacts-container">
      <h1>Contact Us</h1>
      <p>
        Have questions or feedback? We'd love to hear from you! Fill out the form below or reach out to us directly.
      </p>
      <div className="contact-details">
        <p><strong>Email:</strong> support@techtrend.com</p>
        <p><strong>Phone:</strong> +1 (123) 456-7890</p>
        <p><strong>Address:</strong> 123 Tech Street, Innovation City, TX</p>
      </div>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="5" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contacts;