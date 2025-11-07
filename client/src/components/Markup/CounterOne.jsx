import React from 'react';

// Import Images
import BgShape from '../../assets/template_assets/images/shapes/counter-one-shape-3.png';
import Shape1 from '../../assets/template_assets/images/shapes/counter-one-shape-1.png';
import Shape2 from '../../assets/template_assets/images/shapes/counter-one-shape-2.png';

const CounterOne = () => {
  return (
    <section className="counter-one">
      {/* Background Shape */}
      <div
        className="counter-one__bg"
        style={{ backgroundImage: `url(${BgShape})` }}
      ></div>

      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="counter-one__inner">
              <ul className="list-unstyled counter-one__list">

                {/* Counter 1 */}
                <li className="counter-one__single wow fadeInLeft" data-wow-delay="100ms">
                  <div className="counter-one__icon">
                    <span className="icon-seeds"></span>
                    <div className="counter-one__shape-one">
                      <img src={Shape1} alt="" />
                    </div>
                    <div className="counter-one__shape-two">
                      <img src={Shape2} alt="" />
                    </div>
                  </div>
                  <div className="counter-one__content-box count-box">
                    <h3 className="count-text" data-stop="6420" data-speed="1500">
                      00
                    </h3>
                    <p className="counter-one__text">Agriculture Products</p>
                  </div>
                </li>

                {/* Counter 2 */}
                <li className="counter-one__single wow fadeInLeft" data-wow-delay="200ms">
                  <div className="counter-one__icon">
                    <span className="icon-cotton"></span>
                    <div className="counter-one__shape-one">
                      <img src={Shape1} alt="" />
                    </div>
                    <div className="counter-one__shape-two">
                      <img src={Shape2} alt="" />
                    </div>
                  </div>
                  <div className="counter-one__content-box count-box">
                    <h3 className="count-text" data-stop="8800" data-speed="1500">
                      00
                    </h3>
                    <p className="counter-one__text">Projects completed</p>
                  </div>
                </li>

                {/* Counter 3 */}
                <li className="counter-one__single wow fadeInLeft" data-wow-delay="300ms">
                  <div className="counter-one__icon">
                    <span className="icon-customer"></span>
                    <div className="counter-one__shape-one">
                      <img src={Shape1} alt="" />
                    </div>
                    <div className="counter-one__shape-two">
                      <img src={Shape2} alt="" />
                    </div>
                  </div>
                  <div className="counter-one__content-box count-box">
                    <h3 className="count-text" data-stop="9360" data-speed="1500">
                      00
                    </h3>
                    <p className="counter-one__text">satisfied customers</p>
                  </div>
                </li>

                {/* Counter 4 */}
                <li className="counter-one__single wow fadeInLeft" data-wow-delay="400ms">
                  <div className="counter-one__icon">
                    <span className="icon-farmer"></span>
                    <div className="counter-one__shape-one">
                      <img src={Shape1} alt="" />
                    </div>
                    <div className="counter-one__shape-two">
                      <img src={Shape2} alt="" />
                    </div>
                  </div>
                  <div className="counter-one__content-box count-box">
                    <h3 className="count-text" data-stop="1070" data-speed="1500">
                      00
                    </h3>
                    <p className="counter-one__text">Expert farmers</p>
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

export default CounterOne;