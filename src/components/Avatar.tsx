import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

function Avatar(props) {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "avatar1.jpg" }) {
        childImageSharp {
          fixed(width: 200, height: 200) {
            ...GatsbyImageSharpFixed_noBase64
          }
        }
      }
    }
  `)

  const { url, altText, title } = props
  const styles = {
    width: "200px",
    height: "200px",
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
