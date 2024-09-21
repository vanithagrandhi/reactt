import React, { useState, useContext } from 'react';
import { Row, Col } from 'react-bootstrap'; 
import Sidenav from '../Components/Sidenav';
import { CartContext } from '../Single/CartContext';

function Order() {
  const { cart, clearCart } = useContext(CartContext);
  const [address, setAddress] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = () => {
    if (name.trim() && phone.trim() && address.trim()) {
      console.log('Order Placed:', cart, 'Address:', address, 'Name:', name, 'Phone:', phone);
      clearCart();  
      alert('Order Successful!');
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <div>
      <Row>
        <Col sm={2}>
          <Sidenav/>
        </Col>
        <Col sm={10} className='order'>
          <h1>Order Summary</h1>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                {item.name} - ₹{item.Price} x {item.quantity}
              </li>
            ))}
          </ul>
          <h3>Enter your details</h3>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter your phone number"
          />
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
