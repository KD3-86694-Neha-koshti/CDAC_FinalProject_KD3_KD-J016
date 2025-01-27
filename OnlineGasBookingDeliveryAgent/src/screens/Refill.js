
import React from "react";
import { Link } from "react-router-dom";

const Refill = ({ showToast }) => {
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
        <Link to="/home" className="btn btn-secondary ms-3">
          Back to Dashboard
        </Link>
      </form>
    </div>
  );
};

export default Refill;
