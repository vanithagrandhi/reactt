import React from 'react';
import { Button, Table } from 'react-bootstrap';

const OrderSummary = ({ cart, handleRemoveFromCart, handleCheckout }) => {
  const calculateTotal = () => {
    return cart.reduce((acc, item) => acc + item.Price * item.quantity, 0);
  };

  return (
    <div className="container">
      <h2>Order Summary</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Total</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.quantity}</td>
                  <td>₹{item.Price}</td>
                  <td>₹{item.Price * item.quantity}</td>
                  <td>
                    <Button variant="danger" onClick={() => handleRemoveFromCart(item.id)}>Remove</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <h3>Total: ₹{calculateTotal()}</h3>
          <Button variant="success" onClick={handleCheckout}>Proceed to Checkout</Button>
        </>
      )}
    </div>
  );
};

export default OrderSummary;
