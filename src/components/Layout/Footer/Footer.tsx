import { Grid, IconButton, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { Link } from "gatsby"
import { Github, Gmail, Instagram, Linkedin, Telegram, Twitter } from "mdi-material-ui"
import React from "react"

const useStyles = makeStyles(theme => ({
  quote: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  link: {
    "& a": {
      color: theme.palette.text.disabled,
    },
  },
}))

const links = [
  {
    name: "/home",
    to: "/",
  }, {
    name: "/work",
    to: "/work",
  }, {
    name: "/honors",
    to: "/honors",
  }, {
    name: "/about",
    to: "/about",
  },
]

export function Footer() {
  const classes = useStyles()
  return (
    <Grid container justify="center">
      <a href="https://github.com/SeyedAlirezaFatemi" target="_blank" rel="noopener noreferrer">
        <IconButton aria-label="GitHub">
          <Github />
        </IconButton>
      </a>
      <a href="https://www.linkedin.com/in/seyed-alireza-fatemi-jahromi" target="_blank" rel="noopener noreferrer">
        <IconButton aria-label="LinkedIn">
          <Linkedin />
        </IconButton>
      </a>
      <a href="https://www.instagram.com/_alireza_fa_/" target="_blank" rel="noopener noreferrer">
        <IconButton aria-label="Twitter">
          <Instagram />
        </IconButton>
      </a>
      <a href="https://twitter.com/alir3zafa" target="_blank" rel="noopener noreferrer">
        <IconButton aria-label="Twitter">
          <Twitter />
        </IconButton>
      </a>
      <a href="https://t.me/OriginalAngel" target="_blank" rel="noopener noreferrer">
        <IconButton aria-label="Telegram  ">
          <Telegram />
        </IconButton>
      </a>
      <a href="mailto:seyedalirezafatemijahromi@gmail.com" target="_blank" rel="noopener noreferrer">
        <IconButton aria-label="Gmail">
          <Gmail />
        </IconButton>
      </a>
      <Grid container item xs={12} justify="center" spacing={1}>
        {links.map(link => (
          <Grid item className={classes.link}>
            <Link to={link.to}>
              {link.name}
            </Link>
          </Grid>
        ))}
      </Grid>
      <Grid item xs={12} className={classes.quote}>
        <Typography variant="subtitle1" align="center">
          {"\"I choose the labyrinth.\""}
          {/*― John Green*/}
        </Typography>
      </Grid>
      <Grid item xs={12} container justify="center">
        <Typography variant="caption" align="center">
          Design & Development By Seyed Alireza FatemiJahromi | Logo from <a
          href="https://dribbble.com/shots/7896171-Alone-In-The-Dark"
          target="_blank"
          rel="noopener noreferrer"
        >
          source
        </a>
        </Typography>
      </Grid>
    </Grid>
  )
}
