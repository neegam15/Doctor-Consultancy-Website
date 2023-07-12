package com.neegam.Appointment.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.neegam.Appointment.entity.Appointment;
import com.neegam.Appointment.external.client.DoctorService;
import com.neegam.Appointment.model.DoctorResponse2;
import com.neegam.Appointment.model.PatientRequest;
import com.neegam.Appointment.repository.AppointmentRepository;

import lombok.extern.log4j.Log4j2;

@Service
@Log4j2
public class AppointmentServiceImpl implements AppointmentService {

	@Autowired
	private AppointmentRepository appointmentRepository;
	
	@Autowired
	private DoctorService doctorService;
	
	@Override
	public String bookAppointment(PatientRequest patientRequest) {
		
		Appointment appointment = Appointment.builder()
									.patientName(patientRequest.getFullname())
									.day(patientRequest.getDay())
									.doctorName(patientRequest.getDoctorName())
									.doctorId(patientRequest.getDoctorId())
									.status("")
									.build();
		
//		Call the doctorServiceImpl and find the Doctor Details. Before that change the findDoctorByName response to DoctorResponse2 where it will only contain the flag values.
		
		log.info("Calling Doctor Service to get the availability details of Doctor");
		
		ResponseEntity<DoctorResponse2> doctorResponse2 = doctorService.getDoctorDetailsByName(appointment.getDoctorName());
		
//		There we will find the flag value and then we will use if else. After that we will pass the response as String.
		
		log.info("Now we are checking the availability of doctor on the particular day when the booking is scheduled.");
		
		log.info(appointment.getDay().equalsIgnoreCase("monday"));
		
		if(appointment.getDay().equalsIgnoreCase("monday")) {
			log.info("Inside monday");
			if(doctorResponse2.getBody().isFlagMonday()) {
				log.info(doctorResponse2.getBody().isFlagMonday());
				appointment.setStatus("BOOKED");
				doctorResponse2.getBody().setFlagMonday(false);
				
				doctorService.setDoctorResponse2(doctorResponse2.getBody());
				appointmentRepository.save(appointment);
				return "Appointment has been Booked";
			
			}
			
		}
		
		else if(appointment.getDay().equalsIgnoreCase("tuesday")) {
			log.info("Inside tuesday");
			if(doctorResponse2.getBody().isFlagTuesday()) {
				log.info(doctorResponse2.getBody().isFlagTuesday());
				appointment.setStatus("BOOKED");
				doctorResponse2.getBody().setFlagTuesday(false);
				
				doctorService.setDoctorResponse2(doctorResponse2.getBody());
				appointmentRepository.save(appointment);
				return "Appointment has been Booked";
			
			}
			
		}
		
		else if(appointment.getDay().equalsIgnoreCase("wednesday")) {
			log.info("Inside wednesday");
			if(doctorResponse2.getBody().isFlagWednesday()) {
				log.info(doctorResponse2.getBody().isFlagWednesday());
				appointment.setStatus("BOOKED");
				doctorResponse2.getBody().setFlagWednesday(false);
				
				doctorService.setDoctorResponse2(doctorResponse2.getBody());
				appointmentRepository.save(appointment);
				return "Appointment has been Booked";
			
			}
		}
		
		else if(appointment.getDay().equalsIgnoreCase("thursday")){
			log.info("Inside thursday");
			if (doctorResponse2.getBody().isFlagThursday()) {
				log.info(doctorResponse2.getBody().isFlagThursday());
//				System.out.println("doctorResponse2.getBody().isFlagThursday()");
				appointment.setStatus("BOOKED");
				doctorResponse2.getBody().setFlagThursday(false);
				
				doctorService.setDoctorResponse2(doctorResponse2.getBody());
				appointmentRepository.save(appointment);
				return "Appointment has been Booked";
			
			}
			
		}
		
		else if(appointment.getDay().equalsIgnoreCase("friday")) {
			log.info("Inside Friday");
			if (doctorResponse2.getBody().isFlagFriday()) {
				log.info(doctorResponse2.getBody().isFlagFriday());
				appointment.setStatus("BOOKED");
				doctorResponse2.getBody().setFlagFriday(false);
				
				doctorService.setDoctorResponse2(doctorResponse2.getBody());
				appointmentRepository.save(appointment);
				return "Appointment has been Booked";
			
			}
		
		}
		
		else if(appointment.getDay().equalsIgnoreCase("saturday")) { 
			
			log.info("Inside Saturday");
			if (doctorResponse2.getBody().isFlagSaturday()) {
				
				log.info(doctorResponse2.getBody().isFlagSaturday());
				appointment.setStatus("BOOKED");
				doctorResponse2.getBody().setFlagSaturday(false);
				
				doctorService.setDoctorResponse2(doctorResponse2.getBody());
				appointmentRepository.save(appointment);
				return "Appointment has been Booked";
			
			}
		
		}
		
//		else {
			
//			appointment.setStatus("NOT BOOKED ON THAT DAY");
//			appointmentRepository.save(appointment);
			return "Please choose another day";
			
//		}
//		return null;

		
//		appointmentRepository.save(appointment);
		
//		return "Please choose another day";
	}

}
