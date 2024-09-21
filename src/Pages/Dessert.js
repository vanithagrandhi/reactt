import React, { useContext } from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { producttdata } from '../Data/Product3'; 
import '../App.css';
import { CartContext } from '../Single/CartContext'; 

function Dessert() {
  const { addToCart } = useContext(CartContext);

  return (
    <Row className='maindata'>
      <h1 className='food1'>Desserts</h1>
      {producttdata.map((e) => (
        <Col md={3} key={e.id} className="mb-4">
          <Card style={{ width: '100%' }}>
            <Link to={`/dessert/${e.id}`}>
              <Card.Img variant="top" src={e.image} alt={e.name} style={{ height: '200px', objectFit: 'cover' }} />
            </Link>
            <Card.Body>
              <Link to={`/dessert/${e.id}`}>
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

export default Dessert;
