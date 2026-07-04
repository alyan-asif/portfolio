import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faArrowUp, faStarOfLife, faCircleDot} from '@fortawesome/free-solid-svg-icons';
import heroImg from '/images/hero-img.jpg';
import heroImg2 from '/images/banner_img.png';

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
                                                {/* <div className='banner_ring'></div> */}
                                                <div className="banner_image">
                                                    <img src={heroImg2} alt="" />
                                                </div>
                                                {/* <div className='orbit_ring'><FontAwesomeIcon icon={faCircleDot} /></div>
                                                <div className='orbit_ring'><FontAwesomeIcon icon={faCircleDot} /></div> */}
                                            </div>
                                        </div>
                                        <div className="col-md-7">
                                            <div className="banner_content">
                                                <span className='custom_text_design'><FontAwesomeIcon icon={faStarOfLife} /> SOFTWARE ENGINEER · KARACHI, PK</span>
                                                <h1>
                                                    Muhammad <span className='text_shadow'>Alyan</span>
                                                </h1>
                                                <div className="hero-content">
                                                    <h6 className="hero-role">@ Tafsol Technologies — <span>Associate Front End Developer</span></h6>
                                                    <p className="hero-desc">
                                                        Building performant, pixel-perfect web experiences. Skilled in Laravel frontend, CMS Platforms, and
                                                        responsive design. Currently expanding Skills into MERN Stack, Agentic AI & Chatbots.
                                                    </p>
                                                    <div className="hero-btn">
                                                        <a href="#portfolio" className="btn-global">View My Work</a>
                                                        <a href="#contact" className="btn-global btn-transparent">Get In Touch</a>
                                                    </div>
                                                </div>
                                            </div>
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