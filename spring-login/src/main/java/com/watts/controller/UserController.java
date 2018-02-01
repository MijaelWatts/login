package com.watts.controller;

import org.apache.commons.lang.StringUtils;
import org.springframework.util.Assert;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.watts.service.UserService;
import com.watts.user.service.LoginRequest;
import com.watts.user.service.LoginResponse;

@RestController
public class UserController {
	
	private UserService userService;
	
	public UserController(UserService userService) {
		this.userService = userService;
	}
	
	@RequestMapping(value = "/signIn", method = RequestMethod.POST)
	public LoginResponse signIn(@RequestBody LoginRequest login) {		
		Assert.isTrue(StringUtils.isNotBlank(login.getUser()), "User must not be blank.");
		Assert.isTrue(StringUtils.isNotBlank(login.getPassword()), "Password must not be blank.");
		
		
		return userService.userAndPassFiltering(login.getUser(), login.getPassword());
	}

}