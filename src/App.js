// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/login';
import UserProfile from './components/UserProfile';
import ManagerDashboard from './components/ManagerDashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/dashboard" element={<ManagerDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
