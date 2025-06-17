import "./Education.css"

const Education = () => {
  const educationData = [
    {
      degree: "Master of Computer Applications",
      institution: "Sardar Patel Institute of Technology",
      location: "Mumbai",
      duration: "Aug 2024 - Present",
      cgpa: "9.86",
    },
    {
      degree: "B.Sc. Information Technology",
      institution: "Nagindas Khandwala College",
      location: "Mumbai",
      duration: "Aug 2021 - May 2024",
      cgpa: "9.83",
    },
    {
      degree: "HSC Science",
      institution: "Bhavan's College",
      location: "Mumbai",
      duration: "Jun 2019 - Mar 2020",
      cgpa: null,
    },
  ]

  return (
    <section id="education" className="education">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="education-timeline">
          {educationData.map((edu, index) => (
            <div key={index} className="education-item">
              <div className="education-marker"></div>
              <div className="education-content">
                <h3>{edu.degree}</h3>
                <h4>{edu.institution}</h4>
                <div className="education-details">
                  <span className="location">{edu.location}</span>
                  <span className="duration">{edu.duration}</span>
                  {edu.cgpa && <span className="cgpa">CGPA: {edu.cgpa}</span>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
