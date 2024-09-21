import React, { useState } from 'react';
import { Row, Col, Form, Button, Card } from 'react-bootstrap'; 
import '../App.css'; 
import Sidenav from './Sidenav'; 

const CustomerExperiences = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    foodQuality: '',
    serviceRating: '',
    comments: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const [reviews, setReviews] = useState([
    { name: 'John Doe', rating: '5', comment: 'Excellent food and service!', date: '2024-09-15' },
    { name: 'Jane Smith', rating: '4', comment: 'Great experience, but room for improvement.', date: '2024-09-14' },
  ]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    setReviews([...reviews, {
      name: formData.name,
      rating: formData.serviceRating,
      comment: formData.comments,
      date: new Date().toISOString().split('T')[0], // Current date
    }]);
    setSubmitted(true);
    setFormData({ name: '', email: '', foodQuality: '', serviceRating: '', comments: '' });
  };

  return (
    <div className="customer-experiences-container">
      <Row>
        <Col md={2} className="sidenav-col">
          <Sidenav />
        </Col>
        <Col md={10} className="form-col">
          <div className="container mt-5">
            <div className="row">
              <div className="col-md-8 offset-md-2">
                <h2 className=" kid text-center mb-4">Customer Experiences</h2>
                {submitted && <div className="alert alert-success">Thank you for your feedback!</div>}
                
                <Form onSubmit={handleSubmit}>
                  <Form.Group controlId="name">
                    <Form.Label className='namess-2'>Name</Form.Label>
                    <Form.Control 
                      type="text" 
                      name="name" 
                      placeholder="Enter your name" 
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                  </Form.Group>

                  <Form.Group controlId="email">
                    <Form.Label className='namess-2'>Email</Form.Label>
                    <Form.Control 
                      type="email" 
                      name="email" 
                      placeholder="Enter your email" 
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </Form.Group>

                  <Form.Group controlId="foodQuality">
                    <Form.Label className='namess-2'>Food Quality</Form.Label>
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
                    <Form.Label className='namess-2'>Service Rating</Form.Label>
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
                    <Form.Label className='namess-2'>Additional Comments</Form.Label>
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

                <div className="feedback-section mt-5">
                  <h3 className='div'>What Our Customers Say</h3>
                  
                  {reviews.length > 0 ? (
                    reviews.map((review, index) => (
                      <Card key={index} className="mb-3">
                        <Card.Body>
                          <Card.Title>{review.name} <small className="text-muted">({review.date})</small></Card.Title>
                          <Card.Subtitle className="mb-2 text-muted">Rating: {review.rating}</Card.Subtitle>
                          <Card.Text>{review.comment}</Card.Text>
                        </Card.Body>
                      </Card>
                    ))
                  ) : (
                    <p>No feedback yet.</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default CustomerExperiences;