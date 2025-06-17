import "./About.css"

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a dedicated final year MCA student at Sardar Patel Institute of Technology with a passion for
              Technology and Development. I have strong academic record and hands-on experience in various
              programming languages and technologies, I strive to create impactful solutions.
            </p>
            <p>
              My journey in computer science has been marked by consistent academic excellence, having secured 1st
              position in five consecutive semesters during my B.Sc. IT. I've solved over 600 DSA problems and have
              practical experience in Java Development, Full-Stack Development, Mobile App Development, and Machine Learning.
            </p>
        
          </div>
          <div className="about-stats">
            <div className="stat">
              <h3>9.86</h3>
              <p>Current CGPA</p>
            </div>
            <div className="stat">
              <h3>600+</h3>
              <p>DSA Problems Solved</p>
            </div>
            <div className="stat">
              <h3>3+</h3>
              <p>Major Projects</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
