import React from 'react';
import { Link } from 'react-router-dom';

// Import Images
import BgShape from '../../assets/template_assets/images/resources/healthy-food-one-1.jpg';
import MainImg from '../../assets/template_assets/images/resources/healthy-food-one-1.jpg';
import SectionIcon from '../../assets/template_assets/images/icon/section-title-icon-1.png';

const HealthyFoodSection = () => {
  return (
    <section className="healthy-food-one">
      <div
        className="healthy-food-one__bg float-bob-x"
        style={{ backgroundImage: `url(${BgShape})` }}
      ></div>

      <div className="container">
        <div className="row">
          {/* Left: Image */}
          <div className="col-xl-6">
            <div className="healthy-food-one__left">
              <div className="healthy-food-one__img">
                <img src={MainImg} alt="" />
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="col-xl-6">
            <div className="healthy-food-one__right">
              <div className="section-title text-left">
                <span className="section-title__tagline">Pure Organic Food</span>
                <h2 className="section-title__title">
                  Healthy food for your good growth
                </h2>
                <div className="section-title__icon">
                  <img src={SectionIcon} alt="" />
                </div>
              </div>

              <p className="healthy-food-one__text">
                Lorem ipsum dolor sit amet nsectetur cing elit. Suspe ndisse suscipit sagittis leo sit met entum estibu dignissim posuere cubilia durae. Leo sit met entum cubilia crae onec.
              </p>

              <ul className="list-unstyled healthy-food-one__list">
                <li className="healthy-food-one__single">
                  <div className="healthy-food-one__content">
                    <div className="healthy-food-one__icon">
                      <span className="icon-harvester"></span>
                    </div>
                    <p className="healthy-food-one__title">Harvesting</p>
                  </div>
                </li>
                <li className="healthy-food-one__single">
                  <div className="healthy-food-one__content">
                    <div className="healthy-food-one__icon">
                      <span className="icon-agriculture-1"></span>
                    </div>
                    <p className="healthy-food-one__title">Growth</p>
                  </div>
                </li>
                <li className="healthy-food-one__single">
                  <div className="healthy-food-one__content">
                    <div className="healthy-food-one__icon">
                      <span className="icon-harvest-1"></span>
                    </div>
                    <p className="healthy-food-one__title">Maintenance</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthyFoodSection;