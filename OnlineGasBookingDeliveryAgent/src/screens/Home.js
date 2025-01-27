
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Home = ({ showToast }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        showToast("Logged out successfully!", "success");
        navigate("/login");
    };

    return (
        <div className="container mt-4 colorful-page position-relative">
            <div className="d-flex justify-content-end mb-3">
                <button 
                    className="btn btn-danger btn-sm" 
                    onClick={handleLogout}
                >
                    Logout
                </button>
            </div>
            <h2 className="mb-4">Welcome to the Delivery Agent Dashboard</h2>
            <div className="d-flex justify-content-center gap-3 mb-4">
                <Link to="/orders" className="btn btn-primary btn-lg">
                    View Assigned Orders
                </Link>
                <Link to="/refill" className="btn btn-secondary btn-lg">
                    Refill Gas Cylinder
                </Link>
            </div>
        </div>
    );
};

export default Home;
