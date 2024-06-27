import React, { useEffect, useState } from 'react';
import Constructor from '../Constructor/Constructor';

const Constructors = () => {
    const [constructors, setConstructors] = useState([])
    useEffect( () => {
        fetch('https://cryptic-lake-39562.herokuapp.com/constructors')
        .then(res => res.json())
        .then(data => setConstructors(data))
    }, [])


    return (
        <div className="container services">
            <div className="service-desc text-center">
                <h1 className="services-headline"><span className="brand-color">Our Experts</span></h1>
                <div className="py-3">
                    
                </div>
            </div>
            <hr />


            <section className="doctors">
            <div className="container">
                {/* <h5 className="text-center  text-primary mb-5">Our Doctors</h5> */}
                <div className="row">
                    {
                        console.log("length is",constructors.length)
                    }
                    {
                     constructors.map(constructor =><Constructor key={constructor._id} constructor={constructor} />)
                    }
                    
                </div>
            </div>
        </section>



        </div>
    );
};

export default Constructors;
