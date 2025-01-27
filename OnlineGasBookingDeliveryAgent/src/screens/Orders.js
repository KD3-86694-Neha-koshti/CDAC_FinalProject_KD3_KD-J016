
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Orders = ({ showToast }) => {
  const initialOrders = [
    {
      orderId: "10011",
      customerName: "King",
      address: "London",
      status: "Pending",
    },
  ];
  const [orders, setOrders] = useState(initialOrders);

  const handleMarkDelivered = (orderId) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.orderId === orderId ? { ...order, status: "Delivered" } : order
      )
    );
    showToast(`Order ${orderId} marked as Delivered!`, "success");
  };

  return (
    <div className="container mt-4 colorful-page">
      <h2>View Assigned Orders</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Order Id</th>
            <th>Customer Name</th>
            <th>Address</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.orderId}>
              <td>{order.orderId}</td>
              <td>{order.customerName}</td>
              <td>{order.address}</td>
              <td>
                <span
                  className={`badge ${
                    order.status === "Pending" ? "bg-danger" : "bg-success"
                  }`}
                >
                  {order.status}
                </span>
              </td>
              <td>
                {order.status === "Pending" && (
                  <button
                    className="btn btn-success btn-sm"
                    onClick={() => handleMarkDelivered(order.orderId)}
                  >
                    Mark as Delivered
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/home" className="btn btn-secondary">
        Back to Dashboard
      </Link>
    </div>
  );
};

export default Orders;
