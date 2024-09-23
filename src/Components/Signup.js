import React, { useState } from 'react';
import '../App.css'; 
import Logo from '../Assets/logo.png';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userName, setUserName] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted', {
      firstName,
      lastName,
      userName,
      city,
      state,
      zipCode
    });

    setFirstName('');
    setLastName('');
    setUserName('');
    setCity('');
    setState('');
    setZipCode('');
    navigate('/');
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <div className="logo-container">
          <img src={Logo} alt="Logo" className="logo" />
        </div>
        <h2 className="welcome-text">Welcome to</h2>
        <h1 className="brand-name">Joy's Food Court</h1>

        <form onSubmit={handleSubmit} className="signup-form">
          <div className="row">
            <div className="form-group1 col-6">
              <input
                type="text"
                placeholder="User Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="form-group1 col-6">
              <input
                type="text"
                placeholder="Email"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>
          <div className="row">
            <div className="form-group1 col-6">
              <input
                type="text"
                placeholder="Password"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <div className="form-group1 col-6">
              <input
                type="text"
                placeholder="City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
          </div>
          <div className="form-group1">
            <select
              value={state}
              onChange={(e) => setState(e.target.value)}
            >
              <option value="">Select State</option>
              <option value="Andra Pradesh">Andhra Pradesh</option>
              <option value="California">California</option>
              <option value="Texas">Texas</option>
              <option value="New York">New York</option>
              <option value="Florida">Florida</option>
              
            </select>
          </div>
          <div className="form-group1">
            <input
              type="text"
              placeholder="Zip Code"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
            />
          </div>

          <button type="submit" className="signup-btn">Sign Up</button>
        </form>

      </div>
    </div>
  );
}

export default Signup;
