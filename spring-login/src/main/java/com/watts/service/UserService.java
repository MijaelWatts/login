package com.watts.service;

import com.watts.repository.User;

public interface UserService {

	User userAndPassFiltering(String user, String pass);

}