import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserService from "../services/user.service";

function Login(props) {
  const initialUserState = {
    username: "",
    password: "",
    confirmPassword: "", // New field for confirming password
  };

  const [user, setUser] = useState(initialUserState);
  const [signupMode, setSignupMode] = useState(false); // Default mode is login

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
          navigate("/", { replace: true });
        })
        .catch((e) => {
          console.log(e);
        });
    } else {
      // Signup logic
      UserService.createUser(user)
        .then((response) => {
          navigate("/", { replace: true });
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }

  const toggleMode = () => {
    setSignupMode(!signupMode);
    setUser(initialUserState); // Reset user fields when toggling mode
  };

  return (
    <div>
      <div className="App-header">
        <form className="App-header" onSubmit={handleSubmit}>
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

          {signupMode && ( // Show confirm password field only in signup mode
            <div className="form-group">
              <label htmlFor="InputConfirmPassword">Confirm Password</label>
              <input
                type="password"
                className="form-control"
                id="confirmPassword"
                name="confirmPassword"
                value={user.confirmPassword}
                placeholder="Confirm Password"
                onChange={handleInputChange}
              />
            </div>
          )}

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
