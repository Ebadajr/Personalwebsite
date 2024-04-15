import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserService from "../services/user.service";

function Login(props) {
  const initialUserState = {
    username: "",
    password: "",
  };

  const [user, setUser] = useState(initialUserState);
  const [signupMode, setSignupMode] = useState(false); // Default mode is login
  const [selectedSignupType, setSelectedSignupType] = useState(""); // State for selected signup type

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  let navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    // Login logic
    if (!signupMode) {
      UserService.login(user)
        .then((response) => {
          switch (response.data.__t) {
            case "clinic":
              navigate("/clinicHome", { replace: true });
              break;
            case "shelter":
              navigate("/shelterHome", { replace: true });
              break;
            default:
              navigate("/home", { replace: true });
          }
        })
        .catch((e) => {
          console.log(e);
        });
    } else {
      // Signup logic
      if (!selectedSignupType) {
        alert("Please select a signup type");
        return;
      }

      const userData = {
        ...user,
        type: selectedSignupType, // Include selected signup type in user data
      };

      switch (selectedSignupType) {
        case "user":
          UserService.createUser(user)
            .then((response) => {
              alert("Signed up successfully, welcome!");
              navigate("/", { replace: true });
            })
            .catch((e) => {
              console.log(e);
            });
          break;
        case "clinic":
          UserService.createClinic(user)
            .then((response) => {
              alert("Signed up successfully, welcome!");
              navigate("/clinicHome", { replace: true });
            })
            .catch((e) => {
              console.log(e);
            });
          break;
        case "shelter":
          UserService.createShelter(user)
            .then((response) => {
              alert("Signed up successfully, login now");
              navigate("/", { replace: true });
            })
            .catch((e) => {
              console.log(e);
            });
          break;
        default:
          alert("Invalid signup type");
          return;
      }
    }
  }

  const toggleMode = () => {
    setSignupMode(!signupMode);
    setUser(initialUserState); // Reset user fields when toggling mode
  };

  const handleSignupTypeChange = (event) => {
    setSelectedSignupType(event.target.value);
  };

  return (
    <div
      className="dark-bg"
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        className="container"
        style={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="col-lg-6 col-lg-offset-3 col-md-6 col-md-offset-3 col-md-8 col-md-offset-2">
          <div id="userform">
            <ul className="nav nav-tabs nav-justified" role="tablist">
              <li
                className={!signupMode ? "active" : ""}
                style={{ marginRight: "10px" }}
              >
                <a
                  href="#login"
                  role="tab"
                  data-toggle="tab"
                  onClick={!signupMode ? null : toggleMode}
                >
                  Log in
                </a>
              </li>
              <li
                className={signupMode ? "active" : ""}
                style={{ marginLeft: "10px" }}
              >
                <a
                  href="#signup"
                  role="tab"
                  data-toggle="tab"
                  onClick={signupMode ? null : toggleMode}
                >
                  Sign up
                </a>
              </li>
            </ul>
            <div className="tab-content">
              <div className="tab-pane fade in active" id="login">
                <h2
                  className="text-uppercase text-center"
                  style={{ color: "white" }}
                >
                  Log in
                </h2>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="email">
                      Your Email<span className="req">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="email"
                      name="username"
                      value={user.username}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">
                      Password<span className="req">*</span>
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      name="password"
                      value={user.password}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="mrgn-30-top">
                    <button type="submit" className="btn btn-larger btn-block">
                      Log in
                    </button>
                  </div>
                </form>
              </div>
              <div className="tab-pane fade in" id="signup">
                <h2
                  className="text-uppercase text-center"
                  style={{ color: "white" }}
                >
                  Sign Up for Free
                </h2>
                <form onSubmit={handleSubmit}>
                  {signupMode && (
                    <>
                      {/* Display signup type options */}
                      <div className="form-group">
                        <label htmlFor="signupType">Signup Type</label>
                        <select
                          className="form-control"
                          id="signupType"
                          value={selectedSignupType}
                          onChange={handleSignupTypeChange}
                        >
                          <option value="">Select Signup Type</option>
                          <option value="user">User</option>
                          <option value="clinic">Clinic</option>
                          <option value="shelter">Shelter</option>
                        </select>
                      </div>
                    </>
                  )}
                  <div className="row">
                    <div className="col-xs-12 col-sm-6">
                      <div className="form-group">
                        <label htmlFor="first_name">
                          First Name<span className="req">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="first_name"
                          name="first_name"
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-xs-12 col-sm-6">
                      <div className="form-group">
                        <label htmlFor="last_name">
                          Last Name<span className="req">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="last_name"
                          name="last_name"
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">
                      Your Email<span className="req">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="email"
                      name="username"
                      value={user.username}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">
                      Your Phone<span className="req">*</span>
                    </label>
                    <input
                      type="tel"
                      className="form-control"
                      id="phone"
                      name="phone"
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">
                      Password<span className="req">*</span>
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      name="password"
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="mrgn-30-top">
                    <button type="submit" className="btn btn-larger btn-block">
                      Sign up
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
