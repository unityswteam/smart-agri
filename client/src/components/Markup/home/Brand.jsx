import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Critical CSS imports
import 'swiper/css';
import 'swiper/css/autoplay';

// Import Brand Logos
import Brand1 from '../../../assets/template_assets/images/brand/brand-1-1.png';
import Brand2 from '../../../assets/template_assets/images/brand/brand-1-2.png';
import Brand3 from '../../../assets/template_assets/images/brand/brand-1-3.png';
import Brand4 from '../../../assets/template_assets/images/brand/brand-1-4.png';
import Brand5 from '../../../assets/template_assets/images/brand/brand-1-5.png';

const Brand = () => {
  const brands = [
    { src: Brand1, name: 'Brand One' },
    { src: Brand2, name: 'Brand Two' },
    { src: Brand3, name: 'Brand Three' },
    { src: Brand4, name: 'Brand Four' },
    { src: Brand5, name: 'Brand Five' },
  ];

  return (
    <section className="brand-one">
      <div className="brand-one__inner">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <Swiper
                modules={[Autoplay]}
                loop={true}
                autoplay={{
                  delay: 3000,            // Faster for demo (change to 6000 if you want)
                  disableOnInteraction: false,
                }}
                spaceBetween={30}
                speed={800}
                // REMOVE slidesPerView={5} → this was breaking the slide!
                breakpoints={{
                  0:    { slidesPerView: 1, spaceBetween: 20 },
                  600:  { slidesPerView: 2, spaceBetween: 20 },
                  800:  { slidesPerView: 3, spaceBetween: 25 },
                  1024: { slidesPerView: 4, spaceBetween: 30 },
                  1200: { slidesPerView: 5, spaceBetween: 30 },
                }}
                className="brand-one__carousel"
              >
                {brands.map((brand) => (
                  <SwiperSlide key={brand.name}>
                    <div className="brand-one__single">
                      <div className="brand-one__img">
                        <img
                          src={brand.src}
                          alt={brand.name}
                          loading="lazy"
                        />
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

export default Brand;