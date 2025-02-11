import axios from "axios";

const API_BASE_URL = "http://localhost:8080"; // Replace with your backend URL

// ✅ Fetch All Bookings (Admin Access)
export const getAllBookings = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/booking`);
    return response.data;
  } catch (error) {
    console.error("Error fetching all bookings:", error);
    throw error;
  }
};

// ✅ Register User
export const registerUser = async (userDto) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/register`, userDto);
    return response.data;
  } catch (error) {
    console.error("Error registering user:", error);
    throw error;
  }
};

// ✅ Login User (Now Also Returns Status)
export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/login`, null, {
      params: { email, password },
    });
    return response.data; // Return user object with role & status
  } catch (error) {
    console.error("Error logging in:", error);
    throw error;
  }
};

// ✅ Update User Information
export const updateUserInfo = async (id, updateUser) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/update-profile/${id}`, updateUser, {
      headers: { "Content-Type": "application/json" },
    });
    return response.data;
  } catch (error) {
    console.error("Error updating user info:", error);
    throw error;
  }
};

// ✅ Reset Password
export const resetPassword = async (email, newPassword) => {
  try {
    const response = await axios.put(
      `${API_BASE_URL}/forgetpasswd`,
      null,
      { params: { email, newPassword } }
    );
    return response.data;
  } catch (error) {
    console.error("Error resetting password:", error);
    throw error;
  }
};

// ✅ Fetch All Customers
export const getAllCustomers = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/getallcustomers`);
    return response.data;
  } catch (error) {
    console.error("Error fetching customers:", error);
    throw error;
  }
};

// ✅ Fetch Customer Info (Only ID, Name, Status)
export const getCustomerInfo = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/getcustomerinfo`);
    return response.data;
  } catch (error) {
    console.error("Error fetching customer info:", error);
    throw error;
  }
};

// ✅ Update Customer Status
export const updateCustomerStatus = async (id, status) => {
  try {
    const response = await axios.put(
      `${API_BASE_URL}/update-customer-status/${id}`,
      { status },
      { headers: { "Content-Type": "application/json" } }
    );
    return response.data;
  } catch (error) {
    console.error("Error updating customer status:", error);
    throw error;
  }
};

// ✅ Fetch All Delivery Staff
export const getAllDeliveryStaff = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/getalldeliverystaff`);
    return response.data;
  } catch (error) {
    console.error("Error fetching delivery staff:", error);
    throw error;
  }
};

// ✅ Delete Delivery Staff
export const deleteDeliveryStaff = async (id) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/delete-delivery-staff/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting delivery staff:", error);
    throw error;
  }
};

// ✅ Update User Status (Activate/Deactivate)
export const updateUserStatus = async (id, status) => {
  try {
    console.log(`🔄 Sending update request for ID: ${id}, Status: ${status}`);

    const response = await axios.put(
      `${API_BASE_URL}/update-status/${id}`,
      null,  // ✅ No body required, use params instead
      { params: { status } }
    );

    console.log(`✅ Successfully updated status for ID ${id}:`, response.data);
    return response.data;
  } catch (error) {
    console.error("❌ Error updating user status:", error.response?.data || error);
    throw error;
  }
};



// ✅ Get User by ID
export const getUserById = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/getuser/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user by ID:", error);
    throw error;
  }

  
};
