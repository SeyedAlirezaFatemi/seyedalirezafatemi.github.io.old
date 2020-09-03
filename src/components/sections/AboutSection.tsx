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
    marginBottom: theme.spacing(4),
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
           className={classes.image} />
      {/*<div className="quote--container">*/}
      {/*  <p className="quote">*/}
      {/*    I go to seek a <span className="quote--highlight">Great Perhaps</span>.*/}
      {/*  </p>*/}
      {/*  <p className="quote--author">&ndash; Francis Bacon</p>*/}
      {/*</div>*/}
      Welcome! My name is Seyed Alireza Fatemi Jahromi. I&apos;m currently a bachelor of Computer Engineering at Sharif
      University of Technology. My main research focus is on Machine Learning & Computer Vision. I'm fascinated by the
      use of AI and Machine Learning in the field of Medical Diagnosis and Medical Imaging and Computer Vision. I've
      worked on classifying and segmenting Gigapixel Whole-Slide Histopathology images of different organs such as
      Prostate, Liver, and Colon. I also have experience working with 3D brain MRI images on analyzing chest CT scans
      of Covid-19 patients.
      I also have a lot of experience in designing and implementing mobile and web applications. I plan to expand my
      knowledge in the fields of Artificial Intelligence & Computer Vision + Software Engineering. I believe that with
      knowledge and skills in these fields, we can create innovative products and solutions that can impact people's
      lives.
      <br />
      I love playing games, watching series, traveling, running, swimming, and participating in challenges and
      hackathons. My favorite games are &quot;The Elder
      Scrolls V: Skyrim&quot; & &quot;Control&quot; & &quot;Fable&quot; and my favorite series are &quot;The
      OA&quot;, &quot;Looking for Alaska&quot;, &quot;Sharp Objects&quot;, &quot;Castle Rock&quot;, &quot;The
      Magicians&quot;, and &quot;The Witcher&quot;. I love to travel to new places and meet new people.
    </div>
  )
}
