import './CreativeEngineering.css';

const CreativeEngineering = () => {
  const points = [
    {
      num: "(01)",
      title: "Performing Arts",
      desc: "Engaging cognitive processes in creativity, emotion, and memory.",
      img: "/images/hf_20260323_111428_49b4b86d-286d-439b-a8bf-fd886b2ea67b.png"
    },
    {
      num: "(02)",
      title: "Art Therapy & Mental Health",
      desc: "Using creative processes for cognitive and emotional well-being.",
      img: "/images/hf_20260324_091449_c0852301-c250-4c31-89b7-6a167f61ff29 - Copy.png"
    },
    {
      num: "(03)",
      title: "Product Ideas",
      desc: "Blending cognitive science with artistic and also innovation.",
      img: "/images/hf_20260323_111428_3b7d3312-ee0a-44ed-972a-0962df78c65a - Copy.png"
    }
  ];

  return (
    <section className="ce-section" id="arts">
      <div className="ce-inner">
        
        <div className="ce-header">
          <span className="ce-label">
            [ <em>Cognitive & Arts Expression</em> ]
          </span>
          <h2 className="ce-title">
            Creative <em>Engineering</em>
          </h2>
        </div>

        <div className="ce-grid">
          {points.map((pt, idx) => (
            <div className="ce-card" key={idx}>
              <div className="ce-card-content">
                <span className="ce-num">{pt.num}</span>
                <h3 className="ce-card-title">{pt.title}</h3>
                <p className="ce-card-desc">{pt.desc}</p>
              </div>
              <div className="ce-visual">
                <img src={pt.img} alt={pt.title} className="ce-img" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CreativeEngineering;
