package com.spring.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.spring.model.Services;

public interface ServiceRepo extends JpaRepository<Services, Integer> {
	@Query("from Services where serviceCategory=?1")
	List<Services> findByserviceCategory(String serviceCategory);

}
