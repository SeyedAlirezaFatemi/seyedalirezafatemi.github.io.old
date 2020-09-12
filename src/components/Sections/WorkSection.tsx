import { Divider, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import clsx from "clsx"
import React from "react"

import { CVSection } from "./HomeSection"

const useStyles = makeStyles(theme => ({
  name: {
    fontSize: 30,
    fontWeight: 600,
    textTransform: "uppercase",
    marginBottom: "2rem",
  },
  paragraph: {
    marginBottom: "0.25rem",
    textAlign: "justify",
  },
  link: {
    // transition: "box-shadow 160ms ease 0s",
    // boxShadow: "rgb(238, 251, 255) 0px -9px 0px inset",
    // borderBottom: "2px solid rgb(207, 243, 255)",
    textDecoration: "none",
    color: "inherit",
    display: "block",
    textTransform: "uppercase",
    fontWeight: 600,
    fontSize: 18,
    letterSpacing: 1.2,
    paddingTop: "2rem",
    width: "fit-content",
    // "&:hover": {
    //   boxShadow: "rgb(207, 243, 255) 0px -1.2em 0px inset",
    // },
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


export function WorkSection() {
  const classes = useStyles()
  return (
    <>
      <Typography variant="h1" className={classes.name} align="center">
        Seyed Alireza Fatemi Jahromi Work
      </Typography>
      <CVSection title={"Work Experiences"}>
        <Typography variant="body1" className={classes.paragraph}>
          <a className={classes.link} target="_blank" rel="noopener noreferrer" href="https://bmn.ir/">
            Iran&apos;s National Elites Foundation, Shahid Ahmadi Roshan Project
          </a>
        </Typography>
        <Typography variant="subtitle1" className={classes.paragraph}>
          Researcher | March, 2019 – Present
        </Typography>
        <Typography variant="body1" className={classes.paragraph} align="justify">
          A project funded by Iran&apos;s National Elites Foundation and supervised by Prof. Behroozi and Prof.
          Soleymani. My
          Responsibilities include:
        </Typography>
        <ul className={classes.workResponsibilitiesList}>
          <li>
            <Typography align="justify">
              Researching state-of-the-art Deep Learning techniques and applying them to different applications in the
              medical field such as digital pathology. My research is focused on the classification and segmentation of
              different types of cancer in digital pathology images. I work with Whole Slide Images from various organs
              such as Liver, Colon, and Prostate. I also worked with 3D brain MRI images for the task of grading
              Periventricular White Matter Changes, Deep White Matter Changes, and Global Cortical Atrophy.
            </Typography>
          </li>
          <li>
            <Typography align="justify">
              Meeting with hospital, clinic, and laboratory managers for requirements engineering and data gathering.
            </Typography>
          </li>
          <li>
            <Typography align="justify">
              Designing and developing software products.
            </Typography>
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
        <Typography variant="body1" className={classes.paragraph} align="justify">
          During the 7-week internship program, I gained experience in the following areas of Software Development:
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
        <Typography variant="body1" className={classes.paragraph}>
          <a className={classes.link} target="_blank" rel="noopener noreferrer"
             href="https://github.com/SeyedAlirezaFatemi/decaf-compiler">
            Lark Decaf Compiler
          </a>
        </Typography>
        <Typography variant="subtitle1" className={classes.paragraph}>
          Summer 2020
        </Typography>
        <Typography variant="body1" className={classes.paragraph}>
          This was the project for Compiler Design course. It is is a compiler for Decaf programming language written in
          python using lark. It compiles Decaf to mips assembly language. The code
          is available on <a href="https://github.com/SeyedAlirezaFatemi/decaf-compiler" target="_blank"
                             rel="noopener noreferrer">GitHub</a>.
        </Typography>

        <Typography variant="body1" className={classes.paragraph}>
          <a className={classes.link} target="_blank" rel="noopener noreferrer"
             href="https://github.com/IAmS4n/CTLabeling">
            Privacy-focused DICOM web panel
          </a>
        </Typography>
        <Typography variant="subtitle1" className={classes.paragraph}>
          Summer 2020
        </Typography>
        <Typography variant="body1" className={classes.paragraph}>
          This web app is developed based on the Flask framework for the easy labeling of DICOM images with Privacy
          in mind. The code
          is available on <a href="https://github.com/IAmS4n/CTLabeling" target="_blank"
                             rel="noopener noreferrer">GitHub</a>.
        </Typography>

        <Typography variant="body1" className={classes.paragraph}>
          <a className={classes.link} target="_blank" rel="noopener noreferrer"
             href="https://github.com/SeyedAlirezaFatemi/p2p_network_project">
            P2P(A Peer-to-Peer Network)
          </a>
        </Typography>
        <Typography variant="subtitle1" className={classes.paragraph}>
          Fall 2018
        </Typography>
        <Typography variant="body1" className={classes.paragraph}>
          This was the project for Computer Networks course. It is a small example of a peer-to-peer network. The code
          is available on <a href="https://github.com/SeyedAlirezaFatemi/p2p_network_project" target="_blank"
                             rel="noopener noreferrer">GitHub</a>.
        </Typography>
        <Typography variant="body1" className={classes.paragraph}>
          <a className={classes.link} target="_blank" rel="noopener noreferrer"
             href="https://github.com/SeyedAlirezaFatemi/gem5">
            Improving SHA Algorithm by Adding Dedicated Hardware
          </a>
        </Typography>
        <Typography variant="subtitle1" className={classes.paragraph}>
          Fall 2018
        </Typography>
        <Typography variant="body1" className={classes.paragraph}>
          This was the project for Computer Architecture course. I used MiBench benchmarks and Intel VTune Amplifier for
          profiling. The dedicated hardware was designed in Verilog and tested using ModelSim and Xilinix ISE.
          Simulations were done using gem5. The code is available on <a
          href="https://github.com/SeyedAlirezaFatemi/gem5" target="_blank" rel="noopener noreferrer">GitHub</a>.
        </Typography>
        <Typography variant="body1" className={classes.paragraph}>
          <a className={classes.link} target="_blank" rel="noopener noreferrer"
             href="https://github.com/ImanHosseini/JAA">
            JAA(Java Arm Accelerator)
          </a>
        </Typography>
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
        <Typography variant="body1" className={classes.paragraph}>
          <a className={classes.link} target="_blank" rel="noopener noreferrer" href="https://www.aparat.com/v/KtZps">
            Dawnguard Game
          </a>
        </Typography>
        <Typography variant="subtitle1" className={classes.paragraph}>
          Spring 2017
        </Typography>
        <Typography variant="body1" className={classes.paragraph}>
          My teammates and I developed this game as the project of Advanced Programming course. It was chosen as one of
          the best projects of the course in that semester. The game is developed using Java, Kotlin, and JavaFX and it
          has a beautiful interface and supports multiplayer and chat through socket.
        </Typography>
        <Typography variant="body1" className={classes.paragraph}>
          <a className={classes.link} target="_blank" rel="noopener noreferrer"
             href="https://github.com/SeyedAlirezaFatemi/TheSafe">
            The Safe
          </a>
        </Typography>
        <Typography variant="subtitle1" className={classes.paragraph}>
          Fall 2017
        </Typography>
        <Typography variant="body1" className={classes.paragraph}>
          For the project of Logic Circuits course, I designed a digital safe in Verilog. It was successfully tested on
          Xilinix Spartan 6 FPGA. The code is available on <a href="https://github.com/SeyedAlirezaFatemi/TheSafe"
                                                              target="_blank" rel="noopener noreferrer">GitHub</a>.
        </Typography>
        <Typography variant="body1" className={clsx(classes.paragraph, classes.link)}>
          Who Killed Martin?
        </Typography>
        <Typography variant="subtitle1" className={classes.paragraph}>
          Fall 2016
        </Typography>
        <Typography variant="body1" className={classes.paragraph}>
          I developed this game as the project of Fundamentals of Programming course. It was chosen as one of the best
          projects of the course in that semester. The game is developed using the C programming language.
        </Typography>
      </CVSection>
    </>
  )
}
