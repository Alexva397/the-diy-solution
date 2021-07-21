import React from 'react';
import paintGIF from "../../assets/videos/giphy.gif";
import { makeStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';

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

function Docs() {
    const classes = useStyles();
    return (
        <>
            <Typography className={classes.font}>Excuse the mess. Page under construction.</Typography>
            <img className={classes.gif} src={paintGIF} alt="under construction" />
        </>
    )
}

export default Docs;