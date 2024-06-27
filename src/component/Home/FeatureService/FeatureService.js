import React from 'react';
import './FeatureService.css';


const FeatureService = () => {
    return (
        <section className="container feature">
      
            <div className="d-flex justify-content-center">
                <div className="text-dark feature-service-box text-center shadow-lg p-3 mb-5 bg-white rounded">
                    <div className="p-4">
                        <h4>Consult Anonymously</h4>
                    </div>
                </div>

                <div className=" text-dark feature-service-box text-center shadow-lg p-3 mb-5 bg-white rounded">
                    <div className="p-4">
                        <h4>Licensed Experts</h4>
                    </div>
                </div>
                <div className=" text-dark text-center feature-service-box shadow-lg p-3 mb-5 bg-white rounded">
                    <div className="p-4">
                        <h4>Free of Cost</h4>
                    </div>
                </div>
            </div>
         
        </section >
    );
};

export default FeatureService;
