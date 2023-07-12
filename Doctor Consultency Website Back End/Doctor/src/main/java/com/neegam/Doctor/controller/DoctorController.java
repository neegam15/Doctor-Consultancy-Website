package com.neegam.Doctor.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.neegam.Doctor.entity.Doctor;
import com.neegam.Doctor.model.DoctorResponse;
import com.neegam.Doctor.model.DoctorResponse2;
import com.neegam.Doctor.service.DoctorService;


@CrossOrigin(origins = "http://localhost:3000", allowedHeaders = {"Content-Type"}, methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT})
@RestController
@RequestMapping("apiDoctor")
public class DoctorController{
	
	@Autowired
	private DoctorService doctorService;
	
	@PostMapping("/addDoctor")
	public ResponseEntity<Long> addDoctor(@RequestBody Doctor doctor) {
		long doctorId = doctorService.addDoctor(doctor);
		return new ResponseEntity<>(doctorId, HttpStatus.CREATED);
	}
	
	@GetMapping("/doctor/{specialization}")
	public ResponseEntity<DoctorResponse> getDoctorDetails(@PathVariable String specialization ){
		DoctorResponse doctor
									= doctorService.findDoctorBySpecialization(specialization);
		return new ResponseEntity<>(doctor, HttpStatus.OK);
	}
	
	@GetMapping("/doctor/byName/{name}")
	public ResponseEntity<DoctorResponse2> getDoctorDetailsByName(@PathVariable String name ){
		DoctorResponse2 doctor
									= doctorService.findDoctorByDoctorName(name);
		return new ResponseEntity<>(doctor, HttpStatus.OK);
	}
	
	@PutMapping("/updateDoctorFlag")
	public void setDoctorResponse2(@RequestBody DoctorResponse2 doctorResponse2){
		doctorService.updateDoctorFlag(doctorResponse2);
	}
}