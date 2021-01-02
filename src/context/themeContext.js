import React from "react"

const defaultState = {
    dark: false,
    toggleDark: () => { },
}

const ThemeContext = React.createContext(defaultState)

const supportsDarkMode = () =>
    window.matchMedia("(prefers-color-scheme: dark)").matches === true

class ThemeProvider extends React.Component {
    state = {
        dark: false,
    }
    render() {
        const { children } = this.props
        const { dark } = this.state
        return (
            <ThemeContext.Provider
                value={{
                    dark,
                    toggleDark: this.toggleDark,
                }}
            >
                {children}
            </ThemeContext.Provider>
        )
    }
}

export default ThemeContext

export { ThemeProvider }