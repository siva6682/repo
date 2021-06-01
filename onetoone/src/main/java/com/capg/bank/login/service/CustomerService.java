package com.capg.bank.login.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.capg.bank.login.entities.BankCustomer;
import com.capg.bank.login.repository.CustomerRepository;

@Service
public class CustomerService implements ICustomerService {
	@Autowired
	CustomerRepository repo;

	@Override
	public BankCustomer addcustomer(BankCustomer cus) {
		// TODO Auto-generated method stub
		return repo.save(cus);
	}

	@Override
	public BankCustomer updatecustomer(BankCustomer cus) {
		// TODO Auto-generated method stub
		return repo.save(cus);
	}

	@Override
	public BankCustomer getcustomerById(int customerId) {
		// TODO Auto-generated method stub
		return repo.findById(customerId).orElse(new BankCustomer());
	}

	@Override
	public void deletecustomerById(int customerId) {
		// TODO Auto-generated method stub
		 repo.deleteById(customerId);
		
	}

}
