package com.watts.repository;

import org.springframework.stereotype.Repository;

import com.watts.user.service.LoginResponse;

@Repository
public class UserRepositoryImpl implements UserRepository {	
	
	private LoginResponse userInstance = new LoginResponse();
	
	/* (non-Javadoc)
	 * @see com.watts.repository.UserRepository#findSpecificUser(java.lang.String, java.lang.String)
	 */
	public LoginResponse findSpecificUser(String user, String pass){
		//Query to DB
		
		userInstance.setFirstName(user);
		userInstance.setLastName(pass);
		
		return userInstance;
	}

}
