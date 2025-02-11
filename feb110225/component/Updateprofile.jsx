import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify"; 
import "react-toastify/dist/ReactToastify.css"; 
import { updateUserInfo } from "../services/apiservice"; 
import Navbar from "../components/Navbar"; // ✅ Keep Navbar if it was in original UI

function UpdateProfile() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    address: "",
    mobileNo: "",
    password: "",
    confirmPassword: "",
    status: "ACTIVE", // ✅ Ensure status remains ACTIVE
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  useEffect(() => {
    // ✅ Fetch stored User ID
    const userId = sessionStorage.getItem("userId");
    console.log("Stored User ID:", userId);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    // ✅ Get stored User ID
    const userId = sessionStorage.getItem("userId");
    if (!userId) {
      toast.error("Error: No User ID Found. Please Login Again.");
      return;
    }

    // ✅ Password Validation
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match!", { position: "top-right" });
      return;
    }

    try {
      console.log("Updating Profile for User ID:", userId);
      await updateUserInfo(userId, formData);
      toast.success("Profile Updated Successfully!");
    } catch (error) {
      console.error("Profile Update Error:", error);
      toast.error("Failed to update profile.");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container mt-5">
        <h2 className="text-center mb-4">Update Profile</h2>
        <form onSubmit={handleUpdate} className="mx-auto" style={{ maxWidth: "500px" }}>
          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              name="fullName"
              className="form-control"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter Full Name"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter Email"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Phone Number</label>
            <input
              type="text"
              name="mobileNo"
              className="form-control"
              value={formData.mobileNo}
              onChange={handleChange}
              placeholder="Enter Mobile Number"
              required
            />
          </div>

          {/* Password Field with Show/Hide functionality */}
          <div className="mb-3">
            <label className="form-label">Password</label>
            <div className="position-relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                className="form-control pe-5"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter New Password"
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

          {/* Confirm Password Field with Show/Hide functionality */}
          <div className="mb-3">
            <label className="form-label">Confirm Password</label>
            <div className="position-relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                className="form-control pe-5"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm Password"
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

          <div className="mb-3">
            <label className="form-label">Address</label>
            <input
              type="text"
              name="address"
              className="form-control"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter Address"
              required
            />
          </div>

          <button type="submit" className="btn btn-success w-100">
            Update Profile
          </button>
        </form>
      </div>

      <ToastContainer position="top-right" autoClose={3000} hideProgressBar closeOnClick />
    </div>
  );
}

export default UpdateProfile;
