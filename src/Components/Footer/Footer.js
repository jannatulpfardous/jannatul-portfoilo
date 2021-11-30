import React from 'react';
import '../Footer/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagramSquare, faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import {faMapMarker,faPhone,faEnvelopeSquare} from '@fortawesome/free-solid-svg-icons';
const Footer = () => {
    return (
        <div className="mt-4">

            <div className="footer-container">
                <div >
                    <div className="row row2">

                        <div className="col-md-5">
                            <div class="row g-3 align-items-center mt-3">
                                <div class="col-auto">
                                    <label for="inputPassword6" class="col-form-label">Search</label>
                                </div>
                                <div class="col-auto">
                                    <input type="Search" id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline" />
                                </div>
                                <div class="col-auto">
                                    <span id="passwordHelpInline" class="form-text">
                                        Must Be 6-8 characters long...
                                    </span>
                                </div>
                            </div>


                            <div>
                                <div className="left-container text-start mt-4">
                                    <hr />
                                    <h3 >JANNATUL FARDOUS </h3>
                                    <p >
                                        <h6> <FontAwesomeIcon icon={faMapMarker} style={{color:"red", fontSize:"20px"}}></FontAwesomeIcon>Address:  Mirpur-1, Block-D, Dhaka-1216</h6>
                                        <h6> <FontAwesomeIcon icon={faPhone} style={{color:"red", fontSize:"20px"}}></FontAwesomeIcon>Cell: +8801860514118</h6>
                                        <h6> <FontAwesomeIcon icon={faEnvelopeSquare} style={{color:"red", fontSize:"20px"}}></FontAwesomeIcon>Email: an.jannatulfardous@gmail.com</h6>

                                    </p>


                                </div>
                            </div>
                        </div>


                        <div className="col-md-4">

                            <div className="footer-menu-container">
                                <ul className="mt-4">
                                    <h2>Social Link</h2>


                                    <div className="flex flex-col items-center justify-center py-2 min-h-screen g-4">

                                        <FontAwesomeIcon icon={faFacebook} style={{color:"skyblue", fontSize:"40px"}}> </FontAwesomeIcon>
                                        <br />
                                        <FontAwesomeIcon icon={faInstagramSquare} style={{color:"red",fontSize:"40px"}}></FontAwesomeIcon>
                                        <br />
                                        <FontAwesomeIcon icon={faLinkedin} style={{color:"blue",fontSize:"40px"}}> </FontAwesomeIcon>
                                        <br />
                                        <FontAwesomeIcon icon={faGithubSquare} style={{fontSize:"40px"}}></FontAwesomeIcon>

                                    </div>

                                </ul>
                            </div>

                        </div>



                        <div className="col-md-2">

                            <div className="footer-menu-container">
                                <ul className="mt-4">
                                    <h2>Site View</h2>
                                    <hr />
                                    <li className="footer-menu" > <a style={{color:"skyBlue" ,textDecoration:"none"}} href="hhttp://localhost:3000/">Home</a> </li>
                                    <li className="footer-menu" > <a style={{color:"skyBlue",textDecoration:"none" }} href="http://localhost:3000/projects"> My Projects</a> </li>
                                    <li className="footer-menu" > <a  style={{color:"skyBlue" ,textDecoration:"none"}}href="http://localhost:3000/Resume">Resume</a> </li>
                                    <li className="footer-menu" > <a style={{color:"skyBlue",textDecoration:"none" }} href="http://localhost:3000/About">About Me</a> </li>
                                    <li className="footer-menu" > <a style={{color:"skyBlue" ,textDecoration:"none"}} href="http://localhost:3000/blog">Blog</a> </li>
                                    <li className="footer-menu" > <a style={{color:"skyBlue",textDecoration:"none" }}href="http://localhost:3000/Contact">Contact Me</a> </li>
                                </ul>
                            </div>
                        </div>








                    </div>
                </div>
            </div>
            <p style={{ textAlign: "center", fontWeight: "bold", paddingTop: "30px", fontFamily: "Besley" }}><small> ©copyright  <span style={{ color: "red" }}>Amily Shahrin</span>@ my Portfolio</small></p>

        </div>
    );
};

export default Footer;