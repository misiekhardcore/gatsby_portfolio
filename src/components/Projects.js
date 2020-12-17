import React from "react"
import Title from "./Title"
import Project from "./Project"
import { Link } from "gatsby"

const Projects = ({ projects, title, showLink }) => {
  return (
    <section className="section projects">
      <Title title={title} />
      <div className="section--center projects--center">
        {projects.map((project, i) => (
          <Project key={project.strapiId} index={i} {...project} />
        ))}
      </div>
      {showLink && (
        <Link to="/projects" className="btn btn--center">
          See all
        </Link>
      )}
    </section>
  )
}

export default Projects
