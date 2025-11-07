import React from 'react';
import { Link } from 'react-router-dom';

// Import Images
import UnbeatableBg from "../../assets/template_assets/images/backgrounds/unbeatable-one-bg.jpg";
import Shape1 from "../../assets/template_assets/images/shapes/unbeatable-shape-1.png";
import Shape2 from "../../assets/template_assets/images/shapes/unbeatable-shape-2.png";

const UnbeatableOne = () => {
  return (
    <>
      {/* Unbeatable One Section - Pure CSS Parallax */}
      <section className="unbeatable-one">
        {/* Fixed Background (Parallax Effect) */}
        <div
          className="unbeatable-one__bg"
          style={{
            backgroundImage: `url(${UnbeatableBg})`,
            backgroundAttachment: 'fixed',
            backgroundPosition: 'center top',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>

        {/* Dark Overlay */}
        <div className="unbeatable-one__overlay"></div>

        {/* Content */}
        <div className="container">
          <div className="unbeatable-one__inner text-center">
            <div className="unbeatable-one__content">

              {/* Floating Shape 1 */}
              <div className="unbeatable-one__shape-one">
                <img
                  src={Shape1}
                  alt="Decorative leaf"
                  className="float-bob-y"
                  loading="lazy"
                />
              </div>

              {/* Floating Shape 2 */}
              <div className="unbeatable-one__shape-two">
                <img
                  src={Shape2}
                  alt="Decorative wheat"
                  className="float-bob-y"
                  loading="lazy"
                />
              </div>

              <p className="unbeatable-one__tagline">
                We’re Selling Healthy Products
              </p>

              <h3 className="unbeatable-one__title">
                Unbeatable Organic and
                <br />
                Agriculture Services
              </h3>

              <div className="unbeatable-one__btn-box">
                <Link
                  to="/about"
                  className="thm-btn unbeatable-one__btn"
                  aria-label="Discover more"
                >
                  Discover More <i className="icon-right-arrow"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* CSS Animations & Parallax */}
        <style jsx>{`
          @keyframes float-bob-y {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-15px); }
          }

          .float-bob-y {
            animation: float-bob-y 4s ease-in-out infinite;
          }

          .unbeatable-one {
            position: relative;
            padding: 140px 0;
            color: #fff;
            overflow: hidden;
          }

          .unbeatable-one__bg {
            position: absolute;
            top: 0; left: 0; right: 0; bottom: 0;
            z-index: -2;
          }

          .unbeatable-one__overlay {
            position: absolute;
            top: 0; left: 0; right: 0; bottom: 0;
            background: linear-gradient(135deg, rgba(124, 179, 66, 0.75), rgba(0, 0, 0, 0.5));
            z-index: -1;
          }

          .unbeatable-one__shape-one,
          .unbeatable-one__shape-two {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            width: 180px;
            pointer-events: none;
          }

          .unbeatable-one__shape-one { left: -50px; }
          .unbeatable-one__shape-two { right: -50px; }

          .unbeatable-one__tagline {
            font-size: 18px;
            font-weight: 600;
            letter-spacing: 1px;
            margin-bottom: 15px;
            text-transform: uppercase;
            color: #d4e8b8;
          }

          .unbeatable-one__title {
            font-size: 48px;
            font-weight: 700;
            line-height: 1.2;
            margin-bottom: 30px;
          }

          .unbeatable-one__btn {
            background: #7cb342;
            color: #fff;
            padding: 14px 36px;
            font-weight: 600;
            border-radius: 50px;
            transition: all 0.4s ease;
            box-shadow: 0 8px 20px rgba(124, 179, 66, 0.3);
            display: inline-flex;
            align-items: center;
            gap: 10px;
          }

          .unbeatable-one__btn:hover {
            background: #6a9a38;
            transform: translateY(-3px);
            box-shadow: 0 15px 30px rgba(124, 179, 66, 0.4);
          }

          .unbeatable-one__btn i {
            transition: transform 0.3s ease;
          }

          .unbeatable-one__btn:hover i {
            transform: translateX(5px);
          }

          /* Responsive */
          @media (max-width: 992px) {
            .unbeatable-one__title { font-size: 38px; }
            .unbeatable-one__shape-one,
            .unbeatable-one__shape-two { width: 120px; }
          }

          @media (max-width: 768px) {
            .unbeatable-one { padding: 100px 0; }
            .unbeatable-one__title { font-size: 32px; }
            .unbeatable-one__shape-one,
            .unbeatable-one__shape-two { display: none; }
            .unbeatable-one__bg { background-attachment: scroll; }
          }
        `}</style>
      </section>
    </>
  );
};

export default UnbeatableOne;