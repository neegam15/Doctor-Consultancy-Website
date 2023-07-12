package com.neegam.Appointment.service;

import com.neegam.Appointment.model.PatientRequest;

public interface AppointmentService{

	String bookAppointment(PatientRequest patientRequest);
	
}