import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [address, setAddress] = useState('');

  const addToCart = (item, quantity = 1) => {
    setCart(prevCart => {
      const existingItemIndex = prevCart.findIndex(cartItem => cartItem.id === item.id);
      if (existingItemIndex > -1) {
        // Item already in cart, update quantity
        const updatedCart = [...prevCart];
        updatedCart[existingItemIndex].quantity += quantity;
        return updatedCart;
      } else {
        // Add new item to cart
        return [...prevCart, { ...item, quantity }];
      }
    });
  };

  const removeFromCart = (itemId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== itemId));
  };

  const placeOrder = () => {
    // Order placing logic here (e.g., API call)
    console.log("Order placed:", cart, "Address:", address);
    setCart([]);  // Clear cart after placing the order
    alert('Order placed successfully!');
  };

  const total = cart.reduce((sum, item) => sum + (item.Price * item.quantity), 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, setAddress, placeOrder, total }}>
      {children}
    </CartContext.Provider>
  );
};



