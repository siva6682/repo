package com.capg.bank.login.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToOne;

@Entity
public class Address {

		@Id
		@Column(name="ADDRESS_ID")
		private int addressId;
		@Column(name="ADDRESS_STREET")
		private String street;
		@Column(name="ADDRESS_CITY")
		private String city;
		@Column(name="ADDRESS_STATE")
		private String state;
		@Column(name="ADDRESS_ZIPCODE")
		private String zipCode;
		
		@OneToOne(mappedBy="address")
		private BankCustomer customer;

		public BankCustomer getCustomer() {
			return customer;
		}
		public void setCustomer(BankCustomer customer) {
			this.customer = customer;
		}
		public int getAddressId() {
			return addressId;
		}
		public void setAddressId(int addressId) {
			this.addressId = addressId;
		}
		public String getStreet() {
			return street;
		}
		public void setStreet(String street) {
			this.street = street;
		}
		public String getCity() {
			return city;
		}
		public void setCity(String city) {
			this.city = city;
		}
		public String getState() {
			return state;
		}
		public void setState(String state) {
			this.state = state;
		}
		public String getZipCode() {
			return zipCode;
		}
		public void setZipCode(String zipCode) {
			this.zipCode = zipCode;
		}
		
		
	}

