import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThLarge, faHouse, faComment, faLocationDot, faBell, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import Img from '../Assets/profile.jpeg';
import '../App.css'; 

const Sidenav = () => {
  return (
    <div className='sidenav'>
      <h2 className='head1'>Joy's Food Court</h2>
      <ul>
        <li>
          <Link to="/home">
            <FontAwesomeIcon icon={faHouse} className="fa-icon" /> Home
          </Link>
        </li>
        <li>
          <Link to="/dashboard">
            <FontAwesomeIcon icon={faThLarge} className="fa-icon" /> Dashboard
          </Link>
        </li>
       
          <li>
          <Link to="/notifications">
      <FontAwesomeIcon icon={faBell} className="fa-icon" /> Notifications
    </Link>

          </li>
        
        <li>
          <Link to="/feedback">
            <FontAwesomeIcon icon={faComment} className="fa-icon" /> Feedback
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
