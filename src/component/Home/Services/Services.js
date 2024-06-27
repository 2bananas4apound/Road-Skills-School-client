import React, { useEffect, useState } from 'react';
import ServiceDetail from '../ServiceDetail/ServiceDetail';
import './Services.css';


const Services = () => {
    const [services, setServies] = useState([])
    useEffect(() => {
        fetch("https://cryptic-lake-39562.herokuapp.com/Services")
            .then(res => res.json())
            .then(data => setServies(data))
    }, [])
    return (
        <div className="container services">
            <div className="service-desc text-center">
                <h1 className="services-headline"> <span className="brand-color">Breaking Barriers, Building Wellbeing</span> Services</h1>
                <div className="py-3">
                    <p>Seeking help for mental health challenges can feel daunting, especially for students <br>
                  We prioritize creating a safe and supportive space  <br /> where they feel comfortable sharing their experiences.</p>
                </div>
            </div>

            <div className="d-flex flex-wrap justify-content-center service-items">
                   {
                    services.map(service =><ServiceDetail service={service} key={service._id}></ServiceDetail>)
                }

            </div>



        </div>
    );
};

export default Services;
