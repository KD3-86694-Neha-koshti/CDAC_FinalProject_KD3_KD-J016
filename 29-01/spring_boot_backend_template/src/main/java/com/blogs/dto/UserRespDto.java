package com.blogs.dto;

import com.blogs.pojos.User.Status;
import com.blogs.pojos.User.UserRole;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserRespDto extends BaseDto{
	private String fullName;
	private String email;	
	private String address;
	private Long mobileNo;
	private String password;
	private Status status;
	
}
