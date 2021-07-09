import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link, useLocation } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const useStyles = makeStyles({
    linkColor: {
        color: "black"
    }
})

function Nav() {
    const location = useLocation();
    const classes = useStyles();
    return (
        <AppBar position="static" color="default">
            <Tabs>
                <Tab label="Google Books" disabled />
                <Link to="/" className={location.pathname === "/"} className={classes.linkColor}>
                    <Tab label="Search" />
                </Link>
                <Link to="/saved" className={location.pathname === "/saved"} className={classes.linkColor}>
                    <Tab label="Saved" />
                </Link>
            </Tabs>
        </AppBar>
    );
}

export default Nav;