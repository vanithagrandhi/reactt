

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import TastyHub from './Components/TastyHub'; 
import Dashboard from './Components/Dashboard';  
import Customerexperiences from './Components/Customerexperiences';  
import Location from './Components/Location';
import Milkshake from './Pages/Milkshake';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Pizza from './Pages/Pizza';
import Waffles from './Pages/Waffles';
import Dessert from './Pages/Dessert';
import ItemDetail from './Pages/ItemDetail'; 
import Catering from './Components/Catering';
import Order from './Single/Order';
import Cart from './Single/Cart';
import { CartProvider } from './Single/CartContext'; 

const App = () => {
  return (
  
    <CartProvider> 
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/tastyhub" element={<TastyHub />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/customerexperiences" element={<Customerexperiences />} />
          <Route path="/location" element={<Location />} />
          <Route path="/milkshake" element={<Milkshake />} />
          <Route path="/pizza" element={<Pizza />} />
          <Route path="/waffles" element={<Waffles />} />
          <Route path="/desserts" element={<Dessert />} />
          <Route path="/catering" element={<Catering />} />
          <Route path="/:category/:id" element={<ItemDetail />} />
          <Route path="/order" element={<Order />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;

