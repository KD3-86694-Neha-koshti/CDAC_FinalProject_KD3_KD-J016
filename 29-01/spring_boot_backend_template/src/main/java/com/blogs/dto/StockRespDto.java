package com.blogs.dto;

import com.blogs.pojos.StockManagement.CylinderType;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor
@Getter
@Setter
@ToString(callSuper = true)
public class StockRespDto extends BaseDto{
	private Long stock;
	private CylinderType cylinderType;
}
