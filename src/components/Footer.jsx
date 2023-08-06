import React from "react";
import './Footer.css'

function Footer(){
    return(
        <footer className="footer-section">
            <div className="container">
                <div className="footer-items-wrapper">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="footer-item-outer">
                                <a href="index.html" className="footer-brand-outer">
                                    <img className="brand" src="/src/assets/images/logo.svg" alt="Logo"/>
                                </a>
                                <p className="text">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                                </p>						
                                <ul className="footer-social-links">
                                    <li className="footer-social-link-item">
                                        <a href="#">
                                            <i className="fab fa-facebook-f"></i>
                                        </a>
                                    </li>
                                    <li className="footer-social-link-item">
                                        <a href="#">
                                            <i className="fab fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li className="footer-social-link-item">
                                        <a href="#">
                                            <i className="fab fa-instagram"></i>
                                        </a>
                                    </li>
                                    <li className="footer-social-link-item">
                                        <a href="#">
                                            <i className="fab fa-youtube"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="footer-item-outer">
                                <h4 className="title">
                                    Contact Info
                                </h4>
                                <ul className="footer-list">
                                    <li className="footer-list-item">
                                        <span className="footer-list-item-link">
                                        <i class="fas fa-map-marker-alt"></i>
                                            Amsterdam, Netherlands
                                        </span>
                                    </li>
                                    <li className="footer-list-item">
                                        <a className="footer-list-item-link" href="tel:012345678">
                                            <i className="fas fa-phone-volume"></i>			
                                            +012345678
                                        </a>
                                    </li>
                                    <li className="footer-list-item">
                                        <a className="footer-list-item-link" href="info@gmail.com">
                                            <i className="far fa-envelope"></i>
                                            info@gmail.com
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="footer-item-outer">
                                <h4 className="title">
                                    Quick Link
                                </h4>
                                <ul className="footer-list">
                                    <li className="footer-list-item">
                                        <a className="footer-list-item-link" href="#">
                                            About Us 
                                        </a>
                                    </li>
                                    <li className="footer-list-item">
                                        <a className="footer-list-item-link" href="#">								
                                            Contact Us
                                        </a>
                                    </li>
                                    <li className="footer-list-item">
                                        <a className="footer-list-item-link" href="#">
                                            Carrier
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="footer-item-outer">
                                <h4 className="title">
                                    Policies
                                </h4>
                                <ul className="footer-list">
                                    <li className="footer-list-item">
                                        <a className="footer-list-item-link" href="#">
                                            Privacy Policy
                                        </a>
                                    </li>
                                    <li className="footer-list-item">
                                        <a className="footer-list-item-link" href="#">								
                                            Terms & Condition
                                        </a>
                                    </li>
                                    <li className="footer-list-item">
                                        <a className="footer-list-item-link" href="#">
                                            Certificate Verification
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer