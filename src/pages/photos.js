import React from "react"
import Img from "gatsby-image"
import { Link,useStaticQuery, graphql } from "gatsby"
import _get from "lodash/get"

import { ThemeProvider } from "../context/themeContext"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import styled from "styled-components"


const ImageWrapper = styled.div`
  width: 100%;
  height: auto;
  @media (min-width: 480px) {
    width: 50%;
    height: 300px;
  }
`

const IndexPage = () => {
    const data = useStaticQuery(graphql`
      query InstagramQuery {
        allInstagramContent {
          edges {
            node {
              localImage {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
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
          <SEO title="Photos" keywords={[`blog`, `suganote`]} />
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
                <ImageWrapper key={i} >
                  <a
                    href={item.node.permalink}
                    style={{ display: "block" }}
                    target="_blank"
                  >
                    <Img
                      fluid={item.node.localImage.childImageSharp.fluid}
                      imgStyle={{
                        width: "100%",
                        objectFit: "cover",
                        padding: "8px",
                      }}
                    />
                  </a>
                </ImageWrapper>
              )
            })}
          </div>
        </Layout>
      </ThemeProvider>
    )
}

export default IndexPage