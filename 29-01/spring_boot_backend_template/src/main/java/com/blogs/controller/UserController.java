package com.blogs.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.blogs.dto.ApiResponse;
import com.blogs.dto.UserDto;
import com.blogs.dto.UserRespDto;
import com.blogs.pojos.User;
import com.blogs.service.UserService;

@RestController
@RequestMapping("/user")
public class UserController {

	@Autowired
	private UserService userDervice;
	
	
	@PostMapping
	public ResponseEntity<?> addUser(@RequestBody UserDto userDto)
	{
		return ResponseEntity.status(HttpStatus.CREATED)
				.body(userDervice.addUser(userDto));
	}
	
	@GetMapping
	public ResponseEntity<?> getAllUserList()
	{
		List<UserRespDto> user=userDervice.getAllUsers();
		if(user.isEmpty())
			return ResponseEntity.status(HttpStatus.NO_CONTENT).build();		
		return ResponseEntity.ok(user);
	}
	
	@PostMapping("/login")
	public ResponseEntity<?> loginUser(@RequestParam String email,@RequestParam String password)
	{
		return ResponseEntity.status(HttpStatus.ACCEPTED)
				.body(userDervice.signIn(email, password));
	}
	
	@PutMapping("/update/{id}")
	public ResponseEntity<?> updateUserInfo(@PathVariable Long id,@RequestBody UserRespDto updateUser)
	{
		ApiResponse user=userDervice.updateUser(id, updateUser);
		return ResponseEntity.ok(user);
	}
}
