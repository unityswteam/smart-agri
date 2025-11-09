// src/components/Header.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/template_assets/images/resources/logo-1.png';
import LoginForm from '../../auth/LoginForm'; // Import LoginForm

const Header = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {/* MAIN HEADER */}
      <header className="main-header">
        <div className="main-header__wrapper">
          <div className="main-header__wrapper-inner">
            {/* LOGO */}
            <div className="main-header__logo">
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>
            </div>

            {/* MENU BOX */}
            <div className="main-header__menu-box">
              {/* TOP CONTACT + SOCIAL */}
              <div className="main-header__menu-box-top">
                <ul className="list-unstyled main-header__contact-list">
                  <li>
                    <div className="icon">
                      <i className="icon-email"></i>
                    </div>
                    <div className="text">
                      <p>
                        <a href="mailto:needhelp@company.com">
                          needhelp@company.com
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="icon-pin"></i>
                    </div>
                    <div className="text">
                      {/* CLICKABLE LOGIN TEXT */}
                      <p
                        onClick={() => setShowLogin(true)}
                        style={{
                          cursor: 'pointer',
                          color: '#72b300',
                          fontWeight: '500',
                          margin: 0
                        }}
                      >
                        Login
                      </p>
                    </div>
                  </li>
                </ul>

                <div className="main-header__social">
                  <a href="#"><i className="fab fa-twitter"></i></a>
                  <a href="#"><i className="fab fa-facebook"></i></a>
                  <a href="#"><i className="fab fa-pinterest-p"></i></a>
                  <a href="#"><i className="fab fa-instagram"></i></a>
                </div>
              </div>

              {/* NAVIGATION */}
              <div className="main-header__menu-box-bottom">
                <nav className="main-menu">
                  <div className="main-menu__wrapper">
                    <div className="main-menu__wrapper-inner">
                      {/* LEFT MENU */}
                      <div className="main-menu__left">
                        <div className="main-menu__main-menu-box">
                          <a href="#" className="mobile-nav__toggler">
                            <i className="fa fa-bars"></i>
                          </a>

                          <ul className="main-menu__list">
                            <li className="dropdown current megamenu">
                              <Link to="/">Home</Link>
                            </li>
                            <li><Link to="/about">About</Link></li>

                            <li className="dropdown">
                              <Link to="#">Services</Link>
                              <ul className="shadow-box">
                                <li><Link to="/services">Services</Link></li>
                                <li><Link to="/services-carousel">Services Carousel</Link></li>
                                <li><Link to="/agriculture-products">Agriculture Products</Link></li>
                                <li><Link to="/organic-products">Organic Products</Link></li>
                                <li><Link to="/fresh-vegetables">Fresh Vegetables</Link></li>
                                <li><Link to="/dairy-products">Dairy Products</Link></li>
                              </ul>
                            </li>

                            <li className="dropdown">
                              <Link to="#">Blog</Link>
                              <ul className="shadow-box">
                                <li><Link to="/blog">Blog</Link></li>
                                <li><Link to="/blog-carousel">Blog Carousel</Link></li>
                                <li><Link to="/blog-sidebar">Blog Sidebar</Link></li>
                                <li><Link to="/blog-details">Blog Details</Link></li>
                              </ul>
                            </li>

                            <li><Link to="/contact">Contact</Link></li>
                          </ul>
                        </div>
                      </div>

                      {/* RIGHT BUTTONS */}
                      <div className="main-menu__right">
                        <div className="main-menu__search-cart-btn-box">
                          <div className="main-menu__search-box">
                            <a href="#" className="main-menu__search search-toggler icon-magnifying-glass"></a>
                          </div>
                          <div className="main-menu__cart-box">
                            <a href="/cart" className="main-menu__cart icon-shopping-cart"></a>
                          </div>
                          <div className="main-menu__btn-box">
                            <Link to="/contact" className="thm-btn main-menu__btn">
                              Get Free Quote <i className="icon-right-arrow"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </nav>
              </div>
            </div>

            {/* PHONE */}
            <div className="main-header__phone-contact-box">
              <div className="main-header__phone-number">
                <a href="tel:9200886823">+92 (0088) 6823</a>
              </div>
              <div className="main-header__call-box">
                <div className="main-header__call-inner">
                  <div className="main-header__call-icon">
                    <span className="fas fa-phone"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* LOGIN POPUP */}
      {showLogin && (
        <div
          className="popup-overlay"
          onClick={() => setShowLogin(false)}
          style={{
            position: 'fixed',
            top: 0, left: 0, right: 0, bottom: 0,
            background: 'rgba(0,0,0,0.7)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 9999
          }}
        >
          <div
            className="popup-content"
            onClick={(e) => e.stopPropagation()}
          >
            <LoginForm onClose={() => setShowLogin(false)} />
          </div>
        </div>
      )}
    </>
  );
};

export default Header;