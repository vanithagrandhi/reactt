import React from 'react';
import { productsData } from '../Data/Products'; // Milkshake data
import { Row, Col } from 'react-bootstrap'; 
import Sidenav from '../Components/Sidenav'; 
import '../App.css'; 

function Milkshake() {
  return (
    <Row>
      <Col sm={2}>
        <Sidenav />
      </Col>
      <Col sm={10} style={{ padding: '5%' }}>
        <div className='maindata'>
          {productsData.map((e) => (
            <div className='productdata' key={e.id}>
              <img src={e.image} alt={e.name} />
              <p>Brand Name: {e.name}</p>
              <p>Price: ${e.Price}</p>
            </div>
          ))}
        </div>
      </Col>
    </Row>
  );
}

export default Milkshake;
