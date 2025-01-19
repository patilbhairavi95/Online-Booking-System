package com.spring.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.spring.model.Booking;
import com.spring.model.Services;
import com.spring.repo.BookingRepo;
@CrossOrigin("*")
@RestController
public class RestBookingController {
	@Autowired
   BookingRepo bookingRepo;
	
	
	@GetMapping("/Booking/{userName}")
	public List<Booking> booking(@PathVariable("userName") String userName){
		System.out.println(userName);
		System.out.println(bookingRepo.findByUserName(userName));
		return bookingRepo.findByUserName(userName);
		
		
	}
    @PostMapping("/Booking")
    public String addBooking(@RequestBody Booking booking) {
    	System.out.println(booking);
    	bookingRepo.save(booking);
		return "Booking";
    	
    	}
    
//	 @GetMapping("/Booking")
//	    public List<Booking> getBookingsByCustomerName(@RequestParam String name) {
//	        System.out.println("Fetching bookings for customer: " + name);
//	        List<Booking> bookings = bookingRepo.findByCustomerName(name);
//	        System.out.println("Bookings found: " + bookings);
//	        return bookings;
//	    }

//	    @PostMapping("/Booking")
//	    public ResponseEntity<String> addBooking(@RequestBody Booking booking) {
//	    	System.out.println(booking);
//	        try {
//	            System.out.println("Received booking: " + booking);
//	            bookingRepo.save(booking);
//	            return ResponseEntity.ok("Booking created successfully");
//	        } catch (Exception e) {
//	            System.err.println("Error saving booking: " + e.getMessage());
//	            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to create booking");
//	        }
//	    }
}
