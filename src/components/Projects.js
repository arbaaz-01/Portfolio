import "./Projects.css"

const Projects = () => {
  const projectsData = [
    {
      title: "KONTEST (Coding Contest Calendar)",
      description:
        "An Android app for enthusiast coders offers comprehensive insights into upcoming and ongoing contests, supported platforms include Codeforces, Codechef, Atcoder and more.",
      techStack: ["Android Studio", "Kotlin", "Firebase", "Recycler View", "Volley library", "API"],
      link: "https://github.com/arbaaz-01/Kontest",
    },
    {
      title: "Budgetly",
      description:
        "The Flutter Finance Tracker App offers an easy-to-use and visually clear platform to manage your financial transactions. It helps users track expenses, set budgets, and analyze spending. The app uses Firebase for secure authentication and real-time data storage, ensuring a smooth and reliable experience.",
      techStack: ["Flutter", "Dart", "Firebase"],
      link: "https://github.com/arbaaz-01/personalfinancetracker",
    },
    {
      title: "Crop Recommendation System",
      description:
        "Engineered a Crop Recommendation System, delivering 99.84% accuracy to empower Indian farmers with optimal crop selection, utilizing LightGBM and CatBoost stacking.",
      techStack: ["LightGBM", "CatBoost", "Streamlit"],
      link: "https://github.com/arbaaz-01/Crop-Recommendation-Model",
    },
  ]

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-header">
                <h3>{project.title}</h3>
                <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15,3 21,3 21,9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </a>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="tech-stack">
                {project.techStack.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">
                    {tech}
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

export default Projects
