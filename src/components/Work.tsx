import "./styles/Work.css";
import { MdOpenInNew } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "VOXA",
    category: "Real-Time Collaboration Platform",
    tools: ["MERN", "Socket.io", "WebRTC"],
    image: "/images/Voxa.png",
    liveUrl: "https://voxa-client-77mw.onrender.com/",
    githubUrl: "https://github.com/KaranParmar19/VOXA",
  },
  {
    title: "Memory Viz",
    category: "Virtual Memory Simulation",
    tools: ["MERN", "D3.js", "Python"],
    image: "/images/MemoryViz.png",
    githubUrl: "https://github.com/KaranParmar19/Virtual_Memory_Management.git",
  },
  {
    title: "AlgoVibes",
    category: "Leetcode Chrome Extension",
    tools: ["JavaScript", "Chrome APIs"],
    image: "/images/AlgoVibes.png",
    githubUrl: "https://github.com/KaranParmar19/AlgoVibe-Leetcode-Extension-.git",
  },
];

const Work = () => {
  return (
    <div className="work-section section-container" id="work">
      <div className="work-inner">
        <div>
          <span className="section-label">My Work</span>
          <h2 className="section-title">Selected <span>Projects</span></h2>
        </div>

        <div className="work-list">
          {projects.map((project, index) => (
            <div className="work-item" key={index}>
              <span className="work-item-num">0{index + 1}</span>

              <div className="work-item-content">
                <h3 className="work-item-title">{project.title}</h3>
                <div className="work-item-meta">
                  <span className="work-item-category">{project.category}</span>
                  <div className="work-item-tools">
                    {project.tools.map((t) => (
                      <span className="work-item-tool" key={t}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Hover preview image */}
              <div className="work-item-image-wrap">
                <img src={project.image} alt={project.title} loading="lazy" />
              </div>

              <div className="work-item-actions">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="work-item-btn live"
                    data-cursor="disable"
                  >
                    <span className="live-dot" />
                    Live
                    <MdOpenInNew />
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="work-item-btn github"
                    data-cursor="disable"
                  >
                    <FaGithub />
                    GitHub
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
