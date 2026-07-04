import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-solid-svg-icons';

export default function Resume() {
    return (
        <div className="resume_section" id="resume">
            <a
                href="/Syed Muhammad Alyan Resume.pdf"
                download="Muhammad_Alyan_Resume.pdf"
                className="resume_download_btn" title="Download Resume"
            >
                <FontAwesomeIcon icon={faFile} />
            </a>
        </div>
    )
}
