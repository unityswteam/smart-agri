import React from 'react';
import { Link } from 'react-router-dom';

// Import Images
import ServicesBg from "../../../assets/template_assets/images/shapes/services-one-shape-1.png";
import SectionTitleIcon from "../../../assets/template_assets/images/icon/section-title-icon-1.png";
import Service1 from "../../../assets/template_assets/images/services/services-one-1.jpg";
import Service2 from "../../../assets/template_assets/images/services/services-one-2.jpg";
import Service3 from "../../../assets/template_assets/images/services/services-one-3.jpg";
import Service4 from "../../../assets/template_assets/images/services/services-one-4.jpg";

const Services = () => {
  return (
    <>
      {/* Services One Start */}
      <section className="services-one">
        {/* Background Shape */}
        <div
          className="services-one__bg"
          style={{ backgroundImage: `url(${ServicesBg})` }}
        ></div>

        <div className="container">
          {/* Section Title */}
          <div className="section-title text-center">
            <span className="section-title__tagline">What We’re Doing</span>
            <h2 className="section-title__title">Services We’re offering</h2>
            <div className="section-title__icon">
              <img src={SectionTitleIcon} alt="Section icon" />
            </div>
          </div>

          <div className="row">
            {/* Service 1 */}
            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="100ms">
              <div className="services-one__single">
                <div className="services-one__img-box">
                  <div className="services-one__img">
                    <img src={Service1} alt="Agriculture Products" />
                  </div>
                  <div className="services-one__icon">
                    <span className="icon-tractor"></span>
                  </div>
                </div>
                <div className="services-one__content">
                  <h3 className="services-one__title">
                    <Link to="/agriculture-products">
                      Agriculture <br /> Products
                    </Link>
                  </h3>
                  <p className="services-one__text">
                    I was impressed by the agrion services, not lorem ipsum is simply free text.
                  </p>
                </div>
              </div>
            </div>

            {/* Service 2 */}
            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="200ms">
              <div className="services-one__single">
                <div className="services-one__img-box">
                  <div className="services-one__img">
                    <img src={Service2} alt="Organic Products" />
                  </div>
                  <div className="services-one__icon">
                    <span className="icon-organic-food"></span>
                  </div>
                </div>
                <div className="services-one__content">
                  <h3 className="services-one__title">
                    <Link to="/organic-products">
                      Organic <br /> Products
                    </Link>
                  </h3>
                  <p className="services-one__text">
                    I was impressed by the agrion services, not lorem ipsum is simply free text.
                  </p>
                </div>
              </div>
            </div>

            {/* Service 3 */}
            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="300ms">
              <div className="services-one__single">
                <div className="services-one__img-box">
                  <div className="services-one__img">
                    <img src={Service3} alt="Fresh Vegetables" />
                  </div>
                  <div className="services-one__icon">
                    <span className="icon-vegetables"></span>
                  </div>
                </div>
                <div className="services-one__content">
                  <h3 className="services-one__title">
                    <Link to="/fresh-vegetables">
                      Fresh <br /> Vegetables
                    </Link>
                  </h3>
                  <p className="services-one__text">
                    I was impressed by the agrion services, not lorem ipsum is simply free text.
                  </p>
                </div>
              </div>
            </div>

            {/* Service 4 */}
            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="400ms">
              <div className="services-one__single">
                <div className="services-one__img-box">
                  <div className="services-one__img">
                    <img src={Service4} alt="Dairy Products" />
                  </div>
                  <div className="services-one__icon">
                    <span className="icon-dairy"></span>
                  </div>
                </div>
                <div className="services-one__content">
                  <h3 className="services-one__title">
                    <Link to="/dairy-products">
                      Dairy <br /> Products
                    </Link>
                  </h3>
                  <p className="services-one__text">
                    I was impressed by the agrion services, not lorem ipsum is simply free text.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Services One End */}
    </>
  );
};

export default Services;