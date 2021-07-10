import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    home: {
        marginTop: "300px",
        color: "#000000",
    },
}))

function Home() {
    const { home } = useStyles();
    return (
        <p className={home}>welcome to the home page.</p>

    )
}

export default Home;