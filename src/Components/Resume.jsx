import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'motion/react';

export default function Resume() {
    return (
        <motion.div 
            className="resume_section" 
            id="resume"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1 }}
        >
            <motion.a
                href="/Syed Muhammad Alyan Resume.pdf"
                download="Muhammad_Alyan_Resume.pdf"
                className="resume_download_btn" 
                title="Download Resume"
                whileHover={{ 
                    scale: 1.15, 
                    y: -5,
                    boxShadow: "0px 8px 24px rgba(88, 166, 255, 0.4)"
                }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
            >
                <FontAwesomeIcon icon={faFile} />
            </motion.a>
        </motion.div>
    )
}
