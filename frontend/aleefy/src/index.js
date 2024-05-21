import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import HomePage from "./components/home";
import Login from "./components/login";
import ServicePage from "./components/service";
import Clinics from "./components/clinic";
import About from "./components/about";
import Choose from "./components/choose";
import Profile from "./components/profile";
import Events from "./components/events";
import Rescue from "./components/rescue";
import Contact from "./components/contact";
import Adoption from "./components/adoption";
import ClinicHome from "./components/clinicHome";
import ShelterHome from "./components/shelter";
import ListBookings from "./components/viewBookings";
import ListForms from "./components/viewRescue";
import Payment from "./components/payment";
import Cart from "./components/cart";
import AdoptionBookings from "./components/adoptionBooking";
import MyPets from "./components/myPets";
import ClinicProfile from "./components/clinicProfile";
import ShelterProfile from "./components/shelterProfile";
import DonationClinic from "./components/donateC";
import DonationShelter from "./components/donateS";
import Blog from "./components/blogs";
import RescueClinic from "./components/rescueClinic";
import Donate from "./components/donation";
import ListDonations from "./components/viewDonations";
import QRCodeGenerator from "./components/qrcode";
import AdminHome from "./components/adminHome";
import ListshelterRequests from "./components/listShelterRequests";
import ListclinicRequests from "./components/listClinicRequests";
import AdminRescue from "./components/adminRescue";
import ListAdoptions from "./components/adoptionRequests";
import ListPets from "./components/allPets";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
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
      <Route path="/adoptionBookings" element={<AdoptionBookings />} />
      <Route path="/myPets" element={<MyPets />} />
      <Route path="/clinicProfile" element={<ClinicProfile />} />
      <Route path="/shelterProfile" element={<ShelterProfile />} />
      <Route path="/DC" element={<DonationClinic />} />
      <Route path="/DS" element={<DonationShelter />} />
      <Route path="/blogs" element={<Blog />} />
      <Route path="/rescueForm" element={<RescueClinic />} />
      <Route path="/donate" element={<Donate />} />
      <Route path="/listDonations" element={<ListDonations />} />
      <Route path="/qrCode" element={<QRCodeGenerator />} />
      <Route path="/adminHome" element={<AdminHome />} />
      <Route path="/listSRequests" element={<ListshelterRequests />} />
      <Route path="/listCRequests" element={<ListclinicRequests />} />
      <Route path="/adminRescue" element={<AdminRescue />} />
      <Route path="/adoptionRequests" element={<ListAdoptions />} />
      <Route path="/listPets" element={<ListPets />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
