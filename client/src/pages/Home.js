import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BeforeAndAfter from "../components/AboutCard";

const useStyles = makeStyles(() => ({
    home: {
        marginTop: "300px",
        color: "#000000",
    },
}))

function Home() {
    const { home } = useStyles();
    return (
        <BeforeAndAfter className={home} />

    )
}

export default Home;