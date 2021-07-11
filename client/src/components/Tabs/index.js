import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Home from '@material-ui/icons/Home';
import Monetization from '@material-ui/icons/MonetizationOn';
import Camera from '@material-ui/icons/CameraAlt';
import Note from '@material-ui/icons/Note';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';

import Summary from "../Summary";
import Materials from "../Materials";
import Photos from '../Photos';
import Docs from "../Docs";

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

function ProjectTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

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
                    <Tab label="Materials" icon={<Monetization />} {...a11yProps(1)} />
                    <Tab label="Photos" icon={<Camera />} {...a11yProps(2)} />
                    <Tab label="Docs" icon={<Note />} {...a11yProps(3)} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <Summary />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Materials />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <Photos />
            </TabPanel>
            <TabPanel value={value} index={3}>
                <Docs />
            </TabPanel>
        </div>
    );
}

export default ProjectTabs;