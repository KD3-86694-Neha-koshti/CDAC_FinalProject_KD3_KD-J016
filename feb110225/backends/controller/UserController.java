package com.blogs.controller;

import java.util.List;
import java.util.stream.Collectors;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.blogs.dto.ApiResponse;
import com.blogs.dto.UserDto;
import com.blogs.dto.UserRespDto;
import com.blogs.pojos.User;
import com.blogs.service.UserService;

@RestController
@RequestMapping("/")
@CrossOrigin(origins = "http://localhost:3000", allowedHeaders = "*", methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE}) // Allow requests from React frontend
public class UserController {

    @Autowired
    private UserService userService;

    // ✅ REGISTER USER (Fixed)
    @PostMapping("/register")
    public ResponseEntity<?> addUser(@RequestBody UserDto userDto) {
        if (userDto == null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ApiResponse("Invalid request payload"));
        }

        System.out.println("🔄 Received Signup Payload: " + userDto.toString());

        try {
            ApiResponse response = userService.addUser(userDto);
            System.out.println("✅ User Registered Successfully: " + userDto.getEmail());
            return ResponseEntity.status(HttpStatus.CREATED).body(response);
        } catch (Exception e) {
            System.err.println("❌ Signup Error: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(new ApiResponse("User registration failed. Please try again."));
        }
    }

    // ✅ LOGIN USER (Fixed parameter handling)
    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestParam String email, @RequestParam String password) {
        try {
            User user = userService.signIn(email, password);

            if (user != null) {
                UserRespDto userResponse = new UserRespDto();
                userResponse.setId(user.getId());
                userResponse.setEmail(user.getEmail());
                userResponse.setFullName(user.getFullName());
                userResponse.setRole(user.getRole());
                userResponse.setStatus(user.getStatus());

                System.out.println("✅ Login Successful for: " + email);
                return ResponseEntity.status(HttpStatus.ACCEPTED).body(userResponse);
            } else {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                        .body(new ApiResponse("Invalid email or password"));
            }
        } catch (Exception e) {
            System.err.println("❌ Login Error: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(new ApiResponse("Login failed. Please try again."));
        }
    }

    // ✅ UPDATE USER PROFILE (Fixed PUT Request)
    @PutMapping("/update-profile/{id}")
    public ResponseEntity<?> updateUserProfile(@PathVariable Long id, @RequestBody UserRespDto updateDto) {
        System.out.println("🔄 Updating User Profile ID: " + id);

        UserRespDto existingUser = userService.getUserById(id);
        if (existingUser == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ApiResponse("User not found"));
        }

        // ✅ Update user details
        existingUser.setFullName(updateDto.getFullName());
        existingUser.setEmail(updateDto.getEmail());
        existingUser.setAddress(updateDto.getAddress());
        existingUser.setMobileNo(updateDto.getMobileNo());

        // ✅ Update password only if provided
        if (updateDto.getPassword() != null && !updateDto.getPassword().isEmpty()) {
            existingUser.setPassword(updateDto.getPassword());
        }

        // ✅ Save updated user
        try {
            ApiResponse response = userService.updateUser(id, existingUser);
            System.out.println("✅ Profile Updated Successfully for ID: " + id);
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            System.err.println("❌ Profile Update Error: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(new ApiResponse("Failed to update profile. Please try again."));
        }
    }

    // ✅ UPDATE USER STATUS (Fixed)
    @PutMapping("/update-status/{id}")
    public ResponseEntity<ApiResponse> updateUserStatus(
            @PathVariable Long id, @RequestParam String status) {
        System.out.println("🔄 Updating User ID: " + id + " to status: " + status);
        try {
            ApiResponse response = userService.updateUserStatus(id, User.Status.valueOf(status.toUpperCase()));
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            System.err.println("❌ Status Update Error: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(new ApiResponse("Failed to update status"));
        }
    }

    // ✅ FETCH USER BY ID
    @GetMapping("/getuser/{id}")
    public ResponseEntity<?> getUserById(@PathVariable Long id) {
        try {
            UserRespDto userDto = userService.getUserById(id);
            return ResponseEntity.ok(userDto);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ApiResponse("User not found"));
        }
    }

    // ✅ RESET PASSWORD
    @PutMapping("/forgetpasswd")
    public ResponseEntity<?> forgotPassword(@RequestParam String email, @RequestParam String newPassword) {
        try {
            ApiResponse response = userService.resetPassword(email, newPassword);
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(new ApiResponse("Failed to reset password"));
        }
    }

    // ✅ GET ALL CUSTOMERS
    @GetMapping("/getallcustomers")
    public ResponseEntity<?> getAllCustomers() {
        List<UserRespDto> customers = userService.getAllUsers().stream()
                .filter(user -> user.getRole().equals(User.UserRole.CUSTOMER))
                .collect(Collectors.toList());

        return customers.isEmpty()
                ? ResponseEntity.status(HttpStatus.NO_CONTENT).build()
                : ResponseEntity.ok(customers);
    }

    // ✅ GET CUSTOMER INFO
    @GetMapping("/getcustomerinfo")
    public ResponseEntity<?> getCustomerInfo() {
        List<UserRespDto> customers = userService.getAllUsers().stream()
                .filter(user -> user.getRole().equals(User.UserRole.CUSTOMER))
                .map(user -> new UserRespDto(user.getId(), user.getFullName(), user.getStatus()))
                .collect(Collectors.toList());

        return customers.isEmpty()
                ? ResponseEntity.status(HttpStatus.NO_CONTENT).build()
                : ResponseEntity.ok(customers);
    }
    
    @GetMapping("/getalldeliverystaff")
    public ResponseEntity<?> getAllDeliveryStaff() {
        System.out.println("🔄 Fetching all Delivery Staff");

        List<UserRespDto> deliveryStaff = userService.getAllUsers().stream()
                .filter(user -> user.getRole().equals(User.UserRole.DELEVRYAGENT))
                .collect(Collectors.toList());

        if (deliveryStaff.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NO_CONTENT).body(new ApiResponse("❌ No delivery staff found"));
        }

        System.out.println("✅ Found " + deliveryStaff.size() + " delivery staff members.");
        return ResponseEntity.ok(deliveryStaff);
    }



}
