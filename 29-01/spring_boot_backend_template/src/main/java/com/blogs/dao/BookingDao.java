package com.blogs.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.blogs.pojos.Booking;

public interface BookingDao extends JpaRepository<Booking, Long>{

}
