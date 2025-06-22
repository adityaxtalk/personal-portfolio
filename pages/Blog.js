import React from 'react';

const Blog = () => {
  return (
    <section className="blog__coming-soon section">
      <div className="blog__container container">
        <h2 className="blog__title">Blog</h2>
        <div className="blog__content">
          <img
            src="https://cdn-icons-png.flaticon.com/512/565/565547.png"
            alt="Coming Soon"
            className="blog__icon"
          />
          <h3 className="blog__message">Content Brewing 🍵</h3>
          <p className="blog__subtext">
            I'm currently writing insightful posts on web development, React, career tips, and more.
            Stay tuned for fresh content!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Blog;
