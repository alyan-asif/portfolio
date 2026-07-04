import nailve from '/images/nail-ve.png';
import henry from '/images/henry.png';
import dealersignal from '/images/dealersignal.png';
import pondmegastore from '/images/pondmegastore.png';
import digistore from '/images/digistore.png';
import salestoceo from '/images/salestoceo.png';
import kopvision from '/images/kopvision.png';
import mmbuilds from '/images/mmbuilds.png';
import stoneconnect from '/images/stoneconnect.png';
import cavetopia from '/images/cavetopia.png';
import usmle from '/images/usmle.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay  } from 'swiper/modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStarOfLife, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const projects = [
  {
    title: 'NailVē – Beauty eCommerce',
    subtitle: 'Designing from Scratch',
    platform: 'Shopify',
    period: 'Apr 2026 – Present',
    status: 'active',
    link: "https://nail-ve.com/",
    desc: 'Developed a fully responsive Shopify store for an international beauty brand. Customized product templates, sections, and UX flows to boost conversions and sales.',
    tags: ['Shopify Liquid', 'Custom Sections', 'Metafields', 'Responsive Design'],
    background: nailve,
  },
  {
    title: 'Pond Mega Store',
    subtitle: 'Store Revamp',
    platform: 'Shopify',
    period: 'Mar 2026 – Present',
    status: 'active',
    link: "https://pondmegastore.com/",
    desc: 'Revamped Shopify store with structured theme architecture, custom Liquid components, and metafields. Integrated an AI Chatbot for customer communication.',
    tags: ['Liquid', 'Metafields', 'AI Chatbot', 'Theme Architecture', 'Responsive Design'],
    background: pondmegastore,
  },
  {
    title: 'DigiStoreDirect',
    subtitle: 'Frontend Development',
    platform: 'Laravel',
    period: 'Nov 2024 – Nov 2025',
    status: 'completed',
    link: "https://digistoredirect.com/",
    desc: 'Built responsive eCommerce UIs using Laravel Blade templates. Integrated APIs, created reusable components, and optimized performance across all devices from scratch.',
    tags: ['Laravel Blade', 'API Integration', 'Reusable Components', 'Dashboard Customization', 'Custom CMS'],
    background: digistore,
  },

  // New Projects

  {
    title: 'Dealer Signal Co.',
    subtitle: 'Business Website',
    platform: 'WordPress',
    period: '2025',
    status: 'completed',
    link: "http://dealersignalco.com/",
    desc: 'Developed a responsive corporate website with custom layouts, optimized performance, and modern UI components to provide a seamless user experience.',
    tags: ['WordPress', 'Custom Layouts', 'Responsive Design', 'Performance'],
    background: dealersignal,
  },

  {
    title: 'MyStoreConnect',
    subtitle: 'eCommerce Platform',
    platform: 'WordPress',
    period: '2025',
    status: 'completed',
    link: "https://staging.devcustomprojects.com/mystoreconnect",
    desc: 'Created reusable frontend components and integrated custom functionality for a scalable multi-store management platform with different roles.',
    tags: ['WordPress', 'Custom Components', 'Multiple User Roles', 'Custom Forms'],
    background: stoneconnect,
  },

  {
    title: 'MM Builds',
    subtitle: 'Construction Website',
    platform: 'WordPress',
    period: '2025',
    status: 'completed',
    link: "https://staging.devcustomprojects.com/mm_builds/",
    desc: 'Implemented modern landing pages with custom sections, deployed projects, and mobile-first layouts to showcase construction services professionally.',
    tags: ['WordPress', 'Custom Sections', 'Custom ACF Fields', 'Mobile First'],
    background: mmbuilds,
  },

  {
    title: 'From Sales To CEO',
    subtitle: 'Business Coaching Platform',
    platform: 'WordPress',
    period: '2025',
    status: 'completed',
    link: "http://fromsalestoceo.com/",
    desc: 'Designed and developed a conversion-focused business coaching website featuring optimized landing pages, reusable components, and responsive layouts.',
    tags: ['WordPress', 'Landing Pages', 'UI/UX', 'Responsive'],
    background: salestoceo,
  },

  {
    title: 'Henry-Griffitts',
    subtitle: 'Golf Equipment Website',
    platform: 'Laravel',
    period: '2025',
    status: 'completed',
    link: "https://henry-griffitts.thebackendprojects.com/",
    desc: 'Customized frontend layouts and interactive product pages while maintaining responsive design and consistent branding across the website.',
    tags: ['Laravel', 'Product Pages', 'Custom UI', 'Responsive', 'Dashboard'],
    background: henry,
  },

  {
    title: 'USMLE Learning Platform',
    subtitle: 'Educational Portal',
    platform: 'Laravel',
    period: '2025',
    status: 'completed',
    link: "https://usmle.thebackendprojects.com/",
    desc: 'Developed responsive educational interfaces with reusable Blade components, dynamic content integration, and optimized user journeys.',
    tags: ['Laravel', 'Blade', 'Education', 'Responsive UI'],
    background: usmle,
  },

  {
    title: 'The Cavetopia',
    subtitle: 'eCommerce Store',
    platform: 'WordPress',
    period: '2025',
    status: 'completed',
    link: "https://thecavetopia.com/",
    desc: 'Built a modern WordPress storefront with customized sections, optimized product pages, and a seamless shopping experience across all devices.',
    tags: ['WordPress', 'Custom Sections', 'WooCommerce', 'eCommerce'],
    background: cavetopia,
  },
  {
    title: 'KOP Vision',
    subtitle: 'Digital Signage Platform',
    platform: 'Wix',
    period: '2025',
    status: 'completed',
    link: 'https://kopvision.com/',
    desc: 'Developed and customized a modern Wix website for a digital signage platform, creating responsive layouts, engaging landing pages, and an optimized user experience across desktop and mobile devices.',
    tags: ['Wix', 'Responsive Design', 'Landing Pages', 'UI/UX', 'Manage CMS'],
    background: kopvision,
    link: 'https://kopvision.com/',
  },
];

