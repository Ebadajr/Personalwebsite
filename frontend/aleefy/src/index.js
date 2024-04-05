import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import HomePage from './components/home';
import Login from './components/login';
import ServicePage from './components/service';
import Clinics from './components/clinic';
import About from './components/about';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
    
 
  <BrowserRouter>
  <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/service" element={<ServicePage />} />
      <Route path="/clinic" element={<Clinics />} />
      <Route path="/about" element={<About />} />


    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

