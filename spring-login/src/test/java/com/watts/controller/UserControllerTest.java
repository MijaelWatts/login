package com.watts.controller;

import static org.junit.Assert.assertEquals;
import static org.mockito.Matchers.any;
import static org.mockito.Mockito.when;

import org.junit.Ignore;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.runners.MockitoJUnitRunner;

import com.watts.controller.UserController;
import com.watts.repository.User;
import com.watts.service.UserServiceImpl;

@RunWith(MockitoJUnitRunner.class)
public class UserControllerTest {
	
	@InjectMocks private UserController userController;
	@Mock private UserServiceImpl userService;
	
	private final static String USER = "W@tts";
	private final static String PASS = "(takeUrT1me)";
	private final static String FIRST_NAME = "Mijael";
	private final static String LAST_NAME = "Watts";	
	
	@Test public void validateCorrectResponseWhenCredentialsNotBlank() {
		when(userService.userAndPassFiltering(any(String.class), any(String.class))).thenReturn(createCorrectReturnedObject());
		
		User user = userController.credentialsNotBlank(USER, PASS);
		
		assertEquals(FIRST_NAME, user.getFirstName());
		assertEquals(LAST_NAME, user.getLastName());
	}
	
	@Ignore public void validateBlankCredentialsErrorWhenCredentialsAreBlank() {}
	
	@Ignore public void validateBlankUserErrorWhenUserIsBlank() {}
	
	@Ignore public void validateBlankPasswordErrorWhenPasswordIsBlank() {}
	
	@Ignore public void validateWrongCredentialsErrorWhenCredentialsAreWrong() {}
	
	private User createCorrectReturnedObject() {
		User user = new User();
		
		user.setFirstName(FIRST_NAME);
		user.setLastName(LAST_NAME);
		
		return user;
	}

}
