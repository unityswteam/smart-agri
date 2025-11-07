import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';

// Swiper CSS
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

// Images
import MainSlider1 from "../../assets/template_assets/images/backgrounds/main-slider-1-1.jpg";
import MainSlider2 from "../../assets/template_assets/images/backgrounds/main-slider-1-2.jpg";
import MainSlider3 from "../../assets/template_assets/images/backgrounds/main-slider-1-3.jpg";

const Mainbanner = () => {
  return (
    <>
      {/* Main Slider */}
      <section className="main-slider clearfix">
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectFade]}
          slidesPerView={1}
          loop={true}
          effect="fade"
          autoplay={{ delay: 5000 }}
          pagination={{
            el: "#main-slider-pagination",
            type: "bullets",
            clickable: true,
          }}
          navigation={{
            nextEl: "#main-slider__swiper-button-next",
            prevEl: "#main-slider__swiper-button-prev",
          }}
          className="thm-swiper__slider"
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div className="image-layer" style={{ backgroundImage: `url(${MainSlider1})` }}></div>
            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  <div className="main-slider__content">
                    <p className="main-slider__sub-title">We are Producing Natural Products</p>
                    <h2 className="main-slider__title">Agriculture.</h2>
                    <div className="main-slider__btn-box">
                      <a href="about.html" className="thm-btn main-slider__btn">
                        Discover More <i className="icon-right-arrow"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <div className="image-layer" style={{ backgroundImage: `url(${MainSlider2})` }}></div>
            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  <div className="main-slider__content">
                    <p className="main-slider__sub-title">We are Producing Natural Products</p>
                    <h2 className="main-slider__title">Agriculture.</h2>
                    <div className="main-slider__btn-box">
                      <a href="about.html" className="thm-btn main-slider__btn">
                        Discover More <i className="icon-right-arrow"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide>
            <div className="image-layer" style={{ backgroundImage: `url(${MainSlider3})` }}></div>
            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  <div className="main-slider__content">
                    <p className="main-slider__sub-title">We are Producing Natural Products</p>
                    <h2 className="main-slider__title">Agriculture.</h2>
                    <div className="main-slider__btn-box">
                      <a href="about.html" className="thm-btn main-slider__btn">
                        Discover More <i className="icon-right-arrow"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        {/* Pagination */}
        <div className="swiper-pagination" id="main-slider-pagination"></div>

        {/* Navigation - Fixed IDs & Icons */}
        <div className="main-slider__nav">
          <div className="swiper-button-prev" id="main-slider__swiper-button-prev">
            <i className="icon-left-arrow"></i>
          </div>
          <div className="swiper-button-next" id="main-slider__swiper-button-next">
            <i className="icon-right-arrow"></i>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="feature-one">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-4">
              <div className="feature-one__single">
                <div className="feature-one__icon">
                  <span className="icon-farm"></span>
                </div>
                <div className="feature-one__content">
                  <h3 className="feature-one__title">the Best Quality <br /> Standards</h3>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4">
              <div className="feature-one__single">
                <div className="feature-one__icon">
                  <span className="icon-agriculture"></span>
                </div>
                <div className="feature-one__content">
                  <h3 className="feature-one__title">a Smart organic <br /> services</h3>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4">
              <div className="feature-one__single">
                <div className="feature-one__icon">
                  <span className="icon-harvest"></span>
                </div>
                <div className="feature-one__content">
                  <h3 className="feature-one__title">Natural Healthy <br /> products</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Mainbanner;