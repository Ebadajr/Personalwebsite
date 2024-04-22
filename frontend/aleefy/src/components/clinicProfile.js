import React, { useState, useEffect } from "react";
import "../styles.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import { useNavigate } from "react-router-dom";
import userService from "../services/user.service";

var res = 0;
function ClinicProfile() {
  const [formData, setFormData] = useState({
    username: "",
    gotMobile: "",
    mobile: "",
    firstname: "",
    lastname: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    userService
      .update(formData)
      .then(() => {
        alert("Info updated");
        window.location.reload();
      })
      .catch((e) => {
        console.log(e);
      });
  };
  useEffect(() => {
    // Function to fetch username from backend when component mounts
    async function fetchUsername() {
      try {
        userService.getName().then((response) => {
          setFormData((prevState) => ({
            ...prevState,
            username: response.data, // Update the username in the form data state
          }));
          userService.getMobile().then((response) => {
            setFormData((prevState) => ({
              ...prevState,
              gotMobile: response.data,
            }));
            console.log(response.data);
          });
        });
      } catch (error) {
        console.error("Error fetching username:", error);
      }
    }

    fetchUsername(); // Call the function to fetch username
  }, []);

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

      <link href="css/style.css" rel="stylesheet" />

      <body>
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

        <form
          action="profile.php"
          method="POST"
          enctype="multipart/form-data"
        ></form>

        <div class="container rounded bg-white mt-5 mb-5">
          <div class="row">
            <div class="col-md-3 border-right">
              <div class="d-flex flex-column align-items-center text-center p-3 py-5">
                <img
                  class="rounded-circle mt-5"
                  width="150px"
                  src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
                />
                <span class="font-weight-bold">{formData.username}</span>
                <span class="font-weight-bold">{formData.gotMobile}</span>
                <span> </span>
              </div>

              <div class="container rounded bg-white mt-5 mb-5">
                <label class="labels">Profile Picture</label>
                <input
                  type="file"
                  name="profilePicture"
                  class="form-control-file"
                />
              </div>
            </div>
            <div class="col-md-5 border-right">
              <div class="p-3 py-5">
                <div class="d-flex justify-content-between align-items-center mb-3">
                  <h4 class="text-right">Profile Settings</h4>
                </div>
                <form className="py-5" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control border-0 p-4"
                      placeholder="first name"
                      name="firstname"
                      value={formData.firstname}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control border-0 p-4"
                      placeholder="last name"
                      name="lastname"
                      value={formData.lastname}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="number"
                      className="form-control border-0 p-4"
                      placeholder="mobile"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div class="row mt-3">
                    <div class="col-md-12">
                      <label class="labels">Address Line 1</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="enter address line "
                        value=""
                      />
                    </div>
                    <div class="col-md-12">
                      <label class="labels">Postcode</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Postcode"
                        value=""
                      />
                    </div>
                  </div>
                  <div class="row mt-3">
                    <div class="col-md-6">
                      <label class="labels">Country</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="country"
                        value=""
                      />
                    </div>
                    <div class="col-md-6">
                      <label class="labels">State/Region</label>
                      <input
                        type="text"
                        class="form-control"
                        value=""
                        placeholder="state"
                      />
                    </div>
                  </div>
                  <div class="mt-5 text-center">
                    <button
                      class="btn btn-primary profile-button"
                      type="submit"
                    >
                      Update
                    </button>
                  </div>
                </form>
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

        <a href="#" class="btn btn-lg btn-primary back-to-top">
          <i class="fa fa-angle-double-up"></i>
        </a>

        <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js"></script>
        <script src="lib/easing/easing.min.js"></script>
        <script src="lib/owlcarousel/owl.carousel.min.js"></script>
        <script src="lib/tempusdominus/js/moment.min.js"></script>
        <script src="lib/tempusdominus/js/moment-timezone.min.js"></script>
        <script src="lib/tempusdominus/js/tempusdominus-bootstrap-4.min.js"></script>

        <script src="mail/jqBootstrapValidation.min.js"></script>
        <script src="mail/contact.js"></script>

        <script src="js/main.js"></script>
      </body>
    </div>
  );
}

export default ClinicProfile;
