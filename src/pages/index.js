import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import Bio from "../components/bio"
import {ThemeProvider} from "../context/themeContext"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <ThemeProvider>
        <Layout location={this.props.location} title={siteTitle}>
          <SEO
            title="すべての投稿"
            keywords={[`blog`, `suganote`, `javascript`, `react`]}
          />
          <Bio />
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <div key={node.fields.slug}>
                <h2
                  style={{
                    marginBottom: rhythm(1 / 4),
                    fontFamily: `inherit`,
                  }}
                >
                  <Link
                    style={{
                      boxShadow: `none`,
                    }}
                    to={node.fields.slug}
                  >
                    {title}
                  </Link>
                </h2>
                {node.frontmatter.thumnail != null &&
                  <Img
                    fluid={node.frontmatter.thumnail.childImageSharp.fluid}
                  />
                }
                <small>{node.frontmatter.date}</small>
                <p
                  dangerouslySetInnerHTML={{
                    __html:
                      node.frontmatter.description || node.excerpt,
                  }}
                />
              </div>
            )
          })}
        </Layout>
      </ThemeProvider>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            thumnail {
                    childImageSharp {
                        fluid(maxWidth: 600) {
                            ...GatsbyImageSharpFluid
                        }
                }
            }
          }
        }
      }
    }
  }
`
