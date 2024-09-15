import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap'; 
import '../App.css'; 
import Sidenav from './Sidenav'; 

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    foodQuality: '',
    serviceRating: '',
    comments: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.foodQuality) newErrors.foodQuality = 'Please rate the food quality';
    if (!formData.serviceRating) newErrors.serviceRating = 'Please rate the service';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      console.log('Feedback submitted:', formData);
      setSubmitted(true);
      setFormData({ name: '', email: '', foodQuality: '', serviceRating: '', comments: '' });
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="container">
      <Row>
        <Col sm={2}>
          <Sidenav />
        </Col>
        <Col sm={10} style={{ padding: '5%' }}>
          <h2 className="head">Food Feedback Form</h2>
          {submitted && <div className="success-message">Thank you for your feedback!</div>}
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
              {errors.name && <div className="error">{errors.name}</div>}
            </div>

            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
              {errors.email && <div className="error">{errors.email}</div>}
            </div>

            <div className="mb-3">
              <label className="form-label">Food Quality</label>
              <select
                className="form-select"
                name="foodQuality"
                value={formData.foodQuality}
                onChange={handleInputChange}
              >
                <option value="">Choose...</option>
                <option value="Excellent">Excellent</option>
                <option value="Good">Good</option>
                <option value="Average">Average</option>
                <option value="Poor">Poor</option>
              </select>
              {errors.foodQuality && <div className="error">{errors.foodQuality}</div>}
            </div>

            <div className="mb-3">
              <label className="form-label">Service Rating</label>
              <select
                className="form-select"
                name="serviceRating"
                value={formData.serviceRating}
                onChange={handleInputChange}
              >
                <option value="">Choose...</option>
                <option value="5">5 - Excellent</option>
                <option value="4">4 - Very Good</option>
                <option value="3">3 - Good</option>
                <option value="2">2 - Fair</option>
                <option value="1">1 - Poor</option>
              </select>
              {errors.serviceRating && <div className="error">{errors.serviceRating}</div>}
            </div>

            <div className="mb-3">
              <label className="form-label">Additional Comments</label>
              <textarea
                className="form-control"
                name="comments"
                rows="4"
                value={formData.comments}
                onChange={handleInputChange}
              />
            </div>

            <button type="submit" className="btn btn-primary">Submit Feedback</button>
          </form>
        </Col>
      </Row>
    </div>
  );
};

export default FeedbackForm;
