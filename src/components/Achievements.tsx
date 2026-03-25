import "./styles/Achievements.css";
import { MdOpenInNew } from "react-icons/md";

const achievements = [
  {
    icon: "⚡",
    title: "300+ DSA Problems Solved",
    issuer: "LeetCode",
    description: "Solved 300+ problems spanning arrays, strings, trees, graphs, dynamic programming, and advanced algorithmic techniques.",
    credentialUrl: "https://leetcode.com/u/karan_Parmar/",
  },
  {
    icon: "🏆",
    title: "Data Structure and Algorithm",
    issuer: "SkillStone",
    description: "Certified in data structures and algorithms, covering arrays, linked lists, trees, graphs, dynamic programming, and optimization techniques.",
    credentialUrl: "https://drive.google.com/file/d/1ElxQ2yBtKNnHRtNZSAhNMOkqVk_QVzzJ/view?usp=sharing",
  },
  {
    icon: "🎓",
    title: "Introduction to Hardware and Software Systems",
    issuer: "IBM",
    description: "Comprehensive certification covering computer hardware fundamentals, operating systems, and software system architecture.",
    credentialUrl: "https://www.coursera.org/account/accomplishments/verify/M9SUDH4B7UZ6",
  },
  {
    icon: "🌐",
    title: "The Bits and Bytes of Computer Networking",
    issuer: "Google",
    description: "Mastered networking fundamentals including TCP/IP, DNS, DHCP, network troubleshooting, and cloud networking concepts.",
    credentialUrl: "https://www.coursera.org/account/accomplishments/verify/3V1OHNNPQXBC",
  },
];

const Achievements = () => {
  return (
    <div className="achievements-section section-container" id="achievements">
      <div className="achievements-inner">
        <div>
          <span className="section-label">Achievements & Certifications</span>
          <h2 className="section-title">Milestones & <span>Credentials</span></h2>
        </div>

        <div className="achievements-timeline">
          {achievements.map((item, index) => (
            <div className="achievement-item" key={index}>
              <div className="achievement-top">
                <div className="achievement-badges">
                  <div className="achievement-icon-badge">{item.icon}</div>
                  <span className="achievement-issuer-badge">{item.issuer}</span>
                </div>
                {item.credentialUrl && (
                  <a
                    href={item.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="achievement-link"
                    data-cursor="disable"
                  >
                    View Credential <MdOpenInNew />
                  </a>
                )}
              </div>
              <h3 className="achievement-title">{item.title}</h3>
              <p className="achievement-description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements;
