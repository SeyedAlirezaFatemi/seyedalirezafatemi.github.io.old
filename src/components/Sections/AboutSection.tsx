import { Typography } from "@mui/material"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import React from "react"

import { makeStyles } from "../makeStyles"

const useStyles = makeStyles()(theme => ({
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
  const { classes, theme } = useStyles()
  const isDark = theme.palette.mode === "dark"
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
      Welcome! My name is Seyed Alireza FatemiJahromi. I will start my Master's studies in Computer Science at Aalto
      University in August 2021. I received my Bachelor's degree in Computer Engineering from Sharif University of
      Technology, Tehran, Iran.
      My chief areas of interest are Visual Computing and Machine Learning. I'm fascinated by the use of Machine
      Learning in various fields and applications of Computer Graphics &
      Vision such as Geometric Deep Learning, 2D/3D Reconstruction, Rendering, Satellite & Aerial Image Analysis, Art &
      Image Generation, Deepfakes, Image Enhancement, etc.
      <br />
      During my undergraduate studies, I have worked on several research projects in Computer Vision, and I believe I
      have proved myself as a self-motivated and hardworking researcher. My research was focused on Medical Image
      Analysis using Deep Learning. I worked on classifying and segmenting gigapixel digital pathology whole-slide
      images, COVID-19 patients' CT scan images, and 3D brain MRI images. I also have a lot of experience in designing
      and implementing mobile and web applications. I've worked with various frameworks and libraries such as React,
      React Native, Gatsby, Next, Django, Flask, etc.
      <br />
      I plan to continue my research and expand my knowledge as a graduate student in Visual Computing & Machine
      Learning. I believe that with knowledge and skills in these fields, we can create innovative and creative
      solutions and methods that can impact people's lives.
      <br />
      I'm comfortable with working alone as well as working in large teams of diverse people. I take my responsibilities
      seriously, and I try my best to positively influence and help the people and the world around me. I'm a fast and
      eager learner, and I love working with new people in new environments. I'm always trying to learn new things by
      watching lectures on YouTube, trying out new tools, reading new papers, having discussions with friends, etc.
      <br />
      I love playing games, watching series, traveling, running, swimming, and participating in challenges and
      hackathons. My favorite games are The Elder Scrolls V: Skyrim, Control, and Fable. My favorite series are
      The OA, Looking for Alaska, Sharp Objects, Castle Rock, The Magicians, The Haunting of Hill House, The Haunting of
      Bly Manor, The Witcher, and Mr. Queen (철인왕후).
      <br />
      If you have any queries, please feel free to reach out, and I'll gladly answer them.
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
