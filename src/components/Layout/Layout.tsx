import { Box, Divider } from "@mui/material"
import React, { useContext } from "react"

import { ThemeContext } from "../context"
import { Footer } from "./Footer/Footer"
import Header from "./Header/Header"


export const Layout = ({ children, page }) => {
  const handleThemeModeChange = useContext(ThemeContext)
  return (
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
  )
}
