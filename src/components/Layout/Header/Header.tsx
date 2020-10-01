import "./hamburgers.css"

import { AppBar, Grid, Hidden, List, ListItem, ListItemText, SwipeableDrawer, Typography } from "@material-ui/core"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import clsx from "clsx"
import { Link } from "gatsby"
import React, { useCallback } from "react"
import { Helmet } from "react-helmet"

import { Sections } from "../../../utils"
import { Torch } from "../../Media"

const colorModeTransition =
  "background 0.25s var(--ease-in-out-quad), color 0.25s var(--ease-in-out-quad)"

const useStyles = makeStyles(theme => {
  const isDark = theme.palette.type === "dark"
  const background = theme.palette.background.default
  const primary = isDark ? "#fff" : "#000"
  return ({
    header: {
      marginTop: 25,
      marginBottom: 25,
      textAlign: "center",
    },
    button: {
      width: "calc(120px + 1.5vw)",
      cursor: "pointer",
      backgroundColor: "transparent",
      borderTopColor: "transparent",
      borderLeftColor: "transparent",
      borderRightColor: "transparent",
      borderBottomColor: "transparent",
      "&:focus": {
        outline: "none",
      },
    },
    buttonActive: {
      borderBottomColor: theme.palette.text.primary,
    },
    moonOrSun: {
      position: "relative",
      width: 24,
      height: 24,
      borderRadius: "50%",
      borderWidth: isDark ? 4 : 2,
      borderStyle: "solid",
      borderColor: primary,
      background: primary,
      transform: `scale(${isDark ? 0.55 : 1})`,
      transition: "all 0.45s ease",
      overflow: isDark ? "visible" : "hidden",
      "&:before": {
        position: "absolute",
        right: -9,
        top: -9,
        height: 24,
        width: 24,
        border: `2px solid ${primary}`,
        borderRadius: "50%",
        transform: `translate(${isDark ? "14px, -14px" : "0, 0"})`,
        opacity: isDark ? 0 : 1,
        transition: "transform 0.45s ease",
      },
      "&:after": {
        content: "\"\"",
        width: 8,
        height: 8,
        borderRadius: "50%",
        margin: "-4px 0 0 -4px",
        position: "absolute",
        top: "50%",
        left: "50%",
        boxShadow: `
        0 -23px 0 ${primary},
        0 23px 0 ${primary},
        23px 0 0 ${primary},
        -23px 0 0 ${primary},
        15px 15px 0 ${primary},
        -15px 15px 0 ${primary},
        15px -15px 0 ${primary},
        -15px -15px 0 ${primary}
        `,
        transform: `scale(${isDark ? 1 : 0})`,
        transition: "all 0.35s ease",
        [theme.breakpoints.down("md")]: {
          transform: `scale(${isDark ? 0.92 : 0})`,
        },
      },
    },
    moonMask: {
      position: "absolute",
      right: -1,
      top: -8,
      height: 24,
      width: 24,
      borderRadius: "50%",
      border: 0,
      background: background,
      transform: `translate(${isDark ? "14px, -14px" : "0, 0"})`,
      opacity: isDark ? 0 : 1,
      transition: `${colorModeTransition}, transform 0.45s ease`,
    },
    iconWrapper: {
      opacity: 0.5,
      position: "relative",
      cursor: "pointer",
      borderRadius: 5,
      width: 40,
      height: 25,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "opacity 0.3s ease",
      marginBottom: 4,
      "&:hover": {
        opacity: 1,
      },
      [theme.breakpoints.down("md")]: {
        display: "inline-flex",
        transform: "scale(0.708)",
        "&:hover": {
          opacity: 0.5,
        },
      },
    },
    list: {
      width: 250,
    },
    appBar: {
      backgroundColor: "transparent",
      width: "fit-content",
    },
    hamburger: {
      opacity: 0.5,
      color: primary,
      "& .hamburger-inner": {
        backgroundColor: primary,
        "&:after": {
          backgroundColor: primary,
        },
        "&:before": {
          backgroundColor: primary,
        },
      },
      "& .is-active": {
        backgroundColor: primary,
      },
    },
    drawerLink: {
      textDecoration: "none",
      "&:link": {
        color: "inherit",
      },
    },
    switch: {
      borderRadius: "10%",
    },
    torch: {
      [theme.breakpoints.down("sm")]: {
        margin: "0 auto",
      },
    },
  })
})

