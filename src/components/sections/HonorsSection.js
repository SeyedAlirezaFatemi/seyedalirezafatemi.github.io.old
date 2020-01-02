import React, { useCallback } from "react"
import honorIconLight from "../../images/trophy_light.svg"
import honorIconDark from "../../images/trophy_dark.svg"
import { makeStyles, Typography, useTheme } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  name: {
    fontSize: 30,
    fontWeight: 600,
    textTransform: "uppercase",
    marginBottom: "2rem",
  },
  date: {
    fontSize: 12,
    fontWeight: 600,
    textTransform: "uppercase",
    letterSpacing: 1.2,
    color: "#c9cccf",
    float: "right",
  },
  honorsList: {
    "& li": {
      marginBottom: theme.spacing(2),
    },
  },
}))

export function HonorsSection() {
  const classes = useStyles()
  const theme = useTheme()
  const isDark = theme.palette.type === "dark"
  const HonorIcon = useCallback(() => (
    <img src={isDark ? honorIconDark : honorIconLight} alt="Honor" width={24} style={{
      marginBottom: -6,
    }} />), [isDark])
  const Date = useCallback(({ children }) => (<span className={classes.date}>{children}</span>), [classes])
  return (
    <>
      <Typography variant="h1" className={classes.name} align="center">
        Seyed Alireza Fatemi Jahromi Honors
      </Typography>
      <ul className={classes.honorsList} style={{
        listStyle: "none",
        marginLeft: 0,
        textAlign: "justify",
      }}>
        <li>
          <HonorIcon />
          Recipient of the grant and membership of <strong>Iran's National Elites Foundation</strong>, for outstanding
          academic success and participation in Shahid Ahmadi Roshan Project.
          <Date>Summer 2016 - Present</Date>
        </li>
        <li>
          <HonorIcon />
          Participant of the third and the fourth round of Shahid Ahmadi Roshan Project which is funded by Iran's
          National Elites Foundation and supervised by Prof. Behroozi and Prof. Soleymani.
          <Date>Spring 2019 - Present</Date>
        </li>
        <li>
          <HonorIcon />
          Reached the final stage of Artificial Intelligence Challenge in Medical Imaging 2019, Intelligent Assessment
          of Imaging Biomarkers of Dementia.
          <Date>Fall 2019</Date>
        </li>
        <li>
          <HonorIcon />
          Ranked <strong>8th</strong> in the MICCAI Automatic Prostate Gleason Grading Challenge 2019.
          <Date>Fall 2019</Date>
        </li>
        <li>
          <HonorIcon />
          Ranked <strong>3rd</strong> in the First National EEG Data Analysis Competition with Clinical Applications
          organized by National Brain Mapping Lab (NBML).
          <Date>Summer 2019</Date>
        </li>
        <li>
          <HonorIcon />
          Ranked <strong>1th</strong> in the third Sharif ICT Challenge (Fintech) among 65 chosen teams.
          <Date>Summer 2019</Date>
        </li>
        <li>
          <HonorIcon />
          Ranked <strong>12th</strong> in code-cup contest among approximately 3100 participants.
          <Date>Fall 2018</Date>
        </li>
        <li>
          <HonorIcon />
          Ranked <strong>top 0.08</strong> in the National Entrance Exam (Konkoor) among all Iranian Students (Ranked
          131th among approximately 163000 applicants) in Math. & Physics.
          <Date>Summer 2016</Date>
        </li>
        <li>
          <HonorIcon />
          Ranked <strong>top 0.1%</strong> in the National Entrance Exam (Konkoor) among all Iranian Students (Ranked
          229th among approximately 115000 applicants) in Foreign Languages.
          <Date>Summer 2016</Date>
        </li>
      </ul>
    </>
  )
}
