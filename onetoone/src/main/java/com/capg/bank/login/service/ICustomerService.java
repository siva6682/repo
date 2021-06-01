package com.capg.bank.login.service;

import com.capg.bank.login.entities.BankCustomer;

public interface ICustomerService {
	
    public BankCustomer  addcustomer(BankCustomer cus); 
	
	public  BankCustomer updatecustomer(BankCustomer cus); 
	
	public BankCustomer  getcustomerById(int customerId);
	
	public void   deletecustomerById(int customerId);

}
