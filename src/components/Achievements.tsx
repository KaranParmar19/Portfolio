import "./styles/Achievements.css";
import { MdOpenInNew } from "react-icons/md";

const achievements = [
  {
    icon: "⚡",
    title: "300+ DSA Problems Solved",
    issuer: "LeetCode",
    date: "",
    description:
      "Solved 300+ problems on LeetCode spanning arrays, strings, trees, graphs, dynamic programming, and advanced algorithmic techniques.",
    credentialUrl: "https://leetcode.com/u/karan_Parmar/",
  },
  {
    icon: "🏆",
    title: "Data Structure and Algorithm",
    issuer: "SkillStone",
    date: "",
    description:
      "Certified in data structures and algorithms, covering arrays, linked lists, trees, graphs, dynamic programming, and optimization techniques.",
  },
  {
    icon: "🎓",
    title: "Introduction to Hardware and Software Systems",
    issuer: "IBM",
    date: "",
    description:
      "Comprehensive certification covering computer hardware fundamentals, operating systems, and software system architecture by IBM.",
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/verify/M9SUDH4B7UZ6",
  },
  {
    icon: "🌐",
    title: "The Bits and Bytes of Computer Networking",
    issuer: "Google",
    date: "",
    description:
      "Mastered networking fundamentals including TCP/IP, DNS, DHCP, network troubleshooting, and cloud networking concepts.",
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/verify/3V1OHNNPQXBC",
  },
];

const Achievements = () => {
  return (
    <div className="achievements-section" id="achievements">
      <div className="achievements-container section-container">
        <h2>
          Achievements <span>&</span>
          <br />
          Certifications
        </h2>
        <div className="achievements-grid">
          {achievements.map((item, index) => (
            <div className="achievement-card" key={index}>
              <div className="achievement-header">
                <span className="achievement-icon">{item.icon}</span>
                <div className="achievement-meta">
                  <span className="achievement-issuer">{item.issuer}</span>
                  <span className="achievement-date">{item.date}</span>
                </div>
              </div>
              <h3 className="achievement-title">{item.title}</h3>
              <p className="achievement-description">{item.description}</p>
              {item.credentialUrl && (
                <a
                  href={item.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="achievement-link"
                  data-cursor="disable"
                >
                  View Credential
                  <MdOpenInNew />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements;
