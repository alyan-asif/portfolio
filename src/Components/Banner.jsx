import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faArrowUp, faStarOfLife, faCircleDot} from '@fortawesome/free-solid-svg-icons';
import heroImg from '/images/hero-img.jpg';
import heroImg2 from '/images/banner_img.png';
import { motion } from 'motion/react';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.8,
            ease: "easeOut"
        }
    }
};

function Banner() {
    return (
        <>
            <div className='home_banner'>
                <div className='container'>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="banner_detail">
                                <div className="banner_body">
                                    <div className='row'>
                                        <div className="col-md-5">
                                            <div className='banner_animate_image'>
                                                <motion.div 
                                                    className="banner_image"
                                                    initial={{ scale: 0.8, opacity: 0 }}
                                                    animate={{ 
                                                        scale: 1, 
                                                        opacity: 1,
                                                        y: [0, -12, 0]
                                                    }}
                                                    transition={{
                                                        scale: { duration: 1.2, ease: "easeOut" },
                                                        opacity: { duration: 1.2 },
                                                        y: {
                                                            duration: 6,
                                                            repeat: Infinity,
                                                            ease: "easeInOut"
                                                        }
                                                    }}
                                                >
                                                    <img src={heroImg} alt="Muhammad Alyan" />
                                                </motion.div>
                                            </div>
                                        </div>
                                        <div className="col-md-7">
                                            <motion.div 
                                                className="banner_content"
                                                variants={containerVariants}
                                                initial="hidden"
                                                animate="visible"
                                            >
                                                <motion.span className='custom_text_design' variants={itemVariants}>
                                                    <FontAwesomeIcon icon={faStarOfLife} /> SOFTWARE ENGINEER · KARACHI, PK
                                                </motion.span>
                                                <motion.h1 variants={itemVariants}>
                                                    Muhammad <span className='text_shadow'>Alyan</span>
                                                </motion.h1>
                                                <motion.div className="hero-content" variants={itemVariants}>
                                                    <h6 className="hero-role">@ Tafsol Technologies — <span>Associate Front End Developer</span></h6>
                                                    <p className="hero-desc">
                                                        Building performant, pixel-perfect web experiences. Skilled in Laravel frontend, CMS Platforms, and
                                                        responsive design. Currently expanding Skills into MERN Stack, Agentic AI & Chatbots.
                                                    </p>
                                                    <div className="hero-btn">
                                                        <motion.a 
                                                            href="#portfolio" 
                                                            className="btn-global"
                                                            whileHover={{ scale: 1.05 }}
                                                            whileTap={{ scale: 0.95 }}
                                                        >
                                                            View My Work
                                                        </motion.a>
                                                        <motion.a 
                                                            href="#contact" 
                                                            className="btn-global btn-transparent"
                                                            whileHover={{ scale: 1.05, borderColor: "var(--primary)" }}
                                                            whileTap={{ scale: 0.95 }}
                                                        >
                                                            Get In Touch
                                                        </motion.a>
                                                    </div>
                                                </motion.div>
                                            </motion.div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>


    )
}

export default Banner