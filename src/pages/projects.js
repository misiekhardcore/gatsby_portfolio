import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Projects from "../components/Projects"

const ProjectsPage = ({ data }) => {
  const {
    allStrapiProjects: { nodes: projects },
  } = data
  return (
    <Layout>
      <Projects projects={projects} title="All projects" showLink/>
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiProjects {
      nodes {
        strapiId
        github
        featured
        title
        description
        url
        technologies {
          title
          id
        }
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default ProjectsPage
