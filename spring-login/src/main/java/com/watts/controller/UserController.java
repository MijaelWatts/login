package com.watts.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.watts.repository.User;
import com.watts.service.UserService;

@RestController
public class UserController {
	
	private UserService userService;
	
	public UserController(UserService userService) {
		this.userService = userService;
	}
	
	@RequestMapping("/signIn")
	public User userPassController(@RequestParam(value="user") String user, @RequestParam(value="pass") String pass) {
		// Do validations...
		
		return userService.userAndPassFiltering(user, pass);
	}

}
