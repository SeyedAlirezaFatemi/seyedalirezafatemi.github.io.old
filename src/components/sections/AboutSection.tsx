import "./about.css"

import { makeStyles, useTheme } from "@material-ui/core/styles"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import React from "react"

const useStyles = makeStyles(theme => ({
  about: {
    textAlign: "justify",
  },
  image: {
    margin: "auto",
    display: "block",
    borderRadius: 8,
    marginBottom: theme.spacing(2),
  },
}))

// https://codepen.io/_Sabine/pen/EryxNr
// https://codepen.io/screeny05/pen/rxObWx?q=quote%20author&limit=all&order=popularity&depth=everything&show_forks=falsehttps://codepen.io/screeny05/pen/rxObWx
export function AboutSection() {
  const theme = useTheme()
  const classes = useStyles()
  const isDark = theme.palette.type === "dark"
  const data = useStaticQuery(graphql`
    query {
      on: file(relativePath: { eq: "quote-on.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid_noBase64
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      off: file(relativePath: { eq: "quote-off.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid_noBase64
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
    }
  `)
  return (
    <div className={classes.about}>
      <Img alt="Quote" fluid={isDark ? data.off.childImageSharp.fluid : data.on.childImageSharp.fluid}
           className={classes.image}
           loading="eager"/>
      {/*<div className="quote--container">*/}
      {/*  <p className="quote">*/}
      {/*    I go to seek a <span className="quote--highlight">Great Perhaps</span>.*/}
      {/*  </p>*/}
      {/*  <p className="quote--author">&ndash; Francis Bacon</p>*/}
      {/*</div>*/}
      Welcome! My name is Seyed Alireza Fatemi Jahromi. I&apos;m currently a bachelor of Computer Engineering at Sharif
      University of Technology. My main research focus is on Deep Learning & Machine Learning. My experience ranges from
      designing and implementing mobile and web applications to designing and implementing various complex deep learning
      algorithms. I love to enter new fields of artificial intelligence and play with new datasets and applications of
      deep learning. One of my hobbies is reading papers about fascinating applications of deep learning algorithms in
      various fields.
      <br />
      I have worked with many programming languages and frameworks, and learning to use a new programming language or
      tool doesn&apos;t take too much time and effort for me. I love to learn new things, and I&apos;m a fast learner. You can
      find the complete list of the tools I&apos;ve worked with in my <a href={"/Seyed Alireza Fatemi Jahromi.pdf"}>CV</a>.
      <br />
      I love playing games, watching series, running, and swimming. My favorite games are &quot;The Elder Scrolls V: Skyrim&quot;
      & &quot;Control&quot; and my favorite series are &quot;The OA&quot;, &quot;Looking for Alaska&quot;, &quot;Sharp Objects&quot;, &quot;Castle Rock&quot;, and &quot;The
      Witcher&quot;. I love
      to travel to new places and meet new people.
    </div>
  )
}
