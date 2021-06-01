package com.capg.bank.login.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.capg.bank.login.entities.BankCustomer;

@Repository
public interface CustomerRepository extends JpaRepository<BankCustomer, Integer> {
	

}
