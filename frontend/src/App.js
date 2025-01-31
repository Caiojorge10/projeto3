import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Licenses from './components/Licenses';
import RegisterLicensePage from './components/RegisterLicensePage';
import LoginPage from './components/LoginPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/licenses" element={<Licenses />} />
        <Route path="/register-license" element={<RegisterLicensePage />} />
      </Routes>
    </Router>
  );
}

export default App;