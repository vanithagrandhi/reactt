import React from 'react';
import { productsData } from '../Data/Products'; 
import { Row, Col, Card, Button } from 'react-bootstrap';
import '../App.css'; 

function Milkshake() {
  return (
    <Row className='maindata'>
      {productsData.map((e) => (
        <Col sm={3} key={e.id} className="mb-4">
          <Card className="card" style={{ width: '100%' }}>
            <Card.Img variant="top" src={e.image} alt={e.name} className="card-img" />
            <Card.Body>
              <Card.Title>{e.name}</Card.Title>
              <Card.Text>
                Price: ₹{e.Price}
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

export default Milkshake;
