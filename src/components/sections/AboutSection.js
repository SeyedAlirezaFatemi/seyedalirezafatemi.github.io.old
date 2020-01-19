import React from "react"
import "./about.css"
import quoteOn from "../../images/quote-on.jpg"
import quoteOff from "../../images/quote-off.jpg"
import { makeStyles, useTheme } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  image: {
    margin: "auto",
    display: "block",
    borderRadius: 8,
  },
}))

// https://codepen.io/_Sabine/pen/EryxNr
export function AboutSection() {
  const theme = useTheme()
  const classes = useStyles()
  const isDark = theme.palette.type === "dark"
  const quote = isDark ? quoteOff : quoteOn
  return (
    <div>
      <img src={quote} width={600} className={classes.image} />
      {/*<div className="quote--container">*/}
      {/*  <p className="quote">*/}
      {/*    I go to seek a <span className="quote--highlight">Great Perhaps</span>.*/}
      {/*  </p>*/}
      {/*  <p className="quote--author">&ndash; Francis Bacon</p>*/}
      {/*</div>*/}

    </div>
  )
}
