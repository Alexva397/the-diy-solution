// React Imports 
// =========================================================   
import React from "react";
// NPM Imports 
// ========================================================= 
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";
import CssBaseline from "@material-ui/core/CssBaseline";
// Import Media
// =========================================================  
import "../Summary/Summary.css";
// import top_hero from "../../assets/images/top_hero";
// ========================================================= "

const useStyles = makeStyles({
    title: {
        fontSize: 20,
        color: '#173e43'
    },
    name: {
        fontSize: 35,
    },
    balance: {
        fontSize: 20,
        color: 'rgb(255, 6, 6)',
    },
});

function Summary({ title, budget, totalSpent }) {
    const classes = useStyles();
    const balance = budget - totalSpent;

    return (
        <Grid container>
            <CssBaseline />
            <Grid item xs={12}>
                <Typography className={classes.name}>
                    {title}
                </Typography>
                <Typography className={classes.title}>
                    Budget: ${budget}
                </Typography>
                <Typography className={classes.title}>
                    Cost to Date: ${totalSpent}
                </Typography>
                <Typography className={balance < 0 ? classes.balance : classes.title}>
                    Balance: ${balance}
                </Typography>
            </Grid>
        </Grid>
    );
}

export default Summary;

