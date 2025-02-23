import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import LabelFrame from './pages/LabelFrame';

import './App.css'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={< Home />} />
        <Route path="/frame/label" element={< LabelFrame />} />
        
      </Routes>
    </Router>
  )
}

export default App
