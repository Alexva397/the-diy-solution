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
        
    }
});

function Summary({ title }) {
    const classes = useStyles();

    return (
            <Grid container>
                <CssBaseline />
                <Grid item xs={12}>
                    <Typography className={classes.name}>
                        {title}
                    </Typography>
                    <Typography className={classes.title}>
                        Project total: $2800
                    </Typography>

                    <Typography className={classes.title}>
                        Cost to Date: $1200
                    </Typography>
                    <Typography className={classes.title}>
                        Balance: $500
                    </Typography>
                </Grid>              
            </Grid>
    );
}

export default Summary;

