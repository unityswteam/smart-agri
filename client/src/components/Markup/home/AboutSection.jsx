
import { Link } from 'react-router-dom';

// Import Images
import AboutShape1 from "../../../assets/template_assets/images/shapes/about-one-shape-1.png";
import SectionTitleIcon from "../../../assets/template_assets/images/icon/section-title-icon-1.png";
import AboutImg1 from "../../../assets/template_assets/images/resources/about-one-img-1.jpg";
import AboutImg2 from "../../../assets/template_assets/images/resources/about-one-img-2.jpg";
import CeoImg from "../../../assets/template_assets/images/resources/about-one-ceo-img.jpg";

const AboutSection = () => {
  return (
    <>
      {/* About One Start */}
      <section className="about-one">
        {/* Floating Shape */}
        <div className="about-one-shape-1 float-bob-x">
          <img src={AboutShape1} alt="Decorative shape" />
        </div>

        <div className="container">
          <div className="row">

            {/* Left Content */}
            <div className="col-xl-6">
              <div className="about-one__left">
                <div className="section-title text-left">
                  <span className="section-title__tagline">Get to Know Agrion</span>
                  <h2 className="section-title__title">
                    Agrion is the Agriculture and Organic farm
                  </h2>
                  <div className="section-title__icon">
                    <img src={SectionTitleIcon} alt="Section icon" />
                  </div>
                </div>

                <p className="about-one__text-1">
                  We’ve 20 years of agriculture farming experience.
                </p>
                <p className="about-one__text-2">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim dolore veniam.
                </p>

                {/* Check List */}
                <ul className="list-unstyled about-one__points">
                  <li>
                    <div className="icon">
                      <span className="icon-tick"></span>
                    </div>
                    <div className="text">
                      <p>There are many variations of passage of lorem.</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-tick"></span>
                    </div>
                    <div className="text">
                      <p>Available but the majority alteration.</p>
                    </div>
                  </li>
                </ul>

                {/* Button + CEO */}
                <div className="about-one__btn-and-ceo">
                  <div className="about-one__btn-box">
                    <Link to="/about" className="thm-btn about-one__btn">
                      About More <i className="icon-right-arrow"></i>
                    </Link>
                  </div>
                  <div className="about-one__ceo">
                    <div className="about-one__ceo-img">
                      <img src={CeoImg} alt="Mike Hardson - CEO" />
                    </div>
                    <div className="about-one__ceo-content">
                      <h4 className="about-one__ceo-name">Mike Hardson</h4>
                      <p className="about-one__ceo-title">CEO of Agrion</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Images + Video */}
            <div className="col-xl-6">
              <div className="about-one__right">
                <div
                  className="about-one__img-box wow slideInRight"
                  data-wow-delay="100ms"
                  data-wow-duration="2500ms"
                >
                  <div className="about-one__img-one">
                    <img src={AboutImg1} alt="Farm field" />
                  </div>
                  <div className="about-one__img-two">
                    <img src={AboutImg2} alt="Organic produce" />
                  </div>

                  {/* Video Popup Link */}
                  <div className="about-one__video-link">
                    <a
                      href="https://www.youtube.com/watch?v=Get7rqXYrbQ"
                      className="video-popup"
                      aria-label="Play video"
                    >
                      <div className="about-one__video-icon">
                        <span className="fa fa-play"></span>
                        <i className="ripple"></i>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About One End */}
    </>
  );
};

export default AboutSection;