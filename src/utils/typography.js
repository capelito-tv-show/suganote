import Typography from "typography"

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
    `16px`,
  ],
  baseLineHeight: [
    `30px`,
  ],
  overrideStyles: () => ({
    a: {},
    h3: {
      marginBottom: '0.7rem'
    },
    p: {
      marginBottom: '1rem',
    },
    blockquote: {
      margin: '1rem',
      paddingLeft: '1rem',
      borderLeft: '4px solid #fff',
    }
  }),
})
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
