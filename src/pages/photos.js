import React from "react"
import Img from "gatsby-image"
import { Link,useStaticQuery, graphql } from "gatsby"
import _get from "lodash/get"

import { ThemeProvider } from "../context/themeContext"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

const IndexPage = () => {
    const data = useStaticQuery(graphql`
        query InstagramQuery {
            allInstagramContent {
                edges {
                    node {
                        localImage {
                            childImageSharp {
                                fixed(width: 330) {
                                    ...GatsbyImageSharpFixed
                                }
                            }
                        },
                        permalink
                    }
                }
            }
        }
    `)
    let arrayOfInstaImages = _get(data, "allInstagramContent.edges")
    return (
      <ThemeProvider>
        <Layout title="Suganote">
          <SEO title="すべての投稿" keywords={[`blog`, `suganote`]} />
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
            >
              About
            </Link>
            <Link
              style={{
                paddingLeft: `16px`,
                boxShadow: `none`,
                textDecoration: `none`,
              }}
              to="/photos"
            >
              / Photos
            </Link>
          </h2>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {arrayOfInstaImages.map((item, i) => {
              return (
                <div key={i} style={{ width: "330px", height: "330px" }}>
                  <a
                    href={item.node.permalink}
                    style={{ display: "block" }}
                    target="_blank"
                  >
                    <Img
                      fixed={item.node.localImage.childImageSharp.fixed}
                      imgStyle={{
                        objectFit: "cover",
                        width: "330px",
                        height: "330px",
                        padding: "8px",
                      }}
                    />
                  </a>
                </div>
              )
            })}
          </div>
        </Layout>
      </ThemeProvider>
    )
}

export default IndexPage