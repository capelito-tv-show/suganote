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
