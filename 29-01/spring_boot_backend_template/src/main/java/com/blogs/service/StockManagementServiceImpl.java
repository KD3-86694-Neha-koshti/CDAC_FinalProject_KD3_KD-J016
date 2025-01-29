package com.blogs.service;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.blogs.dao.StockManagementDao;
import com.blogs.dto.ApiResponse;
import com.blogs.dto.StockReqDto;
import com.blogs.dto.StockRespDto;
import com.blogs.pojos.StockManagement;

@Service
@Transactional
public class StockManagementServiceImpl implements StockManagementService
{
	@Autowired
	private StockManagementDao stockDao;
	
	@Autowired
	private ModelMapper mapper;

	public StockManagementServiceImpl() {
		System.out.println("In service stock impl"+getClass());
	}
	
	@Override
	public ApiResponse addStock(StockReqDto stock) 
	{
		StockManagement stockEntity=mapper.map(stock, StockManagement.class);
		StockManagement persistentStock=stockDao.save(stockEntity);
		return new ApiResponse("Stock added with id "+persistentStock.getId());
	}

	@Override
	public List<StockRespDto> getAllStock() {
		
		return stockDao.findAll()
				.stream()
				.map(stock->mapper.map(stock, StockRespDto.class))
				.collect(Collectors.toList());
	}
	
	
}
