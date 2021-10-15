import { Divider, Typography } from "@mui/material"
import { makeStyles } from '../makeStyles';
import React from "react"

import { CVSection } from "./HomeSection"

const useStyles = makeStyles()(theme => ({
  name: {
    fontWeight: 600,
    textTransform: "uppercase",
    marginBottom: "2rem",
  },
  paragraph: {
    marginBottom: "0.25rem",
    textAlign: "justify",
  },
  link: {
    textDecoration: "none",
    color: "inherit",
    display: "block",
    textTransform: "uppercase",
    fontWeight: 600,
    letterSpacing: 1.2,
    paddingTop: "2rem",
    width: "fit-content",
    "&:link": {
      color: "inherit",
    },
    backgroundImage: "linear-gradient(to right, #00c6ff, #0072ff)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 0.2em",
    backgroundPosition: "0 100%",
    transition: "background-size 0.25s ease-in",
    "&:hover": {
      backgroundSize: "100% 50%",
    },
  },
  workResponsibilitiesList: {
    "& li": {
      marginBottom: theme.spacing(1),
    },
  },
  divider: {
    marginTop: theme.spacing(2),
  },
}))

interface TitleProps {
  link?: string
  title: string
}

export function Title({ link, title }: TitleProps) {
  const { classes } = useStyles()
  return (
    <Typography variant="h6" className={classes.paragraph}>
      {link ?
        <a className={classes.link} target="_blank" rel="noopener noreferrer" href={link}>
          {title}
        </a> : <span className={classes.link}>{title}</span>}
    </Typography>
  )
}


