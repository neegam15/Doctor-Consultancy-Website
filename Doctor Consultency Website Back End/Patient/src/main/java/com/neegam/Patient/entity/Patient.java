package com.neegam.Patient.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Patient{
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long patientId;
	
	@Column(name = "PATIENT_NAME")
	private String fullname;
	
	@Column(name = "EMAIL")
	private String email;
	
	@Column(name = "PHONE_NUMBER")
	private String phone;
	
	@Column(name = "AGE")
	private String age;
	
	@Column(name = "DAY")
	private String day;
	
	@Column(name = "GENDER")
	private String gender;
	
	

}