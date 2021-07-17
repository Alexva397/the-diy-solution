import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import Typography from '@material-ui/core/Typography';
import API from "../../utils/API";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        overflow: 'hidden',
    },
    paper: {
        maxWidth: 1000,
        height: 350,
        margin: `${theme.spacing(1)}px auto`,
        padding: theme.spacing(2),
    },
    imageDiv: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    imageList: {
        flexWrap: 'nowrap',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
    },
    upload: {
        marginTop: theme.spacing(1.5),
    },
    input: {
        display: 'none',
    },
}));

function Photos({ before, progress, after }) {
    const classes = useStyles();

    const [beforeObject, setBeforeObject] = useState([]);
    const [progressObject, setProgressObject] = useState([]);
    const [afterObject, setAfterObject] = useState([]);

    const { id } = useParams();

    function handleBeforeUpload() {
        API.updateProject(id, {
            before: {
                photo: beforeObject.photo
            }
        })
    }

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Grid container direction="column" wrap="nowrap" spacing={2}>
                    <Grid item xs>
                        <Typography>Before</Typography>
                    </Grid>
                    <Grid item xs>
                        <ImageList className={classes.imageList} cols={2.5}>
                            {before.map(photo => (
                                <ImageListItem>
                                    <img src={photo.photo} alt="" />
                                </ImageListItem>
                            ))}
                        </ImageList>
                    </Grid>
                    <Grid container direction="row" justifyContent="flex-end" item xs>
                        <Typography className={classes.upload}>Upload New Image</Typography>
                        <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
                        <label htmlFor="icon-button-file">
                            <IconButton color="primary" aria-label="upload picture" component="span">
                                <PhotoCamera />
                            </IconButton>
                        </label>
                    </Grid>
                </Grid>
            </Paper>
            <Paper className={classes.paper}>
                <Grid container direction="column" wrap="nowrap" spacing={2}>
                    <Grid item xs>
                        <Typography>Progress</Typography>
                    </Grid>
                    <Grid item xs>
                        <ImageList className={classes.imageList} cols={2.5}>
                            {progress.map(photo => (
                                <ImageListItem>
                                    <img src={photo.photo} alt="" />
                                </ImageListItem>
                            ))}
                        </ImageList>
                    </Grid>
                    <Grid container direction="row" justifyContent="flex-end" item xs>
                        <Typography className={classes.upload}>Upload New Image</Typography>
                        <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
                        <label htmlFor="icon-button-file">
                            <IconButton color="primary" aria-label="upload picture" component="span">
                                <PhotoCamera />
                            </IconButton>
                        </label>
                    </Grid>
                </Grid>
            </Paper>
            <Paper className={classes.paper}>
                <Grid container direction="column" wrap="nowrap" spacing={2}>
                    <Grid item xs>
                        <Typography>After</Typography>
                    </Grid>
                    <Grid item xs>
                        <ImageList className={classes.imageList} cols={2.5}>
                            {after.map(photo => (
                                <ImageListItem>
                                    <img src={photo.photo} alt="" />
                                </ImageListItem>
                            ))}
                        </ImageList>
                    </Grid>
                    <Grid container direction="row" justifyContent="flex-end" item xs>
                        <Typography className={classes.upload}>Upload New Image</Typography>
                        <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
                        <label htmlFor="icon-button-file">
                            <IconButton color="primary" aria-label="upload picture" component="span">
                                <PhotoCamera />
                            </IconButton>
                        </label>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    )
}

export default Photos;