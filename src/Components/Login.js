import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../App.css'; 

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted', { email, password });
    setEmail('');
    setPassword('');
    navigate('/home'); 
  };

  return (
    <div className='login-container'>
      <h2 className='login-head'>LOGIN</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="form-group form-check">
          <input type="checkbox" className="form-check-input" />
          <label className="form-check-label">Check me out</label>
        </div>

        <button type="submit" className="btn btn-primary"><Link to='dashboard'>Login</Link></button>
        <h6>Don't have an account? <Link to="/signup">Sign up</Link></h6>
      </form>
      
    </div>
  );
}

export default Login;
