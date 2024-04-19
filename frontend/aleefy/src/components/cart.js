import React, { useState } from "react";
import "../styles.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import im2 from "../img/2.jpg";
import im1 from "../img/1.jpg";
import im3 from "../img/3.jpg";
import im4 from "../img/4.jpg";
import im5 from "../img/5.jpg";
function Cart() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Stylish pet appearel",
      price: 26.0,
      quantity: 4,
      imgsrc: im2,
    },
    {
      id: 2,
      name: "Interactive treat dispenser",
      price: 26.0,
      quantity: 1,
      imgsrc: im1,
    },
    {
      id: 3,
      name: "Cat scratching post",
      price: 30.0,
      quantity: 1,
      imgsrc: im3,
    },
    {
      id: 4,
      name: "Pet Dental Care Kit",
      price: 30.0,
      quantity: 1,
      imgsrc: im4,
    },
    {
      id: 5,
      name: "Portable water bottle for pets",
      price: 40.0,
      quantity: 1,
      imgsrc: im5,
    },
  ]);

  // Function to update the quantity of an item in the cart
  const updateQuantity = (id, quantity) => {
    const updatedCartItems = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: quantity } : item
    );
    setCartItems(updatedCartItems);
  };

  // Calculate total price
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const font = {
    "font-size": "24px",
  };
  return (
    <div className="container">
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
              <a href="/home" class="nav-item nav-link  ">
                Home
              </a>
              <a href="/about" class="nav-item nav-link">
                About
              </a>
              <a href="/service" class="nav-item nav-link">
                Service
              </a>
              <a href="/cart" class="nav-item nav-link active">
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
            <a href="/profile">
              <i class="fa-regular fa-user" style={font}></i>
            </a>
          </div>
        </nav>
      </div>
      <div className="row">
        <div className="col-lg-8">
          {cartItems.map((item) => (
            <div className="card border-0 mb-2" key={item.id}>
              <img className="card-img-top" src={item.imgsrc} alt="" />
              <div className="card-body bg-light p-4">
                <h4 className="card-title text-truncate">{item.name}</h4>
                <div className="d-flex mb-3">
                  <div className="price">${item.price.toFixed(2)}</div>
                  <div className="quantity">
                    <input
                      type="number"
                      value={item.quantity}
                      min="1"
                      className="quantity-field"
                      onChange={(e) =>
                        updateQuantity(item.id, parseInt(e.target.value))
                      }
                    />
                  </div>
                  <div className="subtotal">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="col-lg-4">
          <div className="card border-0 mb-2">
            <div className="card-body bg-light p-4">
              <h4 className="card-title">Total Price</h4>
              <div className="d-flex justify-content-between">
                <div className="font-weight-bold">Total:</div>
                <div className="font-weight-bold">${totalPrice.toFixed(2)}</div>
              </div>
              <a href="/payment" className="btn btn-primary mt-3">
                Checkout
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
