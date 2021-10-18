import { Chip, Divider, Grid, Typography } from "@mui/material"
import React from "react"

import { makeStyles } from "../makeStyles"
import { Avatar } from "../Media"

const useStyles = makeStyles()(theme => ({
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
    paddingLeft: theme.spacing(2),
    "& li": {
      marginBottom: theme.spacing(1),
    },
  },
  list: {
    paddingLeft: theme.spacing(2),
  },
  interests: {
    marginBottom: theme.spacing(2),
  },
  avatar: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  skills: {
    "& .chip": {
      margin: theme.spacing(0.5),
    },
  },
  table: {
    width: "100%",
  },
}))

export function CVSection({ title, children }) {
  const { classes } = useStyles()
  return (
    <div className={classes.section}>
      <Typography variant="h6" className={classes.title}>{title}</Typography>
      <div>
        {children}
      </div>
    </div>
  )
}

export function Skills() {
  const { classes } = useStyles()
  return (
    <CVSection title={"Skills"}>
      <Typography variant="body2" className={classes.interests}>
        <table className={classes.table}>
          <tr>
            <td>Programming Languages</td>
            <td className={classes.skills}>
              {["C", "C++", "Java", "Kotlin", "Pyhton",
                "JavaScript", "TypeScript", "Racket", "MATLAB"].map(label => (
                <Chip key={label} label={label} className={"chip"} />))}
            </td>
          </tr>
          <tr>
            <td>Machine Learning</td>
            <td className={classes.skills}>
              {["TensorFlow", "Keras", "PyTorch", "scikit-learn", "pandas", "NumPy"].map(label => (
                <Chip key={label} label={label} className={"chip"} />))}
            </td>
          </tr>
          <tr>
            <td>Software & Tools</td>
            <td className={classes.skills}>
              {["LaTeX", "Git", "JIRA", "Adobe XD"].map(label => (
                <Chip key={label} label={label} className={"chip"} />))}
            </td>
          </tr>
          <tr>
            <td>Web</td>
            <td className={classes.skills}>
              {["React", "ReactNative", "Django", "Gatsby", "Next", "GraphQL", "Docker",
                "Flask"].map(label => (
                <Chip key={label} label={label} className={"chip"} />))}
            </td>
          </tr>
          <tr>
            <td>Databases</td>
            <td className={classes.skills}>
              {["MySQL", "MongoDB"].map(label => (
                <Chip key={label} label={label} className={"chip"} />))}
            </td>
          </tr>
          <tr>
            <td>HDL</td>
            <td className={classes.skills}>
              {["Verilog"].map(label => (
                <Chip key={label} label={label} className={"chip"} />))}
            </td>
          </tr>
        </table>
      </Typography>
    </CVSection>
  )
}

