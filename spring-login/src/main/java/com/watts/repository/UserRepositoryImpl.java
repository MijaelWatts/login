package com.watts.repository;

public class UserRepositoryImpl implements UserRepository {	
	
	private User userInstance = new User();
	
	/* (non-Javadoc)
	 * @see com.watts.repository.UserRepository#findSpecificUser(java.lang.String, java.lang.String)
	 */
	public User findSpecificUser(String user, String pass){
		//Query to DB
		
		userInstance.setFirstName(user);
		userInstance.setLastName(pass);
		
		return userInstance;
	}

}
