import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './Components/Home'; 
import Dashboard from './Components/Dashboard';  
import Feedback from './Components/Feedback';  
import Location from './Components/Location';
import Milkshake from './Pages/Milkshake';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Pizza from './Pages/Pizza';

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
      </Routes>
    </Router>
  );
};

export default App;
