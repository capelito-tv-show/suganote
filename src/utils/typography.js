import Typography from "typography"
import Wordpress2016 from "typography-theme-wordpress-2016"

Wordpress2016.overrideThemeStyles = () => {
  return {
    "html": {
      fontFamily: `Noto Sans JP, Muli`,
    },
    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
    },
    "h1": {
      fontFamily: `Muli`,
      fontSize: `24px`
    },
    "h2": {
      fontSize: `22px`,
      fontWeight: `lighter`
    },
    "h3": {
      fontFamily: `Noto Sans JP, Muli`,
      fontSize: `20px`
    },
    "body": {
      fontFamily: `Noto Sans JP, Muli`
    },
    "blockquote": {
      fontSize: `14px`,
    }
  }
}

delete Wordpress2016.googleFonts

const typography = new Typography({
  headerFontFamily: [
    "github",
    "Helvetica",
    "Arial",
    "sans-serif",
  ],
  bodyFontFamily: [
    "Helvetica",
    "github",
    "Helvetica Neue",
  ],
  baseFontSize: [
    `14px`,
  ],
  baseLineHeight: [
    `20px`,
  ],
  overrideStyles: () => ({
    a: {}
  }),
})
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
