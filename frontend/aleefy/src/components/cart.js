import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './home.css';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './style.scss'; 
import caro1 from '../img/carousel-1.jpg';
import caro2 from '../img/carousel-2.jpg';
import im1 from '../img/about-1.jpg';
import im2 from '../img/about-2.jpg';
import im3 from '../img/about-3.jpg';
import feat1 from '../img/feature.jpg';
import blog1 from '../img/blog-1.jpg';
import blog2 from '../img/blog-2.jpg';
import blog3 from '../img/blog-3.jpg';

var res= 0;
function Cart() {

  const divStyle = {
    maxWidth: '900px',
    padding: '3px'
  };
  const style2 = {
    height: '47px'
  };
  const style3 = {
    height : '45px',
    width : '45px',
  };
  const style4 = {
    height : '36px',
    width : '36px',
  };
  const style5 = {
    background: '#111111',
  };

    let navigate = useNavigate();
    async function login(e) {
      e.preventDefault();
      navigate("/login", { replace: true });
      
    }

  
  return (
    <div>


    </div>
  );
}

export default Cart;
