import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faHeart, faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn, faInstagram, faFacebookF } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className='custom_footer' id='contact'>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="footer_content">
                            <h1>LET’S Build Something</h1>
                            <div className='footer_newletter_btn'>
                                <a href='tel:+923328212848'>Hire Now</a>
                                <h2>Get in Touch</h2>
                                <a href='#portfolio'>View Work</a>
                            </div>
                            <p>Open to freelance, collaborations, and full-time opportunities.</p>
                        </div>
                    </div>
                    <div className='col-md-12'>
                        <div className="footer_menu_content">
                            <div className="footer_logo"><a className="navbar-brand" href="/">SMA://Portfolio</a></div>
                            <div className="footer_menu">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <a className="nav-link" href="mailto:alyan.asif2018@gmail.com"><FontAwesomeIcon icon={faEnvelope} /> alyan.asif2018@gmail.com</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="tel:+923328212848"><FontAwesomeIcon icon={faPhone} /> +92 3328212848</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#"><FontAwesomeIcon icon={faMapMarkerAlt} /> Karachi, Pakistan</a>
                                    </li>
                                </ul>
                                <div className="footer_social_icon">
                                    <a href='https://www.facebook.com/alyan.asif.9/' target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebookF} /></a>
                                    <a href='https://github.com/alyan-asif' target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
                                    <a href='https://www.instagram.com/s_yed_alyan224/' target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
                                    <a href='https://www.linkedin.com/in/muhammad-alyan-dev' target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="footer_bootom_text">
                            <p>© 2025 Muhammad Alyan</p>
                            <p>Front End Developer · Karachi, PK</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer