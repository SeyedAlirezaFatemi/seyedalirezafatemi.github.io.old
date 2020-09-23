import { Divider, Grid, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import React from "react"

import { Avatar } from "../media"

const useStyles = makeStyles(theme => ({
  name: {
    fontSize: 30,
    fontWeight: 600,
    textTransform: "uppercase",
  },
  title: {
    marginTop: "1rem",
    fontSize: 20,
    textAlign: "center",
    fontWeight: 600,
    textTransform: "uppercase",
    letterSpacing: 1.2,
    // color: "#c9cccf",
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
    paddingTop: "0.25rem",
    paddingBottom: "0.25rem",
  },
  interestsList: {
    marginTop: theme.spacing(2),
    "& li": {
      marginBottom: theme.spacing(1),
    },
  },
  interests: {
    marginBottom: theme.spacing(2),
  },
  avatar: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
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
      <Grid container justify="flex-start" direction="row" alignItems="center" className={classes.avatar}>
        <Grid container item md={4} xs={12} justify="center" className={classes.avatar}>
          <Avatar />
        </Grid>
        <Grid item md={8} xs={12}>
          <Typography variant="body1" className={classes.paragraph}>
            Computer Engineering Student Specializing in Deep Learning & Computer Vision
          </Typography>
          <Typography variant="subtitle1" className={classes.paragraph}>
            Highly motivated, energetic and creative individual seeking new adventures.
          </Typography>
          <Typography variant="subtitle2">
            alirezafa [at] rocketmail.com , afatemi [at] ce.sharif.edu ,&nbsp;
            <a href="https://github.com/SeyedAlirezaFatemi" target="_blank" rel="noopener noreferrer">GitHub</a> ,&nbsp;
            <a href="https://www.linkedin.com/in/seyed-alireza-fatemi-jahromi" target="_blank"
               rel="noopener noreferrer">LinkedIn</a>
            <br />
            <a href="SeyedAlirezaFatemiJahromi.pdf" target="_blank" rel="noreferrer">Download CV</a>
          </Typography>
        </Grid>
      </Grid>

      <Divider />
      <CVSection title={"Research Interests"}>
        <Typography variant="body2" className={classes.interests}>
          <ul className={classes.interestsList}>
            <li>Computer Vision & Image Processing</li>
            <li>Machine Learning & Deep Learning</li>
            <li>Artificial Intelligence</li>
            <li>Software Engineering</li>
          </ul>
        </Typography>
      </CVSection>

      <Divider />
      <CVSection title={"Education"}>
        <ul>
          <li>
            <Typography variant="body1" className={classes.paragraph}>
              <span className={classes.headline}>Sharif University of Technology</span>
            </Typography>
            <Typography variant="subtitle1" className={classes.paragraph}>
              Bachelor of Science in Computer Engineering | Tehran | 2016 – Current
            </Typography>
          </li>
          <li>
            <Typography variant="body1" className={classes.paragraph}>
              <span className={classes.headline}>Shahid Dastgheib High School</span>
            </Typography>
            <Typography variant="subtitle1" className={classes.paragraph}>
              Diploma | National Organization for Development of Exceptional Talents(NODET) | Shiraz | 2012 – 2016
            </Typography>
          </li>
        </ul>
      </CVSection>

      <Divider />
      <CVSection title={"Publications"}>
        <Typography variant="body2">
          <ol className={classes.interestsList}>
            <li>A. Khani, <strong>S.A. Fatemi Jahromi</strong>, H. Otroshi Shahreza, H. Behroozi, M. Soleymani Baghshah,
              <a href="https://ieeexplore.ieee.org/document/9066019" target="_blank" rel="noreferrer"><i>&quot;Towards
                Automatic Prostate Gleason Grading
                via
                Deep Convolutional Neural Networks&quot;</i></a>, The 5th Iranian
              Conference on Signal Processing and Intelligent Systems (ICSPIS 2019), Shahrood, Iran, 2019
            </li>
            <li>
              <strong>S.A. Fatemi Jahromi</strong>, A. Khani, H. Otroshi Shahreza, B. Otroshi Shahreza, H. Behroozi, M.
              Soleymani Baghshah, <i>&quot;A Deep Learning Framework for Viable Tumor Burden Estimation&quot;</i>, To be
              submitted
              soon
            </li>
          </ol>
        </Typography>
      </CVSection>
    </>
  )
}
