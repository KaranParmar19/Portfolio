import "./styles/WhatIDo.css";

const services = [
  {
    num: "01",
    icon: "🏗️",
    title: "System Design",
    description: "Building clean, scalable systems by combining strong architecture with efficient problem-solving. Designing systems that handle real-world load.",
    tags: ["DSA", "REST APIs", "Microservices", "Load Balancing", "Caching", "Scalability"],
  },
  {
    num: "02",
    icon: "🧩",
    title: "Problem Solving",
    description: "Solving complex problems using strong foundations in data structures, algorithms, and logical thinking. 600+ problems solved on competitive platforms.",
    tags: ["C++", "Dynamic Programming", "Graphs", "Optimization", "LeetCode"],
  },
  {
    num: "03",
    icon: "⚛️",
    title: "Full-Stack Development",
    description: "End-to-end application development with modern MERN stack. Building interactive, real-time systems with seamless UX.",
    tags: ["React", "Node.js", "MongoDB", "Express", "TypeScript", "WebSockets"],
  },
  {
    num: "04",
    icon: "🎞️",
    title: "Creative Engineering",
    description: "Crafting immersive web experiences using real-time graphics and animation. From 3D scenes to smooth GSAP motion design.",
    tags: ["GSAP", "Three.js", "WebGL", "Animation", "D3.js"],
  },
];

const WhatIDo = () => {
  return (
    <div className="whatIDO section-container">
      <div className="whatido-container">
        <div className="whatido-header">
          <span className="section-label">What I Do</span>
          <h2 className="section-title">My Areas of <span>Expertise</span></h2>
        </div>

        <div className="whatido-grid">
          {services.map((svc) => (
            <div className="whatido-card" key={svc.num}>
              <span className="whatido-card-num">{svc.num}</span>
              <div className="whatido-card-icon-row">
                <div className="whatido-card-icon">{svc.icon}</div>
                <div className="whatido-card-arrow">↗</div>
              </div>
              <h3>{svc.title}</h3>
              <p>{svc.description}</p>
              <div className="whatido-tags-row">
                {svc.tags.map((tag) => (
                  <span className="whatido-tag" key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;
