package com.watts.repository;

public interface UserRepository {

	User findSpecificUser(String user, String pass);

}