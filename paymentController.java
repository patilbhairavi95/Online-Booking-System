package com.spring.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


import com.spring.model.Payment;
import com.spring.repo.PaymentRepo;

@CrossOrigin("*")
@RestController
public class paymentController {
  @Autowired
  PaymentRepo paymentRepo;
	
	@GetMapping("/Payment/{userName}")
	public List<Payment> payment(@PathVariable("userName") String userName){
		System.out.println(userName);
		System.out.println(paymentRepo.findByUserName(userName));
		return paymentRepo.findByUserName(userName);
		
}
	 @PostMapping("/Payment")
	    public String addpayment(@RequestBody Payment payment) {
	    	System.out.println(payment);
	    	paymentRepo.save(payment);
			return "Payment";
	    	
	    	}
}
