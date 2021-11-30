import React from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import {faIdCard,faUserGraduate,faFillDrip,faChalkboardTeacher,faLanguage} from '@fortawesome/free-solid-svg-icons';

const About = () => {



    return (


        <div className="pt-4" style={{ backgroundColor: "#333333", color: "white" }} >



            <h2 style={{ color: "#9f0500", textAlign: "center" }}>About Me......</h2>



            <hr />

            <div class="container">

                <div >


                    <div class="row justify-content-around ">
                        <div class="col-4">
                            <h3><FontAwesomeIcon icon={faIdCard} style={{color:"red", fontSize:"20px"}}></FontAwesomeIcon> About Me</h3>
                            <div class="col-lg-6 offset-lg-1 offset-md-0 offset-sm-0 col-md-12 col-sm-12 ">
                               
                            </div>
                        </div>
                        <div class="col-4">
                            <p> || Junion Front-end Developer || </p>

                            <p> I started learning web development from last 1st july.I have done several Front-end and MERN Stack  projects using html, css, Bootstrap, React, JavaScript, Node.js, Express,MongoDB ,netlifly etc.

                            </p>
                        </div>
                        <hr />
                        <div class="col-4">
                            <h3><FontAwesomeIcon icon={faUserGraduate} style={{color:"red", fontSize:"20px"}}></FontAwesomeIcon>Education</h3>

                        </div>
                        <div class="col-4">
                            <p>Southeast University</p>
                            <p>Bsc In Cse</p>
                            <p>Start:2018(Running)</p>


                        </div>
                        <hr />
                        <div class="col-4">
                            <h3><FontAwesomeIcon icon={faFillDrip} style={{color:"red", fontSize:"20px"}}></FontAwesomeIcon>Skills</h3>
                        </div>
                        <div class="col-4">
                            <p> html, css, Bootstrap, <br />
                                JavaScript,ES6, React, <br />
                                Node.js, Express,MongoDB ,<br />
                                netlifly etc.</p>
                        </div>
                        <hr />
                        <div class="col-4">
                            <h3><FontAwesomeIcon icon={faChalkboardTeacher} style={{color:"red", fontSize:"20px"}}></FontAwesomeIcon>Professional Training</h3>

                        </div>
                        <div class="col-4">
                            <p>1. Complete Web Development Course/ Programming Hero</p>
                            <br />
                            <p>Jun 2021 - Dec 2021</p>
                        </div>
                        <hr />
                        <div class="col-4">
                            <h3><FontAwesomeIcon icon={faLanguage} style={{color:"red", fontSize:"20px"}}></FontAwesomeIcon>Languages</h3>
                        </div>
                        <div class="col-4">
                            <p>English</p>
                            <p>Bengali</p>
                        </div>
                        <hr />

                    </div>
                </div>




            </div>





        </div>










    );


};



export default About;
