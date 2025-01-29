package com.blogs.pojos;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name="order_gas")
@NoArgsConstructor
@Getter
@Setter
@ToString(callSuper = true,exclude = {"bookId","agentId"})
public class GasDelivery extends BaseEntity
{
	@ManyToOne
	@JoinColumn(name="agent_id")
	private User agentId;
	
	@ManyToOne
	@JoinColumn(name="book_id")
	private Booking bookId;
	
	@Enumerated(EnumType.STRING)
	@Column(length = 50)
	private Status status;
	
	@Column(name="payment_status")
	private boolean paymnetStatus;

	
	public enum Status
	{
		ASSIGNED,DELIVERED
	}


	public GasDelivery(User agentId, Booking bookId, Status status, boolean paymnetStatus) {
		super();
		this.agentId = agentId;
		this.bookId = bookId;
		this.status = status;
		this.paymnetStatus = paymnetStatus;
	}


}
