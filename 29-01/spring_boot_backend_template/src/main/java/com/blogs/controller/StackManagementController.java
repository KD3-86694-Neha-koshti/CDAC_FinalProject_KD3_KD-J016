package com.blogs.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.blogs.dto.StockReqDto;
import com.blogs.dto.StockRespDto;
import com.blogs.service.StockManagementService;

@RestController
@RequestMapping("/stock")
public class StackManagementController 
{
	@Autowired
	private StockManagementService stockManagementService;
	
	public StackManagementController() {
		System.out.println("stockManagement controller "+getClass());
	}
	
	@PostMapping
	public ResponseEntity<?> addStockMagnt(@RequestBody StockReqDto stockRequestDto)
	{
		System.out.println("In poost add stock management "+stockRequestDto);
		return ResponseEntity.status(HttpStatus.CREATED)
				.body(stockManagementService.addStock(stockRequestDto));
				
	}
	
	@GetMapping
	public ResponseEntity<?> getStockList()
	{
		System.out.println("get stock list ");
		List<StockRespDto> stockList=stockManagementService.getAllStock();
		if(stockList.isEmpty())
			return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
		return ResponseEntity.ok(stockList);
	}
}
