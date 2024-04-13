import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import '../styles.scss'; 
import "bootstrap/dist/css/bootstrap.min.css";



function Choose(props) {
  const navigate = useNavigate();

  const handleOptionClick = (option) => {
    if (option === 'customer') {
      navigate('/login');
    } else if (option === 'clinic') {
      navigate('/login');
    } else if (option === 'shelter') {
      navigate('/login');
    }
  };

  return (
    <div className="container">
      <h2>Choose Your Role</h2>
      <div className="row">
        <div className="col-md-4">
          <button className="btn btn-primary btn-block" onClick={() => handleOptionClick('customer')}>
            Sign in as Customer
          </button>
        </div>
        <div className="col-md-4">
          <button className="btn btn-primary btn-block" onClick={() => handleOptionClick('clinic')}>
            Sign in as Clinic
          </button>
        </div>
        <div className="col-md-4">
          <button className="btn btn-primary btn-block" onClick={() => handleOptionClick('shelter')}>
            Sign in as Shelter
          </button>
        </div>
      </div>
    </div>
  );
}

export default Choose;
