import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
}
  from "react-router-dom";
import Carousel from './Components/Carousel/Carousel';

import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';

import Navbar from './Components/Navbar/Navbar';

import Projects from './Components1/Projects/Projects';
import Resume from './Components1/Resume/Resume';

import About from './Components2/About/About';
import Blog from './Components2/Blog/Blog';

import Contact from './Components2/Contact/Contact';
import Portfoilo from './Components2/Portfoilo/Portfoilo';







const App = () => {


  return (


    <div>
      <Router>

        <div>
          <Navbar></Navbar>


          <Switch>

            <Route exact path="/">
              <Carousel></Carousel>

            </Route>


            <Route exact path="/projects">
              <Projects></Projects>

            </Route>

            <Route exact path="/resume">
              <Resume></Resume>

            </Route>
            <Route exact path="/about">
              <About></About>

            </Route>
            
            <Route exact path="/blog">
              <Blog></Blog>

            </Route>
            <Route exact path="/contact">
              <Contact></Contact>

            </Route>
            <Route exact path="/header">
              <Header></Header>
            </Route>


            <private exact path="/portfoilo">
             <Portfoilo></Portfoilo>
            </private>









          </Switch>

          <Footer></Footer>

        </div>

      </Router>
    </div>


  );
};

export default App;









