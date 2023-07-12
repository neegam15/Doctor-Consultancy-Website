package com.neegam.Patient.model;

import lombok.Data;

@Data
public class PatientRequest{
	
	private String fullname;
	private String email;
	private String phone;
	private String age;
	private String day;
	private String gender;
	
}