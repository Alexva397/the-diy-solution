import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";

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
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
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
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        height: 500,
        marginTop: theme.spacing(25),
    },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
    },
    title: {
        marginTop: theme.spacing(25),
    }
}));

function ProjectTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <h1 className={classes.root}>Project Title</h1>
            <Container component="main" maxWidth="lg">
                <CssBaseline />
                <div className={classes.root}>
                    <Tabs
                        orientation="vertical"
                        variant="scrollable"
                        value={value}
                        onChange={handleChange}
                        aria-label="Vertical tabs example"
                        className={classes.tabs}
                    >
                        <Tab label="Summary" {...a11yProps(0)} />
                        <Tab label="Materials" {...a11yProps(1)} />
                        <Tab label="Photos" {...a11yProps(2)} />
                        <Tab label="Docs" {...a11yProps(3)} />
                    </Tabs>
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
            </Container>
        </>
    );
}

export default ProjectTabs;