import React from "react"


import "./footer.css";

function Footer() {
    return (
        <footer>
            <div className="content">
                <div className="top">
                    <div className="logo-details">
                    </div>
                    <div className="media-icons">
                        
                    </div>
                </div>
                <div className="link-boxes">
                    <ul className="footer-box">
                        <li className="link_name">Get started</li>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Careers</a></li>
                    </ul>
                    <ul className="footer-box">
                        <li className="link_name">Products</li>
                        <li><a href="#">Atom AC Wallbox</a></li>
                        <li><a href="#">Atom AC Charger 22kW</a></li>
                        <li><a href="#">Atom DC Charger</a></li>
                        <li><a href="#">IoT (Agri & Industrial )</a></li>

                    </ul>
                    <ul className="footer-box">
                        <li className="link_name">Support</li>
                        <li><a href="#">Customer Care No : +91 9705802137</a></li>
                        <li><a href="#">Email : info@axonifytech.com</a></li>
                    </ul>
                    <ul className="footer-box">
                        <li><a href="#">Get in Touch</a></li>
                    </ul>




                </div>
            </div>
            <div className="bottom-details">
                <div className="bottom_text">
                    <span className="copyright_text"> ©Copyright 2020 by Axonify Tech Systems. All Rights Reserved.</span>
                </div>
            </div>
        </footer>

    )
}

export default Footer;