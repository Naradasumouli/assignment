import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './SignUp';
import Login from './Login';
import Dashboard from './Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
