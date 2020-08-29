import React from 'react';

const About = () => {
    return (
        <>
        <div className="container">
            <div className="row">
                <div className="col-3 first-col">
                    <h1>Saoni Business.</h1>
                     <p>Jashimuddin Street , Maijdee Court Noakhali , Noakhali Bangladesh</p>
                </div>
                <div className="col-3 pl-3">
                    <p className="text-muted">
                        Pages
                    </p>
                    <p><a href="/Home">Home</a></p>
                    <p><a href="/Service">Service</a></p>
                    <p><a href="/Testimonial">Testimonial</a></p>
                    <p><a href="/About">About</a></p>
                    <p><a href="/Contact">Contact</a></p>
                </div>
                <div className="col-3 pr-3">
                <p className="text-muted">
                        Social Media
                    </p>
                    <p><a href="/Home">Facebook</a></p>
                    <p><a href="/Service">Twitter</a></p>
                    <p><a href="/Testimonial">Instagram</a></p>
                </div>
                <div className="col-3">
                <p className="text-muted">
                        Links
                    </p>
                    <p><a href="/Home">Privacy Policy</a></p>
                    <p><a href="/Service">Terms and Condition</a></p>
                    <p><a href="/Testimonial">Legal</a></p>
                </div>
            </div>
        </div>
        </>
    );
};

export default About;