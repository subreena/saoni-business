import React, { Fragment } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Contact from './Components/Footer/Contact/Contact';
import About from './Components/About/About';
import Service from './Components/Service/Service';
import Testimonial from './Components/Testimonial/Testimonial';

function App() {
  return (
   <Fragment>
     <Header></Header>
     <Service></Service>
     <Testimonial></Testimonial>
     <Contact></Contact>
     <About></About>
     <Footer></Footer>
     
   </Fragment>
  );
}

export default App;
