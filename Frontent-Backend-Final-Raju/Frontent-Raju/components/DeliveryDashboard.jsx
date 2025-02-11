import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DeliveryDashboard = () => {
  const navigate = useNavigate();

  const showToast = (message, type = "success") => {
    toast(message, { type, position: "top-right" });
  };

  const handleLogout = () => {
    showToast("Logged out successfully!", "success");
    navigate("/login");
  };

  return (
    <div className="container mt-4 colorful-page position-relative">
      <div className="d-flex justify-content-end mb-3">
        <button className="btn btn-danger btn-sm" onClick={handleLogout}>
          Logout
        </button>
      </div>
      <center>
        <h2 className="mb-4">Welcome to the Delivery Agent Dashboard</h2>
      </center>
      <div className="d-flex justify-content-center gap-3 mb-4">
        <Link to="/delivery-dashboard/orders" className="btn btn-primary btn-lg">
          View Assigned Orders
        </Link>
        <Link to="/delivery-dashboard/refill" className="btn btn-secondary btn-lg">
          Refill Gas Cylinder
        </Link>
      </div>

      {/* Render nested routes here */}
      <Outlet />
    </div>
  );
};

export default DeliveryDashboard;