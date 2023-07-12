package com.neegam.Appointment.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class PatientRequest{
	
	private String fullname;
	private String day;
	private String doctorName;
	private long doctorId;
}