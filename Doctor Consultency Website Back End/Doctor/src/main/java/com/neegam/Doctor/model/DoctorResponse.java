package com.neegam.Doctor.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class DoctorResponse{
	
	private long doctorId;
	private String doctorName;
	
	private String doctorEmail;
	
//	private String specialization;
	
	private String monday;
	private String tuesday;
	private String wednesday;
	private String thursday;
	private String friday;
	private String saturday;
	
//	private boolean flagMonday;
//	
//	private boolean flagTuesday;
//	
//	private boolean flagWednesday;
//	
//	private boolean flagThursday;
//	
//	private boolean flagFriday;
//	
//	private boolean flagSaturday;
}