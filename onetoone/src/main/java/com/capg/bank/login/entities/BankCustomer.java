package com.capg.bank.login.entities;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="customer_info")
public class BankCustomer {

		@Id
		private int customerId;
		
		private String customername;
		
		@OneToOne(cascade=CascadeType.ALL)
		@JoinColumn(name="address_id")
		private Address address;

		public int getCustomerId() {
			return customerId;
		}

		public void setCustomerId(int customerId) {
			this.customerId = customerId;
		}

		public String getCustomername() {
			return customername;
		}

		public void setCustomername(String customername) {
			this.customername = customername;
		}

		public Address getAddress() {
			return address;
		}

		public void setAddress(Address address) {
			this.address = address;
		}
		
	}
