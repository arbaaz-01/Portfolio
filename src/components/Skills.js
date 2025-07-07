import "./Skills.css"

const Skills = () => {
  const skillsData = {
    "Programming Languages": {
      skills: ["Java", "C++", "Python", "JavaScript", "SQL"],
      icon: "💻",
      color: "#4f46e5"
    },
    Technologies: {
      skills: ["Spring Boot", "JDBC", "Hibernate", "JSP", "Servlet", "MERN", "Android Development"],
      icon: "⚙️",
      color: "#059669"
    },
    Tools: {
      skills: ["Git", "Linux", "VS Code", "IntelliJ IDEA", "Maven", "Postman"],
      icon: "🛠️",
      color: "#f44f65"
    },
    Databases: {
      skills: ["MySQL", "MongoDB"],
      icon: "🗄️",
      color: "#7c3aed"
    },
  }

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="skills-header">
          <h2 className="section-title">Technical Skills</h2>
        </div>
        <div className="skills-grid">
          {Object.entries(skillsData).map(([category, data], index) => (
            <div key={index} className="skill-category" style={{"--category-color": data.color}}>
              <div className="skill-category-header">
                <div className="skill-icon">{data.icon}</div>
                <h3>{category}</h3>
              </div>
              <div className="skill-tags">
                {data.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex} 
                    className="skill-tag"
                    style={{"--delay": `${skillIndex * 0.1}s`}}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills