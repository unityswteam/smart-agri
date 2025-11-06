import React from 'react'
import logo from '../../assets/template_assets/images/resources/logo-1.png'

function Header() {
  return (
    <>
    <header class="main-header">
            <div class="main-header__wrapper">
                <div class="main-header__wrapper-inner">
                    <div class="main-header__logo">
                        <a href="/"><img src={logo} alt="logo" /></a>

                    </div>
                    <div class="main-header__menu-box">
                        <div class="main-header__menu-box-top">
                            <ul class="list-unstyled main-header__contact-list">
                                <li>
                                    <div class="icon">
                                        <i class="icon-email"></i>
                                    </div>
                                    <div class="text">
                                        <p><a href="mailto:needhelp@company.com">needhelp@company.com</a></p>
                                    </div>
                                </li>
                                <li>
                                    <div class="icon">
                                        <i class="icon-pin"></i>
                                    </div>
                                    <div class="text">
                                        <p>80 Broklyn Golden Street USA</p>
                                    </div>
                                </li>
                            </ul>
                            <div class="main-header__social">
                                <a href="#"><i class="fab fa-twitter"></i></a>
                                <a href="#"><i class="fab fa-facebook"></i></a>
                                <a href="#"><i class="fab fa-pinterest-p"></i></a>
                                <a href="#"><i class="fab fa-instagram"></i></a>
                            </div>
                        </div>
                        <div class="main-header__menu-box-bottom">
                            <nav class="main-menu">
                                <div class="main-menu__wrapper">
                                    <div class="main-menu__wrapper-inner">
                                        <div class="main-menu__left">
                                            <div class="main-menu__main-menu-box">
                                                <a href="#" class="mobile-nav__toggler"><i class="fa fa-bars"></i></a>
                                                <ul class="main-menu__list">
                                                    <li class="dropdown current megamenu">
                                                        <a href="index.html">Home </a>
                                        
                                                    </li>
                                                    <li>
                                                        <a href="about.html">About</a>
                                                    </li>
                                                    <li class="dropdown">
                                                        <a href="#">Services</a>
                                                        <ul class="shadow-box">
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
                                                
                                                    <li class="dropdown">
                                                        <a href="#">Blog</a>
                                                        <ul class="shadow-box">
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
                                        <div class="main-menu__right">
                                            <div class="main-menu__search-cart-btn-box">
                                                <div class="main-menu__search-box">
                                                    <a href="#" class="main-menu__search search-toggler icon-magnifying-glass"></a>
                                                </div>
                                                <div class="main-menu__cart-box">
                                                    <a href="cart.html" class="main-menu__cart icon-shopping-cart"></a>
                                                </div>
                                                <div class="main-menu__btn-box">
                                                    <a href="contact.html" class="thm-btn main-menu__btn">Get Free Quote
                                                        <i class="icon-right-arrow"></i> </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                    <div class="main-header__phone-contact-box">
                        <div class="main-header__phone-number">
                            <a href="tel:9200886823">+92 (0088) 6823</a>
                        </div>
                        <div class="main-header__call-box">
                            <div class="main-header__call-inner">
                                <div class="main-header__call-icon">
                                    <span class="fas fa-phone"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        <div class="stricky-header stricked-menu main-menu">
            <div class="sticky-header__content"></div>
           
        </div>
    
    </>
  )
}

export default Header