package com.spring.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Booking {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long booking_Id;
	private String userName;
	 private String customerName;
	 private int pinCode;
	 private String area;
	 private long phoneNumber;
	 private int totalPrice;
	 private int count;
	 private int serviceId;
	 private String serviceName;
	 private int servicPrice;
	 @Column(length = 700)
	 private String serviceImage;
	 private String serviceDescription;
	private String serviceCategory;
	@Override
	public String toString() {
		return "Booking [booking_Id=" + booking_Id + ", userName=" + userName + ", customerName=" + customerName
				+ ", pinCode=" + pinCode + ", area=" + area + ", phoneNumber=" + phoneNumber + ", totalPrice="
				+ totalPrice + ", count=" + count + ", serviceId=" + serviceId + ", serviceName=" + serviceName
				+ ", servicPrice=" + servicPrice + ", serviceImage=" + serviceImage + ", serviceDescription="
				+ serviceDescription + ", serviceCategory=" + serviceCategory + "]";
	}
	public int getBooking_Id() {
		return (int) booking_Id;
	}
	public void setBooking_Id(int booking_Id) {
		this.booking_Id = booking_Id;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getCustomerName() {
		return customerName;
	}
	public void setCustomerName(String customerName) {
		this.customerName = customerName;
	}
	public int getPinCode() {
		return pinCode;
	}
	public void setPinCode(int pinCode) {
		this.pinCode = pinCode;
	}
	public String getArea() {
		return area;
	}
	public void setArea(String area) {
		this.area = area;
	}
	public long getPhoneNumber() {
		return phoneNumber;
	}
	public void setPhoneNumber(long phoneNumber) {
		this.phoneNumber = phoneNumber;
	}
	public int getTotalPrice() {
		return totalPrice;
	}
	public void setTotalPrice(int totalPrice) {
		this.totalPrice = totalPrice;
	}
	public int getCount() {
		return count;
	}
	public void setCount(int count) {
		this.count = count;
	}
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
	public int getServicPrice() {
		return servicPrice;
	}
	public void setServicPrice(int servicPrice) {
		this.servicPrice = servicPrice;
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
	public Booking(int booking_Id, String userName, String customerName, int pinCode, String area, long phoneNumber,
			int totalPrice, int count, int serviceId, String serviceName, int servicPrice, String serviceImage,
			String serviceDescription, String serviceCategory) {
		super();
		this.booking_Id = booking_Id;
		this.userName = userName;
		this.customerName = customerName;
		this.pinCode = pinCode;
		this.area = area;
		this.phoneNumber = phoneNumber;
		this.totalPrice = totalPrice;
		this.count = count;
		this.serviceId = serviceId;
		this.serviceName = serviceName;
		this.servicPrice = servicPrice;
		this.serviceImage = serviceImage;
		this.serviceDescription = serviceDescription;
		this.serviceCategory = serviceCategory;
	}
	public Booking() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
}