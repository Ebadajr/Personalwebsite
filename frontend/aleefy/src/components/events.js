import React from "react";
import "../styles.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import caro1 from "../img/carousel-1.jpg";

// Sample events data
const upcomingEvents = [
  {
    title: "Pet Adoption Fair",
    date: "Saturday, March 15th",
    time: "10:00 AM - 3:00 PM",
    location: "Central Park, Cairo",
    description:
      "Join us for a day of furry fun as we host a pet adoption fair in collaboration with local shelters and rescue organizations. Meet adorable adoptable pets looking for their forever homes, enjoy pet-friendly activities, and learn more about responsible pet ownership.",
  },
  {
    title: "Paws in the Park Charity Walk",
    date: "Sunday, April 5th",
    time: "9:00 AM - 12:00 PM",
    location: "Nile Corniche, Alexandria",
    description:
      "Lace up your walking shoes and grab your furry friend for a scenic stroll along the Nile Corniche in support of animal welfare. All proceeds from this charity walk will benefit local animal rescue efforts and help provide care for homeless pets in need.",
  },
  // Add more events here...
];
const font = {
  "font-size": "24px",
};
function Events() {
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
                    class="btn btn-lg btn-primary px-3 d-none d-lg-block active"
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

      <div className="container-fluid p-0">
        <div
          id="header-carousel"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="w-100" src={caro1} alt="Image" />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                {upcomingEvents.map((event, index) => (
                  <div className="col-lg-6" key={index}>
                    <div className="card mb-4">
                      <div className="card-body">
                        <h5 className="card-title">{event.title}</h5>
                        <p className="card-text">{event.date}</p>
                        <p className="card-text">{event.time}</p>
                        <p className="card-text">{event.location}</p>
                        <p className="card-text">{event.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Upcoming Events */}
    </div>
  );
}

export default Events;
