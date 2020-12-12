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
    textAlign: "justify",
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
    listStyle: "none !important",
    paddingLeft: 0,
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
            <HonorIcon />Ranked <strong>5<sup>th</sup></strong> in <a
            href="https://paip2020.grand-challenge.org/rank/"
            target="_blank" rel="noopener noreferrer">PAIP (Pathology AI Platform) 2020 Challenge</a>. I presented our
            method at the AI Pathology Challenge Workshop at the <a
            href="https://www.kosombe.or.kr/"
            target="_blank" rel="noopener noreferrer">Virtual KOSOMBE Conference</a>, South Korea, on Nov 12, 2020. I
            was one of the two
            members of Sharif HooshPardaz Team, supervised by Prof. Soleymani and Prof. Behroozi. The challenge was
            about
            the automated classification of molecular subtypes in colorectal cancer for whole-slide image analysis. It
            consisted of two tasks, MSI-High Classification, and Whole Tumor Area Segmentation. <a
            href="/PAIP2020.pdf"
            target="_blank" rel="noopener noreferrer">
            Certificate of Award</a> + <a
            href="https://paip2020.grand-challenge.org/workshop/"
            target="_blank" rel="noopener noreferrer">
            Workshop Material</a>.
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
        Seyed Alireza FatemiJahromi
      </Typography>
      <Grid container justify="flex-start" direction="row" alignItems="center" className={classes.avatar}>
        <Grid container item md={4} xs={12} justify="center" className={classes.avatar}>
          <Avatar />
        </Grid>
        <Grid item md={8} xs={12}>
          <Typography variant="body1" className={classes.paragraph}>
            Computer Engineering Student at Sharif University of Technology
          </Typography>
          <Typography variant="subtitle1" className={classes.paragraph}>
            Researching on Visual Computing & Machine Learning
          </Typography>
          {/*<Typography variant="subtitle1" className={classes.paragraph}>*/}
          {/*  Born September 23<sup>th</sup>, 1998*/}
          {/*</Typography>*/}
          {/*<Typography variant="subtitle1" className={classes.paragraph}>*/}
          {/*  Highly motivated, energetic and creative individual seeking new adventures.*/}
          {/*</Typography>*/}
          <Typography variant="subtitle2">
            seyedalirezafatemijahromi [at] gmail.com , afatemi [at] ce.sharif.edu<br />
            <a href="https://github.com/SeyedAlirezaFatemi" target="_blank" rel="noopener noreferrer">GitHub</a> ,&nbsp;
            <a href="https://www.linkedin.com/in/seyed-alireza-fatemi-jahromi" target="_blank"
               rel="noopener noreferrer">LinkedIn</a>, <a href="/SeyedAlirezaFatemiJahromi.pdf" target="_blank"
                                                          rel="noreferrer">Download CV</a>
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
            <li>Geometry Processing & Geometric Deep Learning</li>
            <li>Rendering</li>
            <li>Artificial Intelligence</li>
            {/*<li>Software Engineering</li>*/}
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
              GPA: <strong>18.62/20</strong> (<strong>3.9/4</strong>) | Last two years' GPA: <strong>19.36/20</strong> (<strong>4/4</strong>)
            </Typography>
            <Typography variant="subtitle1" className={classes.paragraph}>
              Bachelor of Science in Computer Engineering | Tehran | Sep. 2016 - Expected Aug. 2021
            </Typography>
          </li>
          <li>
            <Typography variant="body1" className={clsx(classes.paragraph, classes.headline)}>
              Shahid Dastgheib High School
            </Typography>
            <Typography variant="subtitle2" className={classes.paragraph}>
              GPA: <strong>19.69/20</strong>
            </Typography>
            <Typography variant="subtitle1" className={classes.paragraph}>
              Diploma | National Organization for Development of Exceptional Talents(NODET) | Shiraz | 2012 – 2016
            </Typography>
          </li>
        </ul>
      </CVSection>

      <Divider />
      <CVSection title={"Languages"}>
        <ul>
          <li>
            <Typography variant="body1" className={clsx(classes.paragraph, classes.headline)}>
              Persian
            </Typography>
            <Typography variant="subtitle2" className={classes.paragraph}>
              Mother Tongue
            </Typography>
          </li>
          <li>
            <Typography variant="body1" className={clsx(classes.paragraph, classes.headline)}>
              English
            </Typography>
            <Typography variant="subtitle2" className={classes.paragraph}>
              Fluent | TOEFL (31 October 2020): Internet-Based Test <strong>113/120</strong><br />
              Reading(<strong>30/30</strong>), Listening(<strong>30/30</strong>), Speaking(<strong>26/30</strong>),
              Writing(<strong>27/30</strong>)
            </Typography>
          </li>
        </ul>
      </CVSection>

      <Divider />
      <CVSection title={"Publications"}>
        <Typography variant="body2">
          <ol className={classes.interestsList}>
            * Denotes first author or co-first author paper
            <li>* A. A. Khani, <strong>* S. A. Fatemi Jahromi</strong>, H. O. Shahreza, H. Behroozi and M. S. Baghshah, <a
              href="https://ieeexplore.ieee.org/document/9066019" target="_blank" rel="noreferrer"><i>&quot;Towards
              Automatic Prostate Gleason Grading via Deep Convolutional Neural Networks&quot;</i></a>, The
              5<sup>th</sup> Iranian Conference on Signal Processing and Intelligent Systems (ICSPIS 2019), Shahrood, Iran, 2019
            </li>
            <li>
              <strong>* S. A. Fatemi Jahromi</strong>, * A. A. Khani, H. O. Shahreza, M. S. Baghshah and H.
              Behroozi, <i>&quot;A Deep Learning Framework for Viable Tumor Burden Estimation&quot;</i>,
              Accepted in The 6<sup>th</sup> Iranian Conference on Signal Processing and Intelligent Systems (ICSPIS
              2020), Mashhad, Iran, 2020
            </li>
          </ol>
        </Typography>
      </CVSection>
    </>
  )
}
