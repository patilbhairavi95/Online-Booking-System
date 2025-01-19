package com.spring.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Services {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int serviceId;
	private  String  serviceName;
	private  int servicePrice;
	@Column(length = 700)
	private String serviceImage;
	private String serviceDescription;
	private String serviceCategory;
	public int getServiceId() {
		return serviceId;
	}
	public void setServiceId(int serviceId) {
		this.serviceId = serviceId;
	}
	public String getServiceName() {
		return serviceName;
	}
	public void setServiceName(String serviceName) {
		this.serviceName = serviceName;
	}
	public int getServicePrice() {
		return servicePrice;
	}
	public void setServicePrice(int servicePrice) {
		this.servicePrice = servicePrice;
	}
	public String getServiceImage() {
		return serviceImage;
	}
	public void setServiceImage(String serviceImage) {
		this.serviceImage = serviceImage;
	}
	public String getServiceDescription() {
		return serviceDescription;
	}
	public void setServiceDescription(String serviceDescription) {
		this.serviceDescription = serviceDescription;
	}
	public String getServiceCategory() {
		return serviceCategory;
	}
	public void setServiceCategory(String serviceCategory) {
		this.serviceCategory = serviceCategory;
	}
	public Services(int serviceId, String serviceName, int servicePrice, String serviceImage, String serviceDescription,
			String serviceCategory) {
		super();
		this.serviceId = serviceId;
		this.serviceName = serviceName;
		this.servicePrice = servicePrice;
		this.serviceImage = serviceImage;
		this.serviceDescription = serviceDescription;
		this.serviceCategory = serviceCategory;
	}
	public Services() {
		super();
		// TODO Auto-generated constructor stub
	}
	@Override
	public String toString() {
		return "Services [serviceId=" + serviceId + ", serviceName=" + serviceName + ", servicePrice=" + servicePrice
				+ ", serviceImage=" + serviceImage + ", serviceDescription=" + serviceDescription + ", serviceCategory="
				+ serviceCategory + "]";
	}
	
}
