import "./styles/SoftSkills.css";

const softSkills = [
  {
    icon: "🤝",
    title: "Team Collaboration",
    description: "Working seamlessly across teams, bridging gaps between design, product, and engineering.",
    tag: "Teamwork",
    wide: true,
  },
  {
    icon: "💬",
    title: "Communication",
    description: "Translating complex technical concepts into clear, actionable insights for diverse audiences.",
    tag: "Clarity",
    wide: false,
  },
  {
    icon: "🧩",
    title: "Problem Solving",
    description: "Approaching challenges with structured thinking, breaking down ambiguity into solvable steps.",
    tag: "Analytical",
    wide: false,
  },
  {
    icon: "🔄",
    title: "Adaptability",
    description: "Thriving in fast-paced environments by quickly learning new tools, frameworks, and domains.",
    tag: "Flexibility",
    wide: true,
  },
  {
    icon: "🧠",
    title: "Critical Thinking",
    description: "Evaluating information objectively to make well-reasoned decisions and avoid common pitfalls.",
    tag: "Reasoning",
    wide: false,
  },
  {
    icon: "💡",
    title: "Creativity",
    description: "Designing innovative solutions by thinking outside the box and combining ideas from different domains.",
    tag: "Innovation",
    wide: false,
  },
];

const SoftSkills = () => {
  return (
    <div className="softskills-section section-container" id="softskills">
      <div className="softskills-inner">
        <div>
          <span className="section-label">Soft Skills</span>
          <h2 className="section-title">Beyond the <span>Code</span></h2>
        </div>

        <div className="softskills-grid">
          {softSkills.map((skill, idx) => (
            <div className={`softskill-card ${skill.wide ? "wide" : ""}`} key={idx}>
              <div className="softskill-card-icon">{skill.icon}</div>
              <div className="softskill-card-body">
                <h3>{skill.title}</h3>
                <p>{skill.description}</p>
                <span className="softskill-tag">{skill.tag}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SoftSkills;
