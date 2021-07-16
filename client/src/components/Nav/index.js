import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Button,
  IconButton,
  Drawer,
  Link,
  MenuItem,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import API from "../../utils/API";

const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: "#3fb0ac",
    paddingRight: "79px",
    paddingLeft: "118px",
    "@media (max-width: 900px)": {
      paddingLeft: 0,
    },
  },
  logo: {
    fontFamily: "Inter",
    fontWeight: 600,
    color: "#dddfd4",
    textAlign: "left",
  },
  menuButton: {
    fontFamily: "Inter",
    fontWeight: 700,
    size: "18px",
    marginLeft: "38px",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  drawerContainer: {
    padding: "20px 30px",
  },
  iconSize: {
    fontSize: "35px",
  }
}));

export default function Nav() {
  const { header, logo, menuButton, toolbar, drawerContainer, iconSize } = useStyles();

  const isLoggedIn = true;

  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });

  const { mobileView, drawerOpen } = state;

  const logout = () => {
    API.logoutUser()
      .then((res) => {
        if (res.data) {
          window.location = "/";
        }
      }) 
  };

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());

    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    };
  }, []);

  const displayDesktop = () => {
    return (
      <Toolbar className={toolbar}>
        {diySolutionLogo}
        <div>
          <Button
            {...{
              key: "home",
              color: "inherit",
              to: "/",
              component: RouterLink,
              className: menuButton
            }}
          >
            Home
          </Button>
          {!isLoggedIn &&
            <Button
              {...{
                key: "login",
                color: "inherit",
                to: "/login",
                component: RouterLink,
                className: menuButton
              }}
            >
              Login
            </Button>}
          {isLoggedIn &&
            <Button
              {...{
                key: "projects",
                color: "inherit",
                to: "/landing",
                component: RouterLink,
                className: menuButton
              }}
            >
              Projects
            </Button>}
          {isLoggedIn &&
            <Button
              onClick={logout}
              {...{
                key: "logout",
                color: "inherit",
                // to: "/logout",
                // component: RouterLink,
                className: menuButton,
              }}
            >
              Logout
            </Button>}


        </div>
      </Toolbar >
    );
  };

  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));

    return (
      <Toolbar>
        <IconButton
          {...{
            edge: "start",
            color: "inherit",
            "aria-label": "menu",
            "aria-haspopup": "true",
            onClick: handleDrawerOpen,
          }}
        >
          <MenuIcon />
        </IconButton>

        <Drawer
          {...{
            anchor: "left",
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <div className={drawerContainer}>
            <Link
              {...{
                component: RouterLink,
                to: "/",
                color: "inherit",
                style: { textDecoration: "none" },
                key: "home",
              }}
            >
              <MenuItem>Home</MenuItem>
            </Link>
            {!isLoggedIn &&
              <Link
                {...{
                  component: RouterLink,
                  to: "/login",
                  color: "inherit",
                  style: { textDecoration: "none" },
                  key: "login",
                }}
              >
                <MenuItem>Login</MenuItem>
              </Link>}
            {isLoggedIn &&
              <Link
                {...{
                  component: RouterLink,
                  to: "/landing",
                  color: "inherit",
                  style: { textDecoration: "none" },
                  key: "projects",
                }}
              >
                <MenuItem>Projects</MenuItem>
              </Link>}
            {isLoggedIn &&
              <Link
                onClick={logout}
                {...{
                  // component: RouterLink,
                  // to: "/logout",
                  color: "inherit",
                  style: { textDecoration: "none" },
                  key: "logout",
                  // onClick: {logout}
                }}
              >
                <MenuItem>Logout</MenuItem>
              </Link>}
          </div>
        </Drawer>

        <div>{diySolutionLogo}</div>
      </Toolbar>
    );
  };

  const diySolutionLogo = (
    <Typography variant="h6" component="h1" className={logo}>
      The DIY Solution <span className={iconSize}>⌂</span>
    </Typography>
  );

  return (
    <header>
      <AppBar className={header}>
        {mobileView ? displayMobile() : displayDesktop()}
      </AppBar>
    </header>
  );
}
