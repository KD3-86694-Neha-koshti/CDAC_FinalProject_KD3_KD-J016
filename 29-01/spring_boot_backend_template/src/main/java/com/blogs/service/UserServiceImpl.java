package com.blogs.service;

import java.util.List;
import java.util.Optional;
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
	public ApiResponse addUser(UserDto userDto) 
	{
		User userEntity=modelMapper.map(userDto, User.class);
		User persistentUser=userDao.save(userEntity);
		return new ApiResponse("User added with id "+persistentUser.getId());
	}

	@Override
	public List<UserRespDto> getAllUsers() {
		return userDao.findAll()
				.stream()
				.map(user->modelMapper.map(user,UserRespDto.class))
				.collect(Collectors.toList());
	}

	@Override
	public User signIn(String email, String password) {
	
		return userDao.findByEmail(email)
				.filter(user->user.getPassword().equals(password))
				.orElseThrow(()->new ResourceNotFoundException("invalid email and password"));
	}

	@Override
	public ApiResponse updateUser(Long userId, UserRespDto upddateUser) {
		User user=userDao.findById(userId)
				.orElseThrow(()->new ResourceNotFoundException("user not found"));
		user.setFullName(upddateUser.getFullName());
		user.setEmail(upddateUser.getEmail());
		user.setPassword(upddateUser.getPassword());
		user.setAddress(upddateUser.getAddress());
		user.setMobileNo(upddateUser.getMobileNo());
		userDao.save(user);
		return new ApiResponse("Update details");
	}

}
