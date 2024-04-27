import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from "react-time-picker";
import "react-time-picker/dist/TimePicker.css";
import "../styles.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import { useNavigate } from "react-router-dom";
import bookingService from "../services/booking.service";
import p1 from "../img/price-1.jpg";
import p2 from "../img/price-2.jpg";
import p3 from "../img/price-3.jpg";
var res = 0;
function Clinics() {
  const [bookings, setBookings] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    service: "",
    clinicName: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    bookingService
      .newBooking(formData)
      .then(() => {
        alert("booking successfull");
      })
      .catch((e) => {
        console.log(e);
      });
  };
  useEffect(() => {
    async function fetchClinics() {
      try {
        // Call the backend function listBookings here
        const response = await fetch("http://localhost:7000/getClinics");
        const data = await response.json();
        console.log("Fetched data:", data);
        setBookings(data); // Assuming data is an array of booking objects
      } catch (error) {
        console.error("Error fetching bookings:", error);
        // Handle error here
      }
    }

    fetchClinics();
  }, []);

  const divStyle = {
    top: "0",
    left: "0",
    background: "rgba(0, 0, 0, .5)",
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
  const marg = {
    margin: "5px",
    padding: "5px",
  };
  const font = {
    "font-size": "24px",
  };

  let navigate = useNavigate();
  async function login(e) {
    e.preventDefault();
    navigate("/login", { replace: true });
  }

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
              <a href="/about" class="nav-item nav-link">
                About
              </a>
              <a href="/service" class="nav-item nav-link">
                Service
              </a>
              <a href="/cart" class="nav-item nav-link">
                products
              </a>
              <a href="/clinic" class="nav-item nav-link active">
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
                    href="/donate"
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
            <a href="/profile">
              <i class="fa-regular fa-user" style={font}></i>
            </a>
          </div>
        </nav>
      </div>
      <div class="container-fluid bg-light pt-5">
        <div class="container py-5">
          <div class="row pb-3">
            <div class="col-md-6 col-lg-4 mb-4">
              <div class="d-flex flex-column text-center bg-white mb-2 p-3 p-sm-5">
                <h3 class="flaticon-house display-3 font-weight-normal text-secondary mb-3"></h3>
                <h3 class="mb-3">Prime vet</h3>
                <p>
                  Address: New Cairo 1, Cairo Governorate, Egypt Phone: +010
                  01053180 Website:www.pawsandclawsclinic.com Services:
                  Vaccinations, surgeries, dental care, grooming Operating
                  Hours: Mon-Sat 9:00 AM - 7:00 PM, Sun 10:00 AM - 9:00 PM
                </p>
                <a
                  href="https://maps.app.goo.gl/NMwVVK1mUj5XfGq57"
                  class="text-uppercase font-weight-bold"
                >
                  Location
                </a>
              </div>
            </div>
            <div class="col-md-6 col-lg-4 mb-4">
              <div class="d-flex flex-column text-center bg-white mb-2 p-3 p-sm-5">
                <h3 class="flaticon-food display-3 font-weight-normal text-secondary mb-3"></h3>
                <h3 class="mb-3">7 pets</h3>
                <p>
                  Address: Mohammed Nagib Axis, Cairo Egypt Phone: + 010
                  66644045 Website: www.7pets.net Services: Vaccinations,
                  surgeries, dental care, grooming Operating Hours: Mon-Sat 9:00
                  AM -7:00 PM, Sun 10:00 AM - 10:00 PM
                </p>
                <a
                  href="https://maps.app.goo.gl/K43kL49UbDiTx3oy5"
                  class="text-uppercase font-weight-bold"
                >
                  Location
                </a>
              </div>
            </div>
            <div class="col-md-6 col-lg-4 mb-4">
              <div class="d-flex flex-column text-center bg-white mb-2 p-3 p-sm-5">
                <h3 class="flaticon-grooming display-3 font-weight-normal text-secondary mb-3"></h3>
                <h3 class="mb-3">Petsy</h3>
                <p>
                  Address: 5th settlement Cairo Egypt Phone: + 012 81808459
                  Website: www.petsy.online Services: Vaccinations, surgeries,
                  dental care, grooming Operating Hours: Mon-Sat 9:00 AM -
                  7:00PM, Sun 10:00 AM - 10:00 PM
                </p>
                <a
                  href="https://maps.app.goo.gl/GwTQkmT7xFPspD1M7"
                  class="text-uppercase font-weight-bold"
                >
                  Location
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid bg-light">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-5">
              <div class="bg-primary py-5 px-4 px-sm-5">
                <form className="py-5" onSubmit={handleSubmit}>
                  <div className="form-group" style={marg}>
                    <select
                      className="custom-select border-0 px-4"
                      style={style2}
                      onChange={handleChange}
                    >
                      <option selected>Select a Clinic</option>
                      {bookings.map((booking, index) => (
                        <option key={index} value={formData.clinicName}>
                          {booking.email}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group" style={marg}>
                    <input
                      type="text"
                      className="form-control border-0 p-4"
                      placeholder="Your Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group" style={marg}>
                    <input
                      type="email"
                      className="form-control border-0 p-4"
                      placeholder="Your Email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group" style={marg}>
                    <div className="date" id="date" data-target-input="nearest">
                      <input
                        type="date"
                        className="form-control border-0 p-4 datetimepicker-input"
                        placeholder="Reservation Date"
                        data-target="#date"
                        data-toggle="datetimepicker"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="form-group" style={marg}>
                    <div className="time" id="time" data-target-input="nearest">
                      <input
                        type="time"
                        className="form-control border-0 p-4 datetimepicker-input"
                        placeholder="Reservation Time"
                        data-target="#time"
                        data-toggle="datetimepicker"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="form-group" style={marg}>
                    <select
                      className="custom-select border-0 px-4"
                      style={style2}
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                    >
                      <option selected>Select A Service</option>
                      <option value="1">Feeding</option>
                      <option value="2">Clinic</option>
                      <option value="3">Grooming</option>
                      <option value="4">Train</option>
                      <option value="5">Boarding</option>
                      <option value="6">Exercise</option>
                      <option value="7">Treatment</option>
                      <option value="8">Adoption</option>
                    </select>
                  </div>
                  <div>
                    <button
                      class="btn btn-dark btn-block border-0 py-3"
                      type="submit"
                    >
                      Book Now
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div class="col-lg-7 py-5 py-lg-0 px-3 px-lg-5">
              <h4 class="text-secondary mb-3">Looking for a clinic?</h4>
              <h1 class="display-4 mb-4">
                Book For <span class="text-primary">Your Pet</span>
              </h1>
              <p>
                We've made booking appointments for a wide range of pet care
                services effortless and convenient. Whether your furry friend
                needs a day of pampering at a grooming salon, a check-up at the
                vet clinic, or expert training sessions, Aleefy's booking
                section has you covered.
              </p>
              <div class="row py-2">
                <div class="col-sm-6">
                  <div class="d-flex flex-column">
                    <div class="d-flex align-items-center mb-2">
                      <h1 class="flaticon-house font-weight-normal text-secondary m-0 mr-3"></h1>
                      <h5 class="text-truncate m-0">Doctor Appointment</h5>
                    </div>
                    <p>
                      Ensure your pet's health and well-being with regular
                      check-ups and medical care from our network of veterinary
                      clinics and doctors.
                    </p>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="d-flex flex-column">
                    <div class="d-flex align-items-center mb-2">
                      <h1 class="flaticon-food font-weight-normal text-secondary m-0 mr-3"></h1>
                      <h5 class="text-truncate m-0">Pet Feeding</h5>
                    </div>
                    <p>
                      Ensure your pet receives the nutrition they need to stay
                      healthy and happy with our pet feeding services
                    </p>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="d-flex flex-column">
                    <div class="d-flex align-items-center mb-2">
                      <h1 class="flaticon-grooming font-weight-normal text-secondary m-0 mr-3"></h1>
                      <h5 class="text-truncate m-0">Pet Grooming</h5>
                    </div>
                    <p class="m-0">
                      Treat your pet to a spa day they'll never forget with our
                      professional grooming services.
                    </p>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="d-flex flex-column">
                    <div class="d-flex align-items-center mb-2">
                      <h1 class="flaticon-toy font-weight-normal text-secondary m-0 mr-3"></h1>
                      <h5 class="text-truncate m-0">Pet Training</h5>
                    </div>
                    <p class="m-0">
                      Unlock your pet's full potential with our professional pet
                      training services.
                    </p>
                  </div>
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
              environment where pets and their owners can thrive, flourish, and
              celebrate the unconditional love that binds us all.
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
    </div>
  );
}

export default Clinics;
