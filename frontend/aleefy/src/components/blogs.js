import React, { useState, useEffect } from "react";
import "../styles.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import userService from "../services/user.service";

function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    content: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    userService
      .addBlogs(formData)
      .then(() => {
        alert("Blog posted");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    async function fetchBlogs() {
      try {
        // Call the backend function listBookings here
        userService
          .getBlogs()
          .then((response) => {
            console.log(response.data);
            setBlogs(response.data);
          })
          .catch((e) => {
            console.log(e);
          });
        // console.log("Fetched data:", data);
        // Assuming data is an array of booking objects
      } catch (error) {
        console.error("Error fetching bookings:", error);
        // Handle error here
      }
    }

    fetchBlogs();
  }, []);
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
                    class="btn btn-lg btn-primary px-3 d-none d-lg-block active"
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
            <a href="/profile">
              <i class="fa-regular fa-user" style={font}></i>
            </a>
          </div>
        </nav>
      </div>

      {/* Existing Blogs Section */}
      <div class="container py-5">
        <div class="row">
          <div class="col-lg-8">
            <h2 class="text-secondary mb-4">Existing Blogs</h2>
            {/* Display existing blogs here */}
            <div className="card">
              <div className="row">
                {blogs.map((blog, index) => (
                  <div className="col-lg-12" key={index}>
                    <div className="card mb-3">
                      <div className="card-body">
                        <h5 className="card-title">{blog.username}</h5>
                        <h5 className="card-title">{blog.title}</h5>
                        <p className="card-text">Breed: {blog.content}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div class="col-lg-4">
            <h2 class="text-secondary mb-4">Write a New Blog</h2>

            <form onSubmit={handleSubmit}>
              <div class="form-group">
                <label for="blogTitle">Title</label>
                <input
                  type="text"
                  class="form-control"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Enter blog title"
                />
              </div>
              <div class="form-group">
                <label for="blogContent">Content</label>
                <textarea
                  class="form-control"
                  id="blogContent"
                  name="content"
                  value={formData.content}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Enter blog content"
                ></textarea>
              </div>
              <button type="submit" class="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      <div class="container-fluid">
        {/* Footer */}
        <footer class="bg-dark text-white text-center py-4 px-sm-3 px-md-5">
          {/* Footer content */}
        </footer>
      </div>
    </div>
  );
}

export default Blog;
