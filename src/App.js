import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
}
  from "react-router-dom";


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

      
        {/* <Route exact path="/header">
            </Route> */}
            <Navbar></Navbar>

          



          <Switch>

            <Route exact path="/">
            <Header></Header>

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
            <Route exact path="/portfoilo">
              <Portfoilo></Portfoilo>

            </Route>
           


           








          </Switch>

          <Footer></Footer>

       

      </Router>
    </div>


  );
};

export default App;









