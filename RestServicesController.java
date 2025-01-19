package com.spring.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.spring.model.Services;
import com.spring.repo.ServiceRepo;
@CrossOrigin("*")
@RestController
public class RestServicesController {

	
	@Autowired
	ServiceRepo repo;
	
	@GetMapping("/Services")
	public List<Services> services(){
		System.out.println(repo.findAll());
		return repo.findAll();
		
		
	}
    @PostMapping("/Services")
    public String addServices(@RequestBody Services services) {
    	System.out.println(services);
    	repo.save(services);
		return "product";
    	
    	}
    
    @DeleteMapping("/Services/{id}")
    public boolean deleteServices(@PathVariable("id") int id) {
    	System.out.println("dlete product b y id:" +id);
    	repo.deleteById(id);
    	
		return true;
    	
    }
    @PutMapping("/Services")
    public void updateServices(@RequestBody Services product) {
    	System.out.println("update product :" +product);
    	repo.save(product);
    	
    }
}
	
	

