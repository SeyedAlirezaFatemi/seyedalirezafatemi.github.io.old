import createCache from "@emotion/cache"
import { CacheProvider } from "@emotion/react"
import { Box, CssBaseline, Divider } from "@mui/material"
import { ThemeProvider } from "@mui/material/styles"
import React from "react"

import { useLocalStorage } from "../../utils"
import { Footer } from "./Footer/Footer"
import Header from "./Header/Header"
import { darkTheme, lightTheme } from "./theme"

export const muiCache = createCache({
  "key": "mui",
  "prepend": true,
})

function getInitialColorMode(): string {
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

export const Layout = ({ children, page }) => {
  const [theme, setTheme] = useLocalStorage("theme", getInitialColorMode())
  const handleThemeModeChange = () => setTheme(theme === "light" ? "dark" : "light")
  return (
    <MasterWrapper theme={theme}>
      <Box
        sx={{
          margin: "0 auto",
          maxWidth: "960px",
          padding: "0 1.0875rem 1.45rem",
        }}>
        <Header onChangeThemeMode={handleThemeModeChange} page={page} />
        <main>{children}</main>
        <Divider sx={{ marginTop: "36px" }} />
        <Footer />
      </Box>
    </MasterWrapper>
  )
}

const MasterWrapper = ({ children, theme }) => {
  return (
    <CacheProvider value={muiCache}>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  )
}
