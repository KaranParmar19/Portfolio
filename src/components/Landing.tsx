import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        {/* Interstitial Splash Reveal */}
        <div className="landing-splash-overlay">
          <div className="splash-word splash-word-1">SOFTWARE</div>
          <div className="splash-word splash-word-2">DEVELOPMENT</div>
          <div className="splash-word splash-word-3">ENGINEER</div>
        </div>

        <div className="landing-container">

          {/* Status pill */}
          <div className="landing-status">
            <span className="landing-status-dot"></span>
            Open to Work — SDE Roles
          </div>

          {/* Hero title */}
          <div className="landing-intro">
            <p className="landing-greeting">Hi, I'm</p>
            <h1 className="landing-name">
              Karan<br />
              <span>&nbsp;&nbsp;Parmar</span><span className="landing-name-cursor">_</span>
            </h1>

            <div className="landing-role-line">
              <span className="landing-role-divider"></span>
              <span className="landing-role">Software Development Engineer</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="landing-cta-row">
            <a href="#work" className="landing-cta-primary" data-cursor="disable">
              View My Work
            </a>
            <a href="#contact" className="landing-cta-secondary" data-cursor="disable">
              Get in Touch
            </a>
          </div>

          {/* Stats */}
          <div className="landing-stats">
            <div className="landing-stat">
              <span className="landing-stat-value">500<span>+</span></span>
              <span className="landing-stat-label">DSA Problems</span>
            </div>
            <div className="landing-stat-divider"></div>
            <div className="landing-stat">
              <span className="landing-stat-value">3<span>+</span></span>
              <span className="landing-stat-label">Live Projects</span>
            </div>
            <div className="landing-stat-divider"></div>
            <div className="landing-stat">
              <span className="landing-stat-value">MERN</span>
              <span className="landing-stat-label">Stack</span>
            </div>
          </div>

          {/* Floating decoration tags */}
          <div className="landing-float-tag">
            <div className="landing-float-item highlight">MERN Stack</div>
            <div className="landing-float-item">TypeScript</div>
            <div className="landing-float-item highlight">System Design</div>
            <div className="landing-float-item">C++ / DSA</div>
            <div className="landing-float-item">WebSockets</div>
          </div>

        </div>

        {/* Scroll indicator */}
        <div className="landing-scroll">
          <div className="landing-scroll-line"></div>
          <span className="landing-scroll-text">Scroll</span>
        </div>

        {children}
      </div>
    </>
  );
};

export default Landing;
