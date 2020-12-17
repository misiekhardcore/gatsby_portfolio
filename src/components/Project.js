import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"
const Project = ({
  index,
  title,
  description,
  technologies,
  image,
  github,
  url,
}) => {
  return (
    <article className="project">
      <Image fluid={image.childImageSharp.fluid} className="project__img" />
      <div className="project__info">
        <span className="project__number">0{index + 1}</span>
        <h3>{title}</h3>
        <p className="project__desc">{description}</p>
        <div className="project__stack">
          {technologies.map(tech => (
            <span key={tech.id}>{tech.title}</span>
          ))}
        </div>
        <div className="project__links">
          <a href={github}>
            <FaGithubSquare className="project__icon" />
          </a>
          <a href={url}>
            <FaShareSquare className="project__icon" />
          </a>
        </div>
      </div>
    </article>
  )
}

Project.propTypes = {}

export default Project