export function WorkSection() {
  const { classes } = useStyles()
  return (
    <>
      <Typography variant="h5" className={classes.name} align="center">
        Research & Work
      </Typography>
      <CVSection title={"Research & Work Experiences"}>
        <Title
          link={""}
          title={"Robust and Interpretable Machine Learning Lab, Tehran, Iran"}
        />
        <Typography variant="subtitle1" className={classes.paragraph}>
          Research Assistant | Summer 2020 - Spring 2021
        </Typography>
        <Typography variant="body1" className={classes.paragraph} align="justify">
          I worked on my undergraduate thesis in the Robust and Interpretable Machine Learning Lab under
          the supervision of Prof. Rohban. My thesis was about the use of Semi-Supervised Learning and Self-Supervised
          Learning in the context of Adversarial Robustness.
        </Typography>
        <Title
          link={"https://bmn.ir/"}
          title={"Iran's National Elites Foundation, Tehran, Iran"}
        />
        <Typography variant="subtitle1" className={classes.paragraph}>
          Research Assistant | Spring 2019 - Summer 2020 (18 months)
        </Typography>
        <Typography variant="body1" className={classes.paragraph} align="justify">
          I was a member of a project funded by Iran's National Elites Foundation, supervised by Prof. Behroozi and
          Prof. Soleymani, and focused on Medical Image Analysis using Deep Learning.
        </Typography>
        <ul className={classes.workResponsibilitiesList}>
          <li>
            <Typography align="justify">
              My main objective in this project was to research state-of-the-art Deep Learning and Computer Vision
              methods and apply them to different applications in Medical Image Analysis. My research was focused on the
              classification and segmentation of different types of cancer in digital pathology images. I worked with
              gigapixel whole-slide images from various organs such as the Liver, Colon, and Prostate. I also worked on
              classifying and segmenting COVID-19 patients' CT Scan images and 3D brain MRI images. I gained experience
              working with different learning paradigms such as Self-Supervised Learning, Semi-Supervised Learning, and
              Multiple-Instance Learning.
            </Typography>
          </li>
          <li>
            <Typography align="justify">
              During this time, I also led a software team of two plus myself as a side-project. We developed a
              follow-up automation software used to discharge patients and help hospitals and clinics stay in touch with
              their patients and coordinate patients' next check-ups. It also provided patients with educational
              content. We developed this system for Sina Hospital. Some of the technologies we used in this project
              comprise React, Next.js, GraphQL, WordPress, Django, Firebase.
            </Typography>
          </li>
        </ul>
        <Title
          link={"https://bmn.ir/"}
          title={"Iran's National Elites Foundation, Tehran, Iran"}
        />
        <Typography variant="subtitle1" className={classes.paragraph}>
          Front-end Web Developer | Spring 2019 - Summer 2019 (6 months)
        </Typography>
        <Typography variant="body1" className={classes.paragraph} align="justify">
          I was a member of a project funded by Iran's National Elites Foundation and supervised by Prof. Heydarnoori,
          focused on developing a Real-time locating system. I worked as a Front-end Web Developer, and my main task was
          to create the admin panel of this system. Some of the technologies I used in this project comprise React,
          Redux, and Redux-Saga.
        </Typography>
        <Title
          link={"https://rahnemacollege.com/"}
          title={"Rahnema College, Tehran, Iran"}
        />
        <Typography variant="subtitle1" className={classes.paragraph}>
          Software Engineer & Team Leader | Summer 2018 | <a
          href="/RahnemaCollege.pdf"
          target="_blank" rel="noopener noreferrer">Certificate</a>
        </Typography>
        <Typography variant="body1" className={classes.paragraph} align="justify">
          During this 7-week internship program, I gained experience in the following areas of Software Development:
        </Typography>
        <ul className={classes.workResponsibilitiesList}>
          <Typography>
            <li>Teamwork</li>
            <li>Scrum</li>
            <li>UI/UX</li>
            <li>Full Stack Development</li>
          </Typography>
        </ul>
        <Typography variant="body1" className={classes.paragraph} align="justify">
          My teammates and I developed a social media application (similar to Instagram). The project is
          open-source and available on <a href="https://github.com/Mangeneh" target="_blank"
                                          rel="noopener noreferrer">GitHub</a>.
        </Typography>
      </CVSection>

      <Divider className={classes.divider} />
      <CVSection title={"Projects"}>
        <Title
          link={"https://github.com/SeyedAlirezaFatemi/decaf-compiler"}
          title={"Lark Decaf Compiler"}
        />
        <Typography variant="subtitle1" className={classes.paragraph}>
          Summer 2020
        </Typography>
        <Typography variant="body1" className={classes.paragraph}>
          This was the project for Compiler Design course. It is a compiler for Decaf programming language written in
          python using Lark parsing toolkit. It compiles Decaf to MIPS assembly language. The code
          is available on <a href="https://github.com/SeyedAlirezaFatemi/decaf-compiler" target="_blank"
                             rel="noopener noreferrer">GitHub</a>.
        </Typography>
        <Title
          link={"https://github.com/SeyedAlirezaFatemi/modern-information-retrieval"}
          title={"Modern Information Retrieval"}
        />
        <Typography variant="subtitle1" className={classes.paragraph}>
          Spring 2020
        </Typography>
        <Typography variant="body1" className={classes.paragraph}>
          This was the project for Modern Information Retrieval course. The code
          is available on <a href="https://github.com/SeyedAlirezaFatemi/decaf-compiler" target="_blank"
                             rel="noopener noreferrer">GitHub</a>.
          The repo contains different algorithms related to information retrieval including indexing, searching, various
          evaluation metrics (MAP, F-Measure, R-Precision, NDCG, etc.), classification and clustering algorithms (Naive
          Bayes, Random Forest, SVM, KNN, and KMeans), etc.
        </Typography>
        <Title
          link={"https://github.com/IAmS4n/CTLabeling"}
          title={"Privacy-focused DICOM web panel"}
        />
        <Typography variant="subtitle1" className={classes.paragraph}>
          Summer 2020
        </Typography>
        <Typography variant="body1" className={classes.paragraph}>
          This web app is developed using Flask for the easy labeling of DICOM images with privacy in mind.
          The code is available on <a href="https://github.com/IAmS4n/CTLabeling" target="_blank"
                                      rel="noopener noreferrer">GitHub</a>.
        </Typography>
        <Title
          link={"https://github.com/SeyedAlirezaFatemi/p2p_network_project"}
          title={"P2P (A Peer-to-Peer Network)"}
        />
        <Typography variant="subtitle1" className={classes.paragraph}>
          Fall 2018
        </Typography>
        <Typography variant="body1" className={classes.paragraph}>
          This was the project for Computer Networks course. It is a small example of a peer-to-peer network. The code
          is available on <a href="https://github.com/SeyedAlirezaFatemi/p2p_network_project" target="_blank"
                             rel="noopener noreferrer">GitHub</a>.
        </Typography>

        <Title
          link={"https://github.com/SeyedAlirezaFatemi/gem5"}
          title={"Improving SHA Algorithm by Adding Dedicated Hardware"}
        />
        <Typography variant="subtitle1" className={classes.paragraph}>
          Fall 2018
        </Typography>
        <Typography variant="body1" className={classes.paragraph}>
          This was the project for Computer Architecture course. I used MiBench benchmarks and Intel VTune Amplifier for
          profiling. The dedicated hardware was designed in Verilog and tested using ModelSim and Xilinix ISE.
          Simulations were done using gem5. The code is available on <a
          href="https://github.com/SeyedAlirezaFatemi/gem5" target="_blank" rel="noopener noreferrer">GitHub</a>.
        </Typography>

        <Title
          link={"https://github.com/ImanHosseini/JAA"}
          title={"JAA (Java Arm Accelerator)"}
        />
        <Typography variant="subtitle1" className={classes.paragraph}>
          Spring 2017
        </Typography>
        <Typography variant="body1" className={classes.paragraph}>
          This was the project for Digital System Design course, and it is a hardware (and software) implementation of a
          co-processor that can translate JVM bytecode (only a subset, including the arithmetic) to ARM machine
          instructions. It is tested on a Raspberry PI 3 and can generate much faster executables (up to 15x) than
          running on top of the JVM engine. The code is available on <a
          href="https://github.com/ImanHosseini/JAA"
          target="_blank" rel="noopener noreferrer">GitHub</a>.
        </Typography>

        <Title
          link={"https://www.aparat.com/v/KtZps"}
          title={"Dawnguard Game"}
        />
        <Typography variant="subtitle1" className={classes.paragraph}>
          Spring 2017
        </Typography>
        <Typography variant="body1" className={classes.paragraph}>
          My teammates and I developed this game as the project for the Advanced Programming course. It was chosen as
          one of
          the best projects of the course in that semester. We developed this game using Java, Kotlin, and JavaFX, and
          it has a beautiful interface and supports multiplayer and chat through socket programming. A video of the
          gameplay is available at this <a
          href="https://www.aparat.com/v/KtZps"
          target="_blank" rel="noopener noreferrer"
        >link</a>.
        </Typography>

        <Title
          link={"https://github.com/SeyedAlirezaFatemi/TheSafe"}
          title={"The Safe"}
        />
        <Typography variant="subtitle1" className={classes.paragraph}>
          Fall 2017
        </Typography>
        <Typography variant="body1" className={classes.paragraph}>
          I designed a digital safe using Verilog HDL for the project of Logic Circuits and Digital Systems course. It was
          successfully tested on Xilinix Spartan 6 FPGA. The code is available on <a
          href="https://github.com/SeyedAlirezaFatemi/TheSafe"
          target="_blank" rel="noopener noreferrer">GitHub</a>.
        </Typography>

        <Title
          title={"Who Killed Martin?"}
        />
        <Typography variant="subtitle1" className={classes.paragraph}>
          Fall 2016
        </Typography>
        <Typography variant="body1" className={classes.paragraph}>
          I developed this game as the project for Fundamentals of Programming course. It was chosen as one of the
          best projects of the course in that semester. The game is written in C.
        </Typography>
      </CVSection>
    </>
  )
}
