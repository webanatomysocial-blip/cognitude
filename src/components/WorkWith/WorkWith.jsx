import "./WorkWith.css";
import icon from "../../../public/images/Frame 1143 - Copy.png";

const WorkWith = () => {
  return (
    <section className="ww-section" id="partners">
      {/* Background Image (Blue Light Trails on the left) */}

      <div className="ww-inner">
        <div className="ww-header">
          <div className="ww-tagline">
            [ <em>Explore Partners</em> ]
          </div>
          <h2 className="ww-title">
            Who We <em>Work With</em>
          </h2>
        </div>

        <div className="ww-cards-layout">
          {/* Column 1: Technology (Bottom) */}
          <div className="ww-col col-1">
            <div className="ww-card">
              <div className="ww-card-icon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
                  <rect x="9" y="9" width="6" height="6" />
                  <line x1="9" y1="1" x2="9" y2="4" />
                  <line x1="15" y1="1" x2="15" y2="4" />
                  <line x1="9" y1="20" x2="9" y2="23" />
                  <line x1="15" y1="20" x2="15" y2="23" />
                  <line x1="20" y1="9" x2="23" y2="9" />
                  <line x1="20" y1="15" x2="23" y2="15" />
                  <line x1="1" y1="9" x2="4" y2="9" />
                  <line x1="1" y1="15" x2="4" y2="15" />
                </svg>
              </div>
              <h3 className="ww-card-title">
                Technology and AI
                <br />
                Companies
              </h3>
              <p className="ww-card-desc">Building human-aware systems.</p>
            </div>
          </div>

          {/* Column 2: Education (Top) & Mental Health (Bottom) */}
          <div className="ww-col col-2">
            <div className="ww-card">
              <div className="ww-card-icon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                </svg>
              </div>
              <h3 className="ww-card-title">
                Educational
                <br />
                Institutions
              </h3>
              <p className="ww-card-desc">
                Advancing learning with cognitive tools.
              </p>
            </div>
            <div className="ww-card">
              <div className="ww-card-icon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z" />
                </svg>
              </div>
              <h3 className="ww-card-title">
                Mental Health
                <br />
                Professionals
              </h3>
              <p className="ww-card-desc">Supporting wellness innovations.</p>
            </div>
          </div>

          {/* Column 3: Special Center Card (Hero) */}
          <div className="ww-col col-center">
            <div className="ww-hero-card">
              <div className="ww-center-glow"></div>
              <div className="ww-logo-box">
                <img src={icon} alt="Logo" />
              </div>
            </div>
          </div>

          {/* Column 4: Artists (Top) & Research (Bottom) */}
          <div className="ww-col col-4">
            <div className="ww-card">
              <div className="ww-card-icon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 19l7-7 3 3-7 7-3-3z" />
                  <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
                  <path d="M2 2l7.586 7.586" />
                  <circle cx="11" cy="11" r="2" />
                </svg>
              </div>
              <h3 className="ww-card-title">
                Artists and Creative
                <br />
                Practitioners
              </h3>
              <p className="ww-card-desc">Enhancing artistic expression.</p>
            </div>
            <div className="ww-card">
              <div className="ww-card-icon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                  <circle cx="12" cy="13" r="3" />
                  <path d="M12 16v2" />
                </svg>
              </div>
              <h3 className="ww-card-title">
                Research
                <br />
                Organizations
              </h3>
              <p className="ww-card-desc">
                Collaborating on cognitive studies.
              </p>
            </div>
          </div>

          {/* Column 5: Cultural (Bottom) */}
          <div className="ww-col col-5">
            <div className="ww-card">
              <div className="ww-card-icon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                  <path d="M2 12h20" />
                </svg>
              </div>
              <h3 className="ww-card-title">
                Cultural and Design
                <br />
                Institutions
              </h3>
              <p className="ww-card-desc">Integrating arts and science.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkWith;
