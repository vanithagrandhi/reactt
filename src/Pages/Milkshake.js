import React, { useContext } from 'react';
import { productsData } from '../Data/Products'; 
import { Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'; 
import '../App.css'; 
import { CartContext } from '../Single/CartContext'; 

function Milkshake() {
  const { addToCart } = useContext(CartContext);

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
                <Card.Title className='namess-1'>{e.name}</Card.Title>
              </Link>
              <Card.Text className='namess'>
                <strong>Price:</strong> ₹{e.Price}
              </Card.Text>
              <Button className="card-button" variant="primary" onClick={() => addToCart(e)}>
                Add to Cart
              </Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default Milkshake;