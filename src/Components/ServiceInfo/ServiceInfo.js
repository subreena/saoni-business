import React from 'react';
import '../ServiceInfo/ServiceInfo.css'
const ServiceInfo = (props) => {
    console.log(props.serviceInfo.name)
    const { name , subHeading , text , img } = props.serviceInfo;
    return (
        <>
        <div className="container">
            <div className="row service-col">
                <div className="col-6 service-text">
               <div>
               <h5><small>{name}</small></h5>
                 <h2>{subHeading}</h2>
                  <p>{text}</p>
                  <button className="btn btn-lg font-weight-bold" style={{color: '#f50057'}}>Learn More <i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i></button>
               </div>
                </div>
                <div className="col-6 image-col">
                    <img src={img} alt=""/>
                </div>
            </div>
        </div>
        </>
    );
};

export default ServiceInfo;