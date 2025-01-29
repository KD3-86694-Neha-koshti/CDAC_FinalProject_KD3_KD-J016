package com.blogs.service;

import java.util.List;
import java.util.Locale.Category;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.blogs.custome_exception.ResourceNotFoundException;
import com.blogs.dao.BookingDao;
import com.blogs.dao.GasDeleveryDao;
import com.blogs.dao.UserDao;
import com.blogs.dto.ApiResponse;
import com.blogs.dto.BookingReqDto;
import com.blogs.dto.BookingRespDto;
import com.blogs.dto.UserDto;
import com.blogs.dto.UserRespDto;
import com.blogs.pojos.Booking;
import com.blogs.pojos.GasDelivery;
import com.blogs.pojos.User;
import com.blogs.pojos.User.UserRole;

@Service
@Transactional
public class BookingServiceImpl implements BookingService{

	@Autowired
	private BookingDao bookingDao;
	
	@Autowired
	private UserDao userDao;
	
	@Autowired
	private ModelMapper modelMapper;
	
	@Override
	public ApiResponse addBookInfo(BookingReqDto bookReqDto) {
		
		User customer=userDao.findById(bookReqDto.getUserID())
				.orElseThrow(()->new ResourceNotFoundException("User id invalid"));
		
		if(customer.getRole()==UserRole.CUSTOMER)
		{
			Booking bookingEntity=modelMapper.map(bookReqDto, Booking.class);
			
			customer.addBookingGas(bookingEntity);
			bookingEntity.setUserID(customer);
			bookingEntity.setPaymentStatus(true);
			//bookingDao.save(bookReqDto);
			return new ApiResponse("Gas Booking Successfully added");
		}
		return new ApiResponse("You login with customer ");
	}

	@Override
	public List<BookingRespDto> getAllBooking() {
		
		return bookingDao.findAll()
				.stream()
				.map(booking->modelMapper.map(booking, BookingRespDto.class))
				.collect(Collectors.toList());
	}


}
