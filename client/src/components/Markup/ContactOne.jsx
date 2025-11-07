import React from 'react';
import { Link } from 'react-router-dom';

// Import Images
import SectionIcon from '../../assets/template_assets/images/icon/section-title-icon-1.png';
import BgShape from '../../assets/template_assets/images/shapes/counter-one-shape-1.png';

const ContactOne = () => {
  return (
    <section className="contact-one">
      <div className="container">
        <div className="row">
          {/* Left: Contact Info */}
          <div className="col-xl-4 col-lg-5">
            <div className="contact-one__left">
              <div className="section-title text-left">
                <span className="section-title__tagline">Contact Now</span>
                <h2 className="section-title__title">Get in touch now</h2>
                <div className="section-title__icon">
                  <img src={SectionIcon} alt="" />
                </div>
              </div>

              <p className="contact-one__text">
                Lorem ipsum dolor sit amet, adipiscing elit. In hac habitasse platea dictumst. Duis porta, <br />
                quam ut finibus ultrices.
              </p>

              <ul className="list-unstyled contact-one__contact-list">
                <li>
                  <div className="icon">
                    <span className="fas fa-phone-alt"></span>
                  </div>
                  <div className="content">
                    <p>Have Question?</p>
                    <h4>
                      <a href="tel:9288009850">Free +92 (8800)-9850</a>
                    </h4>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <span className="fas fa-envelope"></span>
                  </div>
                  <div className="content">
                    <p>Write Email</p>
                    <h4>
                      <a href="mailto:needhelp@company.com">needhelp@company.com</a>
                    </h4>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <span className="fas fa-map-marker"></span>
                  </div>
                  <div className="content">
                    <p>Visit Now</p>
                    <h4>88 Broklyn Golden Street. USA</h4>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="col-xl-8 col-lg-7">
            <div className="contact-one__right">
              {/* Floating Background */}
              <div
                className="contact-one__bg float-bob-x"
                style={{ backgroundImage: `url(${BgShape})` }}
              ></div>

              <div className="row">
                <div className="contact-one__form-box">
                  <form className="contact-one__form contact-one-validated">
                    <div className="row">
                      <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="contact-one__input-box">
                          <input type="text" placeholder="Your Name" name="name" />
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="contact-one__input-box">
                          <input type="email" placeholder="Email Address" name="email" />
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-xl-12">
                        <div className="contact-one__input-box text-message-box">
                          <textarea name="message" placeholder="Write a Message"></textarea>
                        </div>
                        <div className="contact-one__btn-box">
                          <Link to="/about" className="thm-btn contact-one__btn">
                            Send a Message
                            <i className="icon-right-arrow"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactOne;