package com.watts.repository;

import com.watts.user.service.LoginResponse;

public interface UserRepository {

	LoginResponse findSpecificUser(String user, String pass);

}