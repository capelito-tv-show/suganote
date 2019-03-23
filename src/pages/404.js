import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { ThemeProvider } from "../context/themeContext";

class NotFoundPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <ThemeProvider>
        <Layout location={this.props.location} title={siteTitle}>
          <SEO title="404: Not Found" />
          <h1>(*_*)</h1>
          {/* <p>You just hit a route that doesn&#39;t exist... the sadness.</p> */}
        </Layout>
      </ThemeProvider>
    )
  }
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
