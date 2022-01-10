import { createTheme, responsiveFontSizes, ThemeOptions } from "@mui/material/styles"

const themeOptions: ThemeOptions = {
  components: {
    MuiCssBaseline: {
      styleOverrides: {
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

export const lightTheme = responsiveFontSizes(createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#fafafa",
    },
  },
  ...themeOptions,
}))

export const darkTheme = responsiveFontSizes(createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#303030",
    },
  },
  ...themeOptions,
}))
