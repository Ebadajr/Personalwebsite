import React, { useState, useEffect } from "react";
import "../styles.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import { useNavigate } from "react-router-dom";

import caro1 from "../img/carousel-1.jpg";
import caro2 from "../img/carousel-2.jpg";
import feat1 from "../img/feature.jpg";
import userService from "../services/user.service";
var res = 0;
function ClinicHome() {
  const [formData, setFormData] = useState({
    username: "",
  });
  const divStyle = {
    maxWidth: "900px",
    padding: "3px",
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
  useEffect(() => {
    // Function to fetch username from backend when component mounts
    async function fetchUsername() {
      try {
        console.log("hi");
        userService.getName().then((response) => {
          console.log(response.data);
          setFormData((prevState) => ({
            ...prevState,
            username: response.data, // Update the username in the form data state
          }));
        });
      } catch (error) {
        console.error("Error fetching username:", error);
      }
    }

    fetchUsername(); // Call the function to fetch username
  }, []);

  let navigate = useNavigate();
  async function login(e) {
    e.preventDefault();
    navigate("/login", { replace: true });
  }

  return (
    <div>
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
                <a href="/home" class="nav-item nav-link ">
                  Home
                </a>
                <a href="/about" class="nav-item nav-link active">
                  About
                </a>
                <a href="/booking" class="nav-item nav-link">
                  Bookings
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
                      href="/DC"
                      class="btn btn-lg btn-primary px-3 d-none d-lg-block"
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
              <a
                href="/clinicProfile"
                class="btn btn-lg btn-primary px-3 d-none d-lg-block"
              >
                Profile
              </a>
            </div>
          </nav>
        </div>
        <div class="container-fluid p-0">
          <div id="header-carousel" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img class="w-100" src={caro1} alt="Image" />
                <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                  <div class="p-3" style={divStyle}>
                    <h3 class="text-white mb-3 d-none d-sm-block">
                      Connecting the pet community
                    </h3>
                    <h1 class="display-3 text-white mb-3">Like never before</h1>
                    <h3 class="text-white mb-3 d-none d-sm-block">
                      {formData.username}
                    </h3>
                    <a
                      href=""
                      class="btn btn-lg btn-secondary mt-3 mt-md-4 px-4"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <img class="w-100" src={caro2} alt="Image" />
                <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                  <div class="p-3" style={divStyle}>
                    <h3 class="text-white mb-3 d-none d-sm-block">
                      Best Pet Services
                    </h3>
                    <h1 class="display-3 text-white mb-3">
                      Adoption and Clinic
                    </h1>
                    <h3 class="text-white mb-3 d-none d-sm-block">
                      {formData.username}
                    </h3>
                    <a
                      href="about.html"
                      class="btn btn-lg btn-secondary mt-3 mt-md-4 px-4"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <a
              class="carousel-control-prev"
              href="#header-carousel"
              data-slide="prev"
            >
              <div class="btn btn-primary rounded" style={style3}>
                <span class="carousel-control-prev-icon mb-n2"></span>
              </div>
            </a>
            <a
              class="carousel-control-next"
              href="#header-carousel"
              data-slide="next"
            >
              <div class="btn btn-primary rounded" style={style3}>
                <span class="carousel-control-next-icon mb-n2"></span>
              </div>
            </a>
          </div>
        </div>

        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-5">
              <img class="img-fluid w-100" src={feat1} alt="" />
            </div>
            <div class="col-lg-7 py-5 py-lg-0 px-3 px-lg-5">
              <h4 class="text-secondary mb-3">Why Choose Us?</h4>
              <h1 class="display-4 mb-4 primary">
                <span class="text-primary">Special Care</span> On Pets
              </h1>
              <p class="mb-4">
                Dolor lorem lorem ipsum sit et ipsum. Sadip sea amet diam sed ut
                vero no sit. Et elitr stet sed sit sed kasd. Erat duo eos et
                erat sed diam duo
              </p>
              <div class="row py-2">
                <div class="col-6">
                  <div class="d-flex align-items-center mb-4">
                    <h1 class="flaticon-cat font-weight-normal text-secondary m-0 mr-3"></h1>
                    <h5 class="text-truncate m-0">Best In Industry</h5>
                  </div>
                </div>
                <div class="col-6">
                  <div class="d-flex align-items-center mb-4">
                    <h1 class="flaticon-doctor font-weight-normal text-secondary m-0 mr-3"></h1>
                    <h5 class="text-truncate m-0">Emergency Services</h5>
                  </div>
                </div>
                <div class="col-6">
                  <div class="d-flex align-items-center">
                    <h1 class="flaticon-care font-weight-normal text-secondary m-0 mr-3"></h1>
                    <h5 class="text-truncate m-0">Special Care</h5>
                  </div>
                </div>
                <div class="col-6">
                  <div class="d-flex align-items-center">
                    <h1 class="flaticon-dog font-weight-normal text-secondary m-0 mr-3"></h1>
                    <h5 class="text-truncate m-0">Customer Support</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="container-fluid bg-dark text-white mt-5 py-5 px-sm-3 px-md-5">
          <div class="row pt-5">
            <div class="col-lg-4 col-md-12 mb-5">
              <h1 class="mb-3 display-5 text-capitalize text-white">
                <span class="text-primary">Rafeeky</span>
              </h1>
              <p class="m-0">
                Become a part of our growing community and experience the joy of
                connecting with fellow pet lovers from all walks of life.
                Together, let's create a safe, supportive, and inclusive
                environment where pets and their owners can thrive, flourish,
                and celebrate the unconditional love that binds us all.
              </p>
            </div>
            <div class="col-lg-8 col-md-12">
              <div class="row">
                <div class="col-md-4 mb-5">
                  <h5 class="text-primary mb-4">Get In Touch</h5>
                  <p>
                    <i class="fa fa-phone-alt mr-2"></i>+012 345 67890
                  </p>
                  <p>
                    <i class="fa fa-envelope mr-2"></i>info@example.com
                  </p>
                  <div class="d-flex justify-content-start mt-4">
                    <a
                      class="btn btn-outline-light rounded-circle text-center mr-2 px-0"
                      style={style4}
                      href="#"
                    >
                      <i class="fab fa-twitter"></i>
                    </a>
                    <a
                      class="btn btn-outline-light rounded-circle text-center mr-2 px-0"
                      style={style4}
                      href="#"
                    >
                      <i class="fab fa-facebook-f"></i>
                    </a>
                    <a
                      class="btn btn-outline-light rounded-circle text-center mr-2 px-0"
                      style={style4}
                      href="#"
                    >
                      <i class="fab fa-linkedin-in"></i>
                    </a>
                    <a
                      class="btn btn-outline-light rounded-circle text-center mr-2 px-0"
                      style={style4}
                      href="#"
                    >
                      <i class="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
                <div class="col-md-4 mb-5">
                  <h5 class="text-primary mb-4">Popular Links</h5>
                  <div class="d-flex flex-column justify-content-start">
                    <a class="text-white mb-2" href="index.html">
                      <i class="fa fa-angle-right mr-2"></i>Home
                    </a>
                    <a class="text-white mb-2" href="about.html">
                      <i class="fa fa-angle-right mr-2"></i>About Us
                    </a>
                    <a class="text-white mb-2" href="service.html">
                      <i class="fa fa-angle-right mr-2"></i>Services
                    </a>
                    <a class="text-white mb-2" href="clinics.html">
                      <i class="fa fa-angle-right mr-2"></i>Clinics
                    </a>
                  </div>
                </div>
                <div class="col-md-4 mb-5">
                  <h5 class="text-primary mb-4">Newsletter</h5>
                  <form action="">
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control border-0"
                        placeholder="Your Name"
                        required="required"
                      />
                    </div>
                    <div class="form-group">
                      <input
                        type="email"
                        class="form-control border-0"
                        placeholder="Your Email"
                        required="required"
                      />
                    </div>
                    <div>
                      <button
                        class="btn btn-lg btn-primary btn-block border-0"
                        type="submit"
                      >
                        Submit Now
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="container-fluid text-white py-4 px-sm-3 px-md-5"
          style={style5}
        >
          <div class="row">
            <div class="col-md-6 text-center text-md-left mb-3 mb-md-0">
              <p class="m-0 text-white">
                &copy; <a class="text-white font-weight-bold">Rafeeky</a>. All
                Rights Reserved. Designed by
                <a class="text-white font-weight-bold">AAST</a>
              </p>
            </div>
            <div class="col-md-6 text-center text-md-right">
              <ul class="nav d-inline-flex">
                <li class="nav-item">
                  <a class="nav-link text-white py-0" href="#">
                    Privacy
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-white py-0" href="#">
                    Terms
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-white py-0" href="#">
                    FAQs
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-white py-0" href="#">
                    Help
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClinicHome;
