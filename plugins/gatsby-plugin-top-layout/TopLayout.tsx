import createCache from "@emotion/cache"
import CssBaseline from "@mui/material/CssBaseline"
import { ThemeProvider } from "@mui/material/styles"
import React, { useState } from "react"
import { Helmet } from "react-helmet"

import { ThemeContext } from "../../src/components/context"
import { darkTheme, lightTheme } from "../../src/components/Layout/theme"
import { useLocalStorage } from "../../src/utils"

export const muiCache = createCache({
  key: "css",
  prepend: true,
})


function getInitialColorMode(): string {
  // TODO: Fix. https://github.com/garronej/tss-react/issues/30
  // https://galenwong.github.io/blog/2020-02-27-mui-jss-rendering/
  // https://github.com/GalenWong/galenwong.github.io
  return "light"
  // Let's check the media query
  if (typeof window !== "undefined") {
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

export default function TopLayout(props) {
  const [themeMode, setThemeMode] = useState(getInitialColorMode)
  // const [themeMode, setThemeMode] = useLocalStorage("theme", getInitialColorMode())
  const handleThemeModeChange = () => setThemeMode(themeMode === "light" ? "dark" : "light")
  return (
    <>
      <Helmet>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Helmet>
      <ThemeProvider theme={themeMode === "light" ? lightTheme : darkTheme}>
        <ThemeContext.Provider value={handleThemeModeChange}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          {/*{React.cloneElement(props.children, { handleThemeModeChange })}*/}
          {props.children}
        </ThemeContext.Provider>
      </ThemeProvider>
    </>
  )
}
