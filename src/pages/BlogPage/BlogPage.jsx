import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogsData } from '../../data/blogsData';
import './BlogPage.css';

const BlogPage = () => {
  const { slug } = useParams();
  const blog = blogsData.find((b) => b.slug === slug);
  
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!blog) {
    return (
      <div className="blog-page-container not-found">
        <h2>Blog Not Found</h2>
      </div>
    );
  }

  // Get 3 random other blogs
  const remainingBlogs = blogsData
    .filter((b) => b.slug !== slug)
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  return (
    <div className="blog-page-container">
      <div className="blog-header-wrapper">
        <div className="blog-meta">
          <span className="blog-number">{blog.num}</span>
          <span className="blog-tag">Insights & Futures</span>
        </div>
        <h1 className="blog-main-title">{blog.title}</h1>
        <p className="blog-subtitle">{blog.desc}</p>
      </div>
      
      <div className="blog-hero-image-wrapper">
        <img src={blog.image} alt={blog.title} className="blog-hero-image" />
      </div>

      <div className="blog-content-wrapper" dangerouslySetInnerHTML={{ __html: blog.content }}>
      </div>

      <div className="remaining-blogs-section">
        <h3 className="section-title">Keep <span className="serif-italic">Reading</span></h3>
        <div className="remaining-grid">
          {remainingBlogs.map((item, idx) => (
            <Link to={`/blog/${item.slug}`} className="remaining-card" key={idx}>
              <div className="remaining-img-wrapper">
                <img src={item.image} alt={item.title} />
              </div>
              <h4 className="remaining-title">{item.title}</h4>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
