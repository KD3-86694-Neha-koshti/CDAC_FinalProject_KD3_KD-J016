package com.blogs.service;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.blogs.custome_exception.ResourceNotFoundException;
import com.blogs.dao.UserDao;
import com.blogs.dto.ApiResponse;
import com.blogs.dto.UserDto;
import com.blogs.dto.UserRespDto;
import com.blogs.pojos.User;

@Service
@Transactional
public class UserServiceImpl implements UserService {

    @Autowired
    private UserDao userDao;
    
    @Autowired
    private ModelMapper modelMapper;
    
    public UserServiceImpl() {
        System.out.println("In user service impl");
    }

    @Override
    public ApiResponse addUser(UserDto userDto) {
        User userEntity = modelMapper.map(userDto, User.class);
        
        // Ensure the role is set correctly
        if (userDto.getRole() == null) {
            userEntity.setRole(User.UserRole.CUSTOMER); // Default to CUSTOMER if not provided
        } else {
            userEntity.setRole(userDto.getRole());
        }

        User savedUser = userDao.save(userEntity);
        
        return new ApiResponse("User registered successfully with id: " + savedUser.getId());
    }

    @Override
    public List<UserRespDto> getAllUsers() {
        return userDao.findAll()
                .stream()
                .map(user -> modelMapper.map(user, UserRespDto.class))
                .collect(Collectors.toList());
    }

    @Override
    public User signIn(String email, String password) {
        return userDao.findByEmail(email)
                .filter(user -> user.getPassword().equals(password))
                .orElseThrow(() -> new ResourceNotFoundException("Invalid email or password"));
    }

    @Override
    public ApiResponse updateUser(Long userId, UserRespDto updateUser) {
        User user = userDao.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User not found"));

        // ✅ Update only fields that are provided (avoid setting NULL values)
        if (updateUser.getFullName() != null) user.setFullName(updateUser.getFullName());
        if (updateUser.getEmail() != null) user.setEmail(updateUser.getEmail());
        if (updateUser.getAddress() != null) user.setAddress(updateUser.getAddress());
        if (updateUser.getMobileNo() != null) user.setMobileNo(updateUser.getMobileNo());
        if (updateUser.getPassword() != null && !updateUser.getPassword().isEmpty()) {
            user.setPassword(updateUser.getPassword());
        }

        userDao.save(user);
        return new ApiResponse("User details updated successfully.");
    }

    @Override
    public ApiResponse resetPassword(String email, String newPassword) {
        User user = userDao.findByEmail(email)
                .orElseThrow(() -> new ResourceNotFoundException("User with email " + email + " not found"));

        user.setPassword(newPassword);
        userDao.save(user);
        
        return new ApiResponse("Password updated successfully for " + email);
    }

    @Override
    public UserRespDto getUserById(Long id) {
        User user = userDao.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("User not found with ID: " + id));

        return modelMapper.map(user, UserRespDto.class);
    }

    // ✅ New method to update only the user status
    @Override
    public ApiResponse updateUserStatus(Long id, User.Status status) {
        User user = userDao.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("User not found with ID: " + id));

        System.out.println("Updating User ID: " + id + " to status: " + status);

        user.setStatus(status); // ✅ Set new status
        userDao.save(user); // ✅ Ensure Hibernate commits change
        userDao.flush(); // ✅ Force database commit

        return new ApiResponse("User status updated to: " + status);
    }

    
    @Override
    public ApiResponse deleteDeliveryStaff(Long id) {
        User user = userDao.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Delivery Staff not found with ID: " + id));

        userDao.delete(user);
        return new ApiResponse("Delivery Staff deleted successfully.");
    }

}
