import React from 'react';
import './CTA.css';
import ctaBg from '../../assets/cta-bg.png';

const CTA = () => {
  return (
    <section className="cta-section" id="connect">
      {/* Background Image/Overlay */}
      <div className="cta-background">
        <img 
          src={ctaBg} 
          alt="CTA Background" 
          className="cta-bg-img" 
        />

        <div className="cta-overlay"></div>
      </div>

      <div className="cta-content">
        <h2 className="cta-heading">Let’s Build Human-Centred Futures</h2>
        <p className="cta-subheading">
          Collaborate on research, products, training, or innovation with science-driven approaches.
        </p>
      </div>

      <div className="cta-footer-links">
        <a href="mailto:cognitude.science@gmail.com?subject=Collaboration%20-%20Let%27s%20Build%20Human-Centred%20Futures" className="footer-link">+ Start a Collaboration</a>
        <a href="mailto:cognitude.science@gmail.com?subject=Consultation%20-%20Let%27s%20Build%20Human-Centred%20Futures" className="footer-link">+ Request a Consultation</a>
        <a href="mailto:cognitude.science@gmail.com?subject=Workshops%20-%20Let%27s%20Build%20Human-Centred%20Futures" className="footer-link">+ Explore Workshops</a>
      </div>
    </section>
  );
};

export default CTA;

