import React from "react"

import { rhythm, scale } from "../utils/typography"
import ThemeContext from "../context/themeContext";
import { header } from "../components/header"

import "../utils/styles.css"

class Layout extends React.Component {
  render() {
    const { title, children } = this.props
    const Wrapper = () => (
      <ThemeContext.Consumer>
        {theme => (
          <div className={theme.dark ? "dark" : "light"} >
            <div
              style={{
                marginLeft: `auto`,
                marginRight: `auto`,
                maxWidth: rhythm(24),
                padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
              }}
            >
                <header>{header(title)}</header>
                <main>{children}</main>
                <footer>
                  © {new Date().getFullYear()}
                {` `}
                  <a href="https://twitter.com/@sgnmski">@sgnmski</a>
                </footer>
            </div>
          </div>
        )}
      </ThemeContext.Consumer>
    )
    return (
     <Wrapper />
    )}
}

export default Layout
