import "./About.css"

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">

            <div className="intro-paragraph">
              <p>
                I'm a dedicated final year MCA student at <strong>Sardar Patel Institute of Technology</strong> with a passion for
                Technology and Development. I have strong academic record and hands-on experience in various
                programming languages and technologies.
              </p>
            </div>

            <div className="journey-paragraph">
              <p>
                My journey in computer science has been marked by consistent academic excellence, having secured{" "}
                1st position in five consecutive semesters during my B.Sc. IT. I've solved over 600 DSA
                problems and have practical experience in{" "}
                <strong>Java Development, Full-Stack Development, Mobile App Development, and Machine Learning.</strong>
              </p>
            </div>

            <div className="passion-statement">
              <p>
                I'm passionate about solving complex problems through code and constantly learning new technologies. My
                goal is to contribute to innovative projects that make a positive impact on society while continuing to
                grow as a software developer.
              </p>
            </div>
          </div>

          <div className="about-stats">
            <div className="stat-card primary">
              <div className="stat-number">9.68</div>
              <div className="stat-label">Current CGPA</div>
            </div>
            <div className="stat-card secondary">
              <div className="stat-number">600+</div>
              <div className="stat-label">DSA Problems Solved</div>
            </div>
            <div className="stat-card tertiary">
              <div className="stat-number">3+</div>
              <div className="stat-label">Major Projects</div>
            </div>
            <div className="stat-card quaternary">
              <div className="stat-number">1st</div>
              <div className="stat-label">Rank in 5 Semesters</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
