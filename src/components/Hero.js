"use client"
import "./Hero.css"
import myPhoto from "../assets/profile_pic.jpg"

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Arbaz Ali Shaikh</h1>
            <h2>Final Year MCA Student</h2>
            <p>
              Passionate about Software Development, Problem-Solving, and creating innovative solutions. Currently
              pursuing Master of Computer Applications with a strong foundation in Java Development
            </p>
            <div className="hero-buttons">
              <button
                className="btn-primary"
                onClick={() => document.getElementById("projects").scrollIntoView({ behavior: "smooth" })}
              >
                View Projects
              </button>
              <button
                className="btn-secondary"
                onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}
              >
                Get In Touch
              </button>
            </div>
          </div>
          <div className="hero-image">
            <div className="profile-placeholder">
              <img src={myPhoto} alt="Profile" className="profile-img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
