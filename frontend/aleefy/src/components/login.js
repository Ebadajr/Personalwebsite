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
    if (!signupMode) {
      // Login logic
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
          alert("signed up successfully, welcome ")
          navigate("/", { replace: true });
        })
        .catch((e) => {
          console.log(e);
        });
          break;
        case "clinic":
          UserService.createClinic(user)
        .then((response) => {
          alert("signed up successfully, welcome ")
          navigate("/clinicHome", { replace: true });
        })
        .catch((e) => {
          console.log(e);
        });
          break;
        case "shelter":
          UserService.createShelter(user)
          .then((response) => {
            alert("signed up successfully, login now ")
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
    <div>
      <div className="App-header">
        <form className="App-header" onSubmit={handleSubmit}>
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

          <div className="form-group">
            <label htmlFor="InputUsername">Username</label>
            <input
              type="username"
              className="form-control"
              id="username"
              name="username"
              value={user.username}
              placeholder="Enter username"
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="InputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={user.password}
              placeholder="Password"
              onChange={handleInputChange}
            />
          </div>

          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="toggleModeCheckbox"
              checked={signupMode}
              onChange={toggleMode}
            />
            <label className="form-check-label" htmlFor="toggleModeCheckbox">
              {signupMode ? "Switch to Login" : "Switch to Sign Up"}
            </label>
          </div>

          <button className="btn btn-primary mt-2" type="submit">
            {signupMode ? "Sign Up" : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
