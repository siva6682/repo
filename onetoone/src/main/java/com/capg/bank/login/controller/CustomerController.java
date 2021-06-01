package com.capg.bank.login.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.capg.bank.login.entities.BankCustomer;
import com.capg.bank.login.service.ICustomerService;



@RestController
@RequestMapping("/api/cus")
public class CustomerController {
	@Autowired
	ICustomerService service;
	
	
	@PostMapping(value="/add",consumes = {"application/json"},produces = {"application/json"})
	public BankCustomer  addcustomer(@RequestBody BankCustomer cus) {
	
		return service.addcustomer(cus);
	}
	@PutMapping(value="/update")
	public BankCustomer  updatecustomer(@RequestBody BankCustomer cus) {
		
		return service.updatecustomer(cus);
	
	}
	@GetMapping(value = "/get/{customerId}",consumes = {"application/json"},produces = {"application/json"})
	public BankCustomer  findcustomerById(@PathVariable int customerId) {
		return service.getcustomerById(customerId);
	}
	@DeleteMapping("/delete/{customerId}")
	public ResponseEntity<String>  deletecustomerById(@PathVariable int customerId) {
			service.deletecustomerById(customerId);
			return new ResponseEntity<String>("customer Deleted", HttpStatus.OK);
	}
}