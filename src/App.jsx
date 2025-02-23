import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import LabelFrame from './pages/LabelFrame';

import './App.css'


function App() {
  return (
    <BrowserRouter basename="/github.io-saci">
      <Routes>
        <Route path="/" element={< Home />} />
        <Route path="/frame/label" element={< LabelFrame />} />
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
