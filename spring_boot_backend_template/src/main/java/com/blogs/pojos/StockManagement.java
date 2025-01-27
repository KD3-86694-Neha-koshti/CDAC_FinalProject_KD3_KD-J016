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
@Table(name="stock")
@Getter
@Setter
@NoArgsConstructor
@ToString(callSuper = true)
public class StockManagement extends BaseEntity
{
	@Column(length = 5)
	private Long stock;
	
	@Enumerated(EnumType.STRING)
	@Column(length = 40)
	private CylinderType cylinderType;
	
//	@OneToMany(mappedBy = "stock",cascade = CascadeType.ALL)
//	private List<GasDelivery> order;
	
	public enum CylinderType
	{
		DOMASTIC,COMMERCIAL
	}

	public StockManagement(Long stock, CylinderType cylinderType, List<GasDelivery> order) {
		super();
		this.stock = stock;
		this.cylinderType = cylinderType;
		//this.order = order;
	}



}
