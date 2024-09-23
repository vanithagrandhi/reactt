import { useNavigate } from 'react-router-dom';
import React, { useState, useContext } from 'react';
import { Row, Col } from 'react-bootstrap'; 
import Sidenav from '../Components/Sidenav';
import { CartContext } from '../Single/CartContext';
import '../App.css'; 

function Order() {
  const { cart, clearCart } = useContext(CartContext);
  const [address, setAddress] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [pincode, setPincode] = useState('');
  
  const navigate = useNavigate();

  const totalPrice = cart.reduce((total, item) => total + item.Price * item.quantity, 0);

  const handleSubmit = () => {
    if (name.trim() && phone.trim() && address.trim()) {
      console.log('Order Placed:', cart, 'Address:', address, 'Name:', name, 'Phone:', phone);
      
      
      clearCart();
      setName('');       
      setPhone('');     
      setAddress('');    
      setPincode('');    

    
      alert('Order Successful!');
      navigate('/order');  
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <div>
      <Row>
        <Col sm={2}>
          <Sidenav />
        </Col>
        <Col sm={10} className="order">
          <h1 className="ordersummary">Order Summary</h1>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                {item.name} - ₹{item.Price} x {item.quantity}
              </li>
            ))}
          </ul>
          <h3 className="total">Total Amount: ₹{totalPrice}</h3>

          <div className="form-container">
            <h3 className="details">Enter your details</h3>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="form-input"
            />
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter your phone number"
              className="form-input"
            />
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Enter your address"
              className="form-input"
            />
            <input
              type="text"
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
              placeholder="Enter your Pincode"
              className="form-input"
            />
            
            <button className="place-order-button" onClick={handleSubmit}>Place Order</button>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Order;
