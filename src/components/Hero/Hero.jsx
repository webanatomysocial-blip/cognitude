import "./Hero.css";

const Hero = () => {
  const brands = [
    { name: "Alt+Shift", img: "/images/logos/1.png" },
    { name: "Alt+Shift", img: "/images/logos/2.png" },
    { name: "Alt+Shift", img: "/images/logos/3.png" },
    { name: "Alt+Shift", img: "/images/logos/4.png" },
    { name: "Alt+Shift", img: "/images/logos/5.png" },
    { name: "Alt+Shift", img: "/images/logos/6.png" },
    { name: "Alt+Shift", img: "/images/logos/7.png" },
    { name: "Alt+Shift", img: "/images/logos/8.png" },
    { name: "Alt+Shift", img: "/images/logos/9.png" },
    { name: "Alt+Shift", img: "/images/logos/10.png" },

  ];

  return (
    <section className="hero" id="home">
      {/* Full-screen background video */}
      <video
        className="hero-video"
        src="/images/freepik_a-minimalist-abstract-light-wave-made-of-fine-glow_minimax_768p_16-9_24fps_28304 - Copy.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Content */}
      <div className="hero-content">
        <h1 className="hero-title">
          Designing the future of
          <br />
          human intelligence
        </h1>
        <p className="hero-subtitle">
          We are an interdisciplinary enterprise operating at the intersection
          of
          <br />
          Cognitive neuroscience,&nbsp; artificial intelligence,&nbsp; arts, and
          philosophy.
        </p>
        <div className="hero-actions">
          <a href="#expertise" className="hero-btn hero-btn--white">
            Explore Our Services <span className="arrow">→</span>
          </a>
          <a
            href="mailto:cognitude.science@gmail.com?subject=Collaboration%20-%20Let%27s%20Build%20Human-Centred%20Futures"
            className="hero-btn hero-btn--black"
          >
            Collaborate With Us&nbsp;
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L4.5 12 12 22l7.5-10L12 2z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Partners Strip (Infinite Scroll) */}
      <div className="hero-partners">
        <div className="partners-inner">
          <div className="partners-label">
            Powering 100+
            <br />
            Patners worldwide
          </div>
          <div className="carousel-container">
            <div className="carousel-track">
              {/* Repetition for infinite scroll effect */}
              {[...brands, ...brands, ...brands, ...brands].map(
                (brand, idx) => (
                  <div className="brand-item" key={idx}>
                    <img
                      src={brand.img}
                      alt={brand.name}
                      className="brand-logo-img"
                    />
                    {/* <span className="brand-name">{brand.name}</span> */}
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
