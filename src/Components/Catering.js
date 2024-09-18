import React from 'react';
import '../App.css';
import blackforest from '../Assets/blackforest cake.jpeg';
import chocochip from '../Assets/milk chocochip.avif';
import supreme from '../Assets/Supreme.jpg';
import oreo from '../Assets/oreo ms.jpg';

const Catering = () => {
  return (
    <div className='catering'>
      <h2 className='cat'>Catering Services</h2>
      <p className='par'>Prepare a tempting table with delicious dishes from our catering services!</p>
      <p className='par'>Make your event perfect with this mouth-watering culinary touch.</p>

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
      <div className='foods'>
      <div className='food-1'>
      <ul>
      <h2>Our Services</h2>
        <li>Wedding</li>
        <li>Family Event</li>
        <li>Get together</li>
        <li>Office Event</li>
        <li>Birthday Event</li>
      </ul>
      </div>
      
      
      <div className='food-2'>
      <ul>
        
      <h2>Our Foods</h2>
        <li>Pizza</li>
        <li>Milkshakes</li>
        <li>Desserts</li>
        <li>Waffles</li>
        
      </ul>
      </div> 
      </div>
      </div>
   
  );
};

export default Catering;
