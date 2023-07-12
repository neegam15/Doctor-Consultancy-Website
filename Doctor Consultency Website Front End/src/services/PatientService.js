import React from 'react'
import axios from 'axios';

const ADD_PATIENT_API_URL = "http://localhost:8080/addPatient";

class PatientService{

    createPatient(patient){
        return axios.post(ADD_PATIENT_API_URL, patient);
    }
}

export default PatientService