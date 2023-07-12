package com.neegam.Doctor.entity;
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
public class Doctor{
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long doctorId;
	
	@Column(name = "DOCTOR_NAME")
	private String doctorName;
	
	@Column(name = "EMAIL")
	private String doctorEmail;
	
	@Column(name = "SPECIALIZATION")
	private String specialization;
	
	@Column(name = "MONDAY")
	private String monday;
	
	@Column(name = "TUESDAY")
	private String tuesday;
	
	@Column(name = "WEDNESDAY")
	private String wednesday;
	
	@Column(name = "THURSDAY")
	private String thursday;
	
	@Column(name = "FRIDAY")
	private String friday;
	
	@Column(name = "SATURDAY")
	private String saturday;
	
	private boolean flagMonday;
	
	private boolean flagTuesday;
	
	private boolean flagWednesday;
	
	private boolean flagThursday;
	
	private boolean flagFriday;
	
	private boolean flagSaturday;
	
	
}