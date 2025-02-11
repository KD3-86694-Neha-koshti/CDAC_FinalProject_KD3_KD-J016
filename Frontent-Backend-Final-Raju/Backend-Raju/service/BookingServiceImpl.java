package com.blogs.service;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.blogs.custome_exception.ResourceNotFoundException;
import com.blogs.dao.BookingDao;
import com.blogs.dao.UserDao;
import com.blogs.dto.ApiResponse;
import com.blogs.dto.BookingReqDto;
import com.blogs.dto.BookingRespDto;
import com.blogs.pojos.Booking;
import com.blogs.pojos.Booking.Status;
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
	    // ✅ Fetch user from database
	    User customer = userDao.findById(bookReqDto.getUserID())
	            .orElseThrow(() -> new ResourceNotFoundException("User ID invalid"));

	    if (customer.getRole() == UserRole.CUSTOMER) {
	        // ✅ Convert DTO to Entity
	        Booking bookingEntity = modelMapper.map(bookReqDto, Booking.class);

	        // ✅ Set relationships and status
	        customer.addBookingGas(bookingEntity);
	        bookingEntity.setUserID(customer);
	        bookingEntity.setCustomerName(bookReqDto.getCustomerName()); // ✅ Save Customer Name
	        bookingEntity.setPaymentStatus(bookReqDto.getPaymentStatus()); // ✅ Store payment method
	        bookingEntity.setStatus(Status.PENDING); // ✅ Ensure status is PENDING

	        // ✅ Save booking in database
	        bookingDao.save(bookingEntity);

	        return new ApiResponse("✅ Gas Booking Successfully added!");
	    }

	    return new ApiResponse("❌ Error: User must be a CUSTOMER to book.");
	}

	@Override
	public List<BookingRespDto> getAllBooking() {
	    return bookingDao.findAll()
	        .stream()
	        .map(booking -> {
	            BookingRespDto dto = new BookingRespDto();  
	            dto.setId(booking.getId()); // ✅ Set the booking ID manually
	            dto.setUserID(booking.getUserID().getId()); // ✅ Set the user ID correctly
	            dto.setCustomerName(booking.getCustomerName()); 
	            dto.setCylinderType(booking.getCylinderType()); 
	            dto.setPaymentStatus(booking.getPaymentStatus()); 
	            dto.setStatus(booking.getStatus()); 
	            return dto;
	        })
	        .collect(Collectors.toList());
	}
	
	// ✅ Update booking status
    @Override
    public ApiResponse updateBookingStatus(Long id, String status) {
        Booking booking = bookingDao.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Booking ID not found"));

        try {
            Booking.Status newStatus = Booking.Status.valueOf(status.toUpperCase()); // ✅ Convert to ENUM
            booking.setStatus(newStatus);
            bookingDao.save(booking);
            return new ApiResponse("✅ Booking status updated to " + newStatus);
        } catch (IllegalArgumentException e) {
            throw new IllegalArgumentException("❌ Invalid status. Allowed: PENDING, CONFIRM, DELIVERED");
        }
    }
    
 // ✅ Get Bookings By User ID
    @Override
    public List<BookingRespDto> getBookingsByUserId(Long userId) {
        List<Booking> bookings = bookingDao.findByUserID_Id(userId); // ✅ Fetch by userID
        
        return bookings.stream()
            .map(booking -> {
                BookingRespDto dto = new BookingRespDto(); // ✅ Use manual mapping
                dto.setId(booking.getId()); // ✅ Booking ID
                dto.setUserID(booking.getUserID().getId()); // ✅ Explicitly setting userID (Long)
                dto.setCustomerName(booking.getCustomerName()); 
                dto.setPaymentStatus(booking.getPaymentStatus());
                dto.setStatus(booking.getStatus());
                dto.setCylinderType(booking.getCylinderType());
                return dto;
            })
            .collect(Collectors.toList());
    }    
}
