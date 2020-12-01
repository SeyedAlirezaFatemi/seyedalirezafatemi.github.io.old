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
    // https://stackoverflow.com/questions/1530685/html-sup-tag-affecting-line-height-how-to-make-it-consistent
    "& sup": {
      verticalAlign: "top",
      fontSize: "0.6em",
    },
  },
  icon: {
    marginBottom: -6,
    marginLeft: -6,
  },
  minorHack: {
    marginTop: 30,
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
        Honors
      </Typography>
      <ul className={classes.honorsList}>
        <li>
          <HonorIcon />
          Recipient of the grant and membership of <strong>Iran&apos;s National Elites Foundation</strong>, for
          outstanding academic success.
          <Date>Summer 2016 - Present</Date>
        </li>
        <li className={classes.minorHack}>
          <HonorIcon />Ranked <strong>5<sup>th</sup></strong> in <a
          href="https://paip2020.grand-challenge.org/rank/"
          target="_blank" rel="noopener noreferrer">PAIP2020 Challenge</a>. I presented our method at the AI Pathology
          Challenge Workshop at the <a
          href="https://www.kosombe.or.kr/"
          target="_blank" rel="noopener noreferrer">Virtual KOSOMBE Conference</a>, South Korea, on Nov 12, 2020. I was one of the two
          members of Sharif HooshPardaz Team, Supervised by Prof. Soleymani and Prof. Behroozi. The challenge was about
          the automated classification of molecular subtypes in colorectal cancer for whole-slide image analysis. It
          consisted of two tasks, MSI-High Classification, and Whole Tumor Area Segmentation. Joint paper with the
          challenge organizers and participants in the works. <a
          href="/PAIP2020.pdf"
          target="_blank" rel="noopener noreferrer">
          Certificate of Award</a> + <a
          href="https://paip2020.grand-challenge.org/workshop/"
          target="_blank" rel="noopener noreferrer">
          Workshop Material</a>.
          <Date>Fall 2020</Date>
        </li>
        <li>
          <HonorIcon />
          Ranked <strong>5<sup>th</sup></strong> in <a
          href="https://monusac-2020.grand-challenge.org/Results/"
          target="_blank"
          rel="noopener noreferrer">
          Multi-organ Nuclei Segmentation and Classification (MoNuSAC) 2020
          Challenge</a> and Ranked <strong>3<sup>rd</sup></strong> in the Post-Challenge Leaderboard.
          MoNuSAC 2020 Challenge was an
          official satellite event of <a
          href="http://2020.biomedicalimaging.org/"
          target="_blank" rel="noopener noreferrer">
          ISBI 2020</a>.
          I was one of the three members of Sharif HooshPardaz Team, Supervised by Prof. Soleymani and Prof. Behroozi.
          I presented our method at the MoNuSAC 2020 Workshop. Joint paper with the challenge organizers and
          participants in the works (will potentially be published in IEEE Transactions on Medical Imaging). <a
          href="/MoNuSAC2020.pdf"
          target="_blank" rel="noopener noreferrer">
          Certificate of Participation</a> + <a
          href="https://www.youtube.com/watch?v=QztsH4IYQRA&t=149s"
          target="_blank" rel="noopener noreferrer">
          Workshop</a>.
          <Date>Spring 2020</Date>
        </li>
        <li>
          <HonorIcon />
          Ranked <strong>3<sup>rd</sup></strong> in the Eleventh <a
          target="_blank" rel="noopener noreferrer"
          href="http://vccup.sharif.ir/11/%db%8c%d8%a7%d8%b2%d8%af%d9%87%d9%85%db%8c%d9%86-%d8%ac%d8%b4%d9%86%d9%88%d8%a7%d8%b1%d9%87-%da%a9%d8%a7%d8%b1%d8%a2%d9%81%d8%b1%db%8c%d9%86%db%8c-%da%a9%d8%b3%d8%a8%e2%80%8c%d9%88%da%a9%d8%a7%d8%b1/">Sharif
          Sharif Festival of Entrepreneurship and Business Development (VC cup)</a>.
          I was a member of Sharif HooshPardaz Team. <a
          href="/VCCup.png"
          target="_blank" rel="noopener noreferrer">Picture</a>.
          <Date>Winter 2020</Date>
        </li>
        <li>
          <HonorIcon />
          Reached the final stage of Artificial Intelligence Challenge in Medical Imaging focused on Intelligent
          Assessment of Imaging Biomarkers of Dementia. <a
          href="/NBML-2.jpg"
          target="_blank" rel="noopener noreferrer">Picture</a>.
          <Date>Fall 2019</Date>
        </li>
        <li>
          <HonorIcon />
          Ranked <strong>8<sup>th</sup></strong> in <a
          target="_blank" rel="noopener noreferrer"
          href="https://gleason2019.grand-challenge.org/Results/">Gleason 2019 Challenge</a>, one of the three
          challenges under the MICCAI 2019 Grand Challenge for Pathology. This challenge was about Automatic Gleason
          Grading of Prostate Cancer in Digital Histopathology. I presented our method at the Gleason 2019 Workshop.
          <Date>Fall 2019</Date>
        </li>
        <li>
          <HonorIcon />
          Ranked <strong>3<sup>rd</sup></strong> in the First National EEG Data Analysis Competition with Clinical
          Applications
          organized by <a
          href="http://nbml.ir/EN/posts/732364"
          target="_blank" rel="noopener noreferrer"
        >National Brain Mapping Lab (NBML)</a>. <a
          href="/NBML-1.jpg"
          target="_blank" rel="noopener noreferrer">Picture</a> + <a
          href="/NBML.pdf"
          target="_blank" rel="noopener noreferrer">Certificate</a>.
          <Date>Summer 2019</Date>
        </li>
        <li>
          <HonorIcon />
          Ranked <strong>1<sup>st</sup></strong> in the third &nbsp;
          <a
            href="http://ictchallenge.sharif.ir/?page_id=6798"
            target="_blank" rel="noopener noreferrer"
          >Sharif ICT Challenge (Fintech)</a> among 65 chosen teams. <a
          href="/Fintech.jpg"
          target="_blank" rel="noopener noreferrer">Picture</a>.
          <Date>Summer 2019</Date>
        </li>
        <li>
          <HonorIcon />
          Ranked <strong>12<sup>th</sup></strong> in code-cup contest among approximately 3100 participants. <a
          href="/code-cup.jpg"
          target="_blank" rel="noopener noreferrer">Picture</a>.
          <Date>Fall 2018</Date>
        </li>
        <li>
          <HonorIcon />
          Ranked among the <strong>top 0.08%</strong> in Iran's National University Entrance Exam (Konkoor) among all
          Iranian Students (Ranked <strong>131<sup>st</sup></strong> among approximately 163000 applicants) in Math. &
          Physics.
          <Date>Summer 2016</Date>
        </li>
        <li>
          <HonorIcon />
          Ranked among the <strong>top 0.1%</strong> in Iran's National University Entrance Exam (Konkoor) among all
          Iranian
          Students (Ranked <strong>229<sup>th</sup></strong> among approximately 115000 applicants) in Foreign
          Languages.
          <Date>Summer 2016</Date>
        </li>
      </ul>
    </>
  )
}
