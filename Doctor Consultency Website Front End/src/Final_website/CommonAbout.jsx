import React from 'react'
import { NavLink } from 'react-router-dom'
import './Home.css'
import Web1 from './image1.svg'


function CommonAbout(props) {
    return (
        <>
            {/* <section id='header' className='d-flex justify-content-center align-self-center'> */}
            <div className="container-fluid nav_bg about1">
                <div className="row" >
                    <div className="col-10 mx-auto " >
                        <div className="row">



                            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                <h2 style={{fontWeight:'bold'}}>{props.title}</h2>
                                <p className='my-3 aboutp' >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magnafacilisis. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, unde? Voluptas, doloremque? Doloribus, voluptatem quaerat.</p>
                                <hr />
                            </div>

                            <div className=" col-lg-6 order-1 order-lg-2 header-img " >
                                <img src={props.img} className='img-fluid aboutimg ' alt='image' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* </section> */}
        </>
    )
}

export default CommonAbout

//  justify-content-center align-self-center