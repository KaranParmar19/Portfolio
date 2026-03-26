import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section section-container" id="about">
      <span className="section-label">About Me</span>
      <div className="about-container">
        {/* Left: bio */}
        <div className="about-content">
          <h2 className="section-title">
            Building things<br />
            that <span>matter</span>
          </h2>
          <p className="about-paragraph">
            I'm <strong>Karan Parmar</strong>, a Software Development Engineer in the making, currently pursuing my B.Tech in Computer Science at <span className="about-highlight">Lovely Professional University</span>.
          </p>
          <p className="about-paragraph">
            My core strength lies at the intersection of <strong>problem-solving and product thinking</strong>. With over <span className="about-highlight">500+ DSA problems</span> solved, I've developed a strong foundation in algorithms and system design.
          </p>
          <p className="about-paragraph">
            I specialize in the <strong>MERN stack</strong>, building complex, interactive systems — from real-time collaboration platforms to performance-optimized applications.
          </p>
        </div>

        {/* Right: bento panel */}
        <div className="about-panel">
          <div className="about-card">
            <div className="about-card-icon">⚡</div>
            <div className="about-card-body">
              <div className="about-card-value">500<span>+</span></div>
              <div className="about-card-label">DSA Problems Solved</div>
            </div>
          </div>
          <div className="about-card accent">
            <div className="about-card-value">MERN</div>
            <div className="about-card-label">Primary Stack</div>
          </div>
          <div className="about-card">
            <div className="about-card-value">3<span style={{fontSize:'1rem', color:'var(--text-muted)'}}>+</span></div>
            <div className="about-card-label">Live Projects</div>
          </div>
          <div className="about-card">
            <div className="about-card-value">LPU</div>
            <div className="about-card-label">B.Tech CSE</div>
          </div>
          <div className="about-card">
            <div className="about-card-value"><span style={{fontSize:'1.1rem'}}>C++</span></div>
            <div className="about-card-label">Competitive Programming</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
