import React from 'react';
import { Link } from 'react-router-dom';

// Import Images
import FooterShape from '../../../assets/template_assets/images/shapes/site-footer-shape-1.png';
import FooterLogo from '../../../assets/template_assets/images/resources/footer-logo.png';
import News1 from '../../../assets/template_assets/images/resources/footer-widget-news-img-1.jpg';
import News2 from '../../../assets/template_assets/images/resources/footer-widget-news-img-2.jpg';
import MobileLogo from '../../../assets/template_assets/images/resources/logo-2.png';

const Footer = () => {
  return (
    <>
      {/* Site Footer Start */}
      <footer className="site-footer">
        {/* Top Section */}
        <div className="site-footer__top">
          <div className="container">
            <div className="site-footer__top-inner">
              {/* Floating Shape */}
              <div
                className="site-footer-shape-1 float-bob-x"
                style={{ backgroundImage: `url(${FooterShape})` }} ></div>

              <div className="row">
                {/* About */}
                <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="100ms">
                  <div className="footer-widget__column footer-widget__about">
                    <div className="footer-widget__logo">
                      <Link to="/">
                        <img src={FooterLogo} alt="Footer Logo" />
                      </Link>
                    </div>
                    <div className="footer-widget__about-text-box">
                      <p className="footer-widget__about-text">
                        Welcome to our Agriculture Farming. Lorem simply text amet cing elit.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Explore Links */}
                <div className="col-xl-2 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="200ms">
                  <div className="footer-widget__column footer-widget__Explore">
                    <div className="footer-widget__title-box">
                      <h3 className="footer-widget__title">Explore</h3>
                    </div>
                    <ul className="footer-widget__Explore-list list-unstyled">
                      <li><Link to="/about">About</Link></li>
                      <li><Link to="/farmers">Our Farmers</Link></li>
                      <li><Link to="/projects">New Projects</Link></li>
                      <li><Link to="/services">Services</Link></li>
                      <li><Link to="/contact">Contact</Link></li>
                    </ul>
                  </div>
                </div>

                {/* News */}
                <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="300ms">
                  <div className="footer-widget__column footer-widget__news">
                    <div className="footer-widget__title-box">
                      <h3 className="footer-widget__title">News</h3>
                    </div>
                    <ul className="footer-widget__news-list list-unstyled">
                      <li>
                        <div className="footer-widget__news-img">
                          <img src={News1} alt="" />
                        </div>
                        <div className="footer-widget__news-content">
                          <p className="footer-widget__news-date">20 Jul, 2022</p>
                          <h5 className="footer-widget__news-sub-title">
                            <Link to="/blog-details">
                              A Organic Food Gives More Good Taste
                            </Link>
                          </h5>
                        </div>
                      </li>
                      <li>
                        <div className="footer-widget__news-img">
                          <img src={News2} alt="" />
                        </div>
                        <div className="footer-widget__news-content">
                          <p className="footer-widget__news-date">20 Jul, 2022</p>
                          <h5 className="footer-widget__news-sub-title">
                            <Link to="/blog-details">
                              A Organic Food Gives More Good Taste
                            </Link>
                          </h5>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Contact + Newsletter */}
                <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="400ms">
                  <div className="footer-widget__column footer-widget__Contact">
                    <div className="footer-widget__title-box">
                      <h3 className="footer-widget__title">Contact</h3>
                    </div>
                    <ul className="footer-widget__Contact-list list-unstyled">
                      <li>
                        <div className="icon">
                          <span className="fas fa-phone-square-alt"></span>
                        </div>
                        <div className="text">
                          <p><a href="tel:9200886823">+92 (0088) 6823</a></p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="fas fa-envelope"></span>
                        </div>
                        <div className="text">
                          <p><a href="mailto:needhelp@company.com">needhelp@company.com</a></p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-pin"></span>
                        </div>
                        <div className="text">
                          <p>80 Broklyn Golden Street. USA</p>
                        </div>
                      </li>
                    </ul>

                    {/* Newsletter Form */}
                    <form className="footer-widget__Contact-form">
                      <div className="footer-widget__Contact-input-box">
                        <input type="email" placeholder="Email Address" name="email" />
                        <button type="submit" className="footer-widget__Contact-btn">
                          <i className="icon-right-arrow"></i>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="site-footer__bottom">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="site-footer__bottom-inner">
                  <p className="site-footer__bottom-text">
                    © Copyright 2022 by <a href="#">Agrion.com</a>
                  </p>
                  <div className="site-footer__social">
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fab fa-facebook"></i></a>
                    <a href="#"><i className="fab fa-pinterest-p"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                  </div>
                  <div className="site-footer__bottom-scroll">
                    <a href="#" data-target="html" className="scroll-to-target scroll-to-top">
                      <i className="icon-up-arrow"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile Nav */}
      <div className="mobile-nav__wrapper">
        <div className="mobile-nav__overlay mobile-nav__toggler"></div>
        <div className="mobile-nav__content">
          <span className="mobile-nav__close mobile-nav__toggler">
            <i className="fa fa-times"></i>
          </span>

          <div className="logo-box">
            <Link to="/" aria-label="logo image">
              <img src={MobileLogo} width="122" alt="" />
            </Link>
          </div>

          <div className="mobile-nav__container"></div>

          <ul className="mobile-nav__contact list-unstyled">
            <li>
              <i className="fa fa-envelope"></i>
              <a href="mailto:needhelp@agrion.com">needhelp@agrion.com</a>
            </li>
            <li>
              <i className="fa fa-phone-alt"></i>
              <a href="tel:6668880000">666 888 0000</a>
            </li>
          </ul>

          <div className="mobile-nav__top">
            <div className="mobile-nav__social">
              <a href="#" className="fab fa-twitter"></a>
              <a href="#" className="fab fa-facebook-square"></a>
              <a href="#" className="fab fa-pinterest-p"></a>
              <a href="#" className="fab fa-instagram"></a>
            </div>
          </div>
        </div>
      </div>

      {/* Search Popup */}
      <div className="search-popup">
        <div className="search-popup__overlay search-toggler"></div>
        <div className="search-popup__content">
          <form action="#">
            <label htmlFor="search" className="sr-only">search here</label>
            <input type="text" id="search" placeholder="Search Here..." />
            <button type="submit" aria-label="search submit" className="thm-btn">
              <i className="icon-magnifying-glass"></i>
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Footer;