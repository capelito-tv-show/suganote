import React from "react"
import { graphql } from "gatsby"

import Bio from "../components/bio";
import Layout from "../components/layout"
import SEO from "../components/seo"
import { ThemeProvider } from "../context/themeContext";
import { rhythm, scale } from "../utils/typography"
import RecentPosts from "../components/recentPost";


class About extends React.Component {
    render() {
        const { data } = this.props
        const siteTitle = data.site.siteMetadata.title

        return (
            <ThemeProvider>
                <Layout location={this.props.location} title={siteTitle}>
                    <SEO title="About Masaki Sugano" />
                    <Bio />
                    <h2
                        style={{
                            ...scale(0.4),
                            marginBottom: rhythm(2 / 4),
                        }}
                    >Work & Education</h2>
                    <ul>
                        <li>Anker Japan Co., Ltd. (2019-Now)</li>
                        <li>Rikkyo University (2015-2019)</li>
                        <li>Yamanashi Prefectual University (2014-2015)</li>
                    </ul>
                    <RecentPosts />
                </Layout>
            </ThemeProvider>
        )
    }
}

export default About;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
