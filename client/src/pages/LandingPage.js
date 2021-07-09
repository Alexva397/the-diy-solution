import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    landing: {
        marginTop: "300px",
        color: "#000000",
    },
}))

function Landing() {
    const { landing } = useStyles();
    return (
        <p className={landing}>welcome to the projects page. Soon, it will only be accessible by logged in users. If logged in users do not have any saved projects, they will see a project start component. If logged in users do have saved projects, they will see a similar component, but with active projects highlighted in blue.</p>

    )
}

export default Landing;