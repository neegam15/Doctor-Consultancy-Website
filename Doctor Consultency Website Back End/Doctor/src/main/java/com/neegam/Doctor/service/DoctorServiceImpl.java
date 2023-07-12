package com.neegam.Doctor.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.neegam.Doctor.entity.Doctor;
import com.neegam.Doctor.model.DoctorResponse;
import com.neegam.Doctor.model.DoctorResponse2;
import com.neegam.Doctor.repository.DoctorRepository;


import lombok.extern.log4j.Log4j2;


@Service
@Log4j2
public class DoctorServiceImpl implements DoctorService {

	@Autowired
	private DoctorRepository doctorRepository;
	
	@Override
	public long addDoctor(Doctor doctor) {
		
		log.info("Adding doctor...");
		
		doctorRepository.save(doctor);
		
		log.info("Doctor added successfully...");
		
		return doctor.getDoctorId();
	}


	@Override
	public DoctorResponse findDoctorBySpecialization(String specialization) {
		 
		Doctor doctor = doctorRepository.findBySpecialization(specialization);
		
		DoctorResponse doctorResponse = DoctorResponse.builder()
										.doctorId(doctor.getDoctorId())
										.doctorName(doctor.getDoctorName())
										.doctorEmail(doctor.getDoctorEmail())
										.monday(doctor.getMonday())
										.tuesday(doctor.getTuesday())
										.wednesday(doctor.getWednesday())
										.thursday(doctor.getThursday())
										.friday(doctor.getFriday())
										.saturday(doctor.getSaturday())
										.build();
		return doctorResponse;
	}


	@Override
	public DoctorResponse2 findDoctorByDoctorName(String name) {
		
		Doctor doctor = doctorRepository.findByDoctorName(name);
		
		DoctorResponse2 doctorResponse2 = DoctorResponse2.builder()
										.doctorId(doctor.getDoctorId())
										.flagMonday(doctor.isFlagMonday())
										.flagTuesday(doctor.isFlagTuesday())
										.flagWednesday(doctor.isFlagWednesday())
										.flagThursday(doctor.isFlagThursday())
										.flagFriday(doctor.isFlagFriday())
										.flagSaturday(doctor.isFlagSaturday())
										.build();
		return doctorResponse2;
	}


	@Override
	public void updateDoctorFlag(DoctorResponse2 doctorResponse2) {
		
		Optional<Doctor> doctor = doctorRepository.findById(doctorResponse2.getDoctorId());
		
		doctor.get().setFlagMonday(doctorResponse2.isFlagMonday());
		doctor.get().setFlagTuesday(doctorResponse2.isFlagTuesday());
		doctor.get().setFlagWednesday(doctorResponse2.isFlagWednesday());
		doctor.get().setFlagThursday(doctorResponse2.isFlagThursday());
		doctor.get().setFlagFriday(doctorResponse2.isFlagFriday());
		doctor.get().setFlagSaturday(doctorResponse2.isFlagSaturday());
		
		doctorRepository.save(doctor.get());
		
	}

}
