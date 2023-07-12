package com.neegam.Doctor.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class DoctorResponse2{
	
	private long doctorId;
	
	private boolean flagMonday;
	
	private boolean flagTuesday;
	
	private boolean flagWednesday;
	
	private boolean flagThursday;
	
	private boolean flagFriday;
	
	private boolean flagSaturday;
	
}