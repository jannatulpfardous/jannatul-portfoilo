import React from 'react';
import '../Carousel/Carousel.css';
// import picu from '../Carousel/1 (1).jpg';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import {faArrowRight} from '@fortawesome/free-solid-svg-icons';

const Carousel = () => {
    return (
        <div>
            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators col-lg-6 col-md-12 col-sm-12">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active img-car">
                        <img className="image_img"

                            src= "https://i.pinimg.com/originals/7d/d0/b8/7dd0b8b7d45b70ff8e7576bbbf57492d.jpg" class="d-block w-100" alt="Bricks" />

                        <div class="carousel-caption d-none d-md-block" className="image_overlay image_overlay--primary">
                            <div className="image_title">Jannatul Fardous</div>
                            <p className="image_description">"I A'm A Front-end Developer "</p>


                            <button class="btn btn-danger"> <a  class="text-decoration-none btn btn-danger text-bold"   href="https://drive.google.com/file/d/1LU4HSXIkOoKdYJFRkJTMYUE-rxCekr_C/view?usp=sharing"> Hire Me <FontAwesomeIcon icon={faArrowRight} style={{color:"white", fontSize:"15px"}}></FontAwesomeIcon></a> </button>




                        </div>


                    </div>
                    <div class="carousel-item img-car">
                        <img className="image_img"
                            src="https://www.teahub.io/photos/full/82-822399_2999x1910-black-and-white-images-that-can-also.jpg" class="d-block w-100" alt="..." />

                        <div class="carousel-caption d-none d-md-block" className="image_overlay image_overlay--blur">
                        <div className="image_title">Jannatul Fardous</div>

                            <p className="image_description">"I A'm A Front-end Developer "</p>


                            

                        </div>

                    </div>
                    <div class="carousel-item  img-car">
                        <img className=" image_img"
                            src="https://www.teahub.io/photos/full/21-214052_sad-girl-hd-wallpapers-black-background-sad-girl.jpg" class="d-block w-100" alt="..." />

                        <div class="carousel-caption d-none d-md-block" className="image_overlay image_overlay--blur" >
                        <div className="image_title">Jannatul Fardous</div>

                            <p className="image_description">"I A'm A Front-end Developer "</p>


                           

                        </div>

                    </div>
                    {/* <div class="carousel-item  img-car">
                        <img className=" image_img"
                            src="https://i.pinimg.com/originals/7d/d0/b8/7dd0b8b7d45b70ff8e7576bbbf57492d.jpg" class="d-block w-100" alt="..." />

                        <div class="carousel-caption d-none d-md-block" className="image_overlay image_overlay--blur">
                        <div className="image_title">Jannatul Fardous</div>

                            <p className="image_description">"I A'm A Front-end Developer "</p>


                           
                        </div>

                    </div> */}
                </div>

                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>

        </div>



    );
};

export default Carousel;