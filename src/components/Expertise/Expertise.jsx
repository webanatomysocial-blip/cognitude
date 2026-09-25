import React from 'react';
import './Expertise.css';

const cards = [
  {
    num: '(01)',
    title: 'Research & Analytics',
    desc: 'Usability studies, behavioral modeling, and neuroscience methods like EEG and eye-tracking for human-systems insights.',
  },
  {
    num: '(02)',
    title: 'Mental Health & Wellness',
    desc: 'Early detection tools, mental health apps, CBT platforms, and AI chatbots for accessible, evidence-based care.',
  },
  {
    num: '(03)',
    title: 'Performing Arts',
    desc: 'Exploring embodied cognition in dance and theatre for enhanced expression and cognitive management.',
  },
  {
    num: '(04)',
    title: 'Cognitive Technology & AI',
    desc: 'Designing intelligent systems with NLP, speech recognition, AI assistants, and BCIs for human-aware technology.',
  },
  {
    num: '(05)',
    title: 'Education & Training',
    desc: 'Cognition-driven solutions including EdTech platforms, curriculum design, and tools for cognitive evaluation.',
  },
];

const Expertise = () => {
  return (
    <section className="expertise-section" id="expertise">

      {/* Background silhouette image container */}
      <div className="expertise-bg" aria-hidden="true">
        <img
          src="/images/expertise-bg.jpg"
          alt="Expertise and Strategic Domains"
          className="expertise-bg-img"
        />
      </div>

      {/* Section Header */}
      <div className="expertise-inner">
        <div className="expertise-header">
          <p className="expertise-tagline">
            [ <em>Our Ecosystem</em> ]
          </p>
          <h2 className="expertise-title">
            Expertise &amp; Strategic<br />
            <span className="expertise-title-italic">Domains</span>
          </h2>
        </div>

        {/* Infinite Scrolling Carousel overlaid on background */}
        <div className="expertise-carousel">
          <div className="expertise-track">
            {/* Repetition for seamless loop */}
            {[...cards, ...cards, ...cards].map((card, i) => (
              <div className="expertise-card" key={`c-${i}`}>
                <div className="expertise-card-header">
                  <span className="expertise-card-num">{card.num}</span>
                  <span className="expertise-card-title">{card.title}</span>
                </div>
                <p className="expertise-card-desc">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};

export default Expertise;