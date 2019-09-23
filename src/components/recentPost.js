import React from "react"
import { Link, graphql, StaticQuery } from "gatsby"

import { rhythm, scale } from "../utils/typography"

function RecentPosts() {
    return(
        <StaticQuery
            query={recentPostsQuery}
            render={data => {
                const posts = data.allMarkdownRemark.edges
                return (
                    <div 
                        style={{
                            marginTop: rhythm(1),
                        }}
                    >
                        <hr
                            style={{
                                marginBottom: rhythm(1),
                            }}
                        />
                        <h2
                        style={{
                        ...scale(0.4),
                        }}
                        >
                            最新の記事
                        </h2>
                        {posts.map(({ node }) => {
                            const title = node.frontmatter.title || node.fields.slug
                            return(
                                <div key={node.fields.slug}>
                                    <h2
                                        style={{
                                            ...scale(0.2),
                                            marginBottom: rhythm(2 / 4),
                                            fontFamily: `inherit`,
                                        }}
                                    >
                                        <Link
                                            style={{
                                                boxShadow: `none`,
                                                textDecoration: `none`,
                                            }}
                                            to={node.fields.slug}
                                        >
                                            {title}
                                        </Link>
                                    </h2>
                                    <small>{node.frontmatter.date}</small>
                                </div>
                            )

                        })}
                    </div>
                )
            }}

        />)
}

export default RecentPosts

export const recentPostsQuery = graphql`
  query {
    allMarkdownRemark(limit: 4,sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`
