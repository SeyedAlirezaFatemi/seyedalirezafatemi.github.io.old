import React from "react"
import { makeStyles, Typography } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  name: {
    fontSize: 30,
    fontWeight: 600,
    textTransform: "uppercase",
    marginBottom: "2rem",
  },
  paragraph: {
    marginBottom: "0.25rem",
  },
  link: {
    transition: "box-shadow 160ms ease 0s",
    boxShadow: "rgb(238, 251, 255) 0px -9px 0px inset",
    borderBottom: "2px solid rgb(207, 243, 255)",
    textDecoration: "none",
    color: "inherit",
    display: "block",
    textTransform: "uppercase",
    fontWeight: 600,
    fontSize: 18,
    letterSpacing: 1.2,
    paddingTop: "2rem",
    width: "fit-content",
    "&:hover": {
      boxShadow: "rgb(207, 243, 255) 0px -1.2em 0px inset",
    },
    "&:link": {
      color: "inherit",
    },
  },
  workResponsibilitiesList: {
    "& li": {
      marginBottom: theme.spacing(1),
    },
  },
}))


export function WorkSection() {
  const classes = useStyles()
  return (
    <>
      <Typography variant="h1" className={classes.name} align="center">
        Seyed Alireza Fatemi Jahromi Work
      </Typography>
      <Typography variant="body1" className={classes.paragraph}>
        <a className={classes.link} target="_blank" rel="noopener noreferrer" href="https://en.bmn.ir/">
          National Elites Foundation, Shahid Ahmadi Roshan Project
        </a>
      </Typography>
      <Typography variant="subtitle1" className={classes.paragraph}>
        Researcher | March, 2019 – Present
      </Typography>
      <Typography variant="body1" className={classes.paragraph}>
        A project funded by Iran's National Elites Foundation and supervised by Prof. Behroozi and Prof. Soleymani. My
        Responsibilities include:
      </Typography>
      <ul className={classes.workResponsibilitiesList}>
        <li>
          Researching state-of-the-art Deep Learning techniques and applying them to different applications in the
          medical field such as digital pathology.
        </li>
        <li>
          Meeting with hospital, clinic, and laboratory managers for requirements engineering and data gathering.
        </li>
        <li>
          Designing and developing software products.
        </li>
      </ul>
      <Typography variant="body1" className={classes.paragraph}>
        <a className={classes.link} target="_blank" rel="noopener noreferrer" href="https://rahnemacollege.com/">
          Rahnema College
        </a>
      </Typography>
      <Typography variant="subtitle1" className={classes.paragraph}>
        Software Engineer & Team Leader | Summer 2018
      </Typography>
      <Typography variant="body1" className={classes.paragraph}>
        During the 7 week internship program, I gained experience in the following areas of Software Development:
      </Typography>
      <ul className={classes.workResponsibilitiesList}>
        <li>Teamwork</li>
        <li>Scrum</li>
        <li>UI/UX</li>
        <li>Full Stack Development</li>
      </ul>
    </>
  )
}
