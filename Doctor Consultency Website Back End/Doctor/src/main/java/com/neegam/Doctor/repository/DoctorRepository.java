package com.neegam.Doctor.repository;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.neegam.Doctor.entity.Doctor;



@Repository
public interface DoctorRepository extends JpaRepository<Doctor, Long>{

	@Query(value = "SELECT * FROM doctor WHERE specialization LIKE :specialization", nativeQuery = true)
    Doctor findBySpecialization(String specialization);

	@Query(value = "SELECT * FROM doctor WHERE doctor_name LIKE :name", nativeQuery = true)
	Doctor findByDoctorName(String name);
	
}