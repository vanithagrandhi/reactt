import React, { useState, useContext } from 'react';
import { Row, Col } from 'react-bootstrap'; 
import Sidenav from '../Components/Sidenav';
import { CartContext } from '../Single/CartContext';

function Order() {
  const { cart, clearCart } = useContext(CartContext);
  const [address, setAddress] = useState('');

  const handleSubmit = () => {
    if (address.trim()) {
      console.log('Order Placed:', cart, 'Address:', address);
      clearCart();  // Clear cart after placing the order
      alert('Order Successful!');
    } else {
      alert('Please enter your address.');
    }
  };

  return (
    <div>
      <Row>
        <Col sm={2}>
          <Sidenav/>
        </Col>
        <Col sm={10} className='location-main-content'>
          <h1>Order Summary</h1>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                {item.name} - ₹{item.Price} x {item.quantity}
              </li>
            ))}
          </ul>
          <h3>Enter your address</h3>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Enter your address"
          />
          <button onClick={handleSubmit}>Place Order</button>
        </Col>
      </Row>
    </div>
  );
}

export default Order;
