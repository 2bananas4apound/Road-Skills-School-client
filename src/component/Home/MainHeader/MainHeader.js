import React from 'react';
import { Link } from 'react-router-dom';
import FeatureService from '../FeatureService/FeatureService';
import './MainHeader.css';
const MainHeader = () => {
    return (
        <main className="py-5">
            <div className="main-header">
                <div className="container-headline">
                    <h1 className="text-white">Supporting Student Wellness<br /> <span className="headline-span">Free Therapy Services</span></h1>
                    <div className="hr-style">
                        <hr />
                    </div>
                </div>
                <div className="header-desc py-5">
                    <div className="header-top-desc text-white">
                        <ul className="header-list">
                            <li>No Scheduling Conflicts </li>
                            <li>Full Confidentiality </li>
                            <li>Free of Cost Online and In-person Sessions</li>
                            <li>Consult Anonymously From Anywhere</li>
                        </ul>
                    </div>
                    <div className="header-bottom-desc d-flex">
                        <button className="btn btn-primary btn-block btn-lg"><Link to="/appointment" className="registerBtn">Book a Session</Link></button>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default MainHeader;
