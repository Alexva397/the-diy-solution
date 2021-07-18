import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import CssBaseline from "@material-ui/core/CssBaseline";

const useStyles = makeStyles(() => ({
    home: {
        marginTop: "300px",
        color: "#fae596",
    },
}))

function Home() {
    const { home } = useStyles();
    return (
        <>
        {/* material ui CSS reset */}
        <CssBaseline />
        {/* nav bar lives inside of header if you have a custom nav bar component the main tag should be <header> with the contents inside */}
        <header></header>
        <main>
            <Hero/>
        </main>
        <Footer/>
        </>
    )
}

export default Home;