import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// CRITICAL: These two lines
import 'swiper/css';
import 'swiper/css/autoplay';

// Images
import BgImage from '../../../assets/template_assets/images/backgrounds/testimonial-one-bg.png';
import SectionIcon from '../../../assets/template_assets/images/icon/section-title-icon-1.png';

import Testimonial1 from '../../../assets/template_assets/images/testimonial/testimonial-1-1.jpg';
import Testimonial2 from '../../../assets/template_assets/images/testimonial/testimonial-1-2.jpg';
import Testimonial3 from '../../../assets/template_assets/images/testimonial/testimonial-1-3.jpg';
import Testimonial4 from '../../../assets/template_assets/images/testimonial/testimonial-1-4.jpg';
import Testimonial5 from '../../../assets/template_assets/images/testimonial/testimonial-1-5.jpg';
import Testimonial6 from '../../../assets/template_assets/images/testimonial/testimonial-1-6.jpg';

const Testimonial = () => {
  const testimonials = [
    { img: Testimonial1, name: 'Sarah Albert', role: 'Customer' },
    { img: Testimonial2, name: 'Kevin Martin', role: 'Customer' },
    { img: Testimonial3, name: 'Aleesha Brown', role: 'Customer' },
    { img: Testimonial4, name: 'Mike Hardson', role: 'Customer' },
    { img: Testimonial5, name: 'Jolie Michale', role: 'Customer' },
    { img: Testimonial6, name: 'David Smith', role: 'Customer' },
  ];

  return (
    <section className="testimonial-one">
      <div className="testimonial-one-bg" style={{ backgroundImage: `url(${BgImage})` }}></div>

      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="testimonial-one__top">
              <div className="section-title text-center">
                <span className="section-title__tagline">Our Testimonials</span>
                <h2 className="section-title__title">What They’re talking about</h2>
                <div className="section-title__icon">
                  <img src={SectionIcon} alt="" />
                </div>
              </div>
            </div>

            <div className="testimonial-one__bottom">
              <Swiper
                modules={[Autoplay]}
                loop={true}
                autoplay={{ delay: 10000, disableOnInteraction: false }}
                spaceBetween={30}
                speed={500}
                breakpoints={{
                  0: { slidesPerView: 1 },
                  768: { slidesPerView: 2 },
                  992: { slidesPerView: 2 },
                  1200: { slidesPerView: 3 },
                }}
                className="testimonial-one__carousel"
              >
                {testimonials.map((item, index) => (
                  <SwiperSlide key={item.name}> {/* Fixed key */}
                    <div className="item">
                      <div className="testimonial-one__single">
                        <div className="testimonial-one__content">
                          <p className="testimonial-one__text">
                            Lorem ipsum is simply free text dolor sit amet, consect notted adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                          </p>
                          <div className="testimonial-one__client-info">
                            <div className="testimonial-one__client-img">
                              <img src={item.img} alt={item.name} />
                              <div className="testimonial-one__quote">
                                <span className="icon-quote"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="testimonial-one__client-details-box">
                          <div className="testimonial-one__client-details">
                            <h4 className="testimonial-one__client-name">{item.name}</h4>
                            <p className="testimonial-one__client-sub-title">{item.role}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;