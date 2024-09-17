import React, { useState } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap'; 
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

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Feedback submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', foodQuality: '', serviceRating: '', comments: '' });
  };

  return (
    <div className="feedback-form-container">
      <Row>
        <Col md={2} className="sidenav-col">
          <Sidenav />
        </Col>
        <Col md={10} className="form-col">
          <div className="container mt-5">
            <div className="row">
              <div className="col-md-8 offset-md-2">
                <h2 className="text-center mb-4">Food Court Feedback Form</h2>
                {submitted && <div className="alert alert-success">Thank you for your feedback!</div>}
                <Form onSubmit={handleSubmit}>
                
                  <Form.Group controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control 
                      type="text" 
                      name="name" 
                      placeholder="Enter your name" 
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                  </Form.Group>

                  <Form.Group controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control 
                      type="email" 
                      name="email" 
                      placeholder="Enter your email" 
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </Form.Group>

                  <Form.Group controlId="foodQuality">
                    <Form.Label>Food Quality</Form.Label>
                    <Form.Control 
                      as="select" 
                      name="foodQuality" 
                      value={formData.foodQuality}
                      onChange={handleInputChange}
                    >
                      <option value="">Choose...</option>
                      <option value="Excellent">Excellent</option>
                      <option value="Good">Good</option>
                      <option value="Average">Average</option>
                      <option value="Poor">Poor</option>
                    </Form.Control>
                  </Form.Group>

                  <Form.Group controlId="serviceRating">
                    <Form.Label>Service Rating</Form.Label>
                    <Form.Control 
                      as="select" 
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
                    </Form.Control>
                  </Form.Group>

                  <Form.Group controlId="comments">
                    <Form.Label>Additional Comments</Form.Label>
                    <Form.Control 
                      as="textarea" 
                      name="comments" 
                      rows="4" 
                      placeholder="Enter any additional comments" 
                      value={formData.comments}
                      onChange={handleInputChange}
                    />
                  </Form.Group>

                  <Button type="submit" variant="primary" className='sub'>Submit Feedback</Button>
                </Form>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default FeedbackForm;
