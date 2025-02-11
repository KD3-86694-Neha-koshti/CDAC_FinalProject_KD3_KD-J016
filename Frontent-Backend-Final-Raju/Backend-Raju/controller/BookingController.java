package com.blogs.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.blogs.dto.BookingReqDto;
import com.blogs.dto.BookingRespDto;
import com.blogs.service.BookingService;

@RestController
@RequestMapping("/booking")
public class BookingController 
{

	@Autowired 
	private BookingService bookingService;
	
	public BookingController() {
		System.out.println("booking controller "+getClass());
	}
	
	@PostMapping
	public ResponseEntity<?> addBookingGas(@RequestBody BookingReqDto bookingDto)
	{
		System.out.println("add booking gas");
		return ResponseEntity.status(HttpStatus.CREATED)
				.body(bookingService.addBookInfo(bookingDto));
	}
	
	@GetMapping
	public ResponseEntity<?> getAllBookingList()
	{
		List<BookingRespDto> bookingList=bookingService.getAllBooking();
		if(bookingList.isEmpty())
			return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
		return ResponseEntity.ok(bookingList);
	}
	
	@PatchMapping("/update-status/{id}")
    public ResponseEntity<?> updateBookingStatus(@PathVariable Long id, @RequestParam String status) {
        try {
            return ResponseEntity.ok(bookingService.updateBookingStatus(id, status));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }
	
	// ✅ Get Bookings By User ID
		@GetMapping("/user/{userId}")
		public ResponseEntity<?> getBookingsByUserId(@PathVariable Long userId) {
			List<BookingRespDto> userBookings = bookingService.getBookingsByUserId(userId);
			if (userBookings.isEmpty())
				return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
			return ResponseEntity.ok(userBookings);
		}
}
