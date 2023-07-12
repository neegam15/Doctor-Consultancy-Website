package com.neegam.Appointment.external.client;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.neegam.Appointment.model.DoctorResponse2;

@FeignClient(name = "DoctorService", url = "http://localhost:8081/apiDoctor")
public interface DoctorService{
	
	@GetMapping("/doctor/byName/{name}")
	ResponseEntity<DoctorResponse2> getDoctorDetailsByName(@PathVariable String name);
	
	@PutMapping("/updateDoctorFlag")
	public void setDoctorResponse2(@RequestBody DoctorResponse2 doctorResponse2);
}