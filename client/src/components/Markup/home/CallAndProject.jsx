import React from 'react';
import { Link } from 'react-router-dom';

// Import Images
import BgShape from '../../../assets/template_assets/images/shapes/project-one-shape-1.png';
import SectionIcon from '../../../assets/template_assets/images/icon/section-title-icon-1.png';

import Project1 from '../../../assets/template_assets/images/project/project-one-1.jpg';
import Project2 from '../../../assets/template_assets/images/project/project-one-2.jpg';
import Project3 from '../../../assets/template_assets/images/project/project-one-3.jpg';
import Project4 from '../../../assets/template_assets/images/project/project-one-4.jpg';

const CallAndProject = () => {
  const projects = [
    { img: Project1, tag: 'healthy', title: ['organic', 'solutions'], delay: '100ms' },
    { img: Project2, tag: 'farming', title: ['Harvest', 'Innovations'], delay: '200ms' },
    { img: Project3, tag: 'organic', title: ['Agriculture', 'farming'], delay: '300ms' },
    { img: Project4, tag: 'solution', title: ['the Farming', 'season'], delay: '400ms' },
  ];

  return (
    <>
      {/* Call One Section */}
      <section className="call-one">
        <div className="container">
          <div className="call-one__inner wow fadeInUp" data-wow-delay="100ms">
            <div className="call-one__left">
              <h3 className="call-one__content">Healthy products</h3>
              <div className="call-one__icon">
                <span className="icon-phone-ringing"></span>
              </div>
            </div>
            <div className="call-one__right">
              <div className="call-one__contact-info">
                <p>Lorem ipsum dolor sit am cons sid</p>
                {/* FIXED: Removed extra </a> and "as" */}
                <a href="tel:12463330088">+ 1- (246) 333-0088</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project One Section */}
      <section className="project-one">
        <div
          className="project-one__bg float-bob-y-2"
          style={{ backgroundImage: `url(${BgShape})` }}
        ></div>

        <div className="container">
          <div className="section-title text-center">
            <span className="section-title__tagline">Our Latest Projects</span>
            <h2 className="section-title__title">Recently completed Projects</h2>
            <div className="section-title__icon">
              <img src={SectionIcon} alt="" />
            </div>
          </div>

          <div className="row">
            {projects.map((project, index) => (
              <div
                key={index}
                className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay={project.delay}
              >
                <div className="project-one__single">
                  <div className="project-one__inner">
                    <div className="project-one__img">
                      <img src={project.img} alt="" />
                    </div>
                    <div className="project-one__arrow">
                      <Link to="/project-details">
                        <i className="icon-right-arrow"></i>
                      </Link>
                    </div>
                    <div className="project-one__content">
                      <span className="project-one__tagline">{project.tag}</span>
                      <h3 className="project-one__title">
                        <Link to="/project-details">
                          {project.title[0]}<br />{project.title[1]}
                        </Link>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CallAndProject;