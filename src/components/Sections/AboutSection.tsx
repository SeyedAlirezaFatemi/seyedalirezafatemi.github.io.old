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
                  fluid(maxWidth: 600, quality: 100) {
                      ...GatsbyImageSharpFluid_noBase64
                      ...GatsbyImageSharpFluidLimitPresentationSize
                  }
              }
          }
          off: file(relativePath: { eq: "quote-off.jpg" }) {
              childImageSharp {
                  fluid(maxWidth: 600, quality: 100) {
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
      Welcome! My name is Seyed Alireza Fatemi Jahromi. I'm currently an undergraduate student of Computer Engineering
      at Sharif
      University of Technology. My main research focus is on Machine Learning & Computer Vision. I'm fascinated by the
      use of AI and Machine Learning in various fields of Computer Vision such as Medical Image Analysis, Satellite &
      Aerial Image Analysis, Art & Image Generation, Deepfakes, Image Enhancement, etc.
      <br />
      When I worked as a researcher at Shahid Ahmadi Roshan Project, I gained experience and knowledge of different
      machine learning and deep learning algorithms. I applied these algorithms on classification and segmentation of
      Gigapixel Whole-Slide Histopathology images of various organs (such as Prostate, Liver, and Colon), Nuclei
      segmentation and classification, classification of 3D brain MRI images, classification & segmentation of chest CT
      scans of Covid-19 patients, classification of EEG signals, etc.
      <br />
      I also have a lot of experience in designing and implementing mobile and web applications. I plan to expand my
      knowledge in Artificial Intelligence & Computer Vision & Graphics + Software Engineering. I believe that with
      knowledge and skills in these fields, we can create innovative products and solutions that can impact people's
      lives.
      <br />
      I'm comfortable with working alone as well as working in large teams of diverse people. I take my responsibilities
      seriously, and I try my best to positively influence and help the people and the world around me. I'm a fast and
      eager learner, and I love working with new people in new environments. I'm always trying to learn new things by
      Watching courses on YouTube, trying out new tools, reading new papers, having discussions with friends, etc.
      <br />
      I love playing games, watching series, traveling, running, swimming, and participating in challenges and
      hackathons. My favorite games are &quot;The Elder
      Scrolls V: Skyrim&quot; & &quot;Control&quot; & &quot;Fable&quot; and my favorite series are &quot;The
      OA&quot;, &quot;Looking for Alaska&quot;, &quot;Sharp Objects&quot;, &quot;Castle Rock&quot;, &quot;The
      Magicians&quot;, and &quot;The Witcher&quot;.
    </div>
  )
}
