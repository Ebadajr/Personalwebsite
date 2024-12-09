import React, { useState, useEffect } from "react";
import "../components/home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import im2 from "../img/khayalpic.jpg";
import food from "../img/food2.jpg";
import rr from "../img/rr.jpg";
import code from "../img/qr code.png";
import newK from "../img/newK.jpg";
import newKK from "../img/newKK.jpg";
import back from "../video/back.mp4";
import logo from "../img/logo2.png";
import food3 from "../img/food3.jpg";
import food4 from "../img/food4.jpg";
import food5 from "../img/food5.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function HomePage() {
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    ageRange: "",
    bodyFat: "",
    message: "",
    email: "",
    phone: "",
    weight: "",
    height: "",
    age: "",
    Goal: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const carouselItems = [
    {
      title: "Your transformation starts here.",
      description:
        "Khayalergy, founded by a natural athlete with over eight years of experience in science-based training and competed at the World Natural Bodybuilding Federation (WNBF),Khayalergy is a platform that provides personalized insights into your Basal Metabolic Rate (BMR) and daily caloric needs, enabling you to make informed choices that align with your fitness goals. They offer a comprehensive platform with easy-to-follow instructions, curated with delicious foods and images, and are dedicated to making fitness a lifestyle, not a chore. Join us in transforming your fitness goals into reality by following our guidance, enjoying the flavors, and witnessing your transformation into the best version of yourself.",

      buttonLabel: "Find our plans",
      buttonLink: "#pricing",
      isVideo: true,
    },
    {
      title: "Scenes from the WNBF competition",
      description: "Competing in the natural comptition in Dubai",
      imgSrc: im2,
      imgClass: "large-image",
      buttonLabel: "Find our plans",
      buttonLink: "#pricing",
    },
    {
      title: "Reach your full potential",
      description: "Push your body to the limit and unleash your monster",
      imgSrc: newK,
      imgClass: "large-image",
      buttonLabel: "Find our plans",
      buttonLink: "#pricing",
    },
    {
      title: "Change your lifestyle",
      description:
        "Boost your confidence and start your new lifestyle guided by KHAYALERGY Team",
      imgSrc: newKK,
      imgClass: "large-image",
      buttonLabel: "Find our plans",
      buttonLink: "#pricing",
    },
  ];
  const nutritionItems = [
    {
      title: "Diet with Khayalergy",
      description:
        "At Khayalergy, we believe that maintaining a healthy diet should be easy and enjoyable! Our website offers a variety of simple, delicious recipes tailored to your dietary needs, With each recipe, we emphasize quick preparation times and mouthwatering flavors , our meals are designed to delight your taste buds and fit seamlessly into your lifestyle. In addition to, providing beautiful images and step-by-step instructions to guide you along the way. Join us at Khayalergy, where healthy eating is not just a goal, but a delightful experience!",
      imgSrc: food,
    },
    {
      title: "Best recipes in town",
      description: "Enrich your tastebuds with our delicious recipes",
      imgarray: [rr, food3, food4, food5],
    },
  ];
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePaymentClick = (details) => {
    setSelectedPlan({ title: details.title, price: details.price });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    } else {
      const dataToSend = {
        ...formData,
        selectedPlan,
      };
      const toastId = toast.loading("Sending email...");
      try {
        const response = await fetch("/api/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dataToSend),
        });

        if (response.ok) {
          toast.update(toastId, {
            render:
              "Email sent successfully!, kindly pay the required amount to get your tailored plan",
            type: "success",
            isLoading: false,
            autoClose: 5000,
          });
        } else {
          toast.update(toastId, {
            render: "Failed to send email",
            type: "error",
            isLoading: false,
            autoClose: 5000,
          });
        }
      } catch (error) {
        console.error("Error:", error);

        toast.update(toastId, {
          render: "Error sending email",
          type: "error",
          isLoading: false,
          autoClose: 5000,
        });
      }

      setCurrentStep(currentStep + 1);
    }
  };
  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="form-group mb-4">
            <input
              type="text"
              className="form-control border-0 p-4"
              placeholder="Your Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              style={{ color: "black" }}
              required
            />
          </div>
        );
      case 2:
        return (
          <div className="form-group mb-4">
            <label>Gender:</label>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                value="male"
                onChange={handleChange}
                style={{ color: "black" }}
                required
              />
              <label className="form-check-label">Male</label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                value="female"
                onChange={handleChange}
                style={{ color: "black" }}
                required
              />
              <label className="form-check-label">Female</label>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="form-group mb-4">
            <label>Activity Level:</label>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="ageRange"
                value="little"
                onChange={handleChange}
                style={{ color: "black" }}
                required
              />
              <label className="form-check-label">
                Low activity (Little to no excercise)
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="ageRange"
                value="medium"
                onChange={handleChange}
                style={{ color: "black" }}
                required
              />
              <label className="form-check-label">
                Moderately active (3-5 days a week)
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="ageRange"
                value="high"
                onChange={handleChange}
                style={{ color: "black" }}
                required
              />
              <label className="form-check-label">
                Highly active (6-7 days a week)
              </label>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="form-group mb-4">
            <label>Body Fat Percentage:</label>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="bodyFat"
                value="5-10%"
                onChange={handleChange}
                style={{ color: "black" }}
                required
              />
              <label className="form-check-label">5-10%</label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="bodyFat"
                value="11-15%"
                onChange={handleChange}
                style={{ color: "black" }}
                required
              />
              <label className="form-check-label">11-15%</label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="bodyFat"
                value="16-20%"
                onChange={handleChange}
                style={{ color: "black" }}
                required
              />
              <label className="form-check-label">16-20%</label>
            </div>
          </div>
        );
      // Step 5: Add fields for height and age
      case 5:
        return (
          <div className="form-group mb-4">
            <input
              type="number"
              className="form-control border-0 p-4"
              placeholder="Your Weight (kg)"
              name="weight"
              value={formData.weight}
              onChange={handleChange}
              style={{ color: "black" }}
              required
            />
            <input
              type="number"
              className="form-control border-0 p-4 mt-3"
              placeholder="Your Height (cm)"
              name="height"
              value={formData.height}
              onChange={handleChange}
              style={{ color: "black" }}
            />
            <input
              type="number"
              className="form-control border-0 p-4 mt-3"
              placeholder="Your Age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              style={{ color: "black" }}
              required
            />
            <input
              type="email"
              className="form-control border-0 p-4 mt-3"
              placeholder="Your Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={{ color: "black" }}
              required
            />
            <input
              type="text"
              className="form-control border-0 p-4 mt-3"
              placeholder="Your Phone Number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              style={{ color: "black" }}
              required
            />

            {/* New section for Goal selection */}
            <p style={{ color: "black" }} className="mt-4 fw-bold">
              Choose Your Goal:
            </p>
            <div className="d-flex align-items-center">
              <div className="form-check me-4">
                <input
                  className="form-check-input"
                  type="radio"
                  name="Goal"
                  value="Shred"
                  onChange={handleChange}
                  style={{ color: "black" }}
                  required
                  id="goalShred"
                />
                <label className="form-check-label" htmlFor="goalShred">
                  Shred
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="Goal"
                  value="bulk"
                  onChange={handleChange}
                  style={{ color: "black" }}
                  required
                  id="goalBulk"
                />
                <label className="form-check-label" htmlFor="goalBulk">
                  Bulk
                </label>
              </div>
            </div>
          </div>
        );

      case 6:
        return (
          <div
            className="modal fade show"
            style={{ display: "block" }}
            aria-modal="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Payment Required</h5>
                  <button
                    variant="primary"
                    type="button"
                    onClick={() => setSelectedPlan(null)}
                  ></button>
                </div>
                <div className="modal-body">
                  <p style={{ color: "black" }}>
                    You are required to pay{" "}
                    <strong>{selectedPlan.price}</strong> for the{" "}
                    <strong>{selectedPlan.title}</strong> to this account.
                  </p>

                  <div style={{ textAlign: "center" }}>
                    <img
                      src={code}
                      alt="QR Code"
                      style={{ width: "200px", height: "150px" }}
                    />
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => setSelectedPlan(null)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };
  return (
    <div>
      <ToastContainer />
      <body>
        <section id="title" className="background-image">
          <div
            className="container-fluid fade-in"
            style={{ marginLeft: "-30px" }}
          >
            <nav
              className="navbar navbar-expand-lg navbar-dark d-flex align-items-center"
              style={{
                marginTop: isMobile ? "-320px" : "0",
                marginBottom: isMobile ? "50px" : "0",
              }}
            >
              <div className="navbar-brand d-flex align-items-center">
                <h1 style={{ marginBottom: "0" }}>KHAYALERGY</h1>
                <img
                  src={logo}
                  alt="Logo"
                  style={{ width: "70px", height: "60px", marginLeft: "10px" }}
                />
              </div>

              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item">
                    <a className="nav-link" href="/contact">
                      BMR
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#pricing">
                      Plans
                    </a>
                  </li>
                </ul>
              </div>
            </nav>

            <div className="row align-items-center" style={{ height: "100%" }}>
              <div className="col-lg-6 fade-in">
                <h1>Unleash your potential now</h1>
                <a href="#pricing" className="btn btn-dark">
                  Join now
                </a>
                <a href="/contact">
                  <button type="button" className="btn btn-outline-light">
                    BMR calculator
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="features">
          <div class="row fade-in">
            <div class=" featurebox col-lg-4">
              <i class="fa-solid fa-circle-check fa-4x checking"></i>
              <h3>Constant Support</h3>
              <p style={{ color: "black" }}>
                Get professional support throughout your transformation.
              </p>
            </div>
            <div class="featurebox col-lg-4">
              <i class="fa-solid fa-bullseye fa-4x checking"></i>
              <h3>Reach your goals.</h3>
              <p style={{ color: "black" }}>
                Reach your goals, with your own personalized plan.
              </p>
            </div>
            <div class="featurebox col-lg-4">
              <i class="fa-solid fa-heart fa-4x checking"></i>
              <h3>Healthy lifestyle</h3>
              <p style={{ color: "black" }}>
                Reach your desired healthy lifestyle with the tastiest meals.
              </p>
            </div>
          </div>
        </section>
        <section id="testimonials">
          <div className="container-fluid p-0">
            <Carousel responsive={responsive} infinite={true}>
              {carouselItems.map((item, index) => (
                <div key={index} className="testimonial-slide">
                  <div className="testimonial-text">
                    <h2 className="text-4xl font-bold mb-4 text-black">
                      {item.title}
                    </h2>
                    <p className="text-lg text-black mb-4">
                      {item.description}
                    </p>

                    <a
                      href={item.buttonLink}
                      className="btn btn-lg btn-secondary mt-3"
                    >
                      {item.buttonLabel}
                    </a>
                  </div>
                  <div className="testimonial-image">
                    {item.isVideo ? (
                      <video
                        src={back}
                        autoPlay
                        loop
                        muted
                        playsinline
                        style={{
                          width: "80%", // Adjust the width as needed
                          height: "auto", // Maintain aspect ratio
                          borderRadius: "10%", // Rounded corners
                          objectFit: "cover", // Ensure the entire video fits within the container
                          maxHeight: "80vh", // Limit the maximum height
                          maxWidth: "100%", // Limit the maximum width
                        }}
                      />
                    ) : (
                      <img
                        src={item.imgSrc}
                        alt={item.title}
                        className="img-fluid"
                      />
                    )}
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </section>
        <section id="nutrition">
          <div className="container-fluid p-0">
            <Carousel responsive={responsive} infinite={true}>
              {nutritionItems.map((item, index) => (
                <div key={index} className="testimonial-slide">
                  <div className="testimonial-text">
                    <h2 className="text-4xl font-bold mb-4 text-black">
                      {item.title}
                    </h2>
                    <p className="text-lg text-black mb-4">
                      {item.description}
                    </p>
                  </div>
                  <div
                    className="testimonial-image"
                    style={{ marginTop: "40px" }}
                  >
                    {item.imgarray ? (
                      <div className="grid grid-cols-2 gap-4">
                        {item.imgarray.map((img, imgIndex) => (
                          <img
                            key={imgIndex}
                            src={img}
                            alt={`${item.title}`}
                            className="img-fluid rounded-md"
                            style={{
                              width: "40%",
                              margin: "2px",
                            }}
                          />
                        ))}
                      </div>
                    ) : item.isVideo ? (
                      <video
                        src={back}
                        autoPlay
                        loop
                        muted
                        style={{
                          width: "80%",
                          height: "auto",
                          borderRadius: "10%",
                          objectFit: "cover",
                          maxHeight: "80vh",
                          maxWidth: "100%",
                        }}
                      />
                    ) : (
                      <img
                        src={item.imgSrc}
                        alt={item.title}
                        className="img-fluid"
                      />
                    )}
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </section>
        <section id="pricing">
          <h1 className="fw-bold">A Plan for Every Goal</h1>

          <p style={{ color: "black" }} className="fw-bold">
            Be part of Khayalergy's tribe.
          </p>
          <p style={{ color: "black" }} className="fw-bold">
            All plans include a personalized meal plan and weekly updates with
            24/7 mail service.
          </p>
          {!selectedPlan && (
            <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
              {/* Plan 1 */}
              <div className="col">
                <div className="card mb-4 rounded-3 shadow-sm position-relative">
                  {/* Discount Ribbon */}
                  <div
                    className="position-absolute top-0 end-0 bg-danger text-white p-1"
                    style={{
                      transform: "rotate(45deg)",
                      width: "100px",
                      right: "-30px",
                      top: "10px",
                      fontSize: "12px",
                    }}
                  >
                    25% OFF
                  </div>
                  <div className="card-header py-3">
                    <h3 className="my-0 fw-bold">3 Months Nutrition Plan</h3>
                  </div>
                  <div className="card-body">
                    <h2 className="fw-bold">
                      <span style={{ textDecoration: "line-through" }}>
                        650 EGP
                      </span>{" "}
                      487.5 EGP
                    </h2>
                    <p className="fw-bold">
                      Customized meal plan based on your choice.
                    </p>
                    <p className="fw-bold">Weekly updates</p>
                    <p className="fw-bold">Unlimited support</p>

                    <button
                      type="button"
                      className="w-100 btn btn-lg btn-dark"
                      onClick={() =>
                        handlePaymentClick({
                          title: "3 Months Nutrition Plan",
                          price: "487.5 EGP",
                        })
                      }
                    >
                      Sign Up
                    </button>
                  </div>
                </div>
              </div>
              {/* Plan 2 */}
              <div className="col">
                <div className="card mb-4 rounded-3 shadow-sm">
                  <div className="card-header py-3">
                    <h3 className="my-0 fw-bold">6 Months Full Plan</h3>
                  </div>
                  <div className="card-body">
                    <h2 className="fw-bold">2300 EGP</h2>
                    <p className="fw-bold">
                      Meal prep guides, grocery lists, and recipe ideas to
                      simplify healthy eating.
                    </p>
                    <p className="fw-bold">
                      Full workout plan with video to ensure injury-free
                      training and maximize results.
                    </p>
                    <p className="fw-bold">
                      Flexible scheduling to accommodate busy lifestyles.
                    </p>
                    <p className="fw-bold">
                      Money-back guarantee if you don’t see results within the
                      first 30 days.
                    </p>

                    <p className="fw-bold">30-Day freezing allowance.</p>
                    <button
                      type="button"
                      className="w-100 btn btn-lg btn-dark"
                      onClick={() =>
                        handlePaymentClick({
                          title: "6 Months Full Plan",
                          price: "2300 EGP",
                        })
                      }
                    >
                      Sign Up
                    </button>
                  </div>
                </div>
              </div>
              {/* Plan 3 */}
              <div className="col">
                <div className="card mb-4 rounded-3 shadow-sm position-relative">
                  {/* Discount Ribbon */}
                  <div
                    className="position-absolute top-0 end-0 bg-danger text-white p-1"
                    style={{
                      transform: "rotate(45deg)",
                      width: "100px",
                      right: "-30px",
                      top: "10px",
                      fontSize: "12px",
                    }}
                  >
                    25% OFF
                  </div>
                  <div className="card-header py-3">
                    <h3 className="my-0 fw-bold">
                      3 Months Nutrition and Workout Plan
                    </h3>
                  </div>
                  <div className="card-body">
                    <h2 className="fw-bold">
                      <span style={{ textDecoration: "line-through" }}>
                        1250 EGP
                      </span>{" "}
                      937.5 EGP
                    </h2>
                    <p className="fw-bold">
                      Tailored meal plans based on your lifestyle and fitness
                      goals.
                    </p>
                    <p className="fw-bold">
                      Full workout plan constructed to satisfy your goals.
                    </p>
                    <p className="fw-bold">
                      Calculated macronutrients to ensure achieving your goal.
                    </p>
                    <p className="fw-bold">
                      Ongoing adjustments and guidance to ensure adherence and
                      progress.
                    </p>
                    <button
                      type="button"
                      className="w-100 btn btn-lg btn-dark"
                      onClick={() =>
                        handlePaymentClick({
                          title: "3 Months Nutrition and Workout Plan",
                          price: "937.5 EGP",
                        })
                      }
                    >
                      Sign Up
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>

        <footer id="footer">
          <a href="https://www.instagram.com/omar_khayal?igsh=a3p2MGI4d2JkMzhi&utm_source=qr">
            <i class="fa-brands fa-instagram"></i>
          </a>
          <a href="mailto:omar.hazem.khayal@gmail.com">
            <i className="fa-solid fa-envelope"></i>
          </a>
          <a href="https://www.tiktok.com/@khayalergy?_t=8q6UANz22NO&_r=1">
            <i class="fa-brands fa-tiktok"></i>
          </a>

          <p>Omar Khayal</p>
        </footer>
      </body>
    </div>
  );
}

export default HomePage;
