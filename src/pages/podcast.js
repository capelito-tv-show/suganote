import React, { Component } from 'react';
import MediaElement from '../components/player';

import { Link, graphql } from "gatsby"

import { ThemeProvider } from "../context/themeContext"
import Layout from "../components/layout"
import SEO from "../components/seo"


export default class PodCast extends Component {
    render() {
        const
            sources = [
                { src: 'http://www.streambox.fr/playlists/test_001/stream.m3u8', type: 'application/x-mpegURL' },
                { src: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4', type: 'video/mp4' },
                { src: 'rtmp://firehose.cul.columbia.edu:1935/vod/mp4:sample.mp4', type: 'video/rtmp' }
            ],
            config = {},
            tracks = {}
            ;

        return (
            <ThemeProvider>
                <Layout location={this.props.location} >
                    <SEO
                        title="すべての投稿"
                        keywords={[`blog`, `suganote`, `javascript`, `react`]}
                    />
                    <MediaElement
                        id="player1"
                        mediaType="video"
                        preload="none"
                        controls
                        width="640"
                        height="360"
                        poster=""
                        sources={JSON.stringify(sources)}
                        options={JSON.stringify(config)}
                        tracks={JSON.stringify(tracks)}
                    />
                </Layout>
            </ThemeProvider>
        );
    }
}

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
            title
          }
        }
      }
    }
  }
`
