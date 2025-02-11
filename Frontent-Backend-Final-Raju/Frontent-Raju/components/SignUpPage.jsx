import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

function SignUpPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobileNo: "", // Changed from `phone` to `mobileNo` to match backend
    address: "",
    password: "",
    confirmPassword: "",
    role: "CUSTOMER", // Added `role` with default value
    status: "ACTIVE", // Added `status` with default value
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match!", { position: "top-right" });
      return;
    }

    const payload = {
      fullName: formData.fullName,
      email: formData.email,
      password: formData.password,
      address: formData.address,
      mobileNo: formData.mobileNo,
      role: formData.role,
      status: formData.status,
    };

    try {
      console.log("Sending Payload:", payload);
      const response = await axios.post("http://localhost:8080/register", payload, {
        headers: { "Content-Type": "application/json" }, // ✅ Ensure correct headers
      });

      if (response.status === 201) {
        toast.success("Sign-up successful!", { position: "top-right" });
      } else {
        toast.error("Error occurred during sign-up!", { position: "top-right" });
      }
    } catch (error) {
      console.error("Signup Error:", error);
      toast.error(`Error: ${error.response?.data?.message || "Server error"}`, { position: "top-right" });
    }
  };

  return (
    <div
      className="container py-5"
      style={{
        backgroundColor: "#f8f9fa",
        borderRadius: "10px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h2 className="text-center mb-4 text-primary fw-bold">Sign-Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label fw-bold">Full Name</label>
          <input
            type="text"
            name="fullName"
            className="form-control"
            placeholder="Enter your full name"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label fw-bold">Email Address</label>
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label fw-bold">Phone Number</label>
          <input
            type="tel"
            name="mobileNo"
            className="form-control"
            placeholder="Enter your phone number"
            value={formData.mobileNo}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label fw-bold">Address</label>
          <input
            type="text"
            name="address"
            className="form-control"
            placeholder="Enter your address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>

        {/* Password Field */}
        <div className="mb-3">
          <label className="form-label fw-bold">Password</label>
          <div className="position-relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              className="form-control pe-5"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <i
              className={showPassword ? "bi bi-eye-slash" : "bi bi-eye"}
              style={{
                position: "absolute",
                right: "10px",
                top: "50%",
                transform: "translateY(-50%)",
                cursor: "pointer",
                fontSize: "1.2rem",
                color: "#6c757d",
              }}
              onClick={() => setShowPassword(!showPassword)}
            ></i>
          </div>
        </div>

        {/* Confirm Password Field */}
        <div className="mb-3">
          <label className="form-label fw-bold">Confirm Password</label>
          <div className="position-relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              className="form-control pe-5"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
            <i
              className={showConfirmPassword ? "bi bi-eye-slash" : "bi bi-eye"}
              style={{
                position: "absolute",
                right: "10px",
                top: "50%",
                transform: "translateY(-50%)",
                cursor: "pointer",
                fontSize: "1.2rem",
                color: "#6c757d",
              }}
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            ></i>
          </div>
        </div>

        <button type="submit" className="btn btn-primary w-100 mt-3">
          Sign Up
        </button>
      </form>

      <footer className="text-center mt-4">
        <p className="text-muted">
          Already have an account?{" "}
          <a href="/login" className="text-primary">
            Login here
          </a>
          .
        </p>
      </footer>

      {/* Toastify Container */}
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
    </div>
  );
}

export default SignUpPage;
