package com.blogs.pojos;

import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name="booking")
@NoArgsConstructor
@Getter
@Setter
@ToString(callSuper = true,exclude = {"userID","orderId"})

public class Booking extends BaseEntity
{
	
	@ManyToOne
	@JoinColumn(name="user_id",nullable = false)
	private User userID;
	
	@OneToMany(mappedBy = "bookId",cascade = CascadeType.ALL,orphanRemoval =true)
	private List<GasDelivery> orderId;
	
	@Column(name="paymnet_status")
	private boolean paymentStatus;
	
	@Enumerated(EnumType.STRING)
	private Status status;
	
	@Enumerated(EnumType.STRING)
	@Column(name="cylinder_type")
	private CylinderType cylinderType;
	
	
	public enum Status
	{
		PENDING,CONFIRM,DELIVERED
	}
	public enum CylinderType
	{
		DOMASTIC,COMMERCIAL
	}
	public Booking(User userID, List<GasDelivery> orderId, boolean paymentStatus, Status status,
			CylinderType cylinderType) {
		super();
		this.userID = userID;
		this.orderId = orderId;
		this.paymentStatus = paymentStatus;
		this.status = status;
		this.cylinderType = cylinderType;
	}
	
}
