import React from 'react';
import { productsData } from '../Data/Products'; 
import { Row, Col, Card, Button } from 'react-bootstrap';
import Sidenav from '../Components/Sidenav'; 
import '../App.css'; 

function Milkshake() {
  return (
    <Row>
      <Col sm={2}>
        <Sidenav />
      </Col>
      <Col sm={10} style={{ padding: '5%' }}>
        <Row className='maindata'>
          {productsData.map((e) => (
            <Col sm={4} key={e.id} className="mb-4">
              <Card style={{ width: '100%' }}>
                <Card.Img variant="top" src={e.image} alt={e.name} style={{ height: '200px', objectFit: 'cover' }} />
                <Card.Body>
                  <Card.Title>{e.name}</Card.Title>
                  <Card.Text>
                    Price: ₹{e.Price}
                  </Card.Text>
                  <Button className="card-button" variant="primary" onClick={() => handleAddToCart(e.id)}>Add to Cart</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  );
}

const handleAddToCart = (productId) => {
  console.log(`Product ${productId} added to cart.`);
};

export default Milkshake;
