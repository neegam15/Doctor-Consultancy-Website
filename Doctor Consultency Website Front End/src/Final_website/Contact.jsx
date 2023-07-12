import React, { useState } from 'react'
import Button from '@material-ui/core/Button';


function Contact() {


    const [data, setdata] = useState({
        fullname: '',
        phone: '',
        email: '',
        message: ''
    })

    function InputEvent(event) {

        const { name, value } = event.target

        setdata((preValue) => {
            return {
                ...preValue,
                [name]: value
            }
        })

    }



    const formSubmit = (e) => {
        e.preventDefault();
        alert(`Name:${data.fullname}\nPhone:${data.phone}\nEmail:${data.email}\nMessage:${data.message}`)
    }




    return (
        <>
            <div className='my-3 mb-5'>
                <h1 className='text-center' style={{ fontWeight: 'bold' }}>Contact Us</h1>
            </div>
            <div className='container contact_div'>
                <div className='row'>
                    <div className='col-lg-6 col-10 mx-auto'>
                        <form onSubmit={formSubmit}>


                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label label1">FullName</label>
                                <input required type="text" className="form-control input1" id="exampleFormControlInput1" name="fullname" value={data.fullname} onChange={InputEvent} placeholder="Enter Your Name" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label label1">Phone Number</label>
                                <input required type="number" className="form-control input1" id="exampleFormControlInput1" name="phone" value={data.phone} onChange={InputEvent} placeholder="Mobile number" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label label1">Email address</label>
                                <input type="email" className="form-control input1" id="exampleFormControlInput1" name="email" value={data.email} onChange={InputEvent} placeholder="name@example.com" />
                            </div>

                            <div className="mb-3">
                                <label for="exampleFormControlTextarea1" className="form-label label1">Message</label>
                                <textarea className="form-control input1" id="exampleFormControlTextarea1" rows="3" name="message" value={data.message} onChange={InputEvent}></textarea>

                            </div>

                            <div class="col-12">
                                {/* <button class="btn btn-outline-primary" type="submit">Submit form</button> */}
                                <Button variant="contained" color="primary" type='submit' style={{backgroundColor:'#0046C0'}}>Submit Form</Button>
                            </div>
                        </form>
                    </div>

                </div>


            </div>

        </>
    )
}

export default Contact

