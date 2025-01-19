package com.spring.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.spring.model.Payment;

public interface PaymentRepo extends JpaRepository<Payment, Integer> {
	@Query("from Booking where  userName=?1 ")
	List<Payment> findByUserName(String userName);
	}
