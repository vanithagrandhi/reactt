import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { productsData } from '../Data/Products'; // Milkshake data
import { productsDatas } from '../Data/Product1'; // Pizza data
import Sidenav from './Sidenav';
import '../App.css';

function Dashboard() {
  const milkshakePreview = productsData.slice(0, 3);  // Updated variable names
  const pizzaPreview = productsDatas.slice(0, 3);     // Updated variable names

  return (
    <div>
      <Row>
        <Col sm={2}>
          <Sidenav />
        </Col>
        <Col sm={10} style={{ padding: '5%' }}>
          {/* Milkshake Section */}
          <h2 className='category-title'>Milkshake</h2>
          <div className="dash maindata">
            {milkshakePreview.map((e) => (
              <div className='productdata' key={e.id}>
                <img src={e.image} alt={e.name} />
                <p>{e.name}</p>
                <p>Price: ${e.Price}</p>
              </div>
            ))}
            <Link to='/milkshake'>
              <button className="small-button">View More</button>
            </Link>
          </div>
          
          {/* Pizza Section */}
          <h2 className='category-title'>Pizza</h2>
          <div className="dash maindata">
            {pizzaPreview.map((e) => (
              <div className='productdata' key={e.id}>
                <img src={e.image} alt={e.name} />
                <p>{e.name}</p>
                <p>Price: ${e.Price}</p>
              </div>
            ))}
            <Link to='/pizza'>
              <button className="small-button">View More</button>
            </Link>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Dashboard;
