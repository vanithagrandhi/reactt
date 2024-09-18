import React from 'react';
import { productsData } from '../Data/Products'; 
import { Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'; 
import '../App.css'; 

function Milkshake() {
  return (
    <Row className='maindata'>
      <h1 className='food1'>Milkshake</h1>
      {productsData.map((e) => (
        <Col sm={3} key={e.id} className="mb-4">
          <Card className="card" style={{ width: '100%' }}>
            
            <Link to={`/milkshake/${e.id}`}>
              <Card.Img variant="top" src={e.image} alt={e.name} className="card-img" style={{ height: '200px', objectFit: 'cover' }} />
            </Link>
            <Card.Body>
              <Link to={`/milkshake/${e.id}`}>
                <Card.Title>{e.name}</Card.Title>
              </Link>
              <Card.Text>
                Price: ₹{e.Price}
              </Card.Text>
              <Button className="card-button" variant="primary" onClick={() => handleAddToCart(e.id)}>Add to cart</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

const handleAddToCart = (productId) => {
  console.log(`Product ${productId} added to cart.`);
};

export default Milkshake;


