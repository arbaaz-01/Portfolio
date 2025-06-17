import "./Skills.css"

const Skills = () => {
  const skillsData = {
    "Programming Languages": ["Java", "C++", "Python", "JavaScript", "SQL"],
    Technologies: ["Spring Boot", "JDBC", "Hibernate", "JSP", "Servlet", "MERN", "Android Development"],
    Tools: ["Git", "Linux", "VS Code", "IntelliJ IDEA", "Maven", "Postman"],
    Databases: ["MySQL", "MongoDB"],
  }

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-grid">
          {Object.entries(skillsData).map(([category, skills], index) => (
            <div key={index} className="skill-category">
              <h3>{category}</h3>
              <div className="skill-tags">
                {skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">
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
