import React from 'react'
import logo from '../../../assets/template_assets/images/resources/logo-1.png'

function Header() {
  return (
    <>
    <header className="main-header">
            <div className="main-header__wrapper">
                <div className="main-header__wrapper-inner">
                    <div className="main-header__logo">
                        <a href="/"><img src={logo} alt="logo" /></a>

                    </div>
                    <div className="main-header__menu-box">
                        <div className="main-header__menu-box-top">
                            <ul className="list-unstyled main-header__contact-list">
                                <li>
                                    <div className="icon">
                                        <i className="icon-email"></i>
                                    </div>
                                    <div className="text">
                                        <p><a href="mailto:needhelp@company.com">needhelp@company.com</a></p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <i className="icon-pin"></i>
                                    </div>
                                    <div className="text">
                                        <p>80 Broklyn Golden Street USA</p>
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
                        <div className="main-header__menu-box-bottom">
                            <nav className="main-menu">
                                <div className="main-menu__wrapper">
                                    <div className="main-menu__wrapper-inner">
                                        <div className="main-menu__left">
                                            <div className="main-menu__main-menu-box">
                                                <a href="#" className="mobile-nav__toggler"><i className="fa fa-bars"></i></a>
                                                <ul className="main-menu__list">
                                                    <li className="dropdown current megamenu">
                                                        <a href="index.html">Home </a>
                                        
                                                    </li>
                                                    <li>
                                                        <a href="about.html">About</a>
                                                    </li>
                                                    <li className="dropdown">
                                                        <a href="#">Services</a>
                                                        <ul className="shadow-box">
                                                            <li><a href="services.html">Services</a>
                                                            </li>
                                                            <li><a href="services-carousel.html">Services Carousel</a>
                                                            </li>
                                                            <li><a href="agriculture-products.html">Agriculture
                                                                    Products</a></li>
                                                            <li><a href="organic-products.html">Organic Products</a>
                                                            </li>
                                                            <li><a href="fresh-vegetables.html">Fresh Vegetables</a>
                                                            </li>
                                                            <li><a href="dairy-products.html">Dairy Products</a></li>
                                                        </ul>
                                                    </li>
                                                
                                                    <li className="dropdown">
                                                        <a href="#">Blog</a>
                                                        <ul className="shadow-box">
                                                            <li><a href="blog.html">Blog</a></li>
                                                            <li><a href="blog-carousel.html">Blog Carousel</a></li>
                                                            <li><a href="blog-sidebar.html">Blog Sidebar</a></li>
                                                            <li><a href="blog-details.html">Blog Details</a></li>
                                                        </ul>
                                                    </li>
                                                   
                                                    <li>
                                                        <a href="contact.html">Contact</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="main-menu__right">
                                            <div className="main-menu__search-cart-btn-box">
                                                <div className="main-menu__search-box">
                                                    <a href="#" className="main-menu__search search-toggler icon-magnifying-glass"></a>
                                                </div>
                                                <div className="main-menu__cart-box">
                                                    <a href="cart.html" className="main-menu__cart icon-shopping-cart"></a>
                                                </div>
                                                <div className="main-menu__btn-box">
                                                    <a href="contact.html" className="thm-btn main-menu__btn">Get Free Quote
                                                        <i className="icon-right-arrow"></i> </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
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

        <div className="stricky-header stricked-menu main-menu">
            <div className="sticky-header__content"></div>
        </div>
    
    </>
  )
}

export default Header