import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStarOfLife, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'motion/react';

const skills = [
  { icon: '🌐', label: 'HTML / CSS' },
  { icon: '🅦', label: 'WordPress' },
  { icon: '🛒', label: 'Shopify' },
  { icon: '🔴', label: 'Laravel' },
  { icon: '⚛', label: 'React JS' },
  { icon: '💅', label: 'Bootstrap / Tailwind' },
  { icon: '📱', label: 'Responsive Design' },
  { icon: '🎨', label: 'Custom Layout' },
  { icon: '🌐', label: 'Wix / Velo' },
  { icon: '🤖', label: 'AI Chatbots' },
  { icon: '💧', label: 'Shopify Liquid' },
  { icon: '🐙', label: 'Git' },
  { icon: '💻', label: 'Vs Code' },
  { icon: '🎨', label: 'Figma' },
  { icon: '👥', label: 'Team Collaboration' },
  { icon: '💡', label: 'Problem Solving' },
];

const experience = [
  {
    role: 'Associate Frontend Developer',
    company: 'Tafsol Technologies',
    period: 'Sep 2024 – Present · Karachi',
    desc: 'Delivered client websites on WordPress, Shopify, Wix & Laravel. Built Shopify stores with Liquid, theme sections & metafields. Maintained Wix sites via Velo CMS.',
    list:["Built 15+ websites","Laravel Blade UI Development", "Shopify Theme Development","WordPress Customization"],
    badge: 'Current',
    color: 'var(--primary)',
  },
  {
    role: 'Frontend Developer Intern',
    company: 'Tafsol Technologies',
    period: 'Mar 2024 – Sep 2024 · Karachi',
    desc: 'Collaborated on team projects, worked within tight deadlines, and gained hands-on experience in fast-paced development cycles.',
    list: [],
    badge: 'Internship',
    color: 'var(--secondary)',
  },
];

const education = [
  {
    degree: 'B.S. Software Engineering',
    institute: 'Sir Syed University of Engineering & Technology',
    period: 'Nov 2020 – Apr 2024 · Karachi',
    desc: 'Graduated with a 3.3 CGPA, building a strong foundation in software development, problem-solving, and engineering principles.',
    list: ['3.3 CGPA', 'Gold Medal – Best FYP Project (IEEP Symposium)'],
    badge: 'Degree',
    color: 'var(--primary)',
  },
  {
    degree: 'Agentic AI & Chatbot',
    institute: 'Saylani Mass IT Training Program',
    period: 'Mar 2026 – Present',
    desc: 'Currently building hands-on expertise in agentic AI systems and chatbot development.',
    list: [],
    badge: 'In Progress',
    color: 'var(--secondary)',
  },
  {
    degree: 'MERN Stack Development Course',
    institute: 'HNS Cloud Hub Institute',
    period: 'Jan 2026 – Present',
    desc: 'Completed a focused program on the MongoDB, Express, React & Node.js stack.',
    list: [],
    badge: 'Course',
    color: 'var(--primary)',
  },
  {
    degree: 'Internet Of Things (IOT)',
    institute: 'NAVTCC Sir Syed University',
    period: 'Mar 2021 – Jan 2022',
    desc: 'Completed certified training in IoT fundamentals and applications.',
    list: ['A Grade'],
    badge: 'Certification',
    color: 'var(--secondary)',
  },
];

const valuedContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

