import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Swiper CSS
import 'swiper/css';
import 'swiper/css/autoplay';

// Import Brand Logos
import Brand1 from "../../assets/template_assets/images/brand/brand-1-1.png";
import Brand2 from "../../assets/template_assets/images/brand/brand-1-2.png";
import Brand3 from "../../assets/template_assets/images/brand/brand-1-3.png";
import Brand4 from "../../assets/template_assets/images/brand/brand-1-4.png";
import Brand5 from "../../assets/template_assets/images/brand/brand-1-5.png";

const BrandOne = () => {
  const brands = [
    { src: Brand1, name: "Brand One", link: "#" },
    { src: Brand2, name: "Brand Two", link: "#" },
    { src: Brand3, name: "Brand Three", link: "#" },
    { src: Brand4, name: "Brand Four", link: "#" },
    { src: Brand5, name: "Brand Five", link: "#" },
  ];

  return (
    <>
      {/* Brand One Section with Animation & Hover Effects */}
      <section className="brand-one">
        <div className="brand-one__inner">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <Swiper
                  modules={[Autoplay]}
                  spaceBetween={30}
                  slidesPerView={5}
                  loop={true}
                  autoplay={{
                    delay: 6000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true, // Pause on hover
                  }}
                  speed={800}
                  breakpoints={{
                    0: { slidesPerView: 1, spaceBetween: 20 },
                    600: { slidesPerView: 2, spaceBetween: 20 },
                    800: { slidesPerView: 3, spaceBetween: 25 },
                    1024: { slidesPerView: 4, spaceBetween: 30 },
                    1200: { slidesPerView: 5, spaceBetween: 30 },
                  }}
                  className="brand-one__carousel"
                >
                  {brands.map((brand, index) => (
                    <SwiperSlide key={index}>
                      <div
                        className="brand-one__single"
                        style={{
                          animation: `float 3s ease-in-out infinite`,
                          animationDelay: `${index * 0.2}s`,
                        }}
                      >
                        <a
                          href={brand.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="brand-one__link"
                          aria-label={brand.name}
                        >
                          <div className="brand-one__img-wrapper">
                            <img
                              src={brand.src}
                              alt={brand.name}
                              loading="lazy"
                              className="brand-one__img"
                            />
                            <div className="brand-one__overlay"></div>
                          </div>
                        </a>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Animation + Hover Lift + Grayscale Effect */}
        <style jsx>{`
          @keyframes float {
            0%, 100% {
              transform: translateY(0) rotate(0deg);
            }
            50% {
              transform: translateY(-10px) rotate(1deg);
            }
          }

          .brand-one__single {
            transition: all 0.4s ease;
            padding: 15px 10px;
            text-align: center;
          }

          .brand-one__single:hover {
            transform: translateY(-8px) !important;
            filter: drop-shadow(0 10px 20px rgba(0,0,0,0.1));
          }

          .brand-one__link {
            display: block;
            position: relative;
            overflow: hidden;
            border-radius: 12px;
          }

          .brand-one__img-wrapper {
            position: relative;
            overflow: hidden;
            border-radius: 12px;
            background: #fff;
            padding: 15px;
            transition: all 0.4s ease;
          }

          .brand-one__img {
            width: 100%;
            height: auto;
            max-height: 80px;
            object-fit: contain;
            filter: grayscale(100%);
            transition: all 0.4s ease;
            transform: scale(1);
          }

          .brand-one__img:hover {
            filter: grayscale(0%);
            transform: scale(1.05);
          }

          .brand-one__overlay {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(135deg, rgba(124, 179, 66, 0.1), transparent);
            opacity: 0;
            transition: opacity 0.4s ease;
            pointer-events: none;
          }

          .brand-one__link:hover .brand-one__overlay {
            opacity: 1;
          }

          /* Responsive Adjustments */
          @media (max-width: 768px) {
            .brand-one__img {
              max-height: 60px;
            }
          }
        `}</style>
      </section>
    </>
  );
};

export default BrandOne;