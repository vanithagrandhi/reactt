


import React, { useContext } from 'react';
import { CartContext } from '../Single/CartContext';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import Sidenav from '../Components/Sidenav';
import '../App.css';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 

function Cart() {
  const { cart, increaseQuantity, decreaseQuantity, removeFromCart } = useContext(CartContext);
  const totalPrice = cart.reduce((total, item) => total + item.Price * item.quantity, 0);
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="cart-page">
      <Row>
        <Col sm={2} className="sidenav-container">
          <Sidenav /> 
        </Col>
        <Col sm={10} className='cart-content'>
          <div className="cart-header">
            <FontAwesomeIcon icon={faCartShopping}/> 
            <h1 className='cart-1'>Your Cart</h1> 
          </div>

          <div className="cart-summary">
            <h4 className='total'>Total Items: {totalItems}</h4>
            <h4 className='total'>Total Price: ₹{totalPrice}</h4>
          </div>
          
          {cart.length > 0 ? (
            <>
              {cart.map((item) => (
                <div key={item.id} className="cart-item">
                  <img src={item.image} alt={item.name} className="cart-item-image" /> 
                  <div className="cart-item-details">
                    <h2 className='itemname'>{item.name}</h2>
                    <p className='itemprice'>Price: ₹{item.Price}</p>
                    <button className="btn-remove" onClick={() => removeFromCart(item.id)}>Remove</button>
                  </div>
                  <div className="cart-buttons">
                  <button className="btn-decrease" onClick={() => decreaseQuantity(item.id)}>-</button>
                    <p className='itemprice1'>{item.quantity}</p>
                    <button className="btn-increase" onClick={() => increaseQuantity(item.id)}>+</button>
                  </div>
                </div>
              ))}
              <Link to="/order">
                <button className="order-button">Proceed to Order</button>
              </Link>
            </>
          ) : (
            <p>Your cart is empty</p>
          )}
        </Col>
      </Row>
    </div>
  );
}

export default Cart;

