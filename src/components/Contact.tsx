import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-inner">
        <div>
          <span className="section-label">Contact</span>
          <h2 className="section-title">Let's Build <span>Together</span></h2>
        </div>

        {/* Hero CTA */}
        <div className="contact-hero">
          <h3 style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)", letterSpacing: "-0.02em", position: "relative", zIndex: 1 }}>
            Have an idea? Let's make it real.
          </h3>
          <p className="contact-hero-sub">
            I'm currently open to new opportunities — whether that's a full-time role, an internship, or a project collaboration. Let's create something great together.
          </p>
          <a href="mailto:kp5336464@gmail.com" className="contact-hero-cta" data-cursor="disable">
            Say Hello →
          </a>
        </div>

        {/* Info cards */}
        <div className="contact-info-grid">
          <div className="contact-info-card">
            <span className="contact-info-card-label">Email</span>
            <div className="contact-info-card-value">
              <a href="mailto:kp5336464@gmail.com" data-cursor="disable">
                kp5336464@gmail.com
              </a>
            </div>
          </div>
          <div className="contact-info-card">
            <span className="contact-info-card-label">Education</span>
            <div className="contact-info-card-value">B.Tech CSE · LPU</div>
            <div style={{ fontSize: "0.82rem", color: "var(--text-muted)", fontFamily: "var(--mono)", marginTop: "4px" }}>
              2023 – Present
            </div>
            <div style={{ fontSize: "0.82rem", color: "var(--violet-light)", fontFamily: "var(--mono)" }}>
              CGPA: 8.03
            </div>
          </div>
          <div className="contact-info-card">
            <span className="contact-info-card-label">Social</span>
            <div className="contact-social-links">
              <a href="https://github.com/KaranParmar19/" target="_blank" className="contact-social-link" data-cursor="disable">
                GitHub <MdArrowOutward />
              </a>
              <a href="https://www.linkedin.com/in/karan-parmar-280991274/" target="_blank" className="contact-social-link" data-cursor="disable">
                LinkedIn <MdArrowOutward />
              </a>
              <a href="https://www.instagram.com/karrxn.__/" target="_blank" className="contact-social-link" data-cursor="disable">
                Instagram <MdArrowOutward />
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="contact-footer">
          <span className="contact-footer-copy">
            <MdCopyright style={{ verticalAlign: "middle" }} /> 2025 Karan Parmar
          </span>
          <span className="contact-footer-credit">
            Designed & Developed by <span>Karan Parmar</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
