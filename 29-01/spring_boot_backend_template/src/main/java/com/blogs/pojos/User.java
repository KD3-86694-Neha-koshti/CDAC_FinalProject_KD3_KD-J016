package com.blogs.pojos;

import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name="user")
@NoArgsConstructor
@Getter
@Setter
@ToString(callSuper = true,exclude = "bookingId")
public class User extends BaseEntity
{
	@Column(name="full_name")
	private String fullName;
	
	@Column(length=50,unique = true)
	private String email;
	
	@Column(length = 25,nullable = false)
	private String password;
	
	private String address;
	
	@Enumerated(EnumType.STRING)
	@Column(length = 40)
	private UserRole role;
	
	@Column(name="mobile_no")
	private Long mobileNo;
	
	@Enumerated(EnumType.STRING)
	@Column(length = 30)
	private Status status;
	
	@OneToMany(mappedBy = "userID",cascade = CascadeType.ALL,orphanRemoval = true)
	private List<Booking> bookingId;

//	@OneToMany(mappedBy = "agentId",cascade = CascadeType.ALL,orphanRemoval = true)
//	private List<GasDelivery> cyliderId;
	
	public enum Status
	{
		ACTIVE,INACTIVE
	}

	public User(String fullName, String email, String password, String address, UserRole role, Long mobileNo,
		Status status) {
	super();
	this.fullName = fullName;
	this.email = email;
	this.password = password;
	this.address = address;
	this.role = role;
	this.mobileNo = mobileNo;
	this.status = status;
}

	public enum UserRole{
		ADMIN,CUSTOMER,DELEVRYAGENT
	}
	
	public void addBookingGas(Booking booking)
	{
		this.bookingId.add(booking);
		booking.setUserID(this);;
	}
}
