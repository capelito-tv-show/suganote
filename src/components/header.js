import React from "react"
import { Link } from "gatsby"
import { rhythm, scale } from "../utils/typography"

import ThemeContext from "../context/themeContext"

export const header = title => (
    <ThemeContext.Consumer>
        {theme => (
            <>
                <h1
                    style={{
                        ...scale(1),
                        marginBottom: rhythm(1.5),
                        marginTop: 0,
                    }}
                >
                    <Link
                        style={{
                            boxShadow: `none`,
                            textDecoration: `none`,
                            // color: `inherit`,
                        }}
                        to={`/`}
                    >
                        {title}
                    </Link>
                    <button className="dark-switcher" onClick={theme.toggleDark}>
                        {theme.dark ? <span>☀</span> : <span>☾</span>}
                    </button>
                </h1>

            </>
        )}
    </ThemeContext.Consumer>
)