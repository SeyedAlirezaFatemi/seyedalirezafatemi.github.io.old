import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import React from "react"

import { makeStyles } from "../makeStyles"

const useStyles = makeStyles()(theme => ({
    logo: {
      cursor: "pointer",
      width: 80,
      marginRight: theme.spacing(5),
      marginLeft: theme.spacing(5),
    },
  }),
)

export const Torch = ({ onChangeThemeMode }) => {
  const { classes, theme } = useStyles()
  console.log(theme.palette.mode)
  const data = useStaticQuery(graphql`
    query {
      on: file(relativePath: { eq: "on.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      off: file(relativePath: { eq: "off.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `)
  return (
    <div onClick={onChangeThemeMode}>
      <Img
        fluid={theme.palette.mode === "dark" ? data.off.childImageSharp.fluid : data.on.childImageSharp.fluid}
        className={classes.logo}
      />
    </div>
  )
}