export function HomeSection() {
  const { classes, cx } = useStyles()
  return <>
    <Typography className={classes.name} variant="h5" align="center">
      Seyed Alireza FatemiJahromi
    </Typography>
    <Grid container justifyContent="flex-start" direction="row" alignItems="center" className={classes.avatar}>
      <Grid container item md={4} xs={12} justifyContent="center" className={classes.avatar}>
        <Avatar />
      </Grid>
      <Grid item md={8} xs={12}>
        <Typography variant="body1" className={classes.paragraph}>
          Master's Student in Computer Science at Aalto University
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
          seyedalirezafatemijahromi [at] gmail.com<br />
          <a href="https://github.com/SeyedAlirezaFatemi" target="_blank"
             rel="noopener noreferrer">GitHub</a>,&nbsp;
          <a href="https://scholar.google.com/citations?user=YxRB1PAAAAAJ&hl=en&authuser=2" target="_blank"
             rel="noopener noreferrer">Google Scholar</a>, <a
          href="https://www.linkedin.com/in/seyed-alireza-fatemi-jahromi" target="_blank"
          rel="noopener noreferrer">LinkedIn</a>, <a href="/SeyedAlirezaFatemiJahromi.pdf" target="_blank"
                                                     rel="noreferrer">Download CV</a>
        </Typography>
      </Grid>
    </Grid>

    {/*<Divider />*/}
    {/*<News />*/}

    <Divider />
    <CVSection title={"Research Interests"}>
      <Typography variant="body2" className={classes.interests}>
        <ul className={classes.interestsList}>
          <li>Visual Computing (Computer Graphics & Vision)</li>
          <li>Machine Learning & Deep Learning</li>
          <li>Geometry Processing & Geometric Deep Learning</li>
          <li>Rendering & Physics Simulation</li>
          <li>Game Design & Artificial Intelligence</li>
        </ul>
      </Typography>
    </CVSection>

    <Divider />
    <CVSection title={"Education"}>
      <ul className={classes.list}>
        <li>
          <Typography variant="body1" className={cx(classes.paragraph, classes.headline)}>
            Aalto University
          </Typography>
          <Typography variant="subtitle1" className={classes.paragraph}>
            Master of Science in Computer Science (Big Data and Large-Scale Computing)
            <br />
            Espoo, Finland | Aug. 2021 - Expected Aug. 2023
          </Typography>
        </li>
        <li>
          <Typography variant="body1" className={cx(classes.paragraph, classes.headline)}>
            Sharif University of Technology
          </Typography>
          <Typography variant="subtitle2" className={classes.paragraph}>
            GPA: <strong>18.60/20</strong> (<strong>3.89/4</strong>) | Last two years'
            GPA: <strong>19.21/20</strong> (<strong>3.96/4</strong>)
          </Typography>
          <Typography variant="subtitle1" className={classes.paragraph}>
            Bachelor of Science in Computer Engineering
            <br />
            Tehran, Iran | Sep. 2016 - May 2021
          </Typography>
        </li>
        <li>
          <Typography variant="body1" className={cx(classes.paragraph, classes.headline)}>
            Shahid Dastgheib High School
          </Typography>
          <Typography variant="subtitle2" className={classes.paragraph}>
            GPA: <strong>19.69/20</strong>
          </Typography>
          <Typography variant="subtitle1" className={classes.paragraph}>
            Mathematics & Physics Diploma | National Organization for Development of Exceptional Talents(NODET)
            <br />
            Shiraz, Iran | 2012 – 2016
          </Typography>
        </li>
      </ul>
    </CVSection>

    <Divider />
    <CVSection title={"Languages"}>
      <ul className={classes.list}>
        <li>
          <Typography variant="body1" className={cx(classes.paragraph, classes.headline)}>
            Persian
          </Typography>
          <Typography variant="subtitle2" className={classes.paragraph}>
            Mother Tongue
          </Typography>
        </li>
        <li>
          <Typography variant="body1" className={cx(classes.paragraph, classes.headline)}>
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
          <li>* A. A. Khani, <strong>* S. A. Fatemi Jahromi</strong>, H. O. Shahreza, H. Behroozi and M. S.
            Baghshah, <a
              href="https://ieeexplore.ieee.org/document/9066019" target="_blank" rel="noreferrer"><i>&quot;Towards
              Automatic Prostate Gleason Grading via Deep Convolutional Neural Networks&quot;</i></a>, The
            5<sup>th</sup> Iranian Conference on Signal Processing and Intelligent Systems (ICSPIS 2019), Shahrood,
            Iran, 2019
          </li>
          <li>
            <strong>* S. A. Fatemi Jahromi</strong>, * A. A. Khani, H. O. Shahreza, M. S. Baghshah and H.
            Behroozi, <a
            href="https://ieeexplore.ieee.org/abstract/document/9349569" target="_blank" rel="noreferrer"><i>&quot;A
            Deep Learning Framework for Viable Tumor Burden Estimation&quot;</i></a>,
            The 6<sup>th</sup> Iranian Conference on Signal Processing and Intelligent Systems (ICSPIS
            2020), Mashhad, Iran, 2020
          </li>
        </ol>
      </Typography>
    </CVSection>

    <Divider />
    <Skills />
  </>
}
