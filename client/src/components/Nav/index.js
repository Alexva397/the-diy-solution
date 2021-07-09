import React from "react";
import { AppBar, Toolbar, Typography, makeStyles, Button } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";

const useStyles = makeStyles(() => ({
    header: {
        backgroundColor: "rgb(155, 41, 184)",
        paddingRight: "79px",
        paddingLeft: "118px",
    },
    logo: {
        fontFamily: "Inter",
        fontWeight: 600,
        color: "#FFFEFE",
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
}))

const headersData = [
    {
        label: "Home",
        href: "/",
    },
    {
        label: "Projects",
        href: "/landing",
    },
    {
        label: "Login",
        href: "/login",
    },
];

function Nav() {
    const { header, logo, menuButton, toolbar } = useStyles();

    const displayDesktop = () => {
        return (
            <Toolbar className={toolbar}>
                {diysolutionLogo}
                <div>{getMenuButtons()}</div>
            </Toolbar>
        );
    };

    const diysolutionLogo = (
        <Typography variant="h6" component="h1" className={logo}>
            The DIY Solution
        </Typography>
    );

    const getMenuButtons = () => {
        return headersData.map(({ label, href }) => {
            return (
                <Button
                    {...{
                        key: label,
                        color: "inherit",
                        to: href,
                        component: RouterLink,
                        className: menuButton
                    }}
                >
                    {label}
                </Button>
            );
        });
    };

    return (
        <header>
            <AppBar className={header}>{displayDesktop()}</AppBar>
        </header>
    );
}

export default Nav;