import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import ReactMarkdown from "react-markdown"

const ComponentName = ({ data }) => {
  const {
    blog: { content },
  } = data
  return (
    <Layout>
      <section className="blog__template">
        <div className="section--center">
          <article className="blog__content">
            <ReactMarkdown source={content} />
          </article>
          <Link to='/blog' className='btn btn--center'>blog</Link>
        </div>
      </section>
      
    </Layout>
  )
}

export const query = graphql`
  query GetSingleBlog($slug: String) {
    blog: strapiBlogs(slug: { eq: $slug }) {
      content
    }
  }
`

export default ComponentName
