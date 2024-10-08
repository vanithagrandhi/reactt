import React, { useContext } from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { productdata } from '../Data/Product2'; 
import '../App.css';
import { CartContext } from '../Single/CartContext'; 
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Waffles() {
  const { addToCart,totalItems } = useContext(CartContext);

  return (
    <Row className='maindata'>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <Link className="nav-link " to="/dashboard">Dashboard</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/milkshake">Milkshake</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/pizza">Pizza</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/waffles">Waffles</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/desserts">Desserts</Link>
              </li>
              <p className='cart-button1'>
                <FontAwesomeIcon icon={faCartShopping} />
                <span className='spann1'><Link to='/cart'>{totalItems}</Link></span>
              </p>
   

            </ul>
          </div>
        </div>
      </nav>
      <h1 className='food1'>Waffles</h1>
      {productdata.length > 0 ? (
        productdata.map((e) => (
          <Col md={3} key={e.id} className="mb-4">
            <Card style={{ width: '100%' }}>
              <Link to={`/waffles/${e.id}`}>
                <Card.Img variant="top" src={e.image} alt={e.name} style={{ height: '200px', objectFit: 'cover' }} />
              </Link>
              <Card.Body>
                <Link to={`/waffles/${e.id}`}>
                  <Card.Title className='namess-1'>{e.name}</Card.Title>
                </Link>
                <Card.Text className='namess'>
                  <strong>Price:</strong> ₹{e.Price}
                </Card.Text>
                <Button className="card-button" variant="primary" onClick={() => addToCart(e)}>
                  <FontAwesomeIcon icon={faCartShopping} /> Add to Cart
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))
      ) : (
        <Col>
          <h4>No items found</h4>
        </Col>
      )}
    </Row>
  );
}

export default Waffles;
