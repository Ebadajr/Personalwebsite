import React, { useState, useEffect } from "react";
import "../styles.scss";
import "bootstrap/dist/css/bootstrap.min.css";

var res = 0;
function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("message sent successfully");
  };

  const style5 = {
    background: "#111111",
  };

  return (
    <div>
      <section id="title">
        <div class="container-fluid">
          <nav class="navbar navbar-expand-lg navbar-dark">
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
                  <a class="nav-link" href="/">
                    Home
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </section>
      <div className="d-flex justify-content-center align-items-center min-vh-100">
        <form
          className="p-5 bg-light rounded shadow-sm w-100"
          onSubmit={handleSubmit}
          style={{ maxWidth: "600px" }}
        >
          <div className="form-group mb-4">
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
          <div className="form-group mb-4">
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
          <div className="form-group mb-4">
            <input
              type="text"
              className="form-control border-0 p-4"
              placeholder="Message subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group mb-4">
            <textarea
              className="form-control border-0 p-4"
              placeholder="Your message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
            ></textarea>
          </div>

          <div>
            <button
              className="btn btn-dark btn-block border-0 py-3 w-100"
              type="submit"
            >
              Send Now
            </button>
          </div>
        </form>
      </div>

      <div
        class="container-fluid text-white py-4 px-sm-3 px-md-5"
        style={style5}
      ></div>
    </div>
  );
}

export default Contact;