const valuedItemVariants = {
  hidden: { x: -30, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export default function AboutSection() {
  return (
    <>

      {/* <!-- About Section --> */}

      <div className="about_section about_section_enhanced" id="about">
        <div className="container">
          <div className="row">

            {/* <!-- LEFT COL --> */}
            <motion.div 
              className="col-md-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className='about-left-content'>
                <h3>CRAFTING DIGITAL <span className='text_shadow'>EXPERIENCES</span> BUILDING WITH PURPOSE <span className='custom_text_design'><FontAwesomeIcon icon={faStarOfLife} /> ABOUT ME</span></h3>
                <div className='year_exp'>
                  <motion.h1
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
                  >
                    2
                  </motion.h1>
                  <div className='year_exp_text'>
                    <motion.h2
                      initial={{ rotate: -45, scale: 0 }}
                      whileInView={{ rotate: 0, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.3, type: "spring" }}
                    >
                      +
                    </motion.h2>
                    <h4>YEARS OF EXPERIENCE</h4>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* <!-- RIGHT COL --> */}
            <div className="col-md-6">
              <div className="about_content">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  Frontend & CMS Developer with 2+ years of experience building
                  responsive and scalable web applications using
                  Shopify, WordPress, Laravel Blade, Wix, React and Webflow.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.15 }}
                >
                  I focus on creating fast, accessible, and conversion-oriented
                  digital experiences for businesses worldwide.
                </motion.p>
                <motion.div 
                  className='about_valued'
                  variants={valuedContainerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <motion.div className='about_valued_content' variants={valuedItemVariants}><h5>Project Completed</h5><h3>20+</h3></motion.div>
                  <motion.div className='about_valued_content' variants={valuedItemVariants}><h5>Platforms Mastered</h5><h3>4</h3></motion.div>
                  <motion.div className='about_valued_content' variants={valuedItemVariants}><h5>Responsive Solutions</h5><h3>100%</h3></motion.div>
                  <motion.div className='about_valued_content' variants={valuedItemVariants}><h5>CGPA</h5><h3>3.3</h3></motion.div>
                </motion.div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* <!-- Skills Section --> */}

      <div className="skills_section" id="skills">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <motion.div 
                className="edu_block"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.8 }}
              >
                <span className="custom_text_design">
                  <FontAwesomeIcon icon={faStarOfLife} /> Education
                </span>
                <div className="edu_timeline">
                  {education.map((edu, index) => (
                    <motion.div
                      className="edu_item"
                      key={edu.degree}
                      style={{ borderLeftColor: edu.color }}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ scale: 1.02, y: -4, borderColor: edu.color }}
                    >
                      <span
                        className="edu_badge"
                        style={{ color: edu.color, borderColor: edu.color }}
                      >
                        {edu.badge}
                      </span>
                      <div className="edu_degree">{edu.degree}</div>
                      <div className="edu_institute" style={{ color: edu.color }}>
                        {edu.institute}
                      </div>
                      <div className="edu_period">{edu.period}</div>
                      <p className="edu_desc">{edu.desc}</p>
                      {edu.list.length > 0 && (
                        <ul>
                          {edu.list.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      )}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
            <div className="col-md-6">
              <motion.div 
                className="skills_block"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.8 }}
              >
                <span className="custom_text_design">
                  <FontAwesomeIcon icon={faStarOfLife} /> Skills & Expertise
                </span>
                <div className="skills_grid">
                  {skills.map((skill, index) => (
                    <motion.div 
                      className="skill_pill" 
                      key={skill.label}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.04 }}
                      whileHover={{ scale: 1.05, borderColor: "var(--primary)" }}
                    >
                      <span className="skill_icon">{skill.icon}</span>
                      <span>{skill.label}</span>
                    </motion.div>
                  ))}
                </div>
               </motion.div>
            </div>
            <div className="col-md-6">
              <motion.div 
                className="exp_block"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.8 }}
              >
                <span className="custom_text_design">
                  <FontAwesomeIcon icon={faStarOfLife} /> Work Experience
                </span>
                <div className="exp_timeline">
                  {experience.map((exp, index) => (
                    <motion.div
                      className="exp_item"
                      key={exp.role}
                      style={{ borderLeftColor: exp.color }}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ scale: 1.02, y: -4, borderColor: exp.color }}
                    >
                      <span
                        className="exp_badge"
                        style={{ color: exp.color, borderColor: exp.color }}
                      >
                        {exp.badge}
                      </span>
                      <div className="exp_role">{exp.role}</div>
                      <div className="exp_company" style={{ color: exp.color }}>
                        {exp.company}
                      </div>
                      <div className="exp_period">{exp.period}</div>
                      <p className="exp_desc">{exp.desc}</p>
                      <ul>
                          {exp.list.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}