import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { TbNotes } from "react-icons/tb";
import "./styles/SocialIcons.css";

const SocialIcons = () => {
  return (
    <div className="icons-section">
      <div className="social-icons" id="social" data-cursor="icons">
        <a
          href="https://github.com/KaranParmar19/"
          target="_blank"
          className="social-icon-link"
          data-cursor="disable"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/karan-parmar-280991274/"
          target="_blank"
          className="social-icon-link"
          data-cursor="disable"
          aria-label="LinkedIn"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="https://www.instagram.com/karrxn.__/"
          target="_blank"
          className="social-icon-link"
          data-cursor="disable"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
      </div>
      <a
        className="resume-button"
        href="/LPUresume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        data-cursor="disable"
      >
        Resume <TbNotes style={{ transform: "rotate(90deg)", marginTop: "4px" }} />
      </a>
    </div>
  );
};

export default SocialIcons;
