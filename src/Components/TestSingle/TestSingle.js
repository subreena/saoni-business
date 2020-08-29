import React from 'react';
import '../TestSingle/TestSingle.css'

const TestSingle = (props) => {
    console.log(props.test)
    const{ name , location , email , picture } = props.test;
    return (
      <>
      <div className="container testimonial-section text-center">
          <h1>What Our Clients Say!</h1>
          <div className="testimonial">
              <div>
              <img src={picture.large} alt="" style={{borderRadius: ' 50%'}} />
              <h4 className="mt-3" style={{color:'#f50057'}}>{name.first} {name.last}</h4>
              <p>{email}</p>
    <h5 style={{color:'#f50057'}}>From: {location.city} , {location.country}</h5>
    <br/>
    <p className="text-center text-dark">Very Good workers. Very Generous! Will work with them again! <br/>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae obcaecati beatae dicta sint cumque et.
    </p>
              </div>
          </div>
      </div>
      </>
    );
};

export default TestSingle;