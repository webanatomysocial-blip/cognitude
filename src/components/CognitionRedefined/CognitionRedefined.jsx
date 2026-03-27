import './CognitionRedefined.css';

const CognitionRedefined = () => {
  return (
    <section className="cr-section" id="cognition">
      <div className="cr-inner">

        {/* Left column — label */}
        <div className="cr-left">
          <span className="cr-label">
            [ <em>Cognition Redefined</em> ]
          </span>
        </div>

        {/* Right column — body text + CTA */}
        <div className="cr-right">
          <p className="cr-body">
            At Cognitude Enterprises, we unlock human potential at the
            intersection of mind, body, and technology through holistic
            approaches.
          </p>
          <a href="#expertise" className="hero-btn hero-btn--white">
            Explore Our Services <span className="arrow">→</span>
          </a>
        </div>

      </div>
    </section>
  );
};

export default CognitionRedefined;
