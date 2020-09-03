import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

function Avatar(props) {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "on.png" }) {
        childImageSharp {
          fixed(width: 100, height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  const { url, altText, title } = props
  const styles = {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
  }

  if (url) {
    return (
      <img
        style={styles}
        src={url}
        alt={altText}
        title={title} />
    )
  }

  return (
    <Img
      style={styles}
      fixed={data.placeholderImage.childImageSharp.fixed}
      alt={altText}
      title={title} />
  )
}

export { Avatar }
