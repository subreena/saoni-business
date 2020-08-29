import React, { useState } from 'react';
import fakeData from '../../fakeData/fakeData';
import ServiceInfo from '../ServiceInfo/ServiceInfo';



const Service = () => {
    console.log(fakeData);
    const[ServiceInvi , setServiceInfo]= useState(fakeData);
    console.log(ServiceInvi);
    return (
        <div>
            {
                ServiceInvi.map( sv => <ServiceInfo serviceInfo ={sv}></ServiceInfo>)
            }
        </div>
    );
};

export default Service; 