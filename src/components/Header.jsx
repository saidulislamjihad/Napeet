import React from "react";
import './Header.css'

function Header(){
    return(
        <header className="header-section">
            <div className="container">
                <nav className="nav-items-wrapper">	
                    <a href="#" className="brand-logo-outer">
                        <img className="brand" src="/src/assets/images/logo.svg" alt="Logo" />
                    </a>
                    <div className="nav-toggle-btn">
                        <div className="btn-inner"></div>
                    </div>    		 
                    <ul className="nav-list">
                        <li className="nav-item">
                            <a href="#" className="nav-item-link">
                                Home
                            </a>
                        </li>
                        <li className="nav-item item-has-submenu">
                            <a href="#" className="nav-item-link">
                                Shop
                                <i className="fa fa-chevron-down"></i>
                            </a>
                            <ul className="submenu-list">
                                <li className="submenu-list-item">
                                    <a href="#" className="submenu-list-item-link">
                                        Mission and vision
                                    </a>
                                </li>
                                <li className="submenu-list-item">
                                    <a href="#" className="submenu-list-item-link">
                                        It Management

                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-item-link">
                                Services
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-item-link">
                                Blog
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-item-link">
                                About
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-item-link">
                                Contact
                            </a>
                        </li>
                    </ul>
                    <div className="book-appointment-btn-outer">
                        <a href="#" className="book-appointment-btn-inner custom-btn">
                            Book Appointment
                        </a>
                    </div>    
                </nav>
            </div>
        </header>
    )
}

export default Header