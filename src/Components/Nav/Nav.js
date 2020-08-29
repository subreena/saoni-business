import React from 'react';
import Button from '@material-ui/core/Button';
import '../Nav/Nav.css'


const Nav = () => {
    return (
        <>
       <div className="container-fluid bg-transparent">
       <nav>
        <div className="col-12 col-md-5"><p className="brand">Saoni <span className="text-light">Business</span>.</p> </div>
       <div className="col-12 col-md-7">
       <ul>
            <li><a href="/Home">Home</a></li>
            <li><a href="/Services">Services</a></li>
            <li><a href="/Testimonial">Testimonial</a></li>
            <li><a href="/Contact">Contact</a></li>
            <li><a href="/About">About</a></li>
            <Button variant="contained" color="secondary">Sign Up</Button>
           
        </ul>
       </div>
        
    </nav>
       </div>
        </>
    );
};

export default Nav;