export default function FeaturedProjects() {
  return (
    <div className="our_featured_products featured_slider_section" id="portfolio">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="featured_content">
              <span className="custom_text_design">
                <FontAwesomeIcon icon={faStarOfLife} /> Featured Projects
              </span>
              <h3>
                OUR CREATIVE <span className="text_shadow">SHOWCASE</span>
              </h3>
            </div>

            <div className="featured_slider">
              <Swiper
                modules={[Pagination, , Autoplay]}
                spaceBetween={24}
                slidesPerView={1}
                autoplay={{
                  delay: 3000,                   
                  disableOnInteraction: false,   
                  pauseOnMouseEnter: true,       
                }}
                loop={true}
                pagination={{ clickable: true }}
                breakpoints={{
                  768: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                }}
                className="projects_swiper"
              >
                {projects.map((p) => (
                  <SwiperSlide key={p.title}>
                    <div className="project_card">
                      <div
                        className="project_card_top"
                        style={{ background: p.background }} style={{
                          backgroundImage: `url(${p.background})`,
                          backgroundSize: 'contain',
                          backgroundPosition: 'center',
                        }}
                      >
                        <span className="platform_badge">{p.platform}</span>
                        <span className={`status_dot ${p.status}`}></span>
                      </div>
                      <div className="project_body">
                        <div className="project_subtitle">{p.subtitle}</div>
                        <h5 className="project_title">{p.title}</h5>
                        <p className="project_desc">{p.desc}</p>
                        <div className="project_tags">
                          {p.tags.map((t) => (
                            <span className="project_tag" key={t}>{t}</span>
                          ))}
                        </div>
                      </div>
                      <div className="project_footer">
                        <span className="project_period">{p.period}</span>
                        <a href={p.link} target="_blank" rel="noopener noreferrer" className="card_more_detail">
                          VIEW PROJECT
                          <span>
                            <FontAwesomeIcon icon={faArrowUp} style={{ transform: 'rotate(45deg)' }} />
                          </span>
                        </a>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}