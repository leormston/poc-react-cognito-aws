import * as React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/home';
import Restricted from './components/restricted';
import { useState } from 'react';
function App() {
  return (
    <div className="App">
      <BrowserRouter> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/restricted" element={<Restricted />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
