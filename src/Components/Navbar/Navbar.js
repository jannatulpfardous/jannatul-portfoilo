
import React from 'react';

import '../Carousel/Carousel.css'

import { Link } from 'react-router-dom';
// import { FaArtstation } from "react-icons/fa"


const Navbar = () => {





    return (


        <div>
            {/* <FaArtstation /> */}
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark" >
                <div class="container-fluid">
                    <h3> <span style={{ fontFamily: "Besley", color: "white" }}> Jannatul Fardous</span> </h3>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0 m-4">
                            <li class="nav-item mx-2">
                                <Link to="/" class="nav-link active" aria-current="page" ><span style={{ fontFamily: "Besley" }}>Home</span></Link>
                            </li>
                            <li class="nav-item mx-2">
                                <Link to="/portfoilo" class="nav-link active" aria-current="page" ><span style={{ fontFamily: "Besley" }}>Portfoilo</span></Link>
                            </li>
                            <li class="nav-item mx-2">
                                <Link to="/projects" class="nav-link active" aria-current="page" ><span style={{ fontFamily: "Besley" }}>My Projects</span></Link>
                            </li>
                            <li class="nav-item mx-2">
                                <Link to="/Resume" class="nav-link active" aria-current="page" ><span style={{ fontFamily: "Besley" }}>Resume</span></Link>
                            </li>
                            <li class="nav-item mx-2">
                                <Link to="/About" class="nav-link active" aria-current="page" ><span style={{ fontFamily: "Besley" }}>About Me</span></Link>
                            </li>


                            <li class="nav-item mx-2">
                                <Link to="/blog" class="nav-link" ><span style={{ color: "#faf7f9", fontFamily: "Besley" }}>Blog</span></Link>
                            </li>
                            <li class="nav-item mx-2">
                                <Link to="/Contact" class="nav-link" ><span style={{ color: "#faf7f9", fontFamily: "Besley" }}>Contact Me</span></Link>
                            </li>



                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
