import React, { useState } from "react"
import Title from "./Title"
import { FaAngleDoubleRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

const query = graphql`
  {
    allStrapiJobs(sort: { fields: strapiId, order: DESC }) {
      nodes {
        id
        date
        company
        position
        strapiId
        description {
          id
          name
        }
      }
    }
  }
`

const Jobs = () => {
  const [currentJob, setCurrentJob] = useState(0)
  const data = useStaticQuery(query)
  const {
    allStrapiJobs: { nodes: jobs },
  } = data
  const { company, position, date, description } = jobs[currentJob]

  return (
    <section className="section jobs">
      <Title title="Experience" />
      <div className="jobs--center">
        <div className="btn-container">
          {jobs.map((x, i) => (
            <button
              key={x.strapiId}
              className={`job__btn ${i === currentJob && "active-btn"}`}
              onClick={() => setCurrentJob(i)}
            >
              {x.company}
            </button>
          ))}
        </div>
        <article className="job__info">
          <h3>{position}</h3>
          <h4>{company}</h4>
          <p className="job__date">{date}</p>
          {description.map(line => (
            <div key={line.id} className="job__desc">
              <FaAngleDoubleRight className="job__icon" />
              <p>{line.name}</p>
            </div>
          ))}
        </article>
      </div>
      <Link to="/about" className="btn btn--center">
        more info
      </Link>
    </section>
  )
}

export default Jobs
