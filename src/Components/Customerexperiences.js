import React, { useState } from 'react';
import { Row, Col, Form, Button, Card } from 'react-bootstrap'; 
import '../App.css'; 
import Sidenav from './Sidenav'; 

const StarRating = ({ rating, onRatingChange }) => {
  const handleClick = (value) => {
    onRatingChange(value);
  };

  const ratingDescription = (value) => {
    switch (value) {
      case 1:
        return "Very Poor";
      case 2:
        return "Poor";
      case 3:
        return "Average";
      case 4:
        return "Good";
      case 5:
        return "Excellent";
      default:
        return "";
    }
  };

  return (
    <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        const value = index + 1;
        return (
          <span
            key={index}
            className={`star ${value <= rating ? 'filled' : ''}`}
            onClick={() => handleClick(value)}
            style={{ cursor: 'pointer', fontSize: '20px', color: value <= rating ? 'gold' : 'gray' }}
          >
            &#9733;
          </span>
        );
      })}
      <div className="rating-description" style={{ marginTop: '10px', fontSize: '16px', color: 'gray' }}>
        {ratingDescription(rating)}
      </div>
    </div>
  );
};

const CustomerExperiences = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    foodQuality: 0,
    serviceRating: 0, 
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
      date: new Date().toISOString().split('T')[0], 
    }]);
    setSubmitted(true);
    setFormData({ name: '', phone: '', foodQuality: 0, serviceRating: 0, comments: '' });
  };

  const handleRatingChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
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

                  <Form.Group controlId="phone">
                    <Form.Label className='namess-2'>Phone</Form.Label>
                    <Form.Control 
                      type="text" 
                      name="phone" 
                      placeholder="Enter your phone" 
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </Form.Group>        

                  <Form.Group controlId="foodQuality">
                    <Form.Label className='namess-2'>Food Quality</Form.Label>
                    <StarRating 
                      rating={formData.foodQuality}
                      onRatingChange={(value) => handleRatingChange('foodQuality', value)}
                    />
                  </Form.Group>

                  <Form.Group controlId="serviceRating">
                    <Form.Label className='namess-2'>Service Rating</Form.Label>
                    <StarRating 
                      rating={formData.serviceRating}
                      onRatingChange={(value) => handleRatingChange('serviceRating', value)}
                    />
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
