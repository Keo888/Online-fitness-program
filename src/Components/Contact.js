import React from 'react';
import './Contact.css';

const Contact = () => (
  <div className="container">
    <h2>Contact Us</h2>
    <p>Feel free to reach out to us for any inquiries or to schedule your training sessions.</p>

    <form>
      <label htmlFor="firstName">First Name:</label>
      <input type="text" id="firstName" name="firstName" required />

      <label htmlFor="lastName">Last Name:</label>
      <input type="text" id="lastName" name="lastName" required />

      <label htmlFor="phone">Phone Number:</label>
      <input type="tel" id="phone" name="phone" required />

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" required />

      <label htmlFor="package">Select Package:</label>
      <select id="package" name="package" required>
        <option value="virtualTraining">Virtual Training</option>
        <option value="inPersonTraining">In-Person Training</option>
      </select>

      <button type="submit">Submit</button>
    </form>
    <div className="social-media-icons">
      <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
      <img src="/img/insta.jpg" alt="Twitter" />
      </a>
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
      <img src="/img/twitter.jpg" alt="Twitter" />
      </a>
      <a href="https://wa.me/your-phonenumber" target="_blank" rel="noopener noreferrer">
      <img src="/img/whatsapp.jpg" alt="Twitter" />
      </a>
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
      <img src="/img/facebook.jpg" alt="Twitter" />
      </a>
    </div>
  </div>
);

export default Contact;
