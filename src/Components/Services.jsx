import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStarOfLife } from '@fortawesome/free-solid-svg-icons';
import FrontEnd from '/images/service1.png'
import Wordpress from '/images/service2.png'
import Laravel from '/images/service3.png'
import Shopify from '/images/service4.png'
import Wix from '/images/service5.png'
import { motion } from 'motion/react';


const services = [
    {
        title: "Frontend Development",
        desc: "Responsive and interactive websites with React, HTML/CSS, Bootstrap, and Tailwind CSS.",
        image: FrontEnd,
    },
    {
        title: "WordPress Development",
        desc: "Theme customization, Elementor, custom layouts, and performance optimization.",
        image: Wordpress,
    },
    {
        title: "Wix",
        desc: "Modern business websites with CMS integration and responsive design.",
        image: Wix,
    },
    {
        title: "Laravel Frontend",
        desc: "Blade templates, reusable components, and scalable UI development.",
        image: Laravel,
    },
    {
        title: "Shopify Development",
        desc: "Custom themes, Liquid sections, metafields, and optimized eCommerce experiences.",
        image: Shopify,
    },
];

export default function Services() {
    return (
        <div className="our_process_section">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <motion.div 
                            className="process_content"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className='custom_text_design'><FontAwesomeIcon icon={faStarOfLife} />WHAT I DO</span>
                            <h3>
                                SERVICES
                            </h3>
                        </motion.div>
                        <div className="process_detail">
                            <div className="row">
                                {services.map((service, index) => (
                                    <div className="col-md-4" key={index}>
                                        <motion.div 
                                            className="process_cards_data"
                                            initial={{ opacity: 0, y: 40 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.6, delay: index * 0.1 }}
                                            whileHover={{ y: -8, scale: 1.03 }}
                                            style={{
                                                height: '100%'
                                            }}
                                        >
                                            <motion.div 
                                                className="process_img"
                                                whileHover={{ scale: 1.1, rotate: 2 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <img src={service.image} alt={service.title} />
                                            </motion.div>

                                            <div className="process_text">
                                                <h5>{service.title}</h5>
                                                <p>{service.desc}</p>
                                            </div>
                                        </motion.div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
