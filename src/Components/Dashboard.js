import React, { useContext } from 'react';
import { Col, Row, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { productsData } from '../Data/Products'; 
import { productsDatas } from '../Data/Product1'; 
import { productdata } from '../Data/Product2'; 
import { producttdata } from '../Data/Product3'; 
import Sidenav from './Sidenav';
import { CartContext } from '../Single/CartContext'; 
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../App.css';

function Dashboard() {
  const milkshakePreview = productsData.slice(0, 3);  
  const pizzaPreview = productsDatas.slice(0, 3);     
  const wafflePreview = productdata.slice(0, 3);     
  const dessertPreview = producttdata.slice(0, 3);   

  const { cart, addToCart } = useContext(CartContext);

  
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div>
      <Row>
        <Col sm={2}>
          <Sidenav />
        </Col>
        <Col sm={10} style={{ padding: '5%' }}>
        <p className='cart-button'>
         <Link to='/cart'><FontAwesomeIcon icon={faCartShopping} /></Link> 
          <span className='spann'><Link to='/cart'>{totalItems}</Link></span>
          </p>
          <h1 className='food'>Food Items</h1>

          {/* Milkshake Section */}
          <h2 className='category-title'>Milkshake</h2>
          <Row className="dash maindata">
            {milkshakePreview.map((e) => (
              <Col sm={3} key={e.id} className="mb-4">
                <Card style={{ width: '100%' }}>
                  <Link to={`/milkshake/${e.id}`}>
                    <Card.Img variant="top" src={e.image} alt={e.name} style={{ height: '200px', objectFit: 'cover' }} />
                  </Link>
                  <Card.Body>
                    <Link to={`/milkshake/${e.id}`}>
                      <Card.Title className='namess-1'>{e.name}</Card.Title>
                    </Link>
                    <Card.Text className='namess'>Price: ₹{e.Price}</Card.Text>
                    <Button 
                        className="card-button" 
                        variant="primary" 
                        onClick={() => addToCart(e)} 
                      >
                       <FontAwesomeIcon icon={faCartShopping} /> Add to Cart
                    </Button>
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

          {/* Pizza Section */}
          <h2 className='category-title'>Pizza</h2>
          <Row className="dash maindata">
            {pizzaPreview.map((e) => (
              <Col sm={3} key={e.id} className="mb-4">
                <Card style={{ width: '100%' }}>
                  <Link to={`/pizza/${e.id}`}>
                    <Card.Img variant="top" src={e.image} alt={e.name} style={{ height: '200px', objectFit: 'cover' }} />
                  </Link>
                  <Card.Body>
                    <Link to={`/pizza/${e.id}`}>
                      <Card.Title className='namess-1'>{e.name}</Card.Title>
                    </Link>
                    <Card.Text className='namess'>Price: ₹{e.Price}</Card.Text>
                    <Button 
                        className="card-button" 
                        variant="primary" 
                        onClick={() => addToCart(e)} 
                      >
                       <FontAwesomeIcon icon={faCartShopping} /> Add to Cart
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
            <Col sm={12} className="text-center mt-1">
              <Link to='/pizza'>
                <Button className="small-button">View More</Button>
              </Link>
            </Col>
          </Row>

          {/* Waffle Section */}
          <h2 className='category-title'>Waffles</h2>
          <Row className="dash maindata">
            {wafflePreview.map((e) => (
              <Col sm={3} key={e.id} className="mb-4">
                <Card style={{ width: '100%' }}>
                  <Link to={`/waffles/${e.id}`}>
                    <Card.Img variant="top" src={e.image} alt={e.name} style={{ height: '200px', objectFit: 'cover' }} />
                  </Link>
                  <Card.Body>
                    <Link to={`/waffles/${e.id}`}>
                      <Card.Title className='namess-1'>{e.name}</Card.Title>
                    </Link>
                    <Card.Text className='namess'>Price: ₹{e.Price}</Card.Text>
                    <Button 
                        className="card-button" 
                        variant="primary" 
                        onClick={() => addToCart(e)} 
                      >
                       <FontAwesomeIcon icon={faCartShopping} /> Add to Cart
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
            <Col sm={12} className="text-center mt-1">
              <Link to='/waffles'>
                <Button className="small-button">View More</Button>
              </Link>
            </Col>
          </Row>

          {/* Dessert Section */}
          <h2 className='category-title'>Desserts</h2>
          <Row className="dash maindata">
            {dessertPreview.map((e) => (
              <Col sm={3} key={e.id} className="mb-4">
                <Card style={{ width: '100%' }}>
                  <Link to={`/dessert/${e.id}`}>
                    <Card.Img variant="top" src={e.image} alt={e.name} style={{ height: '200px', objectFit: 'cover' }} />
                  </Link>
                  <Card.Body>
                    <Link to={`/dessert/${e.id}`}>
                      <Card.Title className='namess-1'>{e.name}</Card.Title>
                    </Link>
                    <Card.Text className='namess'>Price: ₹{e.Price}</Card.Text>
                    <Button 
                        className="card-button" 
                        variant="primary" 
                        onClick={() => addToCart(e)} 
                      >
                       <FontAwesomeIcon icon={faCartShopping} /> Add to Cart
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
            <Col sm={12} className="text-center mt-1">
              <Link to='/desserts'>
                <Button className="small-button">View More</Button>
              </Link>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default Dashboard;
