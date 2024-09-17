import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Import Link for navigation
import { productdata } from '../Data/Product2'; 
import '../App.css';

function Waffles() {
  return (
    <Row className='maindata'>
      <h1 className='food1'>waffles</h1>
      {productdata.map((e) => (
        <Col md={3} key={e.id} className="mb-4">
          <Card style={{ width: '100%' }}>
            <Link to={`/waffles/${e.id}`}>
              <Card.Img variant="top" src={e.image} alt={e.name} style={{ height: '200px', objectFit: 'cover' }} />
            </Link>
            <Card.Body>
              <Link to={`/waffles/${e.id}`}>
                <Card.Title>{e.name}</Card.Title>
              </Link>
              <Card.Text>
                Price: ₹{e.Price}
              </Card.Text>
              <Button variant="primary" onClick={() => handleAddToCart(e.id)}>Order</Button>
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
