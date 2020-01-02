import React, { useCallback } from "react"
import PropTypes from "prop-types"
import { graphql, useStaticQuery } from "gatsby"
import Header from "./header"
import "./layout.css"
import { CssBaseline } from "@material-ui/core"
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from "@material-ui/core/styles"
import { useLocalStorage } from "../../utils/useLocalStorage"

const lightTheme = responsiveFontSizes(createMuiTheme({
  palette: {
    type: "light",
  },
  typography: {
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale",
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Ubuntu, Cantarell, Roboto, Helvetica, Arial, Noto Sans,\n      sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
    subtitle1: {
      color: "#96999b",
    },
  },
}))

const darkTheme = responsiveFontSizes(createMuiTheme({
  palette: {
    type: "dark",
  },
  typography: {
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale",
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Ubuntu, Cantarell, Roboto, Helvetica, Arial, Noto Sans,\n      sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
    subtitle1: {
      color: "#96999b",
    },
  },
}))

const Layout = ({ children, page }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const [theme, setTheme] = useLocalStorage("theme", "light")
  const handleThemeModeChange = useCallback(() => {
    setTheme(theme === "light" ? "dark" : "light")
  }, [theme, setTheme])
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <Header siteTitle={data.site.siteMetadata.title} onChangeThemeMode={handleThemeModeChange} page={page} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <CssBaseline />
        <main>{children}</main>
      </div>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export { Layout }
