import React from 'react';
import { productsDatas } from '../Data/Product1'; 
import { Row, Col, Card, Button } from 'react-bootstrap'; 
import Sidenav from '../Components/Sidenav'; 
import '../App.css'; 

function Pizza() {
  return (
    
        <Row className='maindata'>
          {productsDatas.map((e) => (
            <Col md={3} key={e.id} className="mb-4">
              <Card style={{ width: '100%' }}>
                <Card.Img variant="top" src={e.image} alt={e.name} style={{ height: '200px', objectFit: 'cover' }} />
                <Card.Body>
                  <Card.Title>{e.name}</Card.Title>
                  <Card.Text>
                    Small: ₹{e.small} <br />
                    Large: ₹{e.large}
                  </Card.Text>
                  <Button className="card-button" variant="primary" onClick={() => handleAddToCart(e.id)}>order</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
    
  );
}

const handleAddToCart = (productId) => {
  console.log(`Product ${productId} order.`);
};

export default Pizza;
