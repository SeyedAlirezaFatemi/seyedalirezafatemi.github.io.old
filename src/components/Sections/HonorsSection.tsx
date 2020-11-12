import { Typography } from "@material-ui/core"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import React from "react"

const useStyles = makeStyles(theme => ({
  name: {
    fontWeight: 600,
    textTransform: "uppercase",
    marginBottom: "2rem",
  },
  date: {
    fontWeight: 600,
    textTransform: "uppercase",
    letterSpacing: 1.2,
    color: "#c9cccf",
    float: "right",
  },
  honorsList: {
    listStyle: "none",
    paddingLeft: 0,
    textAlign: "justify",
    "& li": {
      marginBottom: theme.spacing(2),
    },
  },
  icon: {
    marginBottom: -6,
  },
}))

export function Date({ children }) {
  const classes = useStyles()
  return (
    <Typography variant="caption" className={classes.date}>
      {children}
    </Typography>
  )
}

export function HonorIcon() {
  const theme = useTheme()
  const isDark = theme.palette.type === "dark"
  const classes = useStyles()
  return (<img src={isDark ? "/trophy_dark.svg" : "/trophy_light.svg"} alt="Honor" width={24}
               className={classes.icon} />)
}

export function HonorsSection() {
  const classes = useStyles()
  return (
    <>
      <Typography variant="h5" className={classes.name} align="center">
        Seyed Alireza Fatemi Jahromi Honors
      </Typography>
      <ul className={classes.honorsList}>
        <li>
          <HonorIcon />
          Recipient of the grant and membership of <strong>Iran&apos;s National Elites Foundation</strong>, for
          outstanding academic success and participation in Shahid Ahmadi Roshan Project.
          <Date>Summer 2016 - Present</Date>
        </li>
        <li>
          <HonorIcon />Ranked <strong>5th</strong> in <a
          href="https://paip2020.grand-challenge.org/rank/"
          target="_blank" rel="noopener noreferrer">PAIP2020 Challenge</a>. I presented our method
          at the 2020 virtual KOSOMBE Conference: PAIP2020, AI Pathology Challenge Workshop - South Korea, Nov 12,
          2020. I was one of the two members of Sharif HooshPardaz Team, Supervised by Prof. Soleymani and Prof.
          Behroozi. The challenge was about the automated classification of molecular subtypes in colorectal cancer for
          whole-slide image analysis and its tasks comprise MSI-H prediction and segmentation of the whole tumor area.
          <Date>Fall 2020</Date>
        </li>
        <li>
          <HonorIcon />
          Ranked <strong>5th</strong> in <a
          href="https://monusac-2020.grand-challenge.org/Results/"
          target="_blank"
          rel="noopener noreferrer">
          Multi-organ Nuclei Segmentation and Classification (MoNuSAC) 2020
          Challenge</a> and Ranked <strong>3rd</strong> in Post-Challenge Leaderboard.
          MoNuSAC 2020 Challenge was an
          official satellite event of ISBI 2020.
          I was one of the three members of Sharif HooshPardaz Team, Supervised by Prof. Soleymani and Prof. Behroozi.
          I presented our method in the MoNuSAC 2020 Workshop. <a
          href="MoNuSAC2020.pdf"
          target="_blank" rel="noopener noreferrer">
          Certificate of Participation</a>.
          <Date>Spring 2020</Date>
        </li>
        <li>
          <HonorIcon />
          Ranked <strong>3rd</strong> in the Eleventh <a
          target="_blank" rel="noopener noreferrer"
          href="http://vccup.sharif.ir/11/%db%8c%d8%a7%d8%b2%d8%af%d9%87%d9%85%db%8c%d9%86-%d8%ac%d8%b4%d9%86%d9%88%d8%a7%d8%b1%d9%87-%da%a9%d8%a7%d8%b1%d8%a2%d9%81%d8%b1%db%8c%d9%86%db%8c-%da%a9%d8%b3%d8%a8%e2%80%8c%d9%88%da%a9%d8%a7%d8%b1/">Sharif
          VC Cup</a>.
          I was a member of Sharif HooshPardaz Team.
          <Date>Winter 2020</Date>
        </li>
        <li>
          <HonorIcon />
          Reached the final stage of Artificial Intelligence Challenge in Medical Imaging 2019, Intelligent Assessment
          of Imaging Biomarkers of Dementia.
          <Date>Fall 2019</Date>
        </li>
        <li>
          <HonorIcon />
          Ranked <strong>8th</strong> in the <a
          target="_blank" rel="noopener noreferrer"
          href="https://gleason2019.grand-challenge.org/Results/">MICCAI Automatic
          Prostate Gleason Grading Challenge 2019</a>. We were invited to present our method in MICCAI 2019 conference,
          which was held in October 2019, Shenzhen, China.
          <Date>Fall 2019</Date>
        </li>
        <li>
          <HonorIcon />
          Ranked <strong>3rd</strong> in the First National EEG Data Analysis Competition with Clinical Applications
          organized by <a
          href="http://nbml.ir/EN/posts/732364"
          target="_blank" rel="noopener noreferrer"
        >National Brain Mapping Lab (NBML)</a>. <a
          href="NBML.pdf"
          target="_blank" rel="noopener noreferrer">Certificate</a>.
          <Date>Summer 2019</Date>
        </li>
        <li>
          <HonorIcon />
          Ranked <strong>1st</strong> in the third &nbsp;
          <a
            href="http://ictchallenge.sharif.ir/?page_id=6798"
            target="_blank" rel="noopener noreferrer"
          >Sharif ICT Challenge (Fintech)</a> among 65 chosen teams.
          <Date>Summer 2019</Date>
        </li>
        <li>
          <HonorIcon />
          Ranked <strong>12th</strong> in code-cup contest among approximately 3100 participants.
          <Date>Fall 2018</Date>
        </li>
        <li>
          <HonorIcon />
          Ranked <strong>top 0.08%</strong> in the National Entrance Exam (Konkoor) among all Iranian Students (Ranked
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
