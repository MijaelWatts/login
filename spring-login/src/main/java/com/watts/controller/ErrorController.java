package com.watts.controller;

import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class ErrorController {

	@ExceptionHandler(IllegalArgumentException.class)
	public ErrorResponse nullArguments(IllegalArgumentException ex) {
		ErrorResponse error = new ErrorResponse(ex.getMessage());
		
		return error;
	}
	
}
