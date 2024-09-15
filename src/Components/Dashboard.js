import React from 'react';
import { Col, Row, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { productsData } from '../Data/Products'; 
import { productsDatas } from '../Data/Product1'; 
import Sidenav from './Sidenav';
import '../App.css';

function Dashboard() {
  const milkshakePreview = productsData.slice(0, 3);  
  const pizzaPreview = productsDatas.slice(0, 3);     

  return (
    <div>
      <Row>
        <Col sm={2}>
          <Sidenav />
        </Col>
        <Col sm={10} style={{ padding: '5%' }}>
          {/* Milkshake Section */}
          <h2 className='category-title'>Milkshake</h2>
          <Row className="dash maindata">
            {milkshakePreview.map((e) => (
              <Col sm={3} key={e.id} className="mb-4">
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
            <Col sm={12} className="text-center mt-1">
              <Link to='/milkshake'>
                <Button className="small-button">View More</Button>
              </Link>
            </Col>
          </Row>
          
        { /*pizza*/}
          <h2 className='category-title'>Pizza</h2>
          <Row className="dash maindata">
            {pizzaPreview.map((e) => (
              <Col sm={3} key={e.id} className="mb-4">
                <Card style={{ width: '100%' }}>
                  <Card.Img variant="top" src={e.image} alt={e.name} style={{ height: '200px', objectFit: 'cover' }} />
                  <Card.Body>
                    <Card.Title>{e.name}</Card.Title>
                    <Card.Text>
                      Small: ₹{e.small} <br />
                      Large: ₹{e.large}
                    </Card.Text>
                    <Button className="card-button" variant="primary" onClick={() => handleAddToCart(e.id)}>Add to Cart</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
            <Col sm={12} className="text-center mt-3">
              <Link to='/pizza'>
                <Button className="small-button">View More</Button>
              </Link>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}


const handleAddToCart = (productId) => {
  console.log(`Product ${productId} added to cart.`);
};

export default Dashboard;
