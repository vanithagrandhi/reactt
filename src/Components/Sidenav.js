import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThLarge, faHouse, faComment, faLocationDot, faUtensils, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import Img from '../Assets/profile.jpeg';
import '../App.css'; 

const Sidenav = () => {
  return (
    <div className='sidenav'>
      <h2 className='head1'>Joy's Food Court</h2>
      <ul>
        <li>
          <Link to="/tastyhub">
            <FontAwesomeIcon icon={faHouse} className="fa-icon" /> Tasty Hub
          </Link>
        </li>
        <li>
          <Link to="/dashboard">
            <FontAwesomeIcon icon={faThLarge} className="fa-icon" /> Dashboard
          </Link>
        </li>
       
          <li>
          <Link to="/catering">
          <FontAwesomeIcon icon={faUtensils}  className="fa-icon" /> Catering
    </Link>

          </li>
          <li>
          <Link to="/cart">
          <FontAwesomeIcon icon={faComment}  className="fa-icon" /> Cart
          </Link>
        </li>
         
        <li>
          <Link to="/customerexperiences">
          <FontAwesomeIcon icon={faComment}  className="fa-icon" /> Customer Experiences
          </Link>
        </li>
        <li>
          <Link to="/location">
            <FontAwesomeIcon icon={faLocationDot} className="fa-icon" /> Location
          </Link>
        </li>
      </ul>
      <div className='img'>
        <img src={Img} alt='Profile'></img>
      </div>
      <div className='head-2'>
        <h4>Hello Tony</h4>
        <p>Fun. Fast. Tasty. Delicious.</p>
      </div>
      <div className='log'>
        <Link to='/'>
          <FontAwesomeIcon icon={faArrowRightFromBracket} /> Logout
        </Link>
      </div>
    </div>
  );
}

export default Sidenav;
