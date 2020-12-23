import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import ReactMarkdown from "react-markdown"
import SEO from "../components/SEO"

const ComponentName = ({ data }) => {
  const {
    blog: { content, title, description },
  } = data
  return (
    <Layout>
      <SEO title={title} description={description} />
      <section className="blog__template">
        <div className="section--center">
          <article className="blog__content">
            <ReactMarkdown source={content} />
          </article>
          <Link to="/blog" className="btn btn--center">
            blog
          </Link>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query GetSingleBlog($slug: String) {
    blog: strapiBlogs(slug: { eq: $slug }) {
      content
      title
      description
    }
  }
`

export default ComponentName
