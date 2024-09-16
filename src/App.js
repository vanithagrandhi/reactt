import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home'; 
import Dashboard from './Components/Dashboard';  
import Feedback from './Components/Feedback';  
import Location from './Components/Location';
import Milkshake from './Pages/Milkshake';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Pizza from './Pages/Pizza';
import Waffles from './Pages/Waffles';
import Dessert from './Pages/Dessert';
import Notifications from './Components/Notifications';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/location" element={<Location />} />
        <Route path="/milkshake" element={<Milkshake />} />
        <Route path="/pizza" element={<Pizza />} />
        <Route path="/waffles" element={<Waffles />} />
        <Route path="/desserts" element={<Dessert />} />
        <Route path="/notifications" element={<Notifications />} />
        
        
        
        
      </Routes>
    </Router>
  );
};

export default App;
