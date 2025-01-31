import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Licenses from './components/Licenses';
import RegisterLicense from './components/RegisterLicense';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/licenses" element={<Licenses />} />
        <Route path="/register-license" element={<RegisterLicense />} />
      </Routes>
    </Router>
  );
}

export default App;