import React, { useState, useEffect } from "react";
import "../css/styles.css";
//import "bootstrap/dist/css/bootstrap.min.css";

import { useNavigate } from "react-router-dom";

import caro1 from "../img/carousel-1.jpg";
import caro2 from "../img/carousel-2.jpg";
import im1 from "../img/about-1.jpg";
import im2 from "../img/about-2.jpg";
import im3 from "../img/about-3.jpg";
import feat1 from "../img/feature.jpg";
import blog1 from "../img/blog-1.jpg";
import blog2 from "../img/blog-2.jpg";
import blog3 from "../img/blog-3.jpg";
import bookingService from "../services/booking.service";
import userService from "../services/user.service";

var res = 0;
function HomePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    service: "",
    username: "",
  });
  const divStyle = {
    maxWidth: "900px",
    padding: "3px",
  };
  const marg = {
    margin: "5px",
    padding: "5px",
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    bookingService
      .homeBooking(formData)
      .then(() => {
        alert("booking successfull");
      })
      .catch((e) => {
        console.log(e);
      });
  };
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
                <a href="/home" class="nav-item nav-link active ">
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
                href="/profile"
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
                      href="/about"
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
                      href="/about"
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

        <div class="container py-5">
          <div class="row py-5">
            <div class="col-lg-7 pb-5 pb-lg-0 px-3 px-lg-5">
              <h4 class="text-secondary mb-3">About Us</h4>
              <h1 class="display-4 mb-4">
                <span class="text-primary">Adoption</span> &{" "}
                <span class="text-secondary">Clinics</span>
              </h1>
              <ul class="list-inline">
                <li>
                  <h5>
                    <i class="fa fa-check-double text-secondary mr-3"></i>Best
                    In Industry
                  </h5>
                </li>
                <li>
                  <h5>
                    <i class="fa fa-check-double text-secondary mr-3"></i>
                    Emergency Services
                  </h5>
                </li>
                <li>
                  <h5>
                    <i class="fa fa-check-double text-secondary mr-3"></i>24/7
                    Customer Support
                  </h5>
                </li>
              </ul>
              <a href="/about" class="btn btn-lg btn-primary mt-3 px-4">
                Learn More
              </a>
            </div>
            <div class="col-lg-5">
              <div class="row px-3">
                <div class="col-12 p-0">
                  <img class="img-fluid w-100" src={im1} alt="" />
                </div>
                <div class="col-6 p-0">
                  <img class="img-fluid w-100" src={im2} alt="" />
                </div>
                <div class="col-6 p-0">
                  <img class="img-fluid w-100" src={im3} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container-fluid bg-light pt-5">
          <div class="container py-5">
            <div class="d-flex flex-column text-center mb-5">
              <h4 class="text-secondary mb-3">Our service</h4>
              <h1 class="display-4 m-0">
                <span class="text-primary">Premium</span> Pet Services
              </h1>
            </div>
            <div class="row pb-3">
              <div class="col-md-6 col-lg-4 mb-4">
                <div class="d-flex flex-column text-center bg-white mb-2 p-3 p-sm-5">
                  <h3 class="flaticon-house display-3 font-weight-normal text-secondary mb-3"></h3>
                  <h3 class="mb-3">Pet Boarding</h3>
                  <p>
                    Whether you're traveling for work or taking a well-deserved
                    vacation, ensure your pet receives the love and attention
                    they deserve with our trusted pet boarding services.
                  </p>
                  <a class="text-uppercase font-weight-bold" href="/clinic">
                    Book now
                  </a>
                </div>
              </div>
              <div class="col-md-6 col-lg-4 mb-4">
                <div class="d-flex flex-column text-center bg-white mb-2 p-3 p-sm-5">
                  <h3 class="flaticon-food display-3 font-weight-normal text-secondary mb-3"></h3>
                  <h3 class="mb-3">Pet Feeding</h3>
                  <p>
                    Never worry about your pet's nutrition again with our pet
                    feeding services. Whether you're away for the day or simply
                    need assistance maintaining a balanced diet for your furry
                    friend, our trusted partners offer reliable feeding
                    solutions to keep your pet healthy, happy, and wellfed.{" "}
                  </p>
                  <a class="text-uppercase font-weight-bold" href="/clinic">
                    Book now
                  </a>
                </div>
              </div>
              <div class="col-md-6 col-lg-4 mb-4">
                <div class="d-flex flex-column text-center bg-white mb-2 p-3 p-sm-5">
                  <h3 class="flaticon-grooming display-3 font-weight-normal text-secondary mb-3"></h3>
                  <h3 class="mb-3">Pet Grooming</h3>
                  <p>
                    Treat your pet to a spa day they'll never forget with our
                    selection of professional grooming services. From baths and
                    haircuts to nail trims and ear cleaning, our groomers are
                    skilled in pampering pets of all shapes and sizes. Book an
                    appointment today and watch your furry friend strut their
                    stuff with confidence and style.{" "}
                  </p>
                  <a class="text-uppercase font-weight-bold" href="/clinic">
                    Book now
                  </a>
                </div>
              </div>
              <div class="col-md-6 col-lg-4 mb-4">
                <div class="d-flex flex-column text-center bg-white mb-2 p-3 p-sm-5">
                  <h3 class="flaticon-cat display-3 font-weight-normal text-secondary mb-3"></h3>
                  <h3 class="mb-3">Pet Training</h3>
                  <p>
                    Unlock your pet's full potential with our professional pet
                    training services. Whether you're teaching basic obedience
                    commands or addressing behavioral issues, our experienced
                    trainers utilize positive reinforcement techniques to help
                    your pet become a well-behaved and obedient companion for
                    life.{" "}
                  </p>
                  <a class="text-uppercase font-weight-bold" href="/clinic">
                    Book now
                  </a>
                </div>
              </div>
              <div class="col-md-6 col-lg-4 mb-4">
                <div class="d-flex flex-column text-center bg-white mb-2 p-3 p-sm-5">
                  <h3 class="flaticon-dog display-3 font-weight-normal text-secondary mb-3"></h3>
                  <h3 class="mb-3">Pet Exercise</h3>
                  <p>
                    Keep your pet active, healthy, and happy with our pet
                    exercise programs. Whether it's a brisk walk, a game of
                    fetch, or an agility course, our trained professionals will
                    work with your pet to develop a tailored exercise plan that
                    meets their needs and preferences.
                  </p>
                  <a class="text-uppercase font-weight-bold" href="/clinic">
                    Book now
                  </a>
                </div>
              </div>
              <div class="col-md-6 col-lg-4 mb-4">
                <div class="d-flex flex-column text-center bg-white mb-2 p-3 p-sm-5">
                  <h3 class="flaticon-vaccine display-3 font-weight-normal text-secondary mb-3"></h3>
                  <h3 class="mb-3">Pet Treatment</h3>
                  <p>
                    When your pet is sick or injured, trust Aleefy to connect
                    you with reliable veterinary care. From routine check-ups to
                    specialized treatments, our network of clinics and doctors
                    offers compassionate care and expert advice to help your pet
                    recover and thrive.{" "}
                  </p>
                  <a class="text-uppercase font-weight-bold" href="/booking">
                    Book now
                  </a>
                </div>
              </div>
            </div>
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
        <div class="container pt-5">
          <div class="d-flex flex-column text-center mb-5">
            <h4 class="text-secondary mb-3">Find Your Perfect Pet</h4>
            <h1 class="display-4 m-0">
              <span class="text-primary">Browse</span> Now
            </h1>
          </div>
          <div class="row pb-3">
            <div class="col-lg-4 mb-4">
              <div class="card border-0 mb-2">
                <img class="card-img-top" src={blog1} alt="" />
                <div class="card-body bg-light p-4">
                  <h4 class="card-title text-truncate">Bella</h4>
                  <div class="d-flex mb-3">
                    <small class="mr-2">
                      <i class="fa flaticon-dog text-muted"></i> Domestic
                      Shorthair
                    </small>
                    <small class="mr-2">
                      <i class="fa fa-calendar text-muted"></i> 1 year old
                    </small>
                    <small class="mr-2">
                      <i class="fa fa-map-marker-alt text-muted"></i>{" "}
                      Alexandria,Egypt
                    </small>
                  </div>
                  <p>
                    Bella is a sweet and affectionate domestic shorthair with a
                    gentle demeanor and a heart of gold.
                  </p>
                  <a class="font-weight-bold" href="/adoption">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-4 mb-4">
              <div class="card border-0 mb-2">
                <img class="card-img-top" src={blog2} alt="" />
                <div class="card-body bg-light p-4">
                  <h4 class="card-title text-truncate">Max</h4>
                  <div class="d-flex mb-3">
                    <small class="mr-2">
                      <i class="fa flaticon-dog text-muted"></i> German shepard
                    </small>
                    <small class="mr-2">
                      <i class="fa fa-calendar text-muted"></i> 3 year old
                    </small>
                    <small class="mr-2">
                      <i class="fa fa-map-marker-alt text-muted"></i>{" "}
                      Cairo,Egypt
                    </small>
                  </div>
                  <p>
                    DMax is a loyal and intelligent German Shepherd with a heart
                    full of love.
                  </p>
                  <a class="font-weight-bold" href="/adoption">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-4 mb-4">
              <div class="card border-0 mb-2">
                <img class="card-img-top" src={blog3} alt="" />
                <div class="card-body bg-light p-4">
                  <h4 class="card-title text-truncate">Daisy</h4>
                  <div class="d-flex mb-3">
                    <small class="mr-2">
                      <i class="fa flaticon-dog text-muted"></i> Golden Retriver
                    </small>
                    <small class="mr-2">
                      <i class="fa fa-calendar text-muted"></i> 5 year old
                    </small>
                    <small class="mr-2">
                      <i class="fa fa-map-marker-alt text-muted"></i>{" "}
                      Luxor,Egypt
                    </small>
                  </div>
                  <p>
                    Daisy is a gentle and affectionate Golden Retriever with a
                    heart of gold.
                  </p>
                  <a class="font-weight-bold" href="/adoption">
                    Read More
                  </a>
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

export default HomePage;
