import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div className='signup-container'>
      <h2 className='signup-heading'>SIGN UP</h2>
      <form className="signup-form row g-3 needs-validation" noValidate>
        <div className="form-group col-md-6">
          <label htmlFor="signupFirstName" className="form-label">First name</label>
          <input type="text" className="form-control" id="signupFirstName" required />
          <div className="valid-feedback">Looks good!</div>
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="signupLastName" className="form-label">Last name</label>
          <input type="text" className="form-control" id="signupLastName" required />
          <div className="valid-feedback">Looks good!</div>
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="signupUsername" className="form-label">Username</label>
          <div className="input-group has-validation">
            <span className="input-group-text" id="usernamePrefix">@</span>
            <input type="text" className="form-control" id="signupUsername" aria-describedby="usernamePrefix" required />
            <div className="invalid-feedback">Please choose a username.</div>
          </div>
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="signupCity" className="form-label">City</label>
          <input type="text" className="form-control" id="signupCity" required />
          <div className="invalid-feedback">Please provide a valid city.</div>
        </div>
        <div className="form-group col-md-4">
          <label htmlFor="signupState" className="form-label">State</label>
          <select className="form-select" id="signupState" required>
            <option selected disabled value="">Choose...</option>
            <option>Andhra Pradesh</option>
            <option>Himachal Pradesh</option>
            <option>Rajasthan</option>
            <option>Tripura</option>
            <option>Manipur</option>
          </select>
          <div className="invalid-feedback">Please select a valid state.</div>
        </div>
        <div className="form-group col-md-4">
          <label htmlFor="signupZip" className="form-label">Zip</label>
          <input type="text" className="form-control" id="signupZip" required />
          <div className="invalid-feedback">Please provide a valid zip.</div>
        </div>
        <div className="form-group col-12">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="signupAgree" required />
            <label className="form-check-label" htmlFor="signupAgree">
              Agree to terms and conditions
            </label>
            <div className="invalid-feedback">You must agree before submitting.</div>
          </div>
        </div>
        <div className="form-group col-12">
          <Link to="/" className="btn btn-custom">Sign Up</Link>
        </div>
      </form>
    </div>
  );
}

export default Signup;
