import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Hero from "../components/Hero";
import CarouselCard from "../components/CarouselCard";
import Footer from "../components/Footer";

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
        <Hero/>
        <CarouselCard/>
        <Footer/>
        </>
    )
}

export default Home;