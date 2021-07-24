// React Imports 
// =========================================================   
import React from "react";
// NPM Imports 
// ========================================================= 
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";
import Paper from '@material-ui/core/Paper'
import CssBaseline from "@material-ui/core/CssBaseline";
// Import Media
// =========================================================  
import "../Summary/Summary.css";
// import top_hero from "../../assets/images/top_hero";
// ========================================================= "

const useStyles = makeStyles({
    title: {
        float: 'left',
        fontSize: '20px',
        marginLeft: '40px',
        color: 'white'
    },
    name: {
        fontSize: '40px',
    },
    balance: {
        fontSize: '20px',
        color: 'rgb(255, 6, 6)',
        float: 'left',
        marginLeft: '40px'
    },
    firstPaper: {
        paddingTop: '50px',
        paddingBottom: '50px',
        borderBottomLeftRadius: '0px',
        borderBottomRightRadius: '0px',
        backgroundColor: '#dddfd4',
        boxShadow: '0px 2px 2px #818181',
        position: 'relative',
        zIndex: '4'
    },
    secondPaper: {
        paddingTop: '15px',
        paddingBottom: '15px',
        borderRadius: '0px',
        backgroundColor: '#3fb0ac',
        height: '75px',
        position: 'relative',
        zIndex: '3'
    },
    thirdPaper: {
        paddingTop: '15px',
        paddingBottom: '15px',
        borderRadius: '0px',
        backgroundColor: '#173e43',
        height: '75px',
        position: 'relative',
        zIndex: '2'
    },
    lastPaper: {
        paddingTop: '15px',
        paddingBottom: '15px',
        borderTopLeftRadius: '0px',
        borderTopRightRadius: '0px',
        backgroundColor: '#f7b733',
        height: '75px',
        boxShadow: '0px 2px 2px #818181',
        position: 'relative',
        zIndex: '1'
    },
    budget: {
        marginLeft: 'auto',
        marginRight: 'auto'
    }
});

function Summary({ title, budget, totalSpent }) {
    const classes = useStyles();
    const balance = budget - totalSpent;

    return (
        <div>
            <h1>Your project finances, at a glance.</h1>
            <Grid container direction="column" className={classes.budget} xs={4}>
                <CssBaseline />


                <Grid item>
                    <Paper className={classes.firstPaper}>
                        <Typography className={classes.name}>
                            {title}
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item>
                    <Paper className={classes.secondPaper}>
                        <Typography className={classes.title}>
                            Budget: ${budget}
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item>
                    <Paper className={classes.thirdPaper}>
                        <Typography className={classes.title}>
                            Cost to Date: ${totalSpent}
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item>
                    <Paper className={classes.lastPaper}>
                        <Typography className={balance < 0 ? classes.balance : classes.title}>
                            Balance: ${balance}
                        </Typography>
                    </Paper>
                </Grid>


            </Grid>
        </div>
    );
}

export default Summary;

