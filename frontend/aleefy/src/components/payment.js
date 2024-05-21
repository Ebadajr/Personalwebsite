import React, { useState } from "react";
import "../styles.scss";
import "bootstrap/dist/css/bootstrap.min.css";

var res = 0;
function Payment() {
  const [formData, setFormData] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const handleCardNumberChange = (e) => {
    const { value } = e.target;
    const formattedValue = value
      .replace(/\s+/g, "")
      .replace(/[^0-9]/gi, "")
      .replace(/(\d{4})/g, "$1 ")
      .trim();
    setFormData({ ...formData, cardNumber: formattedValue });
  };

  const handleExpiryDateChange = (e) => {
    const { value } = e.target;
    const formattedValue = value
      .replace(/[^0-9]/g, "")
      .replace(/^([2-9])$/g, "0$1")
      .replace(/^(1{1})([3-9]{1})$/g, "0$1/$2")
      .replace(/^0{1,}/g, "0")
      .replace(/^([0-1]{1}[0-9]{1})([0-9]{1,4}).*/g, "$1/$2")
      .trim();
    setFormData({ ...formData, expiryDate: formattedValue });
  };

  const handleCVVChange = (e) => {
    const { value } = e.target;
    const formattedValue = value.replace(/[^0-9]/g, "");
    setFormData({ ...formData, cvv: formattedValue });
  };

  const font = {
    "font-size": "24px",
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
              <a href="/home" class="nav-item nav-link  ">
                Home
              </a>
              <a href="/about" class="nav-item nav-link ">
                About
              </a>
              <a href="/service" class="nav-item nav-link">
                Service
              </a>
              <a href="/cart" class="nav-item nav-link">
                products
              </a>
              <a href="/clinic" class="nav-item nav-link">
                Clinics
              </a>
              <a href="/contact" class="nav-item nav-link  ">
                Contact
              </a>
              <a href="/adoption" class="nav-item nav-link  ">
                Adoption
              </a>
              <div class="nav-item dropdown">
                <a
                  href="#"
                  class="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                >
                  More
                </a>
                <div class="dropdown-menu rounded-0 m-0">
                  <a
                    href="/myPets"
                    class="btn btn-lg btn-primary px-3 d-none d-lg-block"
                  >
                    my pets
                  </a>
                  <a
                    href="/blogs"
                    class="btn btn-lg btn-primary px-3 d-none d-lg-block"
                  >
                    blogs
                  </a>
                  <a
                    href="/events"
                    class="btn btn-lg btn-primary px-3 d-none d-lg-block"
                  >
                    Events
                  </a>
                  <a
                    href="/rescue"
                    class="btn btn-lg btn-primary px-3 d-none d-lg-block"
                  >
                    Rescue form
                  </a>
                  <a
                    href="/payment"
                    class="btn btn-lg btn-primary px-3 d-none d-lg-block active"
                  >
                    Donation
                  </a>
                  <a
                    href="/"
                    class="btn btn-lg btn-primary px-3 d-none d-lg-block"
                  >
                    Logout
                  </a>
                </div>
              </div>
            </div>
            <a href="/profile">
              <i class="fa-regular fa-user" style={font}></i>
            </a>
          </div>
        </nav>
      </div>
      <div className="container">
        <h2>Payment Information</h2>
        <form>
          <div className="form-group">
            <label htmlFor="cardNumber">Card Number:</label>
            <input
              type="text"
              className="form-control"
              id="cardNumber"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleCardNumberChange}
              maxLength="19"
              placeholder="1234 5678 9012 3456"
            />
          </div>
          <div className="form-group">
            <label htmlFor="expiryDate">Expiry Date (MM/YY):</label>
            <input
              type="text"
              className="form-control"
              id="expiryDate"
              name="expiryDate"
              value={formData.expiryDate}
              onChange={handleExpiryDateChange}
              maxLength="5"
              placeholder="MM/YY"
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
              onChange={handleCVVChange}
              maxLength="3"
              placeholder="CVV"
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

export default Payment;
