import React, { useState, useEffect, useContext } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Button } from '@material-ui/core';
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
    const [editMode, setEditMode] = useState(false);

    var colors = ["linear-gradient(90deg, rgba(201,255,229,1) 35%, rgba(150,222,209,1) 100%)", 
    "linear-gradient(90deg, rgba(63,176,172,1) 35%, rgba(0,128,128,1) 100%)",
    "linear-gradient(90deg, rgba(150,222,209,1) 35%, rgba(63,176,172,1) 100%)"];

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

    function toggleEditMode() {
        if(!editMode){
            setEditMode(true)
        } else {
            setEditMode(false)
        }
        

    }
    function loadProjects() {
        API.getProjects()
            .then(res => { console.log(res.data); setState({projects: res.data})})
            .catch(err => console.log(err));
    };
    return (
        <div className={root}>

            <div className= "button-bar">
                <ProjectModal></ProjectModal>
                <div>
                <button className= "delete-project" onClick={() => toggleEditMode()}>- Delete Projects</button>
                </div>  
            </div>

            <Grid container className={appContainer} alignItems="center" spacing={3}>
                {
                state.projects.map((project, i) => {

                    if ((i === ((colors.length )*iterationCount) && (iterationCount !== 0))|| i === colors.length){
                        iterationCount++;
                    }

                    var itemColor = colors[i-(colors.length*iterationCount) + colors.length]

                    return <Grid item xs={6} md={4} lg= {3}>
                        <ListItem key= {project._id} id={project._id} title= {project.title} description= {project.description} color={itemColor} 
                        materials={project.materials} photos={project.photos} docs={project.docs} handleProjectDelete={() => deleteProject(project._id)} editMode={editMode}></ListItem>
                        </Grid>
                })
            }
            
            </Grid>
                         
        </div>
    )
}

export default Landing;

