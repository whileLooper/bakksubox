import React from 'react'
import { graphql } from 'gatsby'

import MainFrame from '../components/MainFrame/MainFrame'
import Layout from '../components/Layout'
import './HomePage.css'

// Export Template for use in CMS preview
export const HomePageTemplate = ({ title, subtitle, featuredImage, body }) => (
  <main className="Home">
    <MainFrame>
      <div className="frame-title">
        <p>MINIMAL CREATIVE PORTFOLIO</p>
      </div>
      <div className="frame-description">
        <p>
          Designed for photographers, designers, videographers, architects,
          illustrators, freelancers and others.
        </p>
      </div>
      <div className="frame-grid"></div>
    </MainFrame>
  </main>
)

// Export Default HomePage for front-end
const HomePage = ({ data: { page } }) => (
  <Layout meta={page.frontmatter.meta || false}>
    <HomePageTemplate {...page} {...page.frontmatter} body={page.html} />
  </Layout>
)

export default HomePage

export const pageQuery = graphql`
  ## Query for HomePage data
  ## Use GraphiQL interface (http://localhost:8000/___graphql)
  ## $id is processed via gatsby-node.js
  ## query name must be unique to this file
  query HomePage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      html
      frontmatter {
        title
        subtitle
        featuredImage
      }
    }
  }
`
