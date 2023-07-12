package com.neegam.Appointment.entity;

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
public class Appointment{
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long appointmentId;
	
	@Column(name = "PATIENT_NAME")
	private String patientName;
	
	@Column(name = "DOCTOR_NAME")
	private String doctorName;
	
	@Column(name = "DAY")
	private String day;
	
	@Column(name = "STATUS")
	private String status;
	
	private long doctorId;
	
}