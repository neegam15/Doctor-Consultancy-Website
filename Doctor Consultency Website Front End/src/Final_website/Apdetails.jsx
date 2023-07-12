import React,{useState} from 'react'
import './appointment.css'

function Apdetails(props) {

    // const [data, setdata] = useState({
    //     fullname: '',
    //     phone: '',
    //     email: '',
    //     age: '',
    //     blood:'',
    //     gender:'',
    // })
    

    // function InputEvent(event) {

    //     const { name, value } = event.target

    //     setdata((preValue) => {
    //         return {
    //             ...preValue,
    //             [name]: value
    //         }
    //     })

    // }



    return (
        <>
            <div className="mb-4 ffff">
                <i className={props.class}></i>
                <div className='fff'>
                    <label for="exampleFormControlInput1" className="form-label">{props.label}</label>
                    <input type={props.type} className="form-control" id="exampleFormControlInput1" name={props.name} value={props.value} onChange={props.onChange} placeholder={props.placeholder} />
                </div>
            </div>

        </>
    )
}

export default Apdetails
