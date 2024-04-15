import React, { useState, useEffect } from "react";
import "../styles.scss";
import "bootstrap/dist/css/bootstrap.min.css";

var res = 0;
function DonationClinic() {
  const [formData, setFormData] = useState({
    cardHolderName: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Add your form submission logic here
  };
  const divStyle = {
    maxWidth: "100%",
    padding: "500px",
  };
  const style2 = {
    height: "47px",
  };
  const style3 = {
    height: "45px",
    width: "45px",
  };
  const style4 = {
    height: "36px",
    width: "36px",
  };
  const style5 = {
    background: "#111111",
  };

  return (
    <div>
      <meta charset="utf-8" />
      <title>Rafeeky</title>
      <meta content="width=device-width, initial-scale=1.0" name="viewport" />
      <meta content="Free HTML Templates" name="keywords" />
      <meta content="Free HTML Templates" name="description" />

      <link href="img/favicon.ico" rel="icon" />

      <link
        href="https://fonts.googleapis.com/css2?family=Nunito+Sans&family=Nunito:wght@600;700;800&display=swap"
        rel="stylesheet"
      />

      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css"
        rel="stylesheet"
      />

      <link href="lib/flaticon/font/flaticon.css" rel="stylesheet" />

      <link
        href="lib/owlcarousel/assets/owl.carousel.min.css"
        rel="stylesheet"
      />
      <link
        href="lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css"
        rel="stylesheet"
      />

      <link href="css/style.css" rel="stylesheet"></link>

      <div class="container-fluid">
        <div class="row bg-secondary py-2 px-lg-5">
          <div class="col-lg-6 text-center text-lg-left mb-2 mb-lg-0">
            <div class="d-inline-flex align-items-center">
              <a class="text-white pr-3" href="">
                FAQs
              </a>
              <span class="text-white">|</span>
              <a class="text-white px-3" href="">
                Help
              </a>
              <span class="text-white">|</span>
              <a class="text-white pl-3" href="">
                Support
              </a>
            </div>
          </div>
          <div class="col-lg-6 text-center text-lg-right">
            <div class="d-inline-flex align-items-center">
              <a class="text-white px-3" href="">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a class="text-white px-3" href="">
                <i class="fab fa-twitter"></i>
              </a>
              <a class="text-white px-3" href="">
                <i class="fab fa-linkedin-in"></i>
              </a>
              <a class="text-white px-3" href="">
                <i class="fab fa-instagram"></i>
              </a>
              <a class="text-white pl-3" href="">
                <i class="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
        <div class="row py-3 px-lg-5">
          <div class="col-lg-4">
            <a href="" class="navbar-brand d-none d-lg-block">
              <h1 class="m-0 display-5 text-capitalize">
                <span class="text-primary">Rafeeky</span>
              </h1>
            </a>
          </div>
          <div class="col-lg-8 text-center text-lg-right">
            <div class="d-inline-flex align-items-center">
              <div class="d-inline-flex flex-column text-center pr-3 border-right">
                <h6>Opening Hours</h6>
                <p class="m-0">8.00AM - 9.00PM</p>
              </div>
              <div class="d-inline-flex flex-column text-center px-3 border-right">
                <h6>Email Us</h6>
                <p class="m-0">info@example.com</p>
              </div>
              <div class="d-inline-flex flex-column text-center pl-3">
                <h6>Call Us</h6>
                <p class="m-0">+012 345 6789</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid p-0">
        <nav class="navbar navbar-expand-lg bg-dark navbar-dark py-3 py-lg-0 px-lg-5">
          <a href="" class="navbar-brand d-block d-lg-none">
            <h1 class="m-0 display-5 text-capitalize font-italic text-white">
              <span class="text-primary">Rafeeky</span>
            </h1>
          </a>
          <button
            type="button"
            class="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarCollapse"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse justify-content-between px-3"
            id="navbarCollapse"
          >
            <div class="navbar-nav mr-auto py-0">
              <a href="/clinicHome" class="nav-item nav-link ">
                Home
              </a>
            </div>
          </div>
        </nav>
      </div>
      <div className="container">
        <h2>Payment Information</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="cardHolderName">Card Holder's Name:</label>
            <input
              type="text"
              className="form-control"
              id="cardHolderName"
              name="cardHolderName"
              value={formData.cardHolderName}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="cardNumber">Card Number:</label>
            <input
              type="text"
              className="form-control"
              id="cardNumber"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="expiryDate">Expiry Date:</label>
            <input
              type="text"
              className="form-control"
              id="expiryDate"
              name="expiryDate"
              value={formData.expiryDate}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="cvv">CVV:</label>
            <input
              type="text"
              className="form-control"
              id="cvv"
              name="cvv"
              value={formData.cvv}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default DonationClinic;
