package com.example.demo.controller;

import org.springframework.web.bind.annotation.GetMapping;

public class WebController {
	@GetMapping(value = "/")
	public String homepage() {
		return "index";
	}
}
