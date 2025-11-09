import React from 'react';
import { Link } from 'react-router-dom';

// Import Background Image
import CtaBg from '../../../assets/template_assets/images/backgrounds/cta-one-bg.jpg';

const CtaOne = () => {
  return (
    <section className="cta-one">
      {/* Background with Jarallax Attributes */}
      <div
        className="cta-one__bg"
        data-jarallax
        data-speed="0.2"
        data-imgPosition="50% 0%"
        style={{ backgroundImage: `url(${CtaBg})` }}
      ></div>

      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="cta-one__inner">
              {/* Left: Icon + Title */}
              <div className="cta-one__left">
                <div className="cta-one__icon">
                  <span className="icon-agriculture-2"></span>
                </div>
                <h3 className="cta-one__title">
                  We’re popular leader in agriculture <br /> & Organic market.
                </h3>
              </div>

              {/* Right: Button */}
              <div className="cta-one__right">
                <Link to="/about" className="thm-btn cta-one__btn">
                  Discover More <i className="icon-right-arrow"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaOne;