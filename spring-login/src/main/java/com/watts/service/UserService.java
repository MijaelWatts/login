package com.watts.service;

import com.watts.user.service.LoginResponse;

public interface UserService {

	LoginResponse userAndPassFiltering(String user, String pass);

}