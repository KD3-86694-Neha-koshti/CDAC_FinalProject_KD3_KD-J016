import React from "react";
import { toast, ToastContainer } from "react-toastify"; // Import toast
import "react-toastify/dist/ReactToastify.css"; // Import styles

const Refill = () => {
  // Define showToast inside this component
  const showToast = (message, type = "success") => {
    toast(message, { type, position: "top-right" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const selectElement = e.target.querySelector("select");
    if (selectElement && selectElement.value) {
      showToast(`Status updated to ${selectElement.value}`, "success");
    } else {
      showToast("Please select a status", "info");
    }
  };

  return (
    <div className="container mt-4 colorful-page">
      <h2>Refill Gas Cylinder</h2>
      <form onSubmit={handleSubmit}>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Cylinder Id</th>
              <th>Delivery Staff Name</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>10101</td>
              <td>King</td>
              <td>12-2-2024</td>
              <td>
                <select className="form-select" required>
                  <option value="">Choose...</option>
                  <option value="Delivered">Delivered</option>
                  <option value="Pending">Pending</option>
                </select>
              </td>
            </tr>
          </tbody>
        </table>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Refill;
