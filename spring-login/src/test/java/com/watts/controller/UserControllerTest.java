package com.watts.controller;

import static org.junit.Assert.assertEquals;
import static org.mockito.Matchers.any;
import static org.mockito.Mockito.when;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.runners.MockitoJUnitRunner;

import com.watts.controller.UserController;
import com.watts.service.UserServiceImpl;
import com.watts.user.service.LoginRequest;
import com.watts.user.service.LoginResponse;

@RunWith(MockitoJUnitRunner.class)
public class UserControllerTest {
	
	@InjectMocks private UserController userController;
	
	@Mock private UserServiceImpl userService;
//	private MockMvc mvc;
	
	private final static String USER = "W@tts";
	private final static String PASS = "(takeUrT1me)";
	private final static String FIRST_NAME = "Mijael";
	private final static String LAST_NAME = "Watts";	
	
//	@Before
//	public void setUp() {
//		mvc = MockMvcBuilders.standaloneSetup(userController).setControllerAdvice(new ErrorController()).build();
//	}
	
	@Test 
	public void validateCorrectResponseWhenCredentialsNotBlank() {
		LoginRequest login = new LoginRequest(USER, PASS);
		
		when(userService.userAndPassFiltering(any(String.class), any(String.class))).thenReturn(createCorrectReturnedObject());
		
		LoginResponse user =  (LoginResponse) userController.signIn(login);
		
		assertEquals(FIRST_NAME, user.getFirstName());
		assertEquals(LAST_NAME, user.getLastName());
	}
	
	@Test(expected=IllegalArgumentException.class) 
	public void throwIllegalArgumentExceptionWhenCredentialsAreBlank() {
		LoginRequest login = new LoginRequest("", "");
		userController.signIn(login);
	}
	
	@Test(expected=IllegalArgumentException.class) 
	public void throwIllegalArgumentExceptionWhenUserIsBlank() {
		LoginRequest login = new LoginRequest("", PASS);
		userController.signIn(login);
	}

	@Test(expected=IllegalArgumentException.class) 
	public void throwIllegalArgumentExceptionWhenPasswordIsBlank() {
		LoginRequest login = new LoginRequest(USER, "");
		userController.signIn(login);
	}
	
//	@Test(expected=IllegalArgumentException.class) 
//	public void validateBlankCredentialsErrorWhenCredentialsAreBlank2() {
//		LoginRequest login = new LoginRequest();
//		login.setUser("");
//		login.setPassword("");
//		
//	}
	
	private LoginResponse createCorrectReturnedObject() {
		LoginResponse user = new LoginResponse();
		
		user.setFirstName(FIRST_NAME);
		user.setLastName(LAST_NAME);
		
		return user;
	}

}