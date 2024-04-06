import React, { useState, useEffect } from 'react';
import '../style.scss'
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";


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
