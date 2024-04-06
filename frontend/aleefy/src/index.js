import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './style.scss';
import 'bootstrap/dist/css/bootstrap.min.css'; 

import HomePage from './components/home';
import Login from './components/login';
import ServicePage from './components/service';
import Clinics from './components/clinic';
import About from './components/about';
import Choose from './components/choose';
import Profile from './components/profile';
import Events from './components/events';
import Rescue from './components/rescue';
import Contact from './components/contact';
import Adoption from './components/adoption';
import ClinicHome from './components/clinicHome';
import ShelterHome from './components/shelter';
import ListBookings from './components/viewBookings';
import ListForms from './components/viewRescue';
import Payment from './components/payment';
import Cart from './components/cart';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
    
 
  <BrowserRouter>
  <Routes>
      <Route path="/" element={<Cart />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/service" element={<ServicePage />} />
      <Route path="/clinic" element={<Clinics />} />
      <Route path="/about" element={<About />} />
      <Route path="/choose" element={<Choose />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/events" element={<Events />} />
      <Route path="/rescue" element={<Rescue />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/adoption" element={<Adoption />} />
      <Route path="/clinicHome" element={<ClinicHome />} />
      <Route path="/shelterHome" element={<ShelterHome />} />
      <Route path="/booking" element={<ListBookings />} />
      <Route path="/rescueForms" element={<ListForms />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/cart" element={<Cart />} />

      
      
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

