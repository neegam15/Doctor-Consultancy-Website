package com.neegam.Patient.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.neegam.Patient.entity.Patient;
import com.neegam.Patient.model.PatientRequest;
import com.neegam.Patient.repository.PatientRepository;


import lombok.extern.log4j.Log4j2;


@Service
@Log4j2
public class PatientServiceImpl implements PatientService {

	@Autowired
	private PatientRepository patientRepository;
	
	@Override
	public long addPatient(PatientRequest patientRequest) {
		
		log.info("Adding patient...");
		
		Patient patient 
					= Patient.builder()
						.fullname(patientRequest.getFullname())
						.age(patientRequest.getAge())
						.email(patientRequest.getEmail())
						.phone(patientRequest.getPhone())
						.gender(patientRequest.getGender())
						.day(patientRequest.getDay())
						.build();
		
		patientRepository.save(patient);
		
		log.info("Patient added successfully...");
		
		return patient.getPatientId();
	}

}
