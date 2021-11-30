import React from 'react';
import '../../Components/Carousel/Carousel.css';
import pic from '../../Components/Carousel/1 (1).jpg';
const Portfoilo = () => {




    return (




        <div className="mt-4">

            <div class="container">



                <div class="row">

                    <h2 style={{ color: "black", textAlign: "center" }}>About Me</h2>

                    <hr />
                    <br />
                    <div class="col-lg-4 offset-1 col-md-12 col-sm-12">

                        <div className="my-5">
                            <h3 className="text-center" style={{ color: "black" }}>About</h3>
                            <p>Front-end web development is the development of the graphical user interface of a website, through the use of HTML, CSS, and JavaScript, so that users can view and interact with that website. </p>



                        </div>

                    </div>


                    <div class="col-lg-6 offset-lg-1 offset-md-0 offset-sm-0 col-md-12 col-sm-12 text-center">
                        <img className="se2 mt-5 pt-2 rounded img-car h-75 w-100" src={pic} alt="" />
                    </div>




                </div>


            </div>

        </div>




    );



};



export default Portfoilo;