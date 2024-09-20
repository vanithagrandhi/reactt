import React from 'react';
import '../App.css';
import { Col, Row } from 'react-bootstrap';
import Sidenav from './Sidenav';

const Location = () => {
  return (
    <div className='location-content'>
      <Row>
        <Col sm={2}>
          <Sidenav />
        </Col>
        <Col sm={10} className='location-main-content'>
          <header className='location-header'>
            <h1>Our Location</h1>
            <p>Find us on the map below and get in touch with us!</p>
          </header>
          <div className='location-map-container'>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.700216586869!2d83.31416137332714!3d17.711616393387512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a395a58f0d7503f%3A0x30916a1d30171991!2sMing%20Garden!5e0!3m2!1sen!2sin!4v1725946737279!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Location Map"
            ></iframe>
          </div>
      
          <div className='location-contact-form'>
            <h4>Contact Us</h4>
            <form>
              <label htmlFor="name" className='name'>Name:</label>
              <input type="text" id="name" name="name" required />
              
              <label htmlFor="email" className='name'>Email:</label>
              <input type="email" id="email" name="email" required />
              
              <label htmlFor="message" className='name'>Message:</label>
              <textarea id="message" name="message" rows="4" required></textarea>
              
              <button type="submit" >Send Message</button>
            </form>
          </div>
          <div className='location-contact-info'>
            <h5>Contact: 12345703</h5>
            <p>Feel free to reach out to us for any inquiries or assistance.</p>
          </div>
          <div className='location-social-media'>
            <h4>Follow Us</h4>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Location;
