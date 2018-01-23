package com.watts.service;

import com.watts.repository.User;
import com.watts.repository.UserRepository;

public class UserServiceImpl implements UserService {
	
	private UserRepository userRepository;
	
	public UserServiceImpl(UserRepository userRepository) {
		this.userRepository = userRepository;
	}
	
	/* (non-Javadoc)
	 * @see com.watts.service.UserService#userAndPassFiltering(java.lang.String, java.lang.String)
	 */
	public User userAndPassFiltering(String user, String pass) {
		// Does user and pass are according to filter...
		
		return userRepository.findSpecificUser(user, pass);
	}
	
}
