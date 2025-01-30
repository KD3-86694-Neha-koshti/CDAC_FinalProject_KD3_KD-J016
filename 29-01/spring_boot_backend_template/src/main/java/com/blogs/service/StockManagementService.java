package com.blogs.service;

import java.util.List;

import com.blogs.dto.ApiResponse;
import com.blogs.dto.StockReqDto;
import com.blogs.dto.StockRespDto;

public interface StockManagementService 
{
	ApiResponse addStock(StockReqDto stock);
	List<StockRespDto> getAllStock();
}
