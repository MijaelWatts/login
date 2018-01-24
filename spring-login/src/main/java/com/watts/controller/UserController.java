package com.watts.controller;

import org.apache.commons.lang.StringUtils;
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
	public User credentialsNotBlank(
		@RequestParam(value="user", required=true) String user,
		@RequestParam(value="pass", required=true) String pass
	) {
		boolean userNotBlank = StringUtils.isNotBlank(user);
		boolean passNotBlank = StringUtils.isNotBlank(pass);
		
		if(userNotBlank && passNotBlank) {
			return userService.userAndPassFiltering(user, pass);
		}
		
		return null;
	}

}