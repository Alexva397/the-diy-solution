import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    signup: {
        marginTop: "300px",
        color: "#000000",
    },
}))

function Signup() {
    const { signup } = useStyles();
    return (
        <p className={signup}>welcome to the signup page.</p>
    )
}

export default Signup;