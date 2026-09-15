import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));

    setErrors((previous) => ({
      ...previous,
      [name]: "",
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!form.email) {
      newErrors.email = "Email is required";
    } else if (!form.email.includes("@")) {
      newErrors.email = "Enter a valid email";
    }

    if (!form.phone) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9]{10}$/.test(form.phone)) {
      newErrors.phone = "Enter a valid 10-digit phone number";
    }

    if (!form.password) {
      newErrors.password = "Password is required";
    } else if (form.password.length < 6) {
      newErrors.password =
        "Password must be at least 6 characters";
    }

    if (!form.confirmPassword) {
      newErrors.confirmPassword =
        "Please confirm your password";
    } else if (form.password !== form.confirmPassword) {
      newErrors.confirmPassword =
        "Passwords do not match";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      const user = {
        name: form.name,
        email: form.email,
        phone: form.phone,
      };

      localStorage.setItem(
        "foodieUser",
        JSON.stringify(user)
      );

      alert("Account created successfully!");

      navigate("/");
      window.location.reload();
    }
  };

  return (
    <div className="register-page">

      <div className="register-card">

        <div className="register-logo">
          🍔
        </div>

        <h1>Create Account</h1>

        <p className="register-subtitle">
          Join Foodie and start ordering delicious food.
        </p>

        <form onSubmit={handleSubmit}>

          {/* NAME */}

          <div className="form-group">

            <label>Full Name</label>

            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              value={form.name}
              onChange={handleChange}
            />

            {errors.name && (
              <p className="error-message">
                {errors.name}
              </p>
            )}

          </div>

          {/* EMAIL */}

          <div className="form-group">

            <label>Email</label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={form.email}
              onChange={handleChange}
            />

            {errors.email && (
              <p className="error-message">
                {errors.email}
              </p>
            )}

          </div>

          {/* PHONE */}

          <div className="form-group">

            <label>Phone Number</label>

            <input
              type="tel"
              name="phone"
              placeholder="Enter 10-digit phone number"
              value={form.phone}
              onChange={handleChange}
            />

            {errors.phone && (
              <p className="error-message">
                {errors.phone}
              </p>
            )}

          </div>

          {/* PASSWORD */}

          <div className="form-group">

            <label>Password</label>

            <div className="password-wrapper">

              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Create a password"
                value={form.password}
                onChange={handleChange}
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

          {/* CONFIRM PASSWORD */}

          <div className="form-group">

            <label>Confirm Password</label>

            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm your password"
              value={form.confirmPassword}
              onChange={handleChange}
            />

            {errors.confirmPassword && (
              <p className="error-message">
                {errors.confirmPassword}
              </p>
            )}

          </div>

          <button
            type="submit"
            className="register-button"
          >
            Create Account
          </button>

        </form>

        <p className="login-text">
          Already have an account?{" "}

          <span onClick={() => navigate("/login")}>
            Login
          </span>
        </p>

      </div>

    </div>
  );
}

export default Register;