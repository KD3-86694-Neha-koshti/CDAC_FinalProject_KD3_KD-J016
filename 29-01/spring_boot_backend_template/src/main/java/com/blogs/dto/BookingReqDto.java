package com.blogs.dto;
import com.blogs.pojos.Booking.CylinderType;
import com.blogs.pojos.Booking.Status;

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
public class BookingReqDto {
	private Long userID;
	private boolean paymentStatus;
	private Status status;
	private CylinderType cylinderType;
}
