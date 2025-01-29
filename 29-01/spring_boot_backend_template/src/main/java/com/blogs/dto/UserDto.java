package com.blogs.dto;

import java.util.List;

import com.blogs.pojos.Booking;
import com.blogs.pojos.GasDelivery;
import com.blogs.pojos.User.Status;
import com.blogs.pojos.User.UserRole;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.OneToMany;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class UserDto extends BaseDto{
	
	private String fullName;
	private String email;
	private String password;	
	private String address;
	private UserRole role;
	private Long mobileNo;
	private Status status;
	
}
