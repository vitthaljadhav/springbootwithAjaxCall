package com.example.demo.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Customer;
import com.example.demo.model.Response;

@RestController
@RequestMapping("/api/customer")
public class RestWebController {
 
  List<Customer> cust = new ArrayList<Customer>();
 
  @GetMapping(value = "/all")
  public Response getResource() {
    Response response = new Response("Done", cust);
    return response;
  }
 
  @PostMapping(value = "/save")
  public Response postCustomer(@RequestBody Customer customer) {
    cust.add(customer);
    
    // Create Response Object
    Response response = new Response("Done", customer);
    return response;
  }
  @GetMapping("/getAllFirstNameList.htm")
  public List<String> getListFirstName(){
	  List<String> flist=new ArrayList<>();
	  for (Customer customer : cust) {
		flist.add(customer.getFirstname());
	}
	  return flist;
  }
}
