import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
    login: {
        marginTop: "150px",
    }
}))

function Login() {
    const { login } = useStyles();
    return (
        <p className={login}>welcome to the login page.</p>
    )
}

export default Login;