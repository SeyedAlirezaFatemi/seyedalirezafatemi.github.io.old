import { Github, Gmail, Instagram, Linkedin, Telegram, Twitter } from "@mitch528/mdi-material-ui"
import { Grid, IconButton, Typography } from "@mui/material"
import { Link } from "gatsby"
import React from "react"

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
  return (
    <Grid container justifyContent="center">
      <a href="https://github.com/SeyedAlirezaFatemi" target="_blank" rel="noopener noreferrer">
        <IconButton aria-label="GitHub" size="large">
          <Github />
        </IconButton>
      </a>
      <a href="https://www.linkedin.com/in/seyed-alireza-fatemi-jahromi" target="_blank" rel="noopener noreferrer">
        <IconButton aria-label="LinkedIn" size="large">
          <Linkedin />
        </IconButton>
      </a>
      <a href="https://www.instagram.com/_alireza_fa_/" target="_blank" rel="noopener noreferrer">
        <IconButton aria-label="Twitter" size="large">
          <Instagram />
        </IconButton>
      </a>
      <a href="https://twitter.com/alir3zafa" target="_blank" rel="noopener noreferrer">
        <IconButton aria-label="Twitter" size="large">
          <Twitter />
        </IconButton>
      </a>
      <a href="https://t.me/OriginalAngel" target="_blank" rel="noopener noreferrer">
        <IconButton aria-label="Telegram  " size="large">
          <Telegram />
        </IconButton>
      </a>
      <a href="mailto:seyedalirezafatemijahromi@gmail.com" target="_blank" rel="noopener noreferrer">
        <IconButton aria-label="Gmail" size="large">
          <Gmail />
        </IconButton>
      </a>
      <Grid container item xs={12} justifyContent="center" spacing={1}>
        {links.map(link => (
          <Grid item sx={{ "& a": { color: "text.disabled" } }} key={link.name}>
            <Link to={link.to}>
              {link.name}
            </Link>
          </Grid>
        ))}
      </Grid>
      <Grid item xs={12} sx={{ marginTop: 1, marginBottom: 1 }}>
        <Typography variant="subtitle1" align="center">
          {"\"I choose the labyrinth.\""}
          {/*― John Green*/}
        </Typography>
      </Grid>
      <Grid item xs={12} container justifyContent="center">
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
