package com.spring.repo;



import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.spring.model.Booking;




public interface BookingRepo extends JpaRepository<Booking,Integer> {
	@Query("from Booking where  userName=?1 ")
 List<Booking> findByUserName(String userName);
}
