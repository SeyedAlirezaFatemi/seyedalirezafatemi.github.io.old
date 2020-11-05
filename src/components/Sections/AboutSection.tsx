import { Typography } from "@material-ui/core"
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
    <Typography variant="body1" className={classes.about}>
      <Img alt="Quote" fluid={isDark ? data.off.childImageSharp.fluid : data.on.childImageSharp.fluid}
           className={classes.image} />
      Welcome! My name is Seyed Alireza Fatemi Jahromi.
      I'm currently an undergraduate student in Computer Engineering at Sharif University of Technology, Tehran, Iran.
      My main research focus is on Visual Computing & Machine Learning.
      I'm fascinated by the use of Machine Learning in various fields and applications of Computer Vision & Graphics
      such as Medical Image Analysis, Satellite & Aerial Image Analysis, Art & Image Generation, AI Rendering,
      Deepfakes, Image Enhancement, etc.
      <br />
      During my undergraduate, I have worked on several research projects in Computer Vision, and I believe I have
      proved myself as a self-motivated and hardworking researcher. My research was mainly focused on Medical Image
      Analysis using Deep Learning. I worked on classifying and segmenting digital pathology whole-slide images,
      COVID-19 patients' CT scan images, and 3D brain MRI images.
      I also have a lot of experience in designing and implementing mobile and web applications. I've worked with
      various frameworks and libraries such as React, React Native, Gatsby, Next, Django, Flask, etc.
      <br />
      I'm currently working on my undergraduate thesis in the Robust and Interpretable Machine Learning Lab under the
      supervision of Prof. Rohban. My thesis is about Self-Supervised Learning and Semi-Supervised Learning
      in the context of Adversarial Robustness in Computer Vision.
      <br />
      I plan to continue my research and expand my knowledge, as a graduate student, in Machine Learning & Visual
      Computing & Software Engineering.
      I believe that with knowledge and skills in these fields, we can create innovative solutions and methods that can
      impact people's lives.
      <br />
      I'm comfortable with working alone as well as working in large teams of diverse people. I take my responsibilities
      seriously, and I try my best to positively influence and help the people and the world around me. I'm a fast and
      eager learner, and I love working with new people in new environments. I'm always trying to learn new things by
      watching courses on YouTube, trying out new tools, reading new papers, having discussions with friends, etc.
      <br />
      I love playing games, watching series, traveling, running, swimming, and participating in challenges and
      hackathons. My favorite games are &quot;The Elder
      Scrolls V: Skyrim&quot; & &quot;Control&quot; & &quot;Fable&quot; and my favorite series are &quot;The
      OA&quot;, &quot;Looking for Alaska&quot;, &quot;Sharp Objects&quot;, &quot;Castle Rock&quot;, &quot;The
      Magicians&quot;, &quot;The Haunting of Hill House&quot;, "The Haunting of Bly Manor", and &quot;The Witcher&quot;.
      <br />
      If you have any queries at all, please feel free to reach out and I'll gladly answer them.
      <br />
      <Typography variant="caption">
        Quote image from <a
        href="https://dribbble.com/shots/1587554-I-go-to-seek-a-great-perhaps"
        target="_blank"
        rel="noopener noreferrer">
        source</a>
      </Typography>
    </Typography>
  )
}
