import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleDot } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'motion/react';

const Header = () => {
    return (
        <motion.div 
            className='custom_header'
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <motion.a 
                        className="navbar-brand" 
                        href="/"
                        whileHover={{ scale: 1.05, color: "var(--white)" }}
                        transition={{ duration: 0.2 }}
                    >
                        SMA://Portfolio
                    </motion.a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            <motion.li className="nav-item" whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                                <a className="nav-link" href="#about">About</a>
                            </motion.li>
                            <motion.li className="nav-item" whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                                <a className="nav-link" href="#services">Service</a>
                            </motion.li>
                            <motion.li className="nav-item" whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                                <a className="nav-link" href="#portfolio">Portfolio</a>
                            </motion.li>
                            <motion.li className="nav-item" whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                                <a className="nav-link" href="#skills">Skills</a>
                            </motion.li>
                            <motion.li className="nav-item" whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                                <a className="nav-link" href="#contact">Contact</a>
                            </motion.li>
                        </ul>
                        <div className="open_to_work">
                            <motion.button 
                                className='btn btn-transparent' 
                                type='button'
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Open To Work{" "}
                                <motion.span
                                    style={{ display: "inline-block", color: "var(--secondary)" }}
                                    animate={{ opacity: [1, 0.4, 1] }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                >
                                    <FontAwesomeIcon icon={faCircleDot} />
                                </motion.span>
                            </motion.button>
                        </div>
                    </div>
                </div>
            </nav>
        </motion.div>
    )
}

export default Header