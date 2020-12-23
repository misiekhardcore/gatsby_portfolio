import React from "react"
import Layout from "../components/Layout"

const contact = () => {
  return (
    <Layout>
      <section className="contact__page">
        <article className="contact__form">
          <h3>get in touch</h3>
          <form action="https://formspree.io/f/xayllonr" method="POST">
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="name"
                className="form-group__control"
              />
              <input
                type="email"
                name="email"
                placeholder="email"
                className="form-group__control"
              />
              <textarea
                name="message"
                rows="5"
                placeholder="message"
                className="form-group__control"
              ></textarea>
            </div>
            <button type="submit" className="btn btn--submit">
              sumbit here
            </button>
          </form>
        </article>
      </section>
    </Layout>
  )
}

export default contact
