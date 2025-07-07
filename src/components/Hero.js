"use client"
import { useState, useEffect } from "react"
import "./Hero.css"
import myPhoto from "../assets/profile_pic.jpg"

const Hero = () => {
  const [currentSkill, setCurrentSkill] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isTyping, setIsTyping] = useState(true)

  const skills = [
    "Final Year MCA Student",
    "Java Developer",
    "Problem Solver",
    "Full Stack Developer",
    "Android Developer",
    "Machine Learning Enthusiast"
  ]

  useEffect(() => {
    const currentSkillText = skills[currentSkill]
    
    if (isTyping) {
      if (displayText.length < currentSkillText.length) {
        const timeout = setTimeout(() => {
          setDisplayText(currentSkillText.slice(0, displayText.length + 1))
        }, 85)
        return () => clearTimeout(timeout)
      } else {
        const timeout = setTimeout(() => {
          setIsTyping(false)
        }, 1500)
        return () => clearTimeout(timeout)
      }
    } else {
      if (displayText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1))
        }, 50)
        return () => clearTimeout(timeout)
      } else {
        setCurrentSkill((prev) => (prev + 1) % skills.length)
        setIsTyping(true)
      }
    }
  }, [displayText, isTyping, currentSkill, skills])

  const handleResumeView = () => {
    window.open("/resume/Resume.pdf", "_blank")
  }

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Arbaz Ali Shaikh</h1>
            <h2 className="typewriter-container">
              <span className="typewriter-text">{displayText}</span>
              <span className="cursor">|</span>
            </h2>
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
               <button className="btn-resume" onClick={handleResumeView}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14,2 14,8 20,8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10,9 9,9 8,9"></polyline>
                </svg>
                View Resume
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