const DarkModeToggle = ({ toggleDayNight }) => {
  const theme = useTheme()
  const classes = useStyles()
  const isDark = theme.palette.type === `dark`

  const toggleColorMode = useCallback((event) => {
    event.preventDefault()
    toggleDayNight()
  }, [toggleDayNight])

  return (
    <div
      className={classes.iconWrapper}
      onClick={toggleColorMode}
      data-a11y="false"
      aria-label={isDark ? "Activate light mode" : "Activate dark mode"}
      title={isDark ? "Activate light mode" : "Activate dark mode"}
    >
      <div className={classes.moonOrSun} />
      <div className={classes.moonMask} />
    </div>
  )
}

const MenuButton = ({ section, page, text }) => {
  const classes = useStyles()
  return (
    <Link to={section.path}>
      <button className={clsx(classes.button, page === section.name && classes.buttonActive)}>
        <Typography variant="button" color="textPrimary">
          {text}
        </Typography>
      </button>
    </Link>
  )
}

const Header = ({ siteTitle, onChangeThemeMode, page }) => {
  const classes = useStyles()
  return (
    <header className={classes.header}>
      <Helmet>
        <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
        <title>{siteTitle}</title>
      </Helmet>
      <Grid container alignItems="center" justify="center">
        <Grid container alignItems="center" justify="center">
          <DarkModeToggle toggleDayNight={onChangeThemeMode} />
        </Grid>
        <Hidden mdUp>
          <MobileNavigation />
        </Hidden>
        <Grid container justify="space-between" alignItems="center">
          <Hidden smDown>
            <Grid item>
              <MenuButton section={Sections.home} page={page} text={"HOME"} />
            </Grid>
            <Grid item>
              <MenuButton section={Sections.work} page={page} text={"WORK"} />
            </Grid>
          </Hidden>
          <Grid item className={classes.torch}>
            <Torch onChangeThemeMode={onChangeThemeMode} />
          </Grid>
          <Hidden smDown>
            <Grid item>
              <MenuButton section={Sections.honors} page={page} text={"HONORS"} />
            </Grid>
            <Grid item>
              <MenuButton section={Sections.about} page={page} text={"ABOUT"} />
            </Grid>
          </Hidden>
        </Grid>
      </Grid>
    </header>
  )
}

function MobileNavigation() {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)
  // @ts-ignore
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent)
  const toggleDrawer = useCallback((open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent,
  ) => {
    if (
      event &&
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return
    }
    setOpen(open)
  }, [setOpen])

  const sideList = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {Object.keys(Sections).map((section) => (
          <Link to={Sections[section].path} className={classes.drawerLink} key={Sections[section].path}>
            <ListItem button key={Sections[section].name}>
              <ListItemText primary={Sections[section].title} />
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  )

  return (
    <nav>
      <AppBar elevation={0} className={classes.appBar} position="absolute">
        <button className={`hamburger hamburger--spin ${open ? "is-active" : ""} ${classes.hamburger}`} type="button"
                onClick={toggleDrawer(true)} aria-label="Menu" aria-controls="navigation"
                aria-expanded={open ? "true" : "false"}>
  <span className="hamburger-box">
  <span className="hamburger-inner" />
  </span>
        </button>
      </AppBar>
      <div id="navigation">
        <SwipeableDrawer
          disableBackdropTransition={!iOS}
          disableDiscovery={iOS}
          open={open}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
        >
          {sideList()}
        </SwipeableDrawer>
      </div>
    </nav>
  )
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
