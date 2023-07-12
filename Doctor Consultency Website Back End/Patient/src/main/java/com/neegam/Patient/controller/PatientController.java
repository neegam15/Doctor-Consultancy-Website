package com.neegam.Patient.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.neegam.Patient.model.PatientRequest;
import com.neegam.Patient.service.PatientService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("apiPatient")
public class PatientController {
	@Autowired
	private PatientService patientService;
	
	@PostMapping("/addPatient")
	public ResponseEntity<Long> addPatient(@RequestBody PatientRequest patientRequest) {
		long patientId = patientService.addPatient(patientRequest);
		return new ResponseEntity<>(patientId, HttpStatus.CREATED);
	}
}