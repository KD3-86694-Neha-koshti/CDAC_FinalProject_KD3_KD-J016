package com.blogs.dto;

import com.blogs.pojos.StockManagement.CylinderType;

import jakarta.persistence.Column;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor
@Getter
@Setter
@ToString(callSuper = true)
public class StockReqDto  extends BaseDto
{
	private Long stock;
	private CylinderType cylinderType;
}
