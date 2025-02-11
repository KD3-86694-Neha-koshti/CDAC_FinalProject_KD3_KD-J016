import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const API_BASE_URL = "http://localhost:8080"; // ✅ Backend URL

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState("");

  // ✅ Fetch Orders from /booking
  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/booking`)
      .then((response) => {
        console.log("Fetched Orders:", response.data);
        setOrders(response.data);
      }) 
      .catch((err) => {
        console.error("Error fetching orders:", err);
        setError("Failed to load orders.");
      });
  }, []);

  // ✅ Handle Status Change (PENDING <-> DELIVERED)
  const handleStatusChange = async (orderId, newStatus) => {
    try {
      const response = await axios.patch(
        `${API_BASE_URL}/booking/update-status/${orderId}`,
        null, // No body needed
        { params: { status: newStatus } } // ✅ Sending status as query parameter
      );
      
      console.log(`✅ Order ${orderId} updated to ${newStatus}:`, response.data);
      toast.success(`Order ${orderId} marked as ${newStatus}!`);

      // ✅ Update UI Immediately
      setOrders((prevOrders) =>
        prevOrders.map((order) =>
          order.id === orderId ? { ...order, status: newStatus } : order
        )
      );
    } catch (error) {
      console.error("❌ Error updating order status:", error);
      toast.error("Failed to update order status.");
    }
  };

  return (
    <div className="container mt-4">
      <h2>View Assigned Orders</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Order ID</th> {/* ✅ From "id" */}
            <th>Customer Name</th> {/* ✅ From "customerName" */}
            <th>Status</th> {/* ✅ From "status" */}
            <th>Action</th> {/* ✅ Dropdown for changing status */}
          </tr>
        </thead>
        <tbody>
          {orders.length > 0 ? (
            orders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.customerName}</td>
                <td>
                  <span
                    className={`badge ${
                      order.status === "PENDING" ? "bg-danger" : "bg-success"
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
                <td>
                  <select
                    className="form-select"
                    value={order.status}
                    onChange={(e) => handleStatusChange(order.id, e.target.value)}
                  >
                    <option value="PENDING">Pending</option>
                    <option value="DELIVERED">Delivered</option>
                  </select>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center">No orders found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
