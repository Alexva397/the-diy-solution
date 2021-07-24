import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import team from "../../utils/team";

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(15),
    },
    container: {
        marginLeft: "15%"
    },
    card: {
        maxWidth: 500,
    },
}));

function Contact() {
    console.log(team);
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <h1>Meet The DIY Solution Team</h1>
            <Grid container justifyContent="center" alignItems="center" spacing={2}>
                {team.map(member => (
                    <Grid item justifyContent="center" xs={12} md={5} lg={4} xl={3}>
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    alt={member.alt}
                                    height="350"
                                    image={member.photo}
                                    title={member.name}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {member.name}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="large">
                                    <a href={member.github} target="_blank" rel="noreferrer">GitHub</a>
                                </Button>
                                <Button size="large">
                                    <a href={member.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
                                </Button>
                                <Button size="large">
                                    <a href={member.portfolio} target="_blank" rel="noreferrer">Portfolio</a>
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}

export default Contact;