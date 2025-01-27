
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./screens/Home";
import Orders from "./screens/Orders";
import Refill from "./screens/Refill";
import Login from "./screens/Login";
import RestPassword from "./screens/ResetPasswd";
import Register from "./screens/Register";

const App = () => {
  const showToast = (message, type) => {
    if (type === "success")
      toast.success(message, { position: toast.POSITION.TOP_CENTER });
    if (type === "info")
      toast.info(message, { position: toast.POSITION.TOP_CENTER });
  };

  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Header />
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="register" element={<Register />}></Route>
          <Route path="forgetpasswd" element={<RestPassword />}></Route>
          <Route path="home" element={<Home showToast={showToast} />} />
          <Route path="/orders" element={<Orders showToast={showToast} />}></Route>
          <Route path="/refill" element={<Refill showToast={showToast} />}></Route>
        </Routes>
        <Footer />
        <ToastContainer />
      </div>
    </Router>
  );
};

export default App;
