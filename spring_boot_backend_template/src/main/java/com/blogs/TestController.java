package com.blogs;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/test")
public class TestController {

	public TestController()
	{
		System.out.println("Test controller"+getClass());
	}
	
	@GetMapping
	public List<Integer> testMe()
	{
		return List.of(1,2,3);
	}
}
