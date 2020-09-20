import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import React from "react"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  avatar: {
    width: "200px",
    height: "200px",
    borderRadius: "50%",
  }
}))

export function Avatar(props) {
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "avatar.jpg" }) {
        childImageSharp {
          fixed(width: 200, height: 200, quality: 100) {
            ...GatsbyImageSharpFixed_noBase64
          }
        }
      }
    }
  `)

  const { url, altText, title } = props

  if (url) {
    return (
      <img
        className={classes.avatar}
        src={url}
        alt={altText}
        title={title} />
    )
  }

  return (
    <Img
      className={classes.avatar}
      fixed={data.placeholderImage.childImageSharp.fixed}
      alt={altText}
      title={title} />
  )
}
