import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { Link } from 'react-router-dom';
import '../App.css'; 

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let formIsValid = true;
    const newErrors = { email: '', password: '' };

   
    if (!email) {
      newErrors.email = 'Email is required';
      formIsValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email is invalid';
      formIsValid = false;
    }

   
    if (!password) {
      newErrors.password = 'Password is required';
      formIsValid = false;
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long';
      formIsValid = false;
    }

    setErrors(newErrors);

    if (formIsValid) {
      console.log('Form Submitted', { email, password });
      setEmail('');
      setPassword('');
      navigate('/home'); 
    }
  };

  return (
    <div className='login-container'>
      <h2 className='login-head'>LOGIN</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            className={`form-control ${errors.email ? 'input-error' : ''}`}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <div className="error">{errors.email}</div>}
        </div>
        
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className={`form-control ${errors.password ? 'input-error' : ''}`}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <div className="error">{errors.password}</div>}
        </div>

        <div className="form-group form-check">
          <input type="checkbox" className="form-check-input" />
          <label className="form-check-label">Check me out</label>
        </div>

        <button type="submit" className="btn btn-primary">Login</button>
        <h6>Don't have an account? <Link to="/signup">Sign up</Link></h6>
      </form>
    </div>
  );
}

export default Login;
