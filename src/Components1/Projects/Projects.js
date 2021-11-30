import React from 'react';
import '../../Components1/Projects/Projects.css';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

import img1 from '../../Components2/Picture/amily(5).jpg';
import img2 from '../../Components2/Picture/amily(2).jpg';
import img3 from '../../Components2/Picture/amily(4).jpg';
import img4 from '../../Components2/Picture/amily(1).jpg';

const Projects = () => {




    return (



        <div>
            <h1 className="text-center pt-4">All My Cuty Projects.....</h1>

            <div class="row row-cols-1 row-cols-md-3 g-4  mb-4 mt-4 ">

                <div class="col imagee ">
                    <div class="card h-100 w-75">
                        <img src={img1} class="card-img-top image_img" alt="..." />
                        <div class="card-body">
                            <h5 class="card-titlee image_titlee"> Nail Polish Website</h5>
                            <small class="card-text image_overlayy image_overlay--blurr">This Site Build with react.js ,mongodb,node.js,express.js.Fully Responsive And User Friendly.</small>
                            <div class="d-grid d-md-block">
                                <button class="btn btn-danger" type="button">  <a class="text-decoration-none text-bold text-white" href="https://simple-firebase-authenti-f2c3b.web.app">Live Site <FontAwesomeIcon icon={faArrowRight} style={{ color: "white", fontSize: "15px" }}></FontAwesomeIcon></a></button>
                                <button class="btn btn-danger" type="button">Details <FontAwesomeIcon icon={faArrowRight} style={{ color: "white", fontSize: "15px" }}></FontAwesomeIcon></button>
                            </div>



                        </div>
                    </div>
                </div>
                <br />
                <div class="col imagee">
                    <div class="card h-100 w-75">
                        <img src={img2} class="card-img-top image_imgg" alt="..." />
                        <div class="card-body">
                            <h5 class="card-titlee image_titlee">Tourism-Website</h5>
                            <small class="card-text image_overlayy image_overlay--blurr">Users can register on the website and login.Users will be able to purchase.The login users will be able to manage his/her orders.</small>



                            <div class="d-grid d-md-block">
                                <button class="btn btn-danger" type="button">  <a class="text-decoration-none text-bold text-white" href="https://loving-hypatia-8c7625.netlify.app">Live Site <FontAwesomeIcon icon={faArrowRight} style={{ color: "white", fontSize: "15px" }}></FontAwesomeIcon></a></button>
                                <button class="btn btn-danger" type="button">Details <FontAwesomeIcon icon={faArrowRight} style={{ color: "white", fontSize: "15px" }}></FontAwesomeIcon></button>
                            </div>


                        </div>
                    </div>
                    <br />
                </div>
                <div class="col imagee">
                    <div class="card h-100 w-75">
                        <img src={img3} class="card-img-top image_imgg" alt="..." />
                        <div class="card-body">
                            <h5 class="card-titlee image_titlee">Course-Enrollment</h5>
                            <small class="card-text ">This Site Build with react.Users will be able to purchase any type of course.Users will be able to check instructor details.</small>
                            <div class="d-grid d-md-block">
                                <button class="btn btn-danger" type="button">  <a class="text-decoration-none text-bold text-white" href="https://elated-tesla-22e313.netlify.app/">Live Site <FontAwesomeIcon icon={faArrowRight} style={{ color: "white", fontSize: "15px" }}></FontAwesomeIcon></a></button>
                                <button class="btn btn-danger" type="button">Details <FontAwesomeIcon icon={faArrowRight} style={{ color: "white", fontSize: "15px" }}></FontAwesomeIcon></button>
                            </div>
                        </div>
                    </div>
                    <br />
                </div>
                <div class="col imagee">
                    <div class="card h-100 w-75">
                        <img src={img4} class="card-img-top image_imgg" alt="..." />
                        <div class="card-body">
                            <h5 class="card-titlee image_titlee">Product-Add-Remove</h5>
                            <small class="card-text ">This Site Build with react.Users will be able to Product Add And Remove.</small>
                            <div class="d-grid d-md-block">
                                <button class="btn btn-danger" type="button">  <a class="text-decoration-none text-bold text-white" href="https://awesome-ramanujan-daa442.netlify.app/">Live Site <FontAwesomeIcon icon={faArrowRight} style={{ color: "white", fontSize: "15px" }}></FontAwesomeIcon></a></button>
                                <button class="btn btn-danger" type="button">Details <FontAwesomeIcon icon={faArrowRight} style={{ color: "white", fontSize: "15px" }}></FontAwesomeIcon></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>



    );




};


export default Projects;