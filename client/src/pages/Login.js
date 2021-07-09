import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    login: {
        marginTop: "300px",
        color: "#000000",
    },
}))

function Login() {
    const { login } = useStyles();
    return (
        <p className={login}>welcome to the login page.</p>
    )
}

export default Login;