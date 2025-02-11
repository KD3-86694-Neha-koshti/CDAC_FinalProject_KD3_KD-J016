import React, { useState, useEffect } from "react";
import axios from "axios";

const API_BASE_URL = "http://localhost:8080"; // ✅ Change if backend runs on different port

const ViewBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const url = `${API_BASE_URL}/booking`; // ✅ Always fetch from `/booking`

    console.log("Fetching Data from:", url); // ✅ Debugging API Call

    axios
      .get(url)
      .then((response) => {
        console.log("API Response:", response.data); // ✅ Debugging API Response
        setBookings(response.data);
      })
      .catch((err) => {
        console.error("Error fetching bookings:", err);
        setError("Failed to load booking data.");
      });
  }, []);

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <header style={{ backgroundColor: "#003366", color: "white", padding: "10px" }}>
        <h1 style={{ margin: 0 }}>Gas Booking System</h1>
      </header>

      <h2 style={{ marginTop: "20px" }}>All Booking History</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <table border="1" style={{ width: "100%", borderCollapse: "collapse", margin: "20px 0" }}>
        <thead>
          <tr style={{ backgroundColor: "#f2f2f2" }}>
            <th>Booking ID</th> {/* ✅ Mapped from "id" */}
            <th>User ID</th> {/* ✅ Mapped from "userID" */}
            <th>Customer Name</th> {/* ✅ Mapped from "customerName" */}
            <th>Payment Status</th> {/* ✅ Mapped from "paymentStatus" */}
            <th>Delivery Status</th> {/* ✅ Mapped from "status" */}
            <th>Cylinder Type</th> {/* ✅ Mapped from "cylinderType" */}
          </tr>
        </thead>
        <tbody>
          {bookings.length > 0 ? (
            bookings.map((booking) => (
              <tr key={booking.id}>
                <td>{booking.id || "N/A"}</td> {/* Booking ID */}
                <td>{booking.userID || "N/A"}</td> {/* User ID */}
                <td>{booking.customerName || "N/A"}</td> {/* Customer Name */}
                <td
                  style={{
                    color: booking.paymentStatus.includes("Success") ? "green" : "red",
                    fontWeight: "bold",
                  }}
                >
                  {booking.paymentStatus || "N/A"} {/* Payment Status */}
                </td>
                <td
                  style={{
                    color: booking.status === "DELIVERED" ? "green" : "red",
                    fontWeight: "bold",
                  }}
                >
                  {booking.status || "N/A"} {/* Delivery Status */}
                </td>
                <td>{booking.cylinderType || "N/A"}</td> {/* Cylinder Type */}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" style={{ textAlign: "center", padding: "10px" }}>
                {error ? error : "No bookings found."}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ViewBookings;
