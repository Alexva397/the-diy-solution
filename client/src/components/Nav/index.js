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
import React, { useState, useEffect, useContext } from "react";
import { Link as RouterLink } from "react-router-dom";
import API from "../../utils/API";
import { userContext } from "../../Context";
import "./Nav.css"

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
    color: "#fff",
    textAlign: "left",
  },
  menuButton: {
    fontFamily: "Inter",
    fontWeight: 700,
    size: "18px",
    marginLeft: "38px",
    hover: "#f7b733",
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
    color: "#f7b733",
  },
  // 'menuButton:hover': {
    
  // }
}));

export default function Nav() {
  const { header, logo, menuButton, toolbar, drawerContainer, iconSize } = useStyles();

  const userObject = useContext(userContext);

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
          {!userObject &&
            <Button
              {...{
                key: "login",
                color: "inherit",
                to: "/login",
                component: RouterLink,
                className: menuButton,
              }}
            >
              Login
            </Button>}
          {userObject &&
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
          {userObject &&
            <Button
              onClick={logout}
              {...{
                key: "logout",
                color: "inherit",
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
            {!userObject &&
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
            {userObject &&
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
            {userObject &&
              <Link
                {...{
                  color: "inherit",
                  style: { textDecoration: "none" },
                  key: "logout",
                }}
              >
                <MenuItem
                  onClick={logout}
                >Logout</MenuItem>
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
