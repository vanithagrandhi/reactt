import React from 'react';
import { Row, Col } from 'react-bootstrap';
import '../App.css';
import blackforest from '../Assets/blackforest cake.jpeg';
import chocochip from '../Assets/milk chocochip.avif';
import supreme from '../Assets/Supreme.jpg';
import oreo from '../Assets/oreo ms.jpg';
import Sidenav from './Sidenav';

const Catering = () => {
  return (
    <Row>
      {/* Side Navigation */}
      <Col md={2} className="sidenav-col">
        <Sidenav />
      </Col>
      
      {/* Main content */}
      <Col md={10} className="form-col">
        <div className='catering'>
          <h2 className='cat'>Catering Services</h2>
          <p className='par'>Prepare a tempting table with delicious dishes from our catering services!</p>
          <p className='par'>Make your event perfect with this mouth-watering culinary touch.</p>

          {/* Image container with circles */}
          <div className="image-container">
            <div className="circle">
              <img src={blackforest} alt="Blackforest Cake" />
            </div>
            <div className="circle">
              <img src={chocochip} alt="Milk Choco Chip" />
            </div>
            <div className="circle">
              <img src={supreme} alt="Supreme" />
            </div>
            <div className="circle">
              <img src={oreo} alt="Oreo Milkshake" />
            </div>
          </div>

          {/* Services and Foods */}
          <div className='foods'>
            <div className='food-1'>
              <ul className='list'>
                <h2>Our Services</h2>
                <li>Wedding</li>
                <li>Family Event</li>
                <li>Get Together</li>
                <li>Office Event</li>
                <li>Birthday Event</li>
              </ul>
            </div>
            
            <div className='food-2'>
              <ul className='list'>
                <h2>Our Foods</h2>
                <li>Pizza</li>
                <li>Milkshakes</li>
                <li>Desserts</li>
                <li>Waffles</li>
              </ul>
            </div>
          </div>

         
          <div className='contact'>
            <h5>Book Your Event Now</h5>
            <h2>Contact Us</h2>
            <p>For bookings or inquiries, please contact us at:</p>
            <h4>Phone: 1234567890</h4>
            <h4>Email: catering@example.com</h4>
            <p>We look forward to making your event special!</p>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default Catering;
