package com.spring.model;

import jakarta.persistence.Embeddable;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Embeddable
public class PayMode {
	
private int cardNumber;
private int expiryDate;
private int cvv;
public int getCardNumber() {
	return cardNumber;
}
public void setCardNumber(int cardNumber) {
	this.cardNumber = cardNumber;
}
public int getExpiryDate() {
	return expiryDate;
}
public void setExpiryDate(int expiryDate) {
	this.expiryDate = expiryDate;
}
public int getCvv() {
	return cvv;
}
public void setCvv(int cvv) {
	this.cvv = cvv;
}
public PayMode(int cardNumber, int expiryDate, int cvv) {
	super();
	this.cardNumber = cardNumber;
	this.expiryDate = expiryDate;
	this.cvv = cvv;
}
public PayMode() {
	super();
	// TODO Auto-generated constructor stub
}
@Override
public String toString() {
	return "PayMode [cardNumber=" + cardNumber + ", expiryDate=" + expiryDate + ", cvv=" + cvv + "]";
}

}
