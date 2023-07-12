import React from "react";
import { NavLink } from "react-router-dom";
const Common = (props) => {
    return (

        <>
            <section id='header' className='d-flex align-items-center'>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">

                                <div className="col-md-6 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
                                    <h1>{props.name}
                                        <strong className='brand-name'>Umasankar</strong>
                                    </h1>
                                    <h2 className="my-3">
                                        {props.content1}
                                    </h2>
                                    <div className="mt-3">
                                        <NavLink to={props.visit} className='btn-get-started'>
                                            {props.btname}
                                        </NavLink>
                                    </div>
                                </div>
                                <div className="col-lg-6 pt-5 order-1 order-lg-2 header-img">
                                    <img src={props.img1} className="img-fluid animated" alt="Common img" />
                                </div>


                            </div>

                        </div>
                    </div>

                </div>
            </section>

            <section className='d-flex align-items-center'>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row justify-content-center">
                                <div className="col-lg-6 order-3 order-lg-3 header-img ">
                                    <img src={props.img2} className="img-fluid animated" alt="Common img" />
                                </div>
                                <div className="col-md-6 pt-5 pt-lg-0 order-4 order-lg-4 d-flex flex-column justify-content-center ">

                                    <h2 className="my-3">
                                        {props.content2}
                                    </h2>

                                </div>



                            </div>

                        </div>
                    </div>

                </div>

            </section>

        </>
    );
}
export default Common;
