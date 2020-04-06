import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import {ThemeProvider} from "../context/themeContext"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"

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
            keywords={[`blog`, `suganote`]}
          />
          <h2
            style={{
              marginBottom: rhythm(2),
            }}
          >
            <Link 
              style={{
                boxShadow: `none`,
                textDecoration: `none`,
              }}
                to="/about"
            >About</Link>
          </h2>
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <div 
                key={node.fields.slug}
                style={{
                  paddingBottom: `16px`
                }}
              >
                <Link
                  to={node.fields.slug}
                  style={{
                    textDecoration: `none`,
                  }}
                >
                <h2
                  style={{
                    ...scale(0.2),
                    lineHeight: "18px",
                    marginBottom: rhythm(1 / 12),
                    fontFamily: `inherit`,
                  }}
                >
                    {title}
                </h2>
                <small>{node.frontmatter.date}</small>
                {node.frontmatter.thumnail != null &&
                  <Img
                    style={{
                      maxHight: `400px`,
                      objetFit: `cover`,
                      objectPosition: `top`
                    }}
                    fluid={node.frontmatter.thumnail.childImageSharp.fluid}
                  />
                }
                <p
                  style={{
                    lineHeight: `1.4rem`
                  }}
                  dangerouslySetInnerHTML={{
                    __html:
                      node.frontmatter.description || node.excerpt,
                  }}
                />
                </Link>
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
                        fluid(maxWidth: 600,maxHeight: 300) {
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