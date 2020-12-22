import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import { Link } from "gatsby"
const Blog = ({ id, title, description, date, category, slug, image }) => {
  return (
    <Link key={id} to={`/blogs/${slug}`} className='blog'>
      <article>
        <Image fluid={image.childImageSharp.fluid} className="blog__img" />
        <div className="blog__card">
          <h4>{title}</h4>
          <p>{description}</p>
          <div className="blog__footer">
            <p>{category}</p>
            <p>{date}</p>
          </div>
        </div>
      </article>
    </Link>
  )
}

Blog.propTypes = {}

export default Blog
