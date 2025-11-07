import React from 'react';
import { Link } from 'react-router-dom';

// Import Images
import SectionIcon from '../../assets/template_assets/images/icon/section-title-icon-1.png';
import Blog1 from '../../assets/template_assets/images/blog/blog-one-1.jpg';
import Blog2 from '../../assets/template_assets/images/blog/blog-one-2.jpg';
import Blog3 from '../../assets/template_assets/images/blog/blog-one-3.jpg';

const BlogOne = () => {
  const blogs = [
    {
      img: Blog1,
      day: '28',
      month: 'Aug',
      title: 'Why Agriculture & Eco is for the Envoirment',
      delay: '100ms',
    },
    {
      img: Blog2,
      day: '28',
      month: 'Aug',
      title: 'Wheat Harvest Organic Gather nice Moment',
      delay: '200ms',
    },
    {
      img: Blog3,
      day: '28',
      month: 'Aug',
      title: 'Agriculture Matters to the Future of World',
      delay: '300ms',
    },
  ];

  return (
    <section className="blog-one">
      <div className="container">
        {/* Section Title */}
        <div className="section-title text-center">
          <span className="section-title__tagline">From the Blog Post</span>
          <h2 className="section-title__title">Latest News & Articles</h2>
          <div className="section-title__icon">
            <img src={SectionIcon} alt="" />
          </div>
        </div>

        <div className="row">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="col-xl-4 col-lg-4 wow fadeInUp"
              data-wow-delay={blog.delay}
            >
              <div className="blog-one__single">
                {/* Image + Date */}
                <div className="blog-one__img">
                  <img src={blog.img} alt="" />
                  <div className="blog-one__date">
                    <span>{blog.day}</span>
                    <p>{blog.month}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="blog-one__content">
                  <ul className="blog-one__meta list-unstyled">
                    <li>
                      <Link to="/blog-details">
                        <i className="fas fa-user-circle"></i> Admin
                      </Link>
                    </li>
                    <li>
                      <Link to="/blog-details">
                        <i className="fas fa-comments"></i> 2 Comments
                      </Link>
                    </li>
                  </ul>
                  <h3 className="blog-one__title">
                    <Link to="/blog-details">{blog.title}</Link>
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogOne;