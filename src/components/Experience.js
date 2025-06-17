import "./Experience.css"

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="experience-content">
          <div className="experience-item">
            <div className="experience-header">
              <h3>Internship</h3>
              <span className="duration">Jan 2023 - Feb 2023</span>
            </div>
            <h4>73bit Limited</h4>
            <p>
              Worked with JavaScript's chart.js library to create interactive and dynamic charts that improved data
              visualization and user engagement.
            </p>
          </div>

          <div className="experience-item">
            <div className="experience-header">
              <h3>Training and Placement Coordinator</h3>
              <span className="duration">Current</span>
            </div>
            <h4>TPO SPIT</h4>
            <p>Act as a bridge between the college and companies to facilitate campus placements and internships.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
