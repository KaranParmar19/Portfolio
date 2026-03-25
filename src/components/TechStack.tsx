import "./styles/TechStack.css";

const techCategories = [
  {
    title: "Languages",
    items: [
      { name: "C++", icon: "/images/C++.png" },
      { name: "JavaScript", icon: "/images/javascript.webp" },
      { name: "TypeScript", iconText: "TS" },
    ],
  },
  {
    title: "Frontend",
    items: [
      { name: "React", icon: "/images/react2.webp" },
      { name: "Next.js", iconText: "N" },
      { name: "GSAP", iconText: "GS" },
      { name: "Three.js", iconText: "3D" },
      { name: "HTML / CSS", iconText: "◇" },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", icon: "/images/node2.webp" },
      { name: "Express", icon: "/images/express.webp" },
      { name: "REST APIs", iconText: "⟡" },
      { name: "WebSockets", iconText: "⟠" },
    ],
  },
  {
    title: "Databases",
    items: [
      { name: "MongoDB", icon: "/images/mongo.webp" },
      { name: "MySQL", icon: "/images/mysql.webp" },
    ],
  },
  {
    title: "DevOps & Tools",
    items: [
      { name: "Git / GitHub", iconText: "⎇" },
      { name: "Cloud", icon: "/images/Cloud.png" },
      { name: "Linux", iconText: "🐧" },
      { name: "VS Code", iconText: "⌨" },
    ],
  },
];

const TechStack = () => {
  return (
    <div className="techstack-section section-container" id="techstack">
      <div className="techstack-inner">
        <div>
          <span className="section-label">Tech Stack</span>
          <h2 className="section-title">Tools I <span>Work With</span></h2>
        </div>

        <div className="techstack-category-grid">
          {techCategories.map((cat, catIdx) => (
            <div className="techstack-row" key={catIdx}>
              <div className="techstack-row-label">
                <span className="techstack-row-num">{String(catIdx + 1).padStart(2, "0")}</span>
                <span className="techstack-row-title">{cat.title}</span>
              </div>
              <div className="techstack-divider"></div>
              <div className="techstack-items-row">
                {cat.items.map((item, idx) => (
                  <div className="techstack-pill" key={idx}>
                    {item.icon ? (
                      <img src={item.icon} alt={item.name} loading="lazy" />
                    ) : (
                      <span className="techstack-pill-letter">{item.iconText}</span>
                    )}
                    <span className="techstack-pill-name">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
