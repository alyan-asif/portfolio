import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faHeart, faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn, faInstagram, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { motion } from 'motion/react';

const Footer = () => {
    return (
        <footer className='custom_footer' id='contact' style={{ overflow: 'hidden' }}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="footer_content">
                            <motion.h1
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                            >
                                LET’S Build Something
                            </motion.h1>
                            <motion.div 
                                className='footer_newletter_btn'
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <motion.a 
                                    href='tel:+923328212848'
                                    style={{ display: 'inline-block' }}
                                    whileHover={{ scale: 1.08, rotate: 29 }}
                                    whileTap={{ scale: 0.95 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                                >
                                    Hire Now
                                </motion.a>
                                <h2>Get in Touch</h2>
                                <motion.a 
                                    href='#portfolio'
                                    style={{ display: 'inline-block' }}
                                    whileHover={{ scale: 1.08, rotate: 25 }}
                                    whileTap={{ scale: 0.95 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                                >
                                    View Work
                                </motion.a>
                            </motion.div>
                            <motion.p
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 0.7 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                            >
                                Open to freelance, collaborations, and full-time opportunities.
                            </motion.p>
                        </div>
                    </div>
                    <div className='col-md-12'>
                        <motion.div 
                            className="footer_menu_content"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        >
                            <div className="footer_logo"><a className="navbar-brand" href="/">SMA://Portfolio</a></div>
                            <div className="footer_menu">
                                <ul className="navbar-nav">
                                    <motion.li className="nav-item" whileHover={{ x: 3 }}>
                                        <a className="nav-link" href="mailto:alyan.asif2018@gmail.com"><FontAwesomeIcon icon={faEnvelope} /> alyan.asif2018@gmail.com</a>
                                    </motion.li>
                                    <motion.li className="nav-item" whileHover={{ x: 3 }}>
                                        <a className="nav-link" href="tel:+923328212848"><FontAwesomeIcon icon={faPhone} /> +92 3328212848</a>
                                    </motion.li>
                                    <motion.li className="nav-item" whileHover={{ x: 3 }}>
                                        <a className="nav-link" href="#"><FontAwesomeIcon icon={faMapMarkerAlt} /> Karachi, Pakistan</a>
                                    </motion.li>
                                </ul>
                                <div className="footer_social_icon">
                                    <motion.a whileHover={{ y: -4, scale: 1.1 }} href='https://www.facebook.com/alyan.asif.9/' target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebookF} /></motion.a>
                                    <motion.a whileHover={{ y: -4, scale: 1.1 }} href='https://github.com/alyan-asif' target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></motion.a>
                                    <motion.a whileHover={{ y: -4, scale: 1.1 }} href='https://www.instagram.com/s_yed_alyan224/' target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></motion.a>
                                    <motion.a whileHover={{ y: -4, scale: 1.1 }} href='https://www.linkedin.com/in/muhammad-alyan-dev' target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedinIn} /></motion.a>
                                </div>
                            </div>
                        </motion.div>
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