import React from 'react'
import {NavLink} from 'react-router-dom'
import './Navbar.css'

function Navbar() {
    return (
        <>

            <div className="container-fluid nav_bg">
                <div className="row" >
                    <div className="col-10 mx-auto" >


                        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                            <div className="container-fluid">
                                <i className="icofont-woman-bird mainicon"></i>
                                <a className="navbar-brand" href="#"> Clinix</a>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>

                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav ml-auto mb-2 mb-lg-0" style={{marginLeft:"auto"}}>
                                        <li className="nav-item">
                                            <NavLink exact activeClassName='active-cls' className="nav-link active" aria-current="page" to="/">Home</NavLink>
                                        </li>

                                        <li className="nav-item">
                                            <NavLink exact activeClassName='active-cls' className="nav-link" to="/service">Service</NavLink>
                                        </li>

                                        <li className="nav-item">
                                            <NavLink exact activeClassName='active-cls' className="nav-link" to="/about">About</NavLink>
                                        </li>

                                        <li className="nav-item">
                                            <NavLink exact activeClassName='active-cls' className="nav-link" to="/contact">Contact</NavLink>
                                        </li>
                                        {/* <li className="nav-item">
                                            <NavLink exact activeClassName='active-cls' className="nav-link" to="/sender">Sender</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink exact activeClassName='active-cls' className="nav-link" to="/reciever">reciever</NavLink>
                                        </li> */}
                                        <li className="nav-item">
                                            <NavLink exact activeClassName='active-cls' className="nav-link" to="/login">Video Call</NavLink>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </nav>



                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
