import React, { useState, useEffect } from 'react';
import TestSingle from '../TestSingle/TestSingle';

const Testimonial = () => {
const [testy , setTest] = useState([]);
useEffect(() =>{
    fetch('https://randomuser.me/api/')
    .then(response => response.json())
    .then(data => {
        console.log(data.results);
        setTest(data.results)
    })
}

,[])
    return (
        <>
        {
            testy.map(tst => <TestSingle test={tst}></TestSingle>)
        }
        </>
    );
};

export default Testimonial;