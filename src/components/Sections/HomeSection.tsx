import { Divider, Grid, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import clsx from "clsx"
import React from "react"

import { Avatar } from "../Media"
import { HonorIcon } from "./HonorsSection"

const useStyles = makeStyles(theme => ({
  name: {
    fontWeight: 600,
    textTransform: "uppercase",
  },
  title: {
    marginTop: "1rem",
    textAlign: "center",
    fontWeight: 600,
    textTransform: "uppercase",
    letterSpacing: 1.2,
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
  headline: {},
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
  honorsList: {
    listStyle: "none",
    textAlign: "justify",
    "& li": {
      marginBottom: theme.spacing(2),
    },
  },
}))

export function CVSection({ title, children }) {
  const classes = useStyles()
  return (
    <div className={classes.section}>
      <Typography variant="h6" className={classes.title}>{title}</Typography>
      <div>
        {children}
      </div>
    </div>
  )
}

export function News() {

  const classes = useStyles()
  return (
    <CVSection title={"News"}>
      <Typography variant="body2" className={classes.interests}>
        <ul className={classes.honorsList}>
          <li>
            <HonorIcon /> Ranked among the <strong>top 10</strong> teams in <a
            href="https://paip2020.grand-challenge.org/"
            target="_blank" rel="noopener noreferrer">PAIP2020 Challenge</a>. We are invited to present our method
            at the 2020
            virtual KOSOMBE Conference: PAIP2020, AI Pathology Challenge Workshop - South Korea, Nov 12, 2020.
            I am one of the two members of Sharif HooshPardaz Team, Supervised by Prof. Soleymani and Prof. Behroozi.
            The challenge is about the automated classification of molecular subtypes in colorectal cancer for
            whole-slide image analysis and its task comprises MSI-H prediction and segmentation of the whole tumor area.
            Final ranking not disclosed yet.
          </li>
        </ul>
      </Typography>
    </CVSection>
  )
}

export function HomeSection() {
  const classes = useStyles()
  return (
    <>
      <Typography className={classes.name} variant="h5" align="center">
        Seyed Alireza Fatemi Jahromi
      </Typography>
      <Grid container justify="flex-start" direction="row" alignItems="center" className={classes.avatar}>
        <Grid container item md={4} xs={12} justify="center" className={classes.avatar}>
          <Avatar />
        </Grid>
        <Grid item md={8} xs={12}>
          <Typography variant="body1" className={classes.paragraph}>
            Computer Engineering Student Specializing in Machine Learning & Visual Computing
          </Typography>
          <Typography variant="subtitle1" className={classes.paragraph}>
            Born October 8<sup>th</sup>, 1998
          </Typography>
          {/*<Typography variant="subtitle1" className={classes.paragraph}>*/}
          {/*  Highly motivated, energetic and creative individual seeking new adventures.*/}
          {/*</Typography>*/}
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
      <News />

      <Divider />
      <CVSection title={"Research Interests"}>
        <Typography variant="body2" className={classes.interests}>
          <ul className={classes.interestsList}>
            <li>Computer Vision & Graphics</li>
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
            <Typography variant="body1" className={clsx(classes.paragraph, classes.headline)}>
              Sharif University of Technology
            </Typography>
            <Typography variant="subtitle2" className={classes.paragraph}>
              GPA: 18.62/20
            </Typography>
            <Typography variant="subtitle1" className={classes.paragraph}>
              Bachelor of Science in Computer Engineering | Tehran | 2016 – Current
            </Typography>
          </li>
          <li>
            <Typography variant="body1" className={clsx(classes.paragraph, classes.headline)}>
              Shahid Dastgheib High School
            </Typography>
            <Typography variant="subtitle2" className={classes.paragraph}>
              GPA: 19.69/20
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
            <li>* A. Khani, <strong>S.A. Fatemi Jahromi</strong>, H. Otroshi Shahreza, H. Behroozi, M. Soleymani
              Baghshah,
              <a href="https://ieeexplore.ieee.org/document/9066019" target="_blank" rel="noreferrer"><i>&quot;Towards
                Automatic Prostate Gleason Grading via Deep Convolutional Neural Networks&quot;</i></a>, The 5th Iranian
              Conference on Signal Processing and Intelligent Systems (ICSPIS 2019), Shahrood, Iran, 2019
            </li>
            <li>
              * <strong>S.A. Fatemi Jahromi</strong>, A. Khani, H. Otroshi Shahreza, B. Otroshi Shahreza, H. Behroozi,
              M. Soleymani Baghshah, <i>&quot;A Deep Learning Framework for Viable Tumor Burden Estimation&quot;</i>, To
              be submitted soon
            </li>
          </ol>
        </Typography>
      </CVSection>
    </>
  )
}
