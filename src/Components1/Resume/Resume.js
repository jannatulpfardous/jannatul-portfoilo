import React from 'react';
import '../../Components1/Resume/Resume.css'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import {faArrowRight} from '@fortawesome/free-solid-svg-icons'



const Resume = () => {



  return (


    <div id="container" >


      <h4 class="pt-5">Please ! Click The Download Resume......</h4>
      <button  >
         <a   class="text-decoration-none btn btn-danger text-bold" href="https://drive.google.com/file/d/1LU4HSXIkOoKdYJFRkJTMYUE-rxCekr_C/view?usp=sharing" > Download Resume <FontAwesomeIcon icon={faArrowRight} style={{color:"white", fontSize:"15px"}}></FontAwesomeIcon></a> 
         </button>

    </div>


  );


};

export default Resume;