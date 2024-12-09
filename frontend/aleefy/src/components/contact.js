import React, { useState } from "react";
import "../styles.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logo from "../img/logo2.png";
function Contact() {
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
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [calculatedData, setCalculatedData] = useState({
    calories: 0,
    protein: 0,
    TDE: 0,
    carbs: 0,
    fats: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    } else {
      const result = calculateCalories(formData);
      setCalculatedData(result);

      const dataToSend = {
        ...formData,
        ...result,
      };
      const toastId = toast.loading("Sending email...");
      try {
        const response = await fetch("/api/send-email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dataToSend),
        });

        if (response.ok) {
          toast.update(toastId, {
            render: "Email sent successfully!, check our plans to get started",
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

  const calculateCalories = (data) => {
    const { weight, height, age, gender, ageRange } = data;
    const weightNum = parseFloat(weight);
    const heightNum = parseFloat(height);
    const ageNum = parseInt(age, 10);

    if (isNaN(weightNum) || isNaN(heightNum) || isNaN(ageNum)) {
      console.error("Invalid input for calculations");
      return { calories: 0, TDE: 0, protein: 0, carbs: 0, fats: 0 };
    }

    let bmr, TDE, protein, carbs, fats;
    if (gender === "male") {
      bmr = 10 * weightNum + 6.25 * heightNum - 5 * ageNum + 5;
    } else {
      bmr = 10 * weightNum + 6.25 * heightNum - 5 * ageNum - 161;
    }
    if (ageRange === "little") {
      TDE = bmr * 1.2;
    } else if (ageRange === "medium") {
      TDE = bmr * 1.55;
    } else {
      TDE = bmr * 1.9;
    }
    protein = weightNum * 1.6;
    carbs = TDE * 0.55;
    fats = TDE * 0.25;
    let fatGrams = fats / 9;
    let remainingCalories = TDE - (protein * 4 + fatGrams * 9);
    let carbGrams = remainingCalories / 4;

    return {
      calories: Math.round(bmr),
      TDE: Math.round(TDE),
      protein: Math.round(protein),
      carbs: Math.round(carbGrams),
      fats: Math.round(fatGrams),
    };
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
              required
            />
            <input
              type="number"
              className="form-control border-0 p-4 mt-3"
              placeholder="Your Height (cm)"
              name="height"
              value={formData.height}
              onChange={handleChange}
            />
            <input
              type="number"
              className="form-control border-0 p-4 mt-3"
              placeholder="Your Age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              className="form-control border-0 p-4 mt-3"
              placeholder="Your Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              className="form-control border-0 p-4 mt-3"
              placeholder="Your Phone Number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
        );

      case 6:
        return (
          <div>
            <h4>Final Results:</h4>
            <p>Name: {formData.name}</p>
            <p>Email: {formData.email}</p>
            <p>Needed Calories: {calculatedData.calories} kcal/day</p>
            <p>Total Daily Energy Expenditure: {calculatedData.TDE} kcal/day</p>
            <p>Protein Intake: {calculatedData.protein} grams/day</p>
            <p>Carbs Intake: {calculatedData.carbs} grams/day</p>
            <p>Fats Intake: {calculatedData.fats} grams/day</p>
            <a href="/" className="btn btn-dark">
              Go Back to Home
            </a>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <ToastContainer />
      <section id="title" className="background-image">
        <div className="container-fluid fade-in">
          <nav
            className="navbar navbar-expand-lg navbar-dark d-flex align-items-center"
            style={{ marginTop: "20px" }}
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
                  <a className="nav-link" href="/">
                    Home
                  </a>
                </li>
              </ul>
            </div>
          </nav>

          <div
            className="d-flex justify-content-center align-items-center min-vh-100"
            style={{ marginTop: "-30px" }}
          >
            <form
              className="p-5 bg-transparent text-white rounded shadow-sm w-100"
              onSubmit={handleSubmit}
              style={{ maxWidth: "600px" }}
            >
              <h4>Step {currentStep} of 6</h4>
              {renderStep()}

              <div>
                {currentStep <= 5 && (
                  <button
                    className="btn btn-dark btn-block border-0 py-3 w-100"
                    type="submit"
                  >
                    {currentStep === 6 ? "Submit" : "Next"}
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
