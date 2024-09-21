// import React, { useContext } from 'react';
// import { CartContext } from '../Single/CartContext';
// import { Link } from 'react-router-dom';
// import { Row, Col } from 'react-bootstrap'; 
// import Sidenav from '../Components/Sidenav';
// import '../App.css';

// function Cart() {
//   const { cart, increaseQuantity, decreaseQuantity, removeFromCart } = useContext(CartContext);

//   const totalPrice = cart.reduce((total, item) => total + item.Price * item.quantity, 0);

//   return (
//     <div>
//       {/* <Row>
//         <Col sm={2}>
//           <Sidenav />
//         </Col>
//         <Col sm={10} className='court'> */}
//           <h1>Your Cart</h1>
//           {cart.length > 0 ? (
//             <>
//               {cart.map((item) => (
//                 <div key={item.id} className="cart-item" style={{ border: '1px solid #ddd', padding: '15px', marginBottom: '10px' }}>
//                 <h2>{item.name}</h2>
//                 <p>Price: ₹{item.Price}</p>
//                 <p>Quantity: {item.quantity}</p>
//                 <button style={{ marginRight: '5px' }} onClick={() => increaseQuantity(item.id)}>+</button>
//                 <button style={{ marginRight: '5px' }} onClick={() => decreaseQuantity(item.id)}>-</button>
//                 <button style={{ backgroundColor: 'red', color: 'white' }} onClick={() => removeFromCart(item.id)}>Remove</button>
//               </div>
//               ))}
//               <h3>Total Price: ₹{totalPrice}</h3>
//               <Link to="/order">
//                 <button>Proceed to Order</button>
//               </Link>
//             </>
//           ) : (
//             <p>Your cart is empty</p>
//           )}
//         {/* </Col>
//       </Row> */}
//     </div>
//   );
// }

// export default Cart;


import React, { useContext } from 'react';
import { CartContext } from '../Single/CartContext';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import Sidenav from '../Components/Sidenav';
import '../App.css';
import { FaShoppingCart } from 'react-icons/fa';  

function Cart() {
  const { cart, increaseQuantity, decreaseQuantity, removeFromCart } = useContext(CartContext);

  const totalPrice = cart.reduce((total, item) => total + item.Price * item.quantity, 0);

  return (
    <div className="cart-page">
      <Row>
        <Col sm={2} className="sidenav-container">
          <Sidenav />  {/* Sidebar left */}
        </Col>
        <Col sm={10} className='cart-content'>
          <div className="cart-header">
            <h1><FaShoppingCart /> Your Cart</h1> 
          </div>
          {cart.length > 0 ? (
            <>
              {cart.map((item) => (
                <div key={item.id} className="cart-item">
                  <h2>{item.name}</h2>
                  <p>Price: ₹{item.Price}</p>
                  <p>Quantity: {item.quantity}</p>
                  <div className="cart-buttons">
                    <button className="btn-increase" onClick={() => increaseQuantity(item.id)}>+</button>
                    <button className="btn-decrease" onClick={() => decreaseQuantity(item.id)}>-</button>
                    <button className="btn-remove" onClick={() => removeFromCart(item.id)}>Remove</button>
                  </div>
                </div>
              ))}
              <h3>Total Price: ₹{totalPrice}</h3>
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

