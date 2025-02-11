package com.blogs.service;

import java.util.List;
import com.blogs.dto.ApiResponse;
import com.blogs.dto.UserDto;
import com.blogs.dto.UserRespDto;
import com.blogs.pojos.User;

public interface UserService {
	
	User signIn(String email,String password);
	ApiResponse addUser(UserDto userDto);
	List<UserRespDto> getAllUsers();
	ApiResponse updateUser(Long userId,UserRespDto upddateUser);
	ApiResponse resetPassword(String email, String newPassword);
	UserRespDto getUserById(Long id);
	public ApiResponse updateUserStatus(Long id, User.Status status);
	public ApiResponse deleteDeliveryStaff(Long id);
}
