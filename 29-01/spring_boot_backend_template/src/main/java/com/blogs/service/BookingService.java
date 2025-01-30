package com.blogs.service;

import java.util.List;

import com.blogs.dto.ApiResponse;
import com.blogs.dto.BookingReqDto;
import com.blogs.dto.BookingRespDto;

public interface BookingService {

	ApiResponse addBookInfo(BookingReqDto bookReqDto);
	List<BookingRespDto> getAllBooking();
}
