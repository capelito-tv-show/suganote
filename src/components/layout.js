import React from "react"

import { rhythm } from "../utils/typography"
import ThemeContext from "../context/themeContext";
import { header } from "../components/header"
import styled from "styled-components"

import "../utils/styles.css"

const Container = styled.div`
  margin-right: auto;
  margin-left: auto;
  padding: ${rhythm(1.5)} ${rhythm(3 / 4)};
   @media (min-width: 550px) {
    max-width: 780px;
  }
`
class Layout extends React.Component {
  render() {
    const { title, children } = this.props
    const Wrapper = () => (
      <ThemeContext.Consumer>
        {theme => (
          <div className={"light"} >
            <Container>
                <header>{header(title)}</header>
                <main className="content-wrapper" >{children}</main>
                <footer>
                  © {new Date().getFullYear()}
                {` `}
                  <a href="https://twitter.com/@sgnmski">@sgnmski</a>
                </footer>
            </Container>
          </div>
        )}
      </ThemeContext.Consumer>
    )
    return (
     <Wrapper />
    )}
}

export default Layout
