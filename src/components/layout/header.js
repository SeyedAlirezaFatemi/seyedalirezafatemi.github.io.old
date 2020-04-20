import { Link } from "gatsby"
import React, { useCallback } from "react"
import {
  AppBar,
  Grid,
  Hidden,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  SwipeableDrawer,
  Typography,
  useTheme,
} from "@material-ui/core"
import "./hamburgers.css"
import { Sections } from "../../utils"
import { Helmet } from "react-helmet"

const colorModeTransition =
  "background 0.25s var(--ease-in-out-quad), color 0.25s var(--ease-in-out-quad)"

const useStyles = makeStyles(theme => {
  const isDark = theme.palette.type === "dark"
  const background = theme.palette.background.default
  const primary = isDark ? "#fff" : "#000"
  return ({
    header: {
      marginTop: 50,
      marginBottom: 25,
      textAlign: "center",
    },
    button: {
      width: "calc(120px + 1.5vw)",
      marginLeft: 25,
      marginRight: 25,
      padding: 10,
      cursor: "pointer",
      fontSize: 24,
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
      width: "calc(120px + 1.5vw)",
      marginLeft: 25,
      marginRight: 25,
      padding: 10,
      cursor: "pointer",
      fontSize: 24,
      backgroundColor: "transparent",
      borderTopColor: "transparent",
      borderLeftColor: "transparent",
      borderRightColor: "transparent",
      borderBottomColor: theme.palette.text.primary,
      "&:focus ": {
        outline: "none",
      },
    },
    logo: {
      cursor: "pointer",
      width: 100,
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
  })

})

const DarkModeToggle = ({ toggleDayNight }) => {
  const theme = useTheme()
  const classes = useStyles()
  const isDark = theme.palette.type === `dark`

  function toggleColorMode(event) {
    event.preventDefault()
    toggleDayNight()
  }

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

const Header = ({ siteTitle, onChangeThemeMode, page }) => {
  const theme = useTheme()
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
        <Hidden smDown>
          <Link to={Sections.home.path}>
            <button className={page === Sections.home.name ? classes.buttonActive : classes.button}>
              <Typography variant="button" color="textPrimary">
                HOME
              </Typography>
            </button>
          </Link>
          <Link to={Sections.work.path}>
            <button className={page === Sections.work.name ? classes.buttonActive : classes.button}>
              <Typography variant="button" color="textPrimary">
                WORK
              </Typography>
            </button>
          </Link>
        </Hidden>
        <img src={theme.palette.type === "dark" ? "off.png" : "on.png"} onClick={onChangeThemeMode} alt="Fatemi Logo"
             className={classes.logo} />
        <Hidden smDown>
          <Link to={Sections.honors.path}>
            <button className={page === Sections.honors.name ? classes.buttonActive : classes.button}>
              <Typography variant="button" color="textPrimary">
                HONORS
              </Typography>
            </button>
          </Link>
          <Link to={Sections.about.path}>
            <button className={page === Sections.about.name ? classes.buttonActive : classes.button}>
              <Typography variant="button" color="textPrimary">
                ABOUT
              </Typography>
            </button>
          </Link>
        </Hidden>
      </Grid>
    </header>
  )
}

function MobileNavigation() {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent)

  const toggleDrawer = useCallback((open) => event => {
    if (event && event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
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
          <Link to={Sections[section].path} className={classes.drawerLink}>
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
          disableBackdropTransition={!iOS} disableDiscovery={iOS}
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
