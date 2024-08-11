import React, { useState, useEffect } from "react";
import "../components/home.css";

import im2 from "../img/me.jpg";
import lcl from "../img/lcl.jpg";
import pets from "../img/pets.png";
function HomePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    service: "",
    username: "",
  });

  return (
    <div>
      <body>
        <section id="title">
          <div class="container-fluid">
            <nav class="navbar navbar-expand-lg navbar-dark">
              <a class="navbar-brand navbar-light">Mazen Ebada</a>
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>

              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto">
                  <li class="nav-item">
                    <a class="nav-link" href="/contact">
                      Contact
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#cta">
                      Skills
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#pricing">
                      Projects
                    </a>
                  </li>
                </ul>
              </div>
            </nav>

            <div class="row">
              <div class="col-lg-6">
                <h1>
                  A senior computer engineering student at the GUC with a
                  passion for software development.
                </h1>
                <a href="mailto:ebada.jr@gmail.com" class="btn btn-dark">
                  Email
                </a>

                <button type="button" class="btn btn-outline-light">
                  Send contact form
                </button>
              </div>
              <div class="col-lg-6">
                <img class="downloadingI" src={im2} alt="iphone-mockup" />
              </div>
            </div>
          </div>
        </section>

        <section id="features">
          <div class="row">
            <div class=" featurebox col-lg-4">
              <i class="fa-solid fa-circle-check fa-4x checking"></i>
              <h3>Education</h3>
              <p>Senior computer engineering student at the GUC</p>
              <p>Expected to graduate June 2025</p>
            </div>
            <div class="featurebox col-lg-4">
              <i class="fa-solid fa-bullseye fa-4x checking"></i>
              <h3>Latest experience</h3>
              <p>
                Summer 2023 enterprise security internship at Etisalat by e&.
              </p>
            </div>
            <div class="featurebox col-lg-4">
              <i class="fa-solid fa-heart fa-4x checking"></i>
              <h3>Freelance work</h3>
              <p>Currently working as a freelance full stack web developer.</p>
              <p>Using ReactJs, Javascript, NodeJs, MongoDB.</p>
            </div>
          </div>
        </section>

        <section id="testimonials">
          <div id="carouselExample" class="carousel slide">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <h2>Successfully defended my bachelor project on June 2024.</h2>

                <em>Wireless charging of electric vehicles</em>
              </div>
              <div class="carousel-item ">
                <h2 class="testimonial-text">
                  Created a website from scratch as my first work as a
                  freelancer for a pet shop.
                </h2>

                <em>Feburuary 2024</em>
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </section>

        <section id="press">
          <img class="pressI" src={lcl} alt="tc-logo" />

          <img class="pressI" src={pets} alt="mashable-logo" />
        </section>

        <section id="pricing">
          <h1></h1>

          <p>Projects</p>

          <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
            <div class="col">
              <div class="card mb-4 rounded-3 shadow-sm">
                <div class="card-header py-3">
                  <h3 class="my-0 fw-normal">Scrum Master</h3>
                </div>
                <div class="card-body">
                  <h1 class="card-title pricing-card-title">
                    Latest university project
                  </h1>
                  <p>
                    In a university project, I led 10 people in a project where
                    we created two seperate websites for a pharmacy and a clinic
                    and then merged them together.
                  </p>

                  <a
                    href="https://github.com/advanced-computer-lab-2023/55-Es3af-Pharmacy"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button
                      type="button"
                      class="w-100 btn btn-lg btn-outline-dark"
                    >
                      Repo
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card mb-4 rounded-3 shadow-sm">
                <div class="card-header py-3">
                  <h3 class="my-0 fw-normal">
                    Wireless charging of EV systems
                  </h3>
                </div>
                <div class="card-body">
                  <h1 class="card-title pricing-card-title">
                    Bachelor project<small class="text-muted fw-light"></small>
                  </h1>

                  <p>
                    I used MATLAB/Simulink to enhance the existing wireless
                    charging technology for EV systems to enhance the efficiency
                    of the charger by 10%
                  </p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card mb-4 rounded-3 shadow-sm">
                <div class="card-header py-3">
                  <h3 class="my-0 fw-normal">Pet shop website for a client</h3>
                </div>
                <div class="card-body">
                  <h1 class="card-title pricing-card-title">
                    First freelancing project
                    <small class="text-muted fw-light"></small>
                  </h1>

                  <p>
                    I created a website for a client from scratch using ReactJs
                    and NodeJs for a pet shop where you can reserve
                    appointments, buy products and find clinics.
                  </p>

                  <a
                    href="https://github.com/Ebadajr/Aleefy"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button
                      type="button"
                      class="w-100 btn btn-lg btn-outline-dark"
                    >
                      Repo
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="cta">
          <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
            <div class="col">
              <div class="card mb-4 rounded-3 shadow-sm">
                <div class="card-header py-3">
                  <h3 class="my-0 fw-normal">Frontend development</h3>
                </div>
                <div class="card-body">
                  <p>HTML</p>
                  <p>CSS</p>
                  <p>ReactJs</p>
                  <p>Bootstrap libraries</p>
                  <p>UI Design</p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card mb-4 rounded-3 shadow-sm">
                <div class="card-header py-3">
                  <h3 class="my-0 fw-normal">Backend development</h3>
                </div>
                <div class="card-body">
                  <p>NodeJS</p>
                  <p>Javascript</p>
                  <p>Java programming</p>
                  <p>Python</p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card mb-4 rounded-3 shadow-sm">
                <div class="card-header py-3">
                  <h3 class="my-0 fw-normal">Database management</h3>
                </div>
                <div class="card-body">
                  <h1 class="card-title pricing-card-title">
                    <small class="text-muted fw-light"></small>
                  </h1>

                  <p>SQL</p>
                  <p>MongoDB</p>
                  <p>Database design</p>
                  <p>Schema design and relations</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer id="footer">
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-solid fa-envelope"></i>
          <p>©Mazen Ebada</p>
        </footer>
      </body>
    </div>
  );
}

export default HomePage;
