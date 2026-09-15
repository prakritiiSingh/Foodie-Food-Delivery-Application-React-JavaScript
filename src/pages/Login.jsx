import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();

    const newErrors = {};

    if (!email) {
      newErrors.email = "Email is required";
    } else if (!email.includes("@")) {
      newErrors.email = "Enter a valid email";
    }

    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password =
        "Password must be at least 6 characters";
    }

    setErrors(newErrors);

  if (Object.keys(newErrors).length === 0) {

  const user = {
    name: email.split("@")[0],
    email: email,
  };

 localStorage.setItem(
  "foodieUser",
  JSON.stringify(user)
);

// Tell Navbar that login happened
window.dispatchEvent(new Event("userLogin"));

//alert("Login successful!");

navigate("/");
}
  };

  return (
    <div className="login-page">

      <div className="login-card">

        <h1>Welcome Back 👋</h1>

        <p className="login-subtitle">
          Login to continue ordering delicious food.
        </p>

        <form onSubmit={handleSubmit}>

          {/* EMAIL */}

          <div className="form-group">

            <label>Email</label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);

                setErrors({
                  ...errors,
                  email: "",
                });
              }}
            />

            {errors.email && (
              <p className="error-message">
                {errors.email}
              </p>
            )}

          </div>

          {/* PASSWORD */}

          <div className="form-group">

            <label>Password</label>

            <div className="password-wrapper">

              <input
                type={
                  showPassword
                    ? "text"
                    : "password"
                }
                placeholder="Enter your password"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);

                  setErrors({
                    ...errors,
                    password: "",
                  });
                }}
              />

              <button
                type="button"
                className="show-password"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
              >
                {showPassword ? "Hide" : "Show"}
              </button>

            </div>

            {errors.password && (
              <p className="error-message">
                {errors.password}
              </p>
            )}

          </div>

          <button
            type="submit"
            className="login-button"
          >
            Login
          </button>

        </form>

        <p className="signup-text">
          Don't have an account?{" "}

            <span onClick={() => navigate("/register")}>
               Create Account
            </span>
        </p>
      </div>

    </div>
  );
}

export default Login;