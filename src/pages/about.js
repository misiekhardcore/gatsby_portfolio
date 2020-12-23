import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Title from "../components/Title"
import Image from "gatsby-image"
import SEO from "../components/SEO"

const About = ({ data }) => {
  console.log(data)
  const {
    strapiAbout: { title, description, stack, image, id },
  } = data
  return (
    <Layout>
    <SEO title='About' description="About me"/>
      <section className="about__page">
        <div className="section--center about--center">
          <Image fluid={image.childImageSharp.fluid} className="about__img" />
          <article className="about__text">
            <Title title={title} />
            <p>{description}</p>
            <div className="about__stack">
              {stack.map(x => (
                <span key={x.id}>{x.title}</span>
              ))}
            </div>
          </article>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    strapiAbout {
      description
      id
      image {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      title
      stack {
        id
        title
      }
    }
  }
`

export default About
