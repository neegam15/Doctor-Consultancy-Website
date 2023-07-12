import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import './appointment.css'
import Apdetails from './Apdetails'
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

import axios from 'axios';

import 'react-datepicker/dist/react-datepicker.css';

import DoctorDetails from './DoctorDetails';

const Appointment = (props) => {

    

    const { id } = useParams();

    const [data, setdata] = useState({
        fullname: '',
        phone: '',
        email: '',
        age: '',
        day: '',
        gender: '',
    })

    const [doctor, setDoctor] = useState({
        doctorId: 0,
        doctorName: '',
        doctorEmail: '',
        monday: '',
        tuesday: '',
        wednesday: '',
        thursday: '',
        friday: '',
        saturday: ''
    });

    useEffect(() =>{
        axios.get("http://localhost:8081/apiDoctor/doctor/"+id).then((res) => {
             setDoctor({
                         doctorId: res.data.doctorId,
                         doctorName: res.data.doctorName,
                         doctorEmail: res.data.doctorEmail,
                         monday: res.data.monday,
                         tuesday: res.data.tuesday,
                         wednesday: res.data.wednesday,
                         thursday: res.data.thursday,
                         friday: res.data.friday,
                         saturday: res.data.saturday
                        });
    })
    }, [])
    

    function handleData(e){
        setdata({...data, [e.target.name]:e.target.value})
        // console.log(data);
    }

    
    const formSubmit = () => {

    }

    const [formResponse, setFormResponse] = React.useState("");

    const [popUpType, setPopUpType] = React.useState("error");

    function Alert(props) {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
    }

    const [open, setOpen] = React.useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        let patient = {fullname: data.fullname,
                        day: data.day,
                        doctorName: doctor.doctorName,
                        doctorId: doctor.doctorId};

        console.log('patient =>' + JSON.stringify(patient));

        // console.log(id);
        // console.log(propsData);

        // PatientService.createPatient(patient).then(res => {

        //     axios.post("http://localhost:8080/addPatient", data).then(res => {
      
        //     console.log("Patient appointment saved")
        // });

        axios.post("http://localhost:8082/apiAppointment/bookAppointment", patient).then(res => {
            setFormResponse(res.data);

        if(res.data == "Appointment has been Booked"){
            axios.post("http://localhost:8080/apiPatient/addPatient", data).then(res => {
                console.log("Patient appointment saved")
        });

        setPopUpType("success");
        }else{
            setPopUpType("error");
        }

        })


        setdata({
            fullname: '',
            phone: '',
            email: '',
            age: '',
            day: '',
            gender: '',
          });
        setOpen(true);
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    // console.log(data);
        return (
            <>

                <div className="container-fluid main_div ">
                    <div className="row" >
                        <div className="col-md-9 col-11 mx-auto " >
                            <div className="row">
                                <div className="col-md-7 pt-5 pt-lg-5 order-1 order-lg-1 ">
                                    <div className='shadow py-5 left_div' >
                                        <h2>Book your appointment</h2>
                                        <h5>We will confirm your appointment within 2 hours</h5>
                                        <br />
                                        <form className='my-auto'>
                                            <div className='row'>
                                                <div className='col-10 mx-auto' >
                                                    <div className='row' >
                                                        <div className='col-md-6 mx-auto order-1' >
                                                            <Apdetails class="fas fa-user-tie icon fa-3x fa-pull-left" label='Name' type='text' name='fullname' value={data.fullname} onChange={handleData} placeholder='Enter Name' />

                                                            <Apdetails class="fas fa-phone-volume icon fa-3x fa-pull-left" label='Phone' type='text' name='phone' value={data.phone} onChange={handleData} placeholder='Enter Phone Number' />

                                                            <Apdetails class="fas fa-calendar-alt icon fa-3x fa-pull-left" label='Weekday' type='text' name='day' value={data.day} onChange={handleData} placeholder='Enter a weekday for appointment' />

                                                            {/* <Apdetails class="fa-regular fa-calendar-days icon fa-3x fa-pull-left" label='Appointment Date' type='text' name='date' value={data.date} selected={selectedDate} onChange={handleDateChange} placeholder='Enter Date' /> */}

                                                        </div>

                                                        <div className='col-md-6 mx-auto order-2' >
                                                            <Apdetails class="fas fa-envelope-square icon fa-3x fa-pull-left" label='Email' type='text' name='email' value={data.email} onChange={handleData} placeholder='Enter Email' />

                                                            <Apdetails class="fas fa-user icon fa-3x fa-pull-left" label='Age' type='text' name='age' value={data.age} onChange={handleData} placeholder='Enter Age' />

                                                            <Apdetails class="fas fa-venus-mars icon fa-3x fa-pull-left" label='Gender' type='text' name='gender' value={data.gender} onChange={handleData} placeholder='Enter Gender' />


                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div class="col-12">
                                                {/* <button class="btn btn-outline-primary" type="submit">Submit form</button> */}
                                                {/* <Button variant="outlined" onClick={handleClick}>Submit</Button> */}
                                                
                                                <Button variant="contained" color="primary" style={{backgroundColor:'#0046C0'}} onClick={handleSubmit}>Submit Form</Button>
                                                
                                                <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
                                                    <Alert onClose={handleClose} severity={popUpType}>
                                                        {formResponse}</Alert>
                                                </Snackbar>


                                            </div>
                                        </form>
                                    </div>
                                </div>
                    
                                <div className=" col-md-4 pt-5 pt-lg-5  order-2 order-lg-2" >
                                    <div className='shadow py-5 right_div'>
                                        <h1 style={{ color: 'orange' }} ><b>Dr. {doctor.doctorName}</b></h1>
                                        
                                        <h3>Specialization in : <b style={{ color: 'orange' }}>{id}</b></h3>
                                        <p>------------------------------------------------</p>
                                        <h4>Working hours</h4>
                                        <ul id='app_ul'>
                                            {
                                            <DoctorDetails monday={doctor.monday} tuesday={doctor.tuesday} wednesday={doctor.wednesday} thursday={doctor.thursday} friday={doctor.friday} saturday={doctor.saturday} />
                                            }  
                                        </ul>
                                        <p>For email purpose, please mail him : <b style={{ color: 'orange' }}>{doctor.doctorEmail}</b></p>
                                        <p>-------------X--------------</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </>
        )
        
    }

export default Appointment
