import React from "react";
import paintGIF from "../assets/videos/giphy.gif";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
    margin: {
        marginTop: theme.spacing(10),
    },
    font: {
        fontFamily: "Inter",
        fontSize: 30,
    },
    gif: {
        marginTop: theme.spacing(5)
    }
}));

function WIP() {
    const classes = useStyles();
    return (
        <Container className={classes.margin}>
            <Typography className={classes.font}>Excuse the mess. Page under construction. </Typography>
            <img className={classes.gif} src={paintGIF} alt="under construction"/>
        </Container>
    )
}

export default WIP;