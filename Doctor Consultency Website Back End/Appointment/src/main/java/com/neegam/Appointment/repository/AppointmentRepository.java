package com.neegam.Appointment.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.neegam.Appointment.entity.Appointment;

@Repository
public interface AppointmentRepository extends JpaRepository<Appointment,Long>{
	
}