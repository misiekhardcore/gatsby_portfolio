import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"
// ...GatsbyImageSharpFluid
const query = graphql`
  {
    file(relativePath: { eq: "hero-img.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Hero = () => {
  const data = useStaticQuery(query)
  const {
    file: {
      childImageSharp: { fluid: image },
    },
  } = data
  return (
    <div className="hero">
      <section className="section--center hero--center">
        <article className="hero__info">
          <div>
            <div className="underline"></div>
            <h1>i'm john</h1>
            <h4>freelancer, develoer</h4>
            <Link to="/contact" className="btn">
              contact me
            </Link>
            <SocialLinks />
          </div>
        </article>
        <Image fluid={image} className="hero__img" />
      </section>
    </div>
  )
}

export default Hero
