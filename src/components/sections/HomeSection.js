import React from "react"
import { Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  name: {
    fontSize: 30,
    fontWeight: 600,
    textTransform: "uppercase",
  },
  contact: {
    marginBottom: "2rem",
  },
  title: {
    marginTop: "1rem",
    fontSize: 20,
    textAlign: "center",
    fontWeight: 600,
    textTransform: "uppercase",
    letterSpacing: 1.2,
    color: "#c9cccf",
  },
  paragraph: {
    marginBottom: "0.25rem",
  },
  section: {
    "& li": {
      marginBottom: "0.5rem",
    },
    "& ul": {
      listStyle: "disc",
    },
  },
  headline: {
    display: "block",
    textTransform: "uppercase",
    fontWeight: 600,
    fontSize: 18,
    letterSpacing: 1.2,
    paddingTop: "1rem",
    paddingBottom: "0.5rem",
  },
  interestsList: {
    marginTop: theme.spacing(2),
    "& li": {
      marginBottom: theme.spacing(1),
    },
  },
}))

export function CVSection({ title, children }) {
  const classes = useStyles()
  return (
    <div className={classes.section}>
      <Typography variant="h2" className={classes.title}>{title}</Typography>
      <div>
        {children}
      </div>
    </div>
  )
}

export function HomeSection() {
  const classes = useStyles()
  return (
    <>
      <Typography className={classes.name} variant="h1" align="center">
        Seyed Alireza Fatemi Jahromi
      </Typography>
      <Typography className={classes.contact} variant="subtitle2" align="center">
        alirezafa [at] rocketmail.com , afatemi [at] ce.sharif.edu , <a
        href="https://github.com/SeyedAlirezaFatemi">GitHub</a> , <a
        href="https://www.linkedin.com/in/seyed-alireza-fatemi-jahromi">LinkedIn</a>
        <br />
        <a href={"Seyed Alireza Fatemi Jahromi.pdf"}>Download CV</a>
      </Typography>

      <Typography variant="body1" className={classes.paragraph}>
        Computer Engineering Student Specializing in Deep Learning & Computer Vision
      </Typography>
      <Typography variant="subtitle1" className={classes.paragraph}>
        Tehran, IR
      </Typography>
      <Typography variant="subtitle1" className={classes.paragraph}>
        Highly motivated, energetic and creative individual seeking new adventures.
      </Typography>
      <CVSection title={"Research Interests"}>
        <ul className={classes.interestsList}>
          <li>Computer Vision & Image Processing</li>
          <li>Machine Learning & Deep Learning</li>
          <li>Artificial Intelligence</li>
          <li>Software Engineering</li>
        </ul>
      </CVSection>
      <CVSection title={"Education"}>
        <Typography variant="body1" className={classes.paragraph}>
          <span className={classes.headline}>Sharif University of Technology</span>
        </Typography>
        <Typography variant="subtitle1" className={classes.paragraph}>
          Bachelor of Science in Computer Engineering | Tehran | 2016 – Current
        </Typography>
        <Typography variant="body1" className={classes.paragraph}>
          <span className={classes.headline}>Shahid Dastgheib High School</span>
        </Typography>
        <Typography variant="subtitle1" className={classes.paragraph}>
          Diploma | National Organization for Development of Exceptional Talents(NODET) | Shiraz | 2012 – 2016
        </Typography>
      </CVSection>
      <CVSection title={"Publications"}>
        <ol className={classes.interestsList}>
          <li>A. Khani, <strong>S.A. Fatemi Jahromi</strong>, H. Otroshi Shahreza, H. Behroozi, M. Soleymani Baghshah,
            <a href="https://ieeexplore.ieee.org/document/9066019"><i>"Towards Automatic Prostate Gleason Grading via
              Deep Convolutional Neural Networks"</i></a>, The 5th Iranian
            Conference on Signal Processing and Intelligent Systems (ICSPIS 2019), Shahrood, Iran, 2019
          </li>
          <li>
            <strong>S.A. Fatemi Jahromi</strong>, A. Khani, H. Otroshi Shahreza, B. Otroshi Shahreza, H. Behroozi, M.
            Soleymani Baghshah, <i>"A Deep Learning Framework for Viable Tumor Burden Estimation"</i>, To be submitted
            soon
          </li>
        </ol>
      </CVSection>
    </>
  )
}
