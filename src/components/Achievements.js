import "./Achievements.css"

const Achievements = () => {
  const achievements = [
    "Secured 1st position in Five consecutive semesters of B.Sc. IT",
    "Solved 600+ DSA problems and earned multiple badges",
    "Maintained excellent academic performance with CGPA 9.86 in MCA",
    "Successfully completed internship at 73bit Limited",
  ]

  const codingProfiles = [
    { name: "LeetCode", link: "#" },
    { name: "HackerRank", link: "#" },
    { name: "GeeksforGeeks", link: "#" },
  ]

  return (
    <section id="achievements" className="achievements">
      <div className="container">
        <h2 className="section-title">Achievements</h2>
        <div className="achievements-content">
          <div className="achievements-list">
            <h3>Academic & Professional</h3>
            <ul>
              {achievements.map((achievement, index) => (
                <li key={index}>{achievement}</li>
              ))}
            </ul>
          </div>
          <div className="coding-profiles">
            <h3>Coding Profiles</h3>
            <div className="profile-links">
              {codingProfiles.map((profile, index) => (
                <a key={index} href={profile.link} className="profile-link" target="_blank" rel="noopener noreferrer">
                  {profile.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Achievements
