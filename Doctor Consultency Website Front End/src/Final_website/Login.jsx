import React from 'react'
import './login.css'
import VideoImg from './videocall_image.png'
import Fab from '@material-ui/core/Fab';
import { NavLink } from 'react-router-dom'

function Login() {
    return (
        <>
            {/* <div className="container-fluid main_div "> */}
            <div className="container-fluid my-5 logindiv3  ">
                <div className="row" >
                    <div className="shadow col-md-4 col-11 mx-auto logindiv " >
                        <div className='row'>
                            <img src={VideoImg}></img>
                            <h2 style={{fontWeight:'bold'}}>Select User</h2>
                            <div className='row logindiv2'>
                                <div className='col-md-8 col-sm-8 col-lg-4'>
                                    <NavLink to='/sender'><Fab variant="extended" id='fab1'>Patient</Fab></NavLink>
                                </div>
                                <div className='col-md-8 col-sm-8 col-lg-4'>
                                    <NavLink to='/reciever'><Fab variant="extended" id='fab1'>Doctor</Fab></NavLink>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Login
