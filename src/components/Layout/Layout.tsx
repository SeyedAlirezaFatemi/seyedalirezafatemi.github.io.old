import "./layout.css"

import { CssBaseline, Divider } from "@material-ui/core"
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from "@material-ui/core/styles"
import { graphql, useStaticQuery } from "gatsby"
import React, { useCallback } from "react"

import { useLocalStorage } from "../../utils"
import Header from "./Header"

const lightTheme = responsiveFontSizes(createMuiTheme({
  palette: {
    type: "light",
  },
  typography: {
    // @ts-ignore
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
    // @ts-ignore
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
  }, [theme])
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <Header siteTitle={data.site.siteMetadata.title} onChangeThemeMode={handleThemeModeChange} page={page} />
      <div className="main-container">
        <CssBaseline />
        <main>{children}</main>
        <Divider style={{marginTop: 36}} />
      </div>
    </ThemeProvider>
  )
}

export { Layout }
