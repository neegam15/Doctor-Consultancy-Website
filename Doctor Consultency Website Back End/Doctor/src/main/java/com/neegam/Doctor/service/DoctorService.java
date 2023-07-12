package com.neegam.Doctor.service;

import com.neegam.Doctor.entity.Doctor;
import com.neegam.Doctor.model.DoctorResponse;
import com.neegam.Doctor.model.DoctorResponse2;

public interface DoctorService{

	long addDoctor(Doctor doctor);

	DoctorResponse findDoctorBySpecialization(String specialization);

	DoctorResponse2 findDoctorByDoctorName(String name);

	void updateDoctorFlag(DoctorResponse2 doctorResponse2);
	
}