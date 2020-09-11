import { makeStyles, useTheme } from "@material-ui/core/styles"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import React from "react"

const useStyles = makeStyles(theme => ({
    logo: {
      cursor: "pointer",
      width: 100,
      marginRight: theme.spacing(10),
      marginLeft: theme.spacing(10),
    },
  }),
)

export const Torch = ({ onChangeThemeMode }) => {
  const theme = useTheme()
  const classes = useStyles()
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
        fluid={theme.palette.type === "dark" ? data.off.childImageSharp.fluid : data.on.childImageSharp.fluid}
        alt="Torch"
        className={classes.logo}
      />
    </div>
  )
}
