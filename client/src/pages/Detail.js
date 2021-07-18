import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Home from '@material-ui/icons/Home';
import Build from '@material-ui/icons/Build';
import Camera from '@material-ui/icons/CameraAlt';
import Receipt from '@material-ui/icons/Receipt';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';

import API from "../utils/API";

import Summary from "../components/Summary"
import Materials from "../components/Materials";
import Photos from '../components/Photos';
import Docs from "../components/Docs";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-force-tabpanel-${index}`}
            aria-labelledby={`scrollable-force-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `scrollable-force-tab-${index}`,
        'aria-controls': `scrollable-force-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '100%',
        marginTop: theme.spacing(8),
    },
    center: {
        alignItems: "center",
    }
}));

function Detail() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const [project, setProject] = useState({
        project: {}
    })

    const { id } = useParams()
    console.log(id);
    useEffect(() => {
        API.getProject(id)
            .then(res => {
                setProject(res.data[0])
                console.log(res.data)
            })
            .catch(err => console.log(err));
    }, [id])

    console.log(project);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar className={classes.center} position="static" color="default">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons="on"
                    indicatorColor="primary"
                    textColor="primary"
                    aria-label="scrollable force tabs example"
                >
                    <Tab label="Summary" icon={<Home />} {...a11yProps(0)} />
                    <Tab label="Materials" icon={<Build />} {...a11yProps(1)} />
                    <Tab label="Photos" icon={<Camera />} {...a11yProps(2)} />
                    <Tab label="Docs" icon={<Receipt />} {...a11yProps(3)} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <Summary title={project.title} />
            </TabPanel>
            <TabPanel value={value} index={1}>

                <Materials key={project.title} materials={project.materials} />


            </TabPanel>
            <TabPanel value={value} index={2}>
                <Photos key={project.title} before={project.before} progress={project.progress} after={project.after} />
            </TabPanel>
            <TabPanel value={value} index={3}>
                <Docs />
            </TabPanel>
        </div>
    );
}

export default Detail;