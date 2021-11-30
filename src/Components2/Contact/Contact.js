import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {faMapMarker,faPhone,faEnvelopeSquare} from '@fortawesome/free-solid-svg-icons';

import '../../Components/Carousel/Carousel.css'

const Contact = () => {



    return (



        <div className="mt-4" style={{ backgroundColor: "#333333", color: "white" }}>


            <div class="container">

                <h2 style={{ color: "#9f0500", textAlign: "center" }}>CONTACT FORM......</h2>
                <hr />

                <div class="row">




                    <br />
                    <div class=" offset-md-0 offset-sm-0 col-md-12 col-sm-12 col-lg-6">

                        <div className="my-3">
                            <h3 className="text-center" style={{ color: "white" }}>Please ! If You Want Text Here..</h3>
                            <hr />

                        </div>
                        <form>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Enter Your Name</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Enter Your Email </label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Enter Subject</label>
                                <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                            </div>

                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Enter Message</label>
                                <textarea type="textarea" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                <div id="emailHelp" class="form-text"></div>
                            </div>


                            <button type="submit" class="btn btn-danger">SEND</button>
                        </form>
                    </div>


                    <div class=" offset-md-0 offset-sm-0 col-md-12 col-sm-12 col-lg-6 g-3">

                        <h2>Contact Me</h2>
                        <hr />

                        <small>Always available for front-end develop work if you right project comes along,feel free to contact me ! </small>


                        <br />

                        <h5> <FontAwesomeIcon icon={faMapMarker} style={{color:"red", fontSize:"20px"}}></FontAwesomeIcon>Mirpur-1,Block-D, Dhaka-1216</h5>
                        <br />

                        <h5><FontAwesomeIcon icon={faPhone} style={{color:"red", fontSize:"20px"}}></FontAwesomeIcon> +8801860514118</h5>
                        <br />

                        <h5> <FontAwesomeIcon icon={faEnvelopeSquare} style={{color:"red", fontSize:"20px"}}></FontAwesomeIcon> an.jannatulfardous@gmail.com</h5>
                        <br />
                    </div>




                </div>


            </div>


        </div>

    );



};


export default Contact;