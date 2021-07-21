import React, { useState, useEffect, useContext } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from '@material-ui/core';
import ListItem from '../components/ListItem';
import ProjectModal from '../components/ProjectModal'
import API from '../utils/API'
import { userContext } from "../Context";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '100%',
        marginTop: theme.spacing(8),
    },
    appContainer: {
        width: '90vw',
        marginLeft: '5vw',
        marginRight: '5vw'
    }
}))


function Landing() {
    const { root, appContainer } = useStyles();

    const { userObject, isAuthenticated } = useContext(userContext);

    const [state, setState] = useState({
        // userId: '',
        projects: [],
        // username: '',
        // isLoggedIn: false,
    });
    const [username, setUsername] = useState("");
    const [userId, setUserId] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    //var sampleColors = ["#ddd5e4", "#dfc2af", "#dfd6af","#afdcdf"];
    var colors = ["linear-gradient(90deg, rgba(221,213,228,1) 35%, rgba(175,220,223,1) 100%)", 
                    "linear-gradient(90deg, rgba(175,220,223,1) 35%, rgba(223,214,175,1) 100%)", 
                    "linear-gradient(90deg, rgba(223,214,175,1) 35%, rgba(223,194,175,1) 100%)",
                    "linear-gradient(90deg, rgba(223,194,175,1) 35%, rgba(221,213,228,1) 100%)"];
    var iterationCount = 1;

    useEffect(() => {
        if (isAuthenticated) {
            // setState({ ...state, 
            //     userId: userObject._id,
            //     username: userObject.username,
            //     isLoggedIn: true,
            // });
            setUsername(userObject.username);
            setUserId(userObject._id);
            setIsLoggedIn(true);
            loadProjects();
        }        
    }, [isAuthenticated])

    function deleteProject(id){
		API.deleteProject(id)
		.then(res => loadProjects())
		.catch(err => console.log(err));
	  };

    function loadProjects() {
        API.getProjects()
            .then(res => { console.log(res.data); setState({projects: res.data})})
            .catch(err => console.log(err));
    };
    return (
        <div className={root}>

            <div class= "button-bar">
                <ProjectModal></ProjectModal>   
            </div>
            
            <Grid container className={appContainer} spacing={3}>
                {
                state.projects.map((project, i) => {

                    if ((i === ((colors.length )*iterationCount) && (iterationCount !== 0))|| i === colors.length){
                        iterationCount++;
                    }

                    var itemColor = colors[i-(colors.length*iterationCount) + colors.length]

                    return <Grid item xs={4}>
                        <ListItem key= {project._id} id={project._id} title= {project.title} description= {project.description} color={itemColor}
                        materials={project.materials} photos={project.photos} docs={project.docs} handleProjectDelete={() => deleteProject(project._id)}></ListItem>
                        </Grid>
                })
            }
            
            </Grid>
                         
        </div>
    )
}

export default Landing;

