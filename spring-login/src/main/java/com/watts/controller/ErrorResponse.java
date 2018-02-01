package com.watts.controller;

public class ErrorResponse {

	private String errorMessage;
	
	public ErrorResponse(String errMessage) {
		this.errorMessage = errMessage;
	}

	public String getErrorMessage() {
		return errorMessage;
	}

	public void setErrorMessage(String errorMessage) {
		this.errorMessage = errorMessage;
	}
	
}
