import React from 'react';
import FooterDetail from '../FooterDetail/FooterDetail';

const Footer = () => {
    const noNamed = [
        {name: "Psych-Friend" , link: "/road"},
             
    ]
    const ourAddress = [
        {name: "New York - 101010 Hudson" , link: "//google.com/map"},
        {name: "Yards" , link: "//google.com/map"},
       
    ]
    const oralHealth = [
        {name: "Emergency Dental Care" , link: "/emergency"},
        {name: "Check Up" , link: "/checkup"},
        {name: "Treatment of Personal Diseases" , link: "/personal-treatment"},
        {name: "Tooth Extraction" , link: "/tooth-extract"},
        {name: "Check Up" , link: "/checkup"},
        {name: "Check Up" , link: "/checkup"},
        {name: "Check Up" , link: "/checkup"}
    ]
    const services = [
        {name: "Dashboard" , link: "/dashboard"},
        {name: "Appointment" , link: "/appointment"},
        {name: "Login" , link: "/login"},
    ]
    return (
        <footer className="footer-area clear-both footer-bg-color">
            <div className="container pt-5">
                <div className="row py-5">
                    <FooterDetail key={1} menuTitle={"Psych-Friend"} menuItems={noNamed}/>
                    <FooterDetail key={2} menuTitle="Links" menuItems={services}/>
                    <FooterDetail key={4} menuTitle="Contact" menuItems={ourAddress}> 
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com">Facebook</a></li>
                            <li className="list-inline-item"><a href="//google.com">Google</a></li>
                            <li className="list-inline-item"><a href="//instagram.com">Instragram</a></li>
                        </ul>
                        <div className="mt-5">
                            <h6>Call now</h6>
                            <button className="btn btn-brand">+2025550295</button>
                        </div>
                    </FooterDetail>
                </div>
                <div className="copyRight text-center">
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
