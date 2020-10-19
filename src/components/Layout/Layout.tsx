import { CssBaseline, Divider } from "@material-ui/core"
import { createMuiTheme, makeStyles, responsiveFontSizes, ThemeProvider } from "@material-ui/core/styles"
import React, { useCallback } from "react"

import { useLocalStorage } from "../../utils"
import { Footer } from "./Footer/Footer"
import Header from "./Header/Header"

const themeOptions = {
  overrides: {
    MuiCssBaseline: {
      "@global": {
        html: {
          font: "112.5%/1.45em georgia, serif",
          boxSizing: "border-box",
          overflowY: "scroll",
        },
        a: {
          color: "deepskyblue",
          backgroundColor: "transparent",
          "&:hover": {
            outlineWidth: 0,
          },
          "&:active": {
            outlineWidth: 0,
          },
        },
      },
    },
  },
  typography: {
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Ubuntu, Cantarell, Roboto, Helvetica, Arial, Noto Sans,\n      sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
    subtitle1: {
      color: "#96999b",
    },
    caption: {
      color: "#96999b",
    },
  },
}

// @ts-ignore
const lightTheme = responsiveFontSizes(createMuiTheme({
  palette: {
    type: "light",
  },
  ...themeOptions,
}))

// @ts-ignore
const darkTheme = responsiveFontSizes(createMuiTheme({
  palette: {
    type: "dark",
  },
  ...themeOptions,
}))

const MasterWrapper = ({ children, theme }) => {
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}

const useStyles = makeStyles(theme => ({
  container: {
    margin: "0 auto",
    maxWidth: "960px",
    padding: "0 1.0875rem 1.45rem",
  },
  divider: {
    marginTop: 36,
  },
}))

function getInitialColorMode(): string {
  // Let's check the media query
  if (typeof window !== 'undefined') {
    const mql = window.matchMedia("(prefers-color-scheme: dark)")
    const hasMediaQueryPreference = typeof mql.matches === "boolean"
    if (hasMediaQueryPreference) {
      return mql.matches ? "dark" : "light"
    }
  }
  // If they are using a browser/OS that doesn't support
  // color themes, let's default to 'light'.
  return "light"
}

export const Layout = ({ children, page }) => {
  const classes = useStyles()
  const [theme, setTheme] = useLocalStorage("theme", getInitialColorMode())
  const handleThemeModeChange = useCallback(() => {
    setTheme(theme === "light" ? "dark" : "light")
  }, [theme])
  return (
    <MasterWrapper theme={theme}>
      <div className={classes.container}>
        <Header onChangeThemeMode={handleThemeModeChange} page={page} />
        <main>{children}</main>
        <Divider className={classes.divider} />
        <Footer />
      </div>
    </MasterWrapper>
  )
}
