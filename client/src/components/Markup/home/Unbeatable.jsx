import React from 'react';
import { Link } from 'react-router-dom';

// Import Images
import UnbeatableBg from "../../../assets/template_assets/images/backgrounds/unbeatable-one-bg.jpg";
import Shape1 from "../../../assets/template_assets/images/shapes/unbeatable-shape-1.png";
import Shape2 from "../../../assets/template_assets/images/shapes/unbeatable-shape-2.png";

const Unbeatable = () => {
  return (
    <>
      {/* Unbeatable One Section - Pure CSS Parallax */}
      <section className="unbeatable-one">
        {/* Background with CSS Parallax */}
        <div
          className="unbeatable-one__bg"
          style={{
            backgroundImage: `url(${UnbeatableBg})`,
            backgroundAttachment: 'fixed',
            backgroundPosition: 'center top',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
          aria-label="Organic farm background"
        ></div>

        {/* Dark Gradient Overlay */}
        <div className="unbeatable-one__overlay"></div>

        {/* Main Content */}
        <div className="container">
          <div className="unbeatable-one__inner text-center">
            <div className="unbeatable-one__content">

              {/* Floating Shape 1 - Left */}
              <div className="unbeatable-one__shape-one">
                <img
                  src={Shape1}
                  alt="Decorative leaf shape"
                  className="float-bob-y"
                  loading="lazy"
                />
              </div>

              {/* Floating Shape 2 - Right */}
              <div className="unbeatable-one__shape-two">
                <img
                  src={Shape2}
                  alt="Decorative wheat shape"
                  className="float-bob-y"
                  loading="lazy"
                />
              </div>

              {/* Tagline */}
              <p className="unbeatable-one__tagline">
                We’re Selling Healthy Products
              </p>

              {/* Title */}
              <h3 className="unbeatable-one__title">
                Unbeatable Organic and
                <br />
                Agriculture Services
              </h3>

              {/* CTA Button */}
              <div className="unbeatable-one__btn-box">
                <Link
                  to="/about"
                  className="thm-btn unbeatable-one__btn"
                  aria-label="Discover more about our services"
                >
                  Discover More <i className="icon-right-arrow"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* CSS Animations, Parallax, Hover Effects */}
       
      </section>
    </>
  );
};

export default Unbeatable;