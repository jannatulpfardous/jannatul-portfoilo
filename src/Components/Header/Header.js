import React from 'react';

import Projects from '../../Components1/Projects/Projects';
import Resume from '../../Components1/Resume/Resume';
import Portfoilo from '../../Components2/Portfoilo/Portfoilo';

import Carousel from '../Carousel/Carousel';
import Navbar from '../Navbar/Navbar';


const Header = () => {


  return (

    <div>
    <Navbar></Navbar>
      <Carousel></Carousel>
      <Projects></Projects>
      <Portfoilo></Portfoilo>
      
      <Resume></Resume>
      
      

      


    </div>


  );

};


export default Header;