import { Grid, IconButton } from "@material-ui/core"
import { Email, Github, Instagram, Linkedin, Twitter, Telegram } from "mdi-material-ui"
import React from "react"

export function Footer() {
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
      <a href="mailto:alirezafa@rocketmail.com" target="_blank" rel="noopener noreferrer">
        <IconButton aria-label="Email">
          <Email />
        </IconButton>
      </a>
    </Grid>
  )
}
