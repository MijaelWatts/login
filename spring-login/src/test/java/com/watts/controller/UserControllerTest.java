package com.watts.controller;

import static org.junit.Assert.assertEquals;
import static org.mockito.Matchers.any;
import static org.mockito.Mockito.when;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.runners.MockitoJUnitRunner;

import com.watts.service.UserServiceImpl;
import com.watts.user.service.LoginRequest;
import com.watts.user.service.LoginResponse;

@RunWith(MockitoJUnitRunner.class)
//@RunWith(SpringJUnit4ClassRunner.class)
//@WebAppConfiguration
public class UserControllerTest {
	
	@InjectMocks private UserController userController;
	
	@Mock private UserServiceImpl userService;
	
//	private MockMvc mockMvc;
	
	private final static String USER = "W@tts";
	private final static String PASS = "(takeUrT1me)";
	private final static String FIRST_NAME = "Mijael";
	private final static String LAST_NAME = "Watts";	
	
	/*
	@Before
	public void setUp() {
//		mockMvc = MockMvcBuilders.standaloneSetup(userController).setControllerAdvice(new ErrorController()).build();
		MockitoAnnotations.initMocks(this);
		
		mockMvc = MockMvcBuilders.standaloneSetup(userController).build();
	}*/
	
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
	
	/*
	@Test
	public void validateBlankCredentialsErrorWhenCredentialsAreBlank2() throws Exception {
		String USER_REQUEST = "{\"user\" : \"\", \"password\" : \"\"}";
//		LoginRequest loginRequest = new LoginRequest(USER, PASS);

//		when(userController.signIn(loginRequest)).thenThrow(IllegalArgumentException.class);
		
//		MediaType APPLICATION_JSON_UTF8 = new MediaType(
//				MediaType.APPLICATION_JSON.getType(),
//				MediaType.APPLICATION_JSON.getSubtype(), Charset.forName("utf8"));
		
		mockMvc.perform(post("/signIn")
				.contentType(MediaType.APPLICATION_JSON)
				.content(USER_REQUEST))
			.andExpect((ResultMatcher) jsonPath("$errorMessage", is("UserAnd Pass")));
	}
	*/
	
	private LoginResponse createCorrectReturnedObject() {
		LoginResponse user = new LoginResponse();
		
		user.setFirstName(FIRST_NAME);
		user.setLastName(LAST_NAME);
		
		return user;
	}

}