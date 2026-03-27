import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './ThoughtLeadership.css';
import { blogsData } from '../../data/blogsData';

const ThoughtLeadership = () => {
  const futures = blogsData.slice(0, 4);
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let intervalId;

    const startAutoScroll = () => {
      intervalId = setInterval(() => {
        if (window.innerWidth <= 768) {
          const { scrollLeft, scrollWidth, clientWidth } = scrollContainer;
          if (scrollLeft + clientWidth >= scrollWidth - 10) {
            scrollContainer.scrollTo({ left: 0, behavior: 'smooth' });
          } else {
            scrollContainer.scrollBy({ left: clientWidth, behavior: 'smooth' });
          }
        }
      }, 3000);
    };

    startAutoScroll();

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="insights-section" id="leadership">
      <div className="section-header">
        <p className="tagline">[ <span className="serif-italic">Thought Leadership</span> ]</p>
        <h2 className="main-title">
          Insights <span className="serif-italic">& Futures</span>
        </h2>
      </div>

      <div className="futures-grid" ref={scrollRef}>
        {futures.map((item, idx) => (
          <Link to={`/blog/${item.slug}`} className="blog-card" key={idx}>
            <div className="blog-image-wrapper">
              <img src={item.image} alt={item.title} className="blog-image" />
            </div>
            <div className="blog-content">
              <span className="item-number">{item.num}</span>
              <h3 className="item-title">{item.title}</h3>
              <p className="item-desc">{item.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ThoughtLeadership;
