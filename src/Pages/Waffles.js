import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import { productdata } from '../Data/Product2'; 

import '../App.css';

function Waffles() {
  return (
  
        <Row className='maindata'>
          {productdata.map((e) => (
            <Col md={3} key={e.id} className="mb-4">
              <Card style={{ width: '100%' }}>
                <Card.Img variant="top" src={e.image} alt={e.name} style={{ height: '200px', objectFit: 'cover' }} />
                <Card.Body>
                  <Card.Title>{e.name}</Card.Title>
                  <Card.Text>
                    Price: ₹{e.Price}
                  </Card.Text>
                  <Button variant="primary" onClick={() => handleAddToCart(e.id)}>order</Button>
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

export default Waffles;
