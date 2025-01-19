package com.spring.model;

import jakarta.persistence.Embedded;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Payment {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int paymentId;
  private int serviceId;
  private long booking_Id;
  private int totalPrice;
  private String customerName;
  private String userName;
  private String cashOndelivery;
 @Embedded
  private PayMode payMode;
public int getServiceId() {
	return serviceId;
}
public void setServiceId(int serviceId) {
	this.serviceId = serviceId;
}
public long getBooking_Id() {
	return booking_Id;
}
public void setBooking_Id(long booking_Id) {
	this.booking_Id = booking_Id;
}
public int getTotalPrice() {
	return totalPrice;
}
public void setTotalPrice(int totalPrice) {
	this.totalPrice = totalPrice;
}
public String getCustomerName() {
	return customerName;
}
public void setCustomerName(String customerName) {
	this.customerName = customerName;
}
public String getUserName() {
	return userName;
}
public void setUserName(String userName) {
	this.userName = userName;
}
public String getCashOndelivery() {
	return cashOndelivery;
}
public void setCashOndelivery(String cashOndelivery) {
	this.cashOndelivery = cashOndelivery;
}
public PayMode getPayMode() {
	return payMode;
}
public void setPayMode(PayMode payMode) {
	this.payMode = payMode;
}
public Payment(int serviceId, long booking_Id, int totalPrice, String customerName, String userName,
		String cashOndelivery, PayMode payMode) {
	super();
	this.serviceId = serviceId;
	this.booking_Id = booking_Id;
	this.totalPrice = totalPrice;
	this.customerName = customerName;
	this.userName = userName;
	this.cashOndelivery = cashOndelivery;
	this.payMode = payMode;
}
public Payment() {
	super();
	// TODO Auto-generated constructor stub
}
@Override
public String toString() {
	return "Payment [serviceId=" + serviceId + ", booking_Id=" + booking_Id + ", totalPrice=" + totalPrice
			+ ", customerName=" + customerName + ", userName=" + userName + ", cashOndelivery=" + cashOndelivery
			+ ", payMode=" + payMode + "]";
}
  
}
