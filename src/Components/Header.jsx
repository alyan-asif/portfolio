import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleDot } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <div className='custom_header'>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">SMA://Portfolio</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="#about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#services">Service</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#portfolio">Portfolio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#skills">Skills</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#contact">Contact</a>
                            </li>
                        </ul>
                        <div className="open_to_work">
                            <button className='btn btn-transparent' type='button'>Open To Work <FontAwesomeIcon icon={faCircleDot} /></button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